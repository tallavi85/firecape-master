import { Component, OnInit } from '@angular/core';
import { LazyService } from 'src/app/shared/lazy-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  
  selected = 0;
  choices = [];
  images = [];
  rangeLevel = 61;
  price: number;
  sweets: number;
  constructor(private lazyService: LazyService) { }
  

  ngOnInit() {
    this.lazyService.requestGet('https://raw.githubusercontent.com/toolazytobetrue/firecape/master/config.json', { responseType: 'text' })
      .subscribe(response => {
        const data = JSON.parse(response);
        console.log(data);
        this.choices = data.prices;
        this.images = data.images;
        this.price = this.choices[this.selected].price;
        this.sweets = this.choices[this.selected].sweets;
      }, err => {
        console.log(err);
      });
  }


  changePrice() {
    this.price = this.choices[this.selected].price;
    this.sweets = this.choices[this.selected].sweets;
  }
  
  update(level) {
    
  }
 
}
