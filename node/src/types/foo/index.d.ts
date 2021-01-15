export type Constructor<T> = new(test: boolean) => T;

export abstract class Router {
  schema: string;

  constructor(schema: string) {
    this.schema = schema;
  }
}
