import { ILexingError, IRecognitionException } from 'chevrotain';
import { EvalVisitor, Match, parser } from './lib';

export * from './lib';
export default { eval: evaluate };

const evalVisitor = new EvalVisitor();

export interface EvalResult {
	input: Object;
	matches: Match[];
}

export interface Errors {
	lexErrors: ILexingError[];
	parseErrors: IRecognitionException[];
}

function evaluate(jsonpath: string, ...objects: Object[]): EvalResult[] | Errors {
	if (!jsonpath || !objects || !objects.length) {
		return [];
	}
	let res = parser.parse(jsonpath);
	let cst = res.cst;
	if (!cst) {
		return res;
	}
	let result: EvalResult[] = [];
	for (let obj of objects) {
		result.push({
			input: obj,
			matches: evalVisitor.visit(cst, [{ path: [], value: obj }])
		});
	}
	return result;
}
