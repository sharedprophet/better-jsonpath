import { CstNode } from 'chevrotain';
declare const BaseVisitor: new (...args: any[]) => import("chevrotain").ICstVisitor<any, any>;
export declare class DebugVisitor extends BaseVisitor {
    constructor();
    jsonpath(ctx: CstNode): void;
    pathComponents(ctx: CstNode): void;
    pathComponent(ctx: CstNode): void;
    memberComponent(ctx: CstNode): void;
    descendantMemberComponent(ctx: CstNode): void;
    childMemberComponent(ctx: CstNode): void;
    leadingChildMemberExpression(ctx: CstNode): void;
    memberExpression(ctx: CstNode): void;
    subscriptComponent(ctx: CstNode): void;
    descendantSubscriptComponent(ctx: CstNode): void;
    subscript(ctx: CstNode): void;
    subscriptExpression(ctx: CstNode): void;
    subscriptExpressionList(ctx: CstNode): void;
    subscriptExpressionListable(ctx: CstNode): void;
    stringLiteral(ctx: CstNode): void;
    arraySlice(ctx: CstNode): void;
    scriptExpression(ctx: CstNode): void;
    filterExpression(ctx: CstNode): void;
}
export {};
