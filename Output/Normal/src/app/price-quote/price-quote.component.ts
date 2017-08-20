import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {PriceQuote} from './price-quote';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode = 'IBM';

  price: number;

  @Output()
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(() => {

      const priceQuote = new PriceQuote(this.stockCode, 100 * Math.random());

      this.price = priceQuote.lastPrice;

      this.lastPrice.emit(priceQuote);
    }, 1000);
  }

  ngOnInit() {
  }

}
