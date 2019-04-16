import { ILexingError, IRecognitionException } from 'chevrotain';
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
export interface Errors {
    lexErrors: ILexingError[];
    parseErrors: IRecognitionException[];
}
declare function evaluate(jsonpath: string, ...objects: Object[]): EvalResult[] | Errors;
