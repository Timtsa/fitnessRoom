import { Component, OnInit,Input } from '@angular/core';
import { IExersise } from 'src/app/IExersise';

@Component({
  selector: 'app-exersise',
  templateUrl: './exersise.component.html',
  styleUrls: ['./exersise.component.css']
})
export class ExersiseComponent implements OnInit {

  constructor() { }
  @Input() exersise: IExersise[]=[];
  ngOnInit(): void {
  }

}
