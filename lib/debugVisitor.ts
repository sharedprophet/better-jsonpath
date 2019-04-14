import _ from 'underscore';
import { inspect } from 'util';
import { CstNode } from 'chevrotain';
import { parser } from './parser';
import { isNode } from './util';

const BaseVisitor = parser.getBaseCstVisitorConstructor();

export class DebugVisitor extends BaseVisitor {
	constructor() {
		super();
		this.validateVisitor();
	}

	jsonpath(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	pathComponents(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	pathComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	memberComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	descendantMemberComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	childMemberComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	leadingChildMemberExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	memberExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	subscriptComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	childSubscriptComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	descendantSubscriptComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	subscript(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	subscriptExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	subscriptExpressionList(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	subscriptExpressionListable(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	stringLiteral(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	arraySlice(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	scriptExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}

	filterExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(inspect(ctx, { colors: true }));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(inspect(child, { colors: true }));
				}
			}
		}
	}
}
