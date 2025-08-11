import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Directive } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet,CommonModule,LowerCasePipe,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  names= ['PILLI','veda','satya','suma']
  correct=true
  wrong=false
  data="s";
  arr=['mi','readmi','apple','orange']
  num1:number=3;
  num2:number=4;

  expression:string=""

}
