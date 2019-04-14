import { EvalVisitor, Match, parser } from './lib';

export * from './lib';
export default { eval: evaluate };

const evalVisitor = new EvalVisitor();

export interface EvalResult {
	input: Object;
	matches: Match[];
}

function evaluate(jsonpath: string, ...objects: Object[]): EvalResult[] {
	if (!jsonpath || !objects || !objects.length) {
		return [];
	}
	let result: EvalResult[] = [];
	for (let obj of objects) {
		result.push({
			input: obj,
			matches: evalVisitor.visit(parser.parse(jsonpath).cst, [{ path: [], value: obj }])
		});
	}
	return result;
}
