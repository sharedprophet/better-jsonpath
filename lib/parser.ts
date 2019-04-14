import _ from 'underscore';
import { Parser } from 'chevrotain';
import {
	allTokens,
	asterisk,
	colon,
	comma,
	dollar,
	dot,
	dot_dot,
	identifier,
	integer,
	lexer,
	paren_open,
	paren_close,
	question_mark,
	quoted_string_double,
	quoted_string_single,
	script_expression,
	square_brace_open,
	square_brace_close
} from './lexer';

export class JSONPathParser extends Parser {
	constructor() {
		super(allTokens);

		this.performSelfAnalysis();
	}

	parse(text: string) {
		let lexResult = lexer.tokenize(text);
		this.input = lexResult.tokens;
		return {
			cst: this.jsonpath(),
			lexErrors: lexResult.errors,
			parseErrors: _.clone(this.errors)
		};
	}

	jsonpath = this.RULE('jsonpath', () => this.OR([{
		ALT: () => {
			this.CONSUME(dollar);
			this.OPTION1(() => this.SUBRULE1(this.pathComponents));
		}
	}, {
		ALT: () => {
			this.SUBRULE(this.leadingChildMemberExpression);
			this.OPTION2(() => this.SUBRULE2(this.pathComponents));
		}
	}]));

	pathComponents = this.RULE('pathComponents', () => this.AT_LEAST_ONE(() => this.SUBRULE(this.pathComponent)));

	pathComponent = this.RULE('pathComponent', () => this.OR([
		{ ALT: () => this.SUBRULE(this.subscriptComponent) },
		{ ALT: () => this.SUBRULE(this.memberComponent) }
	]));

	memberComponent = this.RULE('memberComponent', () => this.OR([
		{ ALT: () => this.SUBRULE(this.descendantMemberComponent) },
		{ ALT: () => this.SUBRULE(this.childMemberComponent) }
	]));

	descendantMemberComponent = this.RULE('descendantMemberComponent', () => {
		this.CONSUME(dot_dot);
		this.SUBRULE(this.memberExpression);
	});

	childMemberComponent = this.RULE('childMemberComponent', () => {
		this.CONSUME(dot);
		this.SUBRULE(this.memberExpression);
	});

	leadingChildMemberExpression = this.RULE('leadingChildMemberExpression', () => this.SUBRULE(this.memberExpression));

	memberExpression = this.RULE('memberExpression', () => this.OR([
		{ ALT: () => this.CONSUME(asterisk) },
		{ ALT: () => this.CONSUME(identifier) },
		{ ALT: () => this.SUBRULE(this.scriptExpression) },
		{ ALT: () => this.CONSUME(integer) }
	]));

	subscriptComponent = this.RULE('subscriptComponent', () => this.OR([
		{ ALT: () => this.SUBRULE(this.descendantSubscriptComponent) },
		{ ALT: () => this.SUBRULE(this.childSubscriptComponent) }
	]));

	childSubscriptComponent = this.RULE('childSubscriptComponent', () => {
		this.CONSUME(square_brace_open);
		this.SUBRULE(this.subscript);
		this.CONSUME(square_brace_close);
	});

	descendantSubscriptComponent = this.RULE('descendantSubscriptComponent', () => {
		this.CONSUME(dot_dot);
		this.CONSUME(square_brace_open);
		this.SUBRULE(this.subscript);
		this.CONSUME(square_brace_close);
	});

	subscript = this.RULE('subscript', () => this.OR([
		{ ALT: () => this.SUBRULE(this.subscriptExpression) },
		{ ALT: () => this.SUBRULE(this.subscriptExpressionList) }
	]));

	subscriptExpression = this.RULE('subscriptExpression', () => this.OR([
		{ ALT: () => this.CONSUME(asterisk) },
		{ ALT: () => this.SUBRULE(this.scriptExpression) },
		{ ALT: () => this.SUBRULE(this.filterExpression) }
	]));

	subscriptExpressionList = this.RULE('subscriptExpressionList', () => this.AT_LEAST_ONE_SEP({
		SEP: comma,
		DEF: () => this.SUBRULE(this.subscriptExpressionListable)
	}));

	subscriptExpressionListable = this.RULE('subscriptExpressionListable', () => this.OR([
		{ ALT: () => this.SUBRULE(this.arraySlice) },
		{ ALT: () => this.SUBRULE(this.stringLiteral) },
		{ ALT: () => this.CONSUME(integer) }
	]));

	stringLiteral = this.RULE('stringLiteral', () => this.OR([
		{ ALT: () => this.CONSUME(quoted_string_double) },
		{ ALT: () => this.CONSUME(quoted_string_single) }
	]));

	arraySlice = this.RULE('arraySlice', () => {
		this.OPTION1(() => this.CONSUME1(integer));
		this.CONSUME1(colon);
		this.OPTION2(() => {
			this.CONSUME2(integer);
			this.OPTION3(() => {
				this.CONSUME2(colon);
				this.OPTION4(() => this.CONSUME3(integer));
			});
		});
	});

	scriptExpression = this.RULE('scriptExpression', () => {
		this.CONSUME(paren_open);
		this.CONSUME(script_expression);
		this.CONSUME(paren_close);
	});

	filterExpression = this.RULE('filterExpression', () => {
		this.CONSUME(question_mark);
		this.CONSUME(paren_open);
		this.CONSUME(script_expression);
		this.CONSUME(paren_close);
	});
}

export const parser = new JSONPathParser();
