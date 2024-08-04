import { IRepository } from "./IRepository";

export class Repository<T extends { id: string }> implements IRepository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAll(): T[] {
    return this.items;
  }

  remove(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
