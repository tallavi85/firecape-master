import { Component, OnInit } from '@angular/core';
import { LazyService } from 'src/app/shared/lazy-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.sass']
})
export class CalcComponent implements OnInit {

  range = 61;
  hp = 50;
  def = 1;
  pray = false;
  

  ngOnInit() {
    document.getElementById('pricey').innerText = this.getPrice();
  }
  
  updateRange(value) {
    this.range = value;
  }
  updateHP(value) {
    this.hp = value;
  }
  updateDef(value) {
    this.def = value;
  }
  updatePray(value) {
    this.pray = value;
  }
 
  getPrice() {
    if(!this.pray) {
        if(this.hp < 50) {
            return "Please contact us";
        }
        if(this.range < 70) {
            return "110M + 3500 Purple Sweets";
        } else if(this.range < 75) {
            return "85M + 3000 Purple Sweets";
        } else if(this.range < 85) {
            return "75M + 2500 Purple Sweets";
        } else if(this.range < 90) {
            return "65M + 2500 Purple Sweets";
        } else if(this.range < 96) {
            return "55M + 2500 Purple Sweets";
        } else {
            return "49M + 2500 Purple Sweets";
        }
    } else {
        if(this.def < 44) {
            if(this.range < 70) {
                return "20M";
            } else if(this.range < 75) {
                return "15M";
            } else if(this.range < 85) {
                return "11M";
            } else {
                return "8.5M"
            }
        } else {
            if(this.range < 70) {
                return "15M";
            } else if(this.range < 75) {
                return "10M";
            } else if(this.range < 85) {
                return "8M";
            } else {
                return "5M"
            }
        }
    }
  }
}
