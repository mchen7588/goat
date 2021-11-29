type AnyFunction = (...args: any[]) => any;

type LengthOfTuple<Tuple extends unknown[]> = Tuple['length'];

type DropFirstInTuple<T extends unknown[]> = T extends [arg: any, ...rest: infer U] ? U : T;

type LastInTuple<Tuple extends unknown[]> = Tuple[LengthOfTuple<DropFirstInTuple<Tuple>>];

type ParametersOfLastInTuple<TFunctions extends AnyFunction[]> = Parameters<LastInTuple<TFunctions>>;

type ReturnTypeOfFirstInTuple<TFunctions extends AnyFunction[]> = ReturnType<TFunctions[0]>;

/**
 * Performs right-to-left function composition.
 */
export function compose<
  TFunctions extends AnyFunction[],
  TParameters extends ParametersOfLastInTuple<TFunctions>,
  TReturn extends ReturnTypeOfFirstInTuple<TFunctions>
  //@ts-ignore
>(...fns: TFunctions): (...args: TParameters) => TReturn {
  // @ts-ignore TODO: fix me
  return function (...arg) {
    let x = arg;

    for (let i = fns.length - 1; i >= 0; i--) {
      x = fns[i](...arg);
    }

    return x;
  };
}
