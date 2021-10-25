/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 */
export function groupBy<T, K extends string = string>(fn: (item: T) => K) {
  return function (list: T[]) {
    const acc = {} as Record<K, T[]>;

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const key = fn(item);

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(item);
    }

    return acc;
  };
}
