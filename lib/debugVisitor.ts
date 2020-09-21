import _ from 'underscore';
import { inspect } from 'util';
import { CstNode } from 'chevrotain';
import { parser } from './parser';
import { isNode } from './util';

const BaseVisitor = parser.getBaseCstVisitorConstructor();

const debug = (thing: any) => inspect(thing, { colors: true, depth: 100 });

export class DebugVisitor extends BaseVisitor {
	constructor() {
		super();
		this.validateVisitor();
	}

	jsonpath(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	pathComponents(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	pathComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	memberComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	descendantMemberComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	childMemberComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	leadingChildMemberExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	memberExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	subscriptComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	descendantSubscriptComponent(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	subscript(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	subscriptExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	subscriptExpressionList(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	subscriptExpressionListable(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	stringLiteral(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	arraySlice(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	scriptExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}

	filterExpression(ctx: CstNode) {
		// eslint-disable-next-line no-console
		console.log(debug(ctx));
		for (let childArray of _.values(ctx)) {
			for (let child of childArray) {
				if (isNode(child)) {
					this.visit(child);
				} else {
					// eslint-disable-next-line no-console
					console.log(debug(child));
				}
			}
		}
	}
}
