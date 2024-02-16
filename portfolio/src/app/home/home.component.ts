import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value = 'landing-timeless';
  constructor(private router : Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectTemplate(){
    this.value = (<HTMLSelectElement>document.getElementById('templates')).value;
    console.log(this.value);
  }
  button(){
    console.log("buttonClicked" + this.value)
    this.router.navigate(['/', this.value]);
  }

}
