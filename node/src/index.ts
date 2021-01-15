

export class Foo {

  g: number;
  schema: string;
  constructor(r: string) {
    this.schema = r;
    this.g = parseInt(r, 10);
    console.log();
  }

}


const r: any = new Foo('23');

console.log(r);
