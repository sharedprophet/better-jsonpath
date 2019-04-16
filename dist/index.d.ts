import { Match } from './lib';
export * from './lib';
declare const _default: {
    eval: typeof evaluate;
};
export default _default;
export interface EvalResult {
    input: Object;
    matches: Match[];
}
declare function evaluate(jsonpath: string, ...objects: Object[]): EvalResult[];
