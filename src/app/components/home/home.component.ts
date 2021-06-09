import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gender = 'Male';
  heigth = 120;
  age = 25;
  weigth = 60;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  changeHeigth(event: any) {
    this.heigth = event.target.value;
  }
  
  male() {
    this.gender = 'Male';
  }

  female() {
    this.gender = 'Female';
  }

  calculate() {
    const BMI = (this.weigth / Math.pow(this.heigth/100, 2));
    this.router.navigate(['/result', BMI.toFixed(1)]);
  }
}
