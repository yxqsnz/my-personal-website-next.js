export default class Bag<T> {
  inner: T;
  replace(value: T) {
    this.inner = value;
  }
  get(): T {
    return this.inner;
  }
  valid() {
    return this.inner != null;
  }
  clear() {
    this.inner = null;
  }
}
