export interface IRepository<T> {
  add(item: T): void;
  get(id: string): T | undefined;
  getAll(): T[];
  remove(id: string): void;
}
