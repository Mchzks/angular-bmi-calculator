import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  bmi: number;
  result: string;
  interpretation: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.result = '';
    this.interpretation = '';
    this.bmi = +route.snapshot.paramMap.get('value')!;
  }

  ngOnInit(): void {
    this.getResult();
  }

  getResult(): void {
    if(this.bmi >= 25){
      this.result = 'Weight Excess';
      this.interpretation = 'You got a corporal weigth higher than the average. Try to exercise your body!';
    } else if(this.bmi >= 18.5) {
      this.result = 'Weight Normal';
      this.interpretation = 'You got a normal corporal weigth. Good work!';
    } else {
      this.result = 'Weight Low';
      this.interpretation = 'You got a corporal below the average. Try to eat more!';
    }
  }
}
