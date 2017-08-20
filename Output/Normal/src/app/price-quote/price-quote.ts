/**
 * 报价信息
 */
export class PriceQuote {

  public stockCode: string;

  public lastPrice: number;

  constructor(stockCode: string, lastPrice: number) {
    this.stockCode = stockCode;
    this.lastPrice = lastPrice;
  }
}
