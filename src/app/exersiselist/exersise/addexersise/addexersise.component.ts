import { Component, OnInit, Output } from '@angular/core';
import { IExersise } from '../../../IExersise';
import { INameExersise } from '../../../INameExersise';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-addexersise',
  templateUrl: './addexersise.component.html',
  styleUrls: ['./addexersise.component.css']
})
export class AddexersiseComponent implements OnInit {



  exersise: IExersise = {
    id: 0,
    date: new Date(),
    exersise: "",
    firstApproach: 0,
    secondApproach: 0,
    thirdtApproach: 0,
    fourthtApproach: 0,
    firstWeight: 0,
    secondWeight: 0,
    thirdtweight: 0,
    fourthtweight: 0
  };
  exersiseName: INameExersise[] = [];
  constructor(private servise: SharedService) { }



  ngOnInit(): void {
    this.getExersiseName();
  }
  getExersiseName() {
    this.servise.GetExersiseName().subscribe(d => this.exersiseName = d);
  }

  saveExersise() {
    var temp = this.exersise
    this.servise.AddExersise(temp).subscribe(res => {
      alert(res.toString());
    })}

}
