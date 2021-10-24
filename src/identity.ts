export function identity<T>(value: T) {
  return () => {
    return value
  }
}
