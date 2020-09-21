import { CstParser, CstNode, ILexingError, IRecognitionException, ISyntacticContentAssistPath, IToken } from 'chevrotain';
export interface Errors {
    lexErrors: ILexingError[];
    parseErrors: IRecognitionException[];
}
export declare class JSONPathParser extends CstParser {
    constructor();
    autocomplete(text: string): {
        options?: ISyntacticContentAssistPath[];
        cst?: CstNode;
    } & Errors;
    setInput(input: IToken[]): void;
    parse(text: string): {
        cst?: CstNode;
    } & Errors;
    jsonpath: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    pathComponents: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    pathComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    memberComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    descendantMemberComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    descendantSubscriptComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    childMemberComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    leadingChildMemberExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    memberExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    subscriptComponent: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    subscript: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    subscriptExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    subscriptExpressionList: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    subscriptExpressionListable: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    stringLiteral: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    arraySlice: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    scriptExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
    filterExpression: (idxInCallingRule?: number | undefined, ...args: any[]) => CstNode;
}
export declare const parser: JSONPathParser;
