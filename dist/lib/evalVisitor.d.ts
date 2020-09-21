import { CstChildrenDictionary, ICstVisitor } from 'chevrotain';
import { Match } from './match';
declare const BaseVisitor: new (...args: any[]) => ICstVisitor<EvalResult[], EvalResult[]>;
export interface EvalResult {
    input: Object;
    matches: Match[];
}
export declare class EvalVisitor extends BaseVisitor {
    constructor();
    jsonpath(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    pathComponents(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    pathComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    memberComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    descendantMemberComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    descendantSubscriptComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    childMemberComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    leadingChildMemberExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    memberExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    subscriptComponent(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    subscript(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    subscriptExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    subscriptExpressionList(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    subscriptExpressionListable(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    stringLiteral(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    arraySlice(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    scriptExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
    filterExpression(ctx: CstChildrenDictionary, scope: EvalResult[]): EvalResult[];
}
export {};
