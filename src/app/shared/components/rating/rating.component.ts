import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule,NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input({required : true, transform:(value: number) => Array(value).fill(0)})
  maxRating! : any[];

  @Output()
  rated = new EventEmitter<number>()
  selectedRating = 0;

  clickRating = 0;

  handleMouseEnter(index : number){
    this.selectedRating = index+1
  }
  handleMouseLeave(){
    if(this.clickRating !== 0){
      this.selectedRating=this.clickRating
    }
    else{
      this.selectedRating = 0      
    }

  }

  handleClick(index : number) {
    this.selectedRating= index+1
    this.clickRating=this.selectedRating
    this.rated.emit(this.selectedRating)
  }

}
