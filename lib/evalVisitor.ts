import _ from 'underscore';
import evaluate from 'static-eval';
import { parseScript } from './esprima';
import { ExpressionStatement } from 'estree';
import { CstChildrenDictionary, CstNode, ICstVisitor, IToken } from 'chevrotain';
import { lexer, integer_pattern } from './lexer';
import { JSONPathParser, parser } from './parser';
import { Match } from './match';
import { isNode } from './util';

const BaseVisitor = parser.getBaseCstVisitorConstructor() as new (...args: any[]) =>
ICstVisitor<EvalResult[], EvalResult[]>;

export interface EvalResult {
	input: Object;
	matches: Match[];
}

export class EvalVisitor extends BaseVisitor {
	constructor() {
		super();
		this.validateVisitor();
	}

	jsonpath(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		if (!ctx.dollar) {
			for (let child of ctx.leadingChildMemberExpression) {
				if (!isNode(child)) {
					continue;
				}
				result = this.visit(child, scope);
			}
		}
		for (let res of result) {
			for (let match of res.matches) {
				match.path.unshift('$');
			}
		}
		if (!ctx.pathComponents) {
			return result;
		}
		for (let component of ctx.pathComponents) {
			if (!isNode(component)) {
				continue;
			}
			result = this.visit(component, result);
		}
		return result;
	}

	pathComponents(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		for (let component of ctx.pathComponent) {
			if (!isNode(component)) {
				continue;
			}
			result = this.visit(component, result);
		}
		return result;
	}

	pathComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		let component = ctx.subscriptComponent || ctx.descendantSubscriptComponent || ctx.memberComponent;
		for (let element of component) {
			if (!isNode(element)) {
				continue;
			}
			result = this.visit(element, result);
		}
		return result;
	}

	memberComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		let component = ctx.descendantMemberComponent || ctx.childMemberComponent;
		for (let element of component) {
			if (!isNode(element)) {
				continue;
			}
			result = this.visit(element, result);
		}
		return result;
	}

	descendantMemberComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;

		for (let res of result) {
			let newScope = _.clone(res.matches);
			for (let i = 0; i < newScope.length; i++) {
				let obj = newScope[i].value;
				for (let prop of _.allKeys(obj)) {
					newScope.push({ path: newScope[i].path.concat(prop), value: obj[prop] });
				}
			}
			res.matches = newScope;
		}

		for (let element of ctx.memberExpression) {
			if (!isNode(element)) {
				continue;
			}
			result = this.visit(element, result);
		}
		return result;
	}

	descendantSubscriptComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;

		for (let res of result) {
			let newScope = _.clone(res.matches);
			for (let i = 0; i < newScope.length; i++) {
				let obj = newScope[i].value;
				for (let prop of _.allKeys(obj)) {
					newScope.push({ path: newScope[i].path.concat(prop), value: obj[prop] });
				}
			}
			res.matches = newScope;
		}

		for (let element of ctx.subscriptComponent) {
			if (!isNode(element)) {
				continue;
			}
			result = this.visit(element, result);
		}
		return result;
	}

	childMemberComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		for (let element of ctx.memberExpression) {
			if (!isNode(element)) {
				continue;
			}
			result = this.visit(element, result);
		}
		return result;
	}

	leadingChildMemberExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		for (let element of ctx.memberExpression) {
			if (!isNode(element)) {
				continue;
			}
			result = this.visit(element, result);
		}
		return result;
	}

	memberExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let key!: string;
		let token!: IToken;
		for (let prop of _.allKeys(ctx)) {
			if (ctx[prop] && isNode(ctx[prop][0])) {
				let node = ctx[prop][0] as CstNode;
				return this.visit(node, scope);
			}
			key = prop;
			for (let child of ctx[prop]) {
				token = child as IToken;
			}
		}
		let result = scope;
		for (let res of result) {
			let matches = res.matches;
			res.matches = [];
			switch (key) {
				case 'integer':
					for (let match of matches) {
						if (match.value[Number(token.image)] !== undefined) {
							res.matches.push({
								path: match.path.concat(Number(token.image)),
								value: match.value[token.image]
							});
						}
					}
					break;
				case 'identifier':
					for (let match of matches) {
						if (match.value[token.image] !== undefined) {
							res.matches.push({
								path: match.path.concat(token.image),
								value: match.value[token.image]
							});
						}
					}
					break;
			}
		}
		return result;
	}

	subscriptComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		for (let element of ctx.subscript) {
			if (!isNode(element)) {
				continue;
			}
			result = this.visit(element, result);
		}
		return result;
	}

	subscript(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		let component = ctx.subscriptExpression || ctx.subscriptExpressionList;
		for (let element of component) {
			if (!isNode(element)) {
				continue;
			}
			result = this.visit(element, result);
		}
		return result;
	}

	subscriptExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		for (let prop of _.allKeys(ctx)) {
			if (ctx[prop] && isNode(ctx[prop][0])) {
				let node = ctx[prop][0] as CstNode;
				return this.visit(node, scope);
			}
		}
		//asterisk
		let result = scope;
		for (let res of result) {
			let matches = res.matches;
			res.matches = [];
			for (let match of matches) {
				for (let prop of _.allKeys(match.value).filter(p => match.value[p] !== undefined)) {
					if (integer_pattern.test(prop)) {
						let num = Number(prop);
						res.matches.push({ path: match.path.concat(num), value: match.value[num] });
					} else {
						res.matches.push({ path: match.path.concat(prop), value: match.value[prop] });
					}
				}
			}
		}
		return result;
	}

	subscriptExpressionList(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		for (let res of result) {
			let matches = res.matches;
			res.matches = [];
			for (let element of ctx.subscriptExpressionListable) {
				if (!isNode(element)) {
					continue;
				}
				res.matches = res.matches.concat(
					_.flatten(this.visit(element, [{ ...res, matches }]).map(r => r.matches))
				);
			}
		}
		return result;
	}

	subscriptExpressionListable(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		for (let prop of _.allKeys(ctx)) {
			if (ctx[prop] && isNode(ctx[prop][0])) {
				let node = ctx[prop][0] as CstNode;
				return this.visit(node, scope);
			}
		}
		//integer
		let token = ctx.integer[0] as IToken;
		let result = scope;
		let idx = Number(token.image);
		for (let res of result) {
			let matches = res.matches;
			res.matches = [];
			for (let match of matches) {
				if (match.value[idx] !== undefined) {
					res.matches.push({ path: match.path.concat(idx), value: match.value[idx] });
				}
			}
		}
		return result;
	}

	stringLiteral(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result = scope;
		let component = ctx.quoted_string_double || ctx.quoted_string_single;
		for (let element of component) {
			if (isNode(element)) {
				continue;
			}
			let str = element.image.substr(1, element.image.length - 2);
			for (let res of result) {
				let matches = res.matches;
				res.matches = [];
				for (let match of matches) {
					if (match.value[str] !== undefined) {
						res.matches.push({ path: match.path.concat(str), value: match.value[str] });
					}
				}
			}
		}
		return result;
	}

	arraySlice(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let result: EvalResult[] = [];
		for (let r of scope) {
			let res: EvalResult = { ...r, matches: [] };
			if (!ctx.integer?.length) {
				for (let match of r.matches) {
					if (Array.isArray(match.value)) {
						res.matches.push(match);
					}
				}
			}
			result.push(res);
		}
		if (!ctx.integer?.length) {
			return result;
		}
		let integers = ctx.integer as IToken[];
		let colons = ctx.colon as IToken[];
		let start: number | null = null;
		let end: number | null = null;
		let step: number | null = null;
		if (integers[0].startOffset > colons[0].startOffset) {
			end = Number(integers[0].image);
			if (integers.length > 1) {
				step = Number(integers[1].image);
			}
		} else {
			start = Number(integers[0].image);
			if (integers.length > 1) {
				if (colons.length > 1 && integers[1].startOffset > colons[1].startOffset) {
					step = Number(integers[1].image);
				} else {
					end = Number(integers[1].image);
					if (integers.length > 2) {
						step = Number(integers[2].image);
					}
				}
			}
		}
		result = [];
		for (let r of scope) {
			let res: EvalResult = { ...r, matches: [] };
			for (let match of r.matches) {
				if (Array.isArray(match.value)) {
					res.matches.push({ path: match.path, value: slice(match.value, start, end, step) });
				}
			}
			result.push(res);
		}
		return result;
	}

	scriptExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let script = (ctx.script_expression[0] as IToken).image;
		let ast = (parseScript(script, {}).body[0] as ExpressionStatement).expression;
		let parser = new JSONPathParser();
		let result = scope;
		for (let r of result) {
			let matches = r.matches;
			r.matches = [];
			for (let match of matches) {
				try {
					let text = '[' + evaluate(ast, { '@': match.value }) + ']';
					let lexResult = lexer.tokenize(text);
					parser.input = lexResult.tokens;
					let res = this.visit(parser.subscriptComponent(), [{ input: r.input, matches: [match] }]);
					if (res && res.length) {
						r.matches = r.matches.concat(res[0].matches);
					}
				} catch { }
			}
		}
		return result;
	}

	filterExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[] {
		let script = (ctx.script_expression[0] as IToken).image;
		let ast = (parseScript(script, {}).body[0] as ExpressionStatement).expression;
		let result = scope;
		for (let res of result) {
			let matches = res.matches;
			res.matches = [];
			for (let match of matches) {
				try {
					if (evaluate(ast, { '@': match.value })) {
						res.matches.push(match);
					}
				} catch { }
			}
		}
		return result;
	}
}

function slice(array: any[], start: number | null, end: number | null, step: number | null): any[] {
	let result: any[] = [];
	let len = array.length;

	if (step === 0) {
		throw new Error('step cannot be zero');
	}

	if (step === null) {
		step = 1;
	}

	start = (start !== null && start < 0) ? len + start : start;
	end = (end !== null && end < 0) ? len + end : end;

	start = Number(start === 0 ? 0 : !start ? (step > 0 ? 0 : len - 1) : start);
	end = Number(end === 0 ? 0 : !end ? (step > 0 ? len : -1) : end);

	start = step > 0 ? Math.max(0, start) : Math.min(len, start);
	end = step > 0 ? Math.min(end, len) : Math.max(-1, end);

	if (step > 0 && end <= start) {
		return result;
	}
	if (step < 0 && start <= end) {
		return result;
	}

	for (let i = start; i !== end; i += step) {
		if ((step < 0 && i <= end) || (step > 0 && i >= end)) {
			break;
		}
		result.push(array[i]);
	}
	return result;
}
