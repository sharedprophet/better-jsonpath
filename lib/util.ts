import { CstNode, CstElement } from 'chevrotain';

export function isNode(element: CstElement): element is CstNode {
	return !!(element as CstNode).name;
}
