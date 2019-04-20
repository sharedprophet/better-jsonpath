import { Parser } from 'chevrotain';
export declare class JSONPathParser extends Parser {
    constructor();
    parse(text: string): {
        cst: any;
        lexErrors: import("chevrotain").ILexingError[];
        parseErrors: import("chevrotain").IRecognitionException[];
    };
    jsonpath: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    pathComponents: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    pathComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    memberComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    descendantMemberComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    descendantSubscriptComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    childMemberComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    leadingChildMemberExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    memberExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    subscriptComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    subscript: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    subscriptExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    subscriptExpressionList: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    subscriptExpressionListable: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    stringLiteral: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    arraySlice: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    scriptExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    filterExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
}
export declare const parser: JSONPathParser;
