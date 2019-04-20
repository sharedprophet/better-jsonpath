import { CstChildrenDictionary, ICstVisitor } from 'chevrotain';
import { Match } from './match';
declare const BaseVisitor: new (...args: any[]) => ICstVisitor<Match[], Match[]>;
export declare class EvalVisitor extends BaseVisitor {
    constructor();
    jsonpath(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    pathComponents(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    pathComponent(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    memberComponent(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    descendantMemberComponent(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    descendantSubscriptComponent(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    childMemberComponent(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    leadingChildMemberExpression(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    memberExpression(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    subscriptComponent(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    subscript(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    subscriptExpression(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    subscriptExpressionList(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    subscriptExpressionListable(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    stringLiteral(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    arraySlice(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    scriptExpression(ctx: CstChildrenDictionary, scope: Match[]): Match[];
    filterExpression(ctx: CstChildrenDictionary, scope: Match[]): Match[];
}
export {};
