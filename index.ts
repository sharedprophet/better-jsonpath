import _ from 'underscore';
import {
	Errors,
	EvalVisitor,
	EvalResult,
	identifier,
	integer,
	parser,
	quoted_string_double,
	quoted_string_single
} from './lib';

export * from './lib';
export default { eval: evaluate, autocomplete };

const evalVisitor = new EvalVisitor();

function evaluate(jsonpath: string, ...objects: Object[]): EvalResult[] | Errors {
	if (!jsonpath || !objects || !objects.length) {
		return [];
	}
	let res = parser.parse(jsonpath);
	let cst = res.cst;
	if (!cst) {
		return res;
	}
	return evalVisitor.visit(cst, objects.map(obj => ({ input: obj, matches: [{ path: [], value: obj }] })));
}

let autocompleteEvalTokens = [
	identifier.name,
	integer.name,
	quoted_string_double.name,
	quoted_string_single.name
];

function autocomplete(jsonpath: string, ...objects: Object[]): Set<string | number> | Errors {
	if (!jsonpath || !objects || !objects.length) {
		return new Set();
	}

	let res = parser.autocomplete(jsonpath);
	if (res.options && _.all(res.options, opt => autocompleteEvalTokens.indexOf(opt.nextTokenType.name) === -1)) {
		return new Set(
			res.options.filter(opt => !!opt.nextTokenType.LABEL)
				.map(opt => opt.nextTokenType.LABEL!)
		);
	}

	let cst = res.cst;
	let matches: (string | number)[] = [];
	if (cst) {
		let quote = res.options && _.any(res.options, opt => opt.nextTokenType.name === quoted_string_single.name);
		matches = _.flatten(
			evalVisitor.visit(
				cst,
				objects.map(obj => ({ input: obj, matches: [{ path: [], value: obj }] }))
			)
				.map(r => r.matches)
		)
			.filter(m => m.path.length > 1)
			.map(m => {
				let last = _.last(m.path)!;
				if (!quote || typeof(last) === 'number') {
					return last;
				}
				return `'${last}'`;
			});
	}

	if (matches.length) {
		return new Set(matches);
	}

	if (res.options) {
		return new Set(
			res.options.filter(opt => !!opt.nextTokenType.LABEL)
				.map(opt => opt.nextTokenType.LABEL!)
		);
	}

	return res;
}
