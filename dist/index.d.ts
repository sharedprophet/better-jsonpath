import { Errors, EvalResult } from './lib';
export * from './lib';
declare const _default: {
    eval: typeof evaluate;
    autocomplete: typeof autocomplete;
};
export default _default;
declare function evaluate(jsonpath: string, ...objects: Object[]): EvalResult[] | Errors;
declare function autocomplete(jsonpath: string, ...objects: Object[]): Set<string | number> | Errors;
