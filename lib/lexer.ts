import { createToken, Lexer } from 'chevrotain';

export const dollar = createToken({ name: 'dollar', pattern: /\$/ });
export const dot_dot = createToken({ name: 'dot_dot', pattern: /\.\./ });
export const dot = createToken({ name: 'dot', pattern: /\./, longer_alt: dot_dot });
export const square_brace_open = createToken({ name: 'square_brace_open', pattern: /\[/ });
export const square_brace_close = createToken({ name: 'square_brace_close', pattern: /\]/ });
export const question_mark = createToken({ name: 'question_mark', pattern: /\?/ });
export const paren_open = createToken({ name: 'paren_open', pattern: /\(/ });
export const paren_close = createToken({ name: 'paren_close', pattern: /\)/ });
export const comma = createToken({ name: 'comma', pattern: /,/ });
export const colon = createToken({ name: 'colon', pattern: /:/ });
export const asterisk = createToken({ name: 'asterisk', pattern: /\*/ });

export const integer_pattern = /^-?(?:0|[1-9]\d*)$/;
export const integer = createToken({ name: 'integer', pattern: /-?(?:0|[1-9]\d*)/ });
export const identifier = createToken({ name: 'identifier', pattern: /[a-zA-Z_]+[a-zA-Z0-9_]*/ });
export const quoted_string_double = createToken({
	name: 'quoted_string_double',
	pattern: /"(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/
});
export const quoted_string_single = createToken({
	name: 'quoted_string_single',
	pattern: /'(?:\\['bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^'\\])*'/
});
export const script_expression = createToken({ name: 'script_expression', pattern: /[^)]+([^)]\([^)]*\)[^)]*)*(?=\)])/ });

export const allTokens = [
	dollar,
	dot,
	dot_dot,
	square_brace_open,
	square_brace_close,
	question_mark,
	paren_open,
	paren_close,
	comma,
	colon,
	asterisk,
	integer,
	identifier,
	quoted_string_double,
	quoted_string_single,
	script_expression
];

export const lexer = new Lexer(allTokens);
