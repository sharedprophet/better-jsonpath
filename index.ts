import { parser, EvalVisitor } from './lib';

export * from './lib';

const evalVisitor = new EvalVisitor();

export default {
	eval: (jsonpath: string, ...objects: Object[]) => {
		if (!jsonpath || !objects || !objects.length) {
			return [];
		}
		return evalVisitor.visit(parser.parse(jsonpath).cst, objects.map(o => ({ path: [], value: o })));
	}
};
