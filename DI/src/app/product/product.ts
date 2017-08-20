export class Product {

  private _id: number;
  private _title: string;
  private _price: number;
  private _desc: string;

  constructor(id: number, title: string, price: number, desc: string) {
    this._id = id;
    this._title = title;
    this._price = price;
    this._desc = desc;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }
}
