/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 */
export function groupBy(fn: Function) {
  return (list: any[]) => {
    return list.reduce((acc, cur) => {
      const currentGroupKey = fn(cur);

      if (!acc[currentGroupKey]) {
        acc[currentGroupKey] = [];
      }
      acc[currentGroupKey].push(cur);

      return acc;
    }, {});
  };
}
