/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 */
export function identity<T>(value: T) {
  return () => {
    return value;
  };
}
