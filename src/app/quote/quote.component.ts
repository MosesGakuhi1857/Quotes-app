import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote ("Moses Gakuhi","Charles Buxton","You will never have time for anything,if you want time make it",new Date(2020,3,14)),
    new Quote ("Musah Kings", "Oistin Hantaram","I am very open to feedback, i might disagree with you but i want to hear what you think",new Date(2020,5,14))
  ]

  addNewQuote(quote:any){
    quote.id = quote.Length+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  upvote(i:any) {
    this.quotes[i].upvotes ++;
  }
  downvote(i:any) {
    this.quotes[i].downvotes  ++;
  }

  preNum:number
  lastNum:number
  counter:number

  

  constructor() { }

  ngOnInit(): void {
  }

}
