import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
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
    date: new Date,
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
  // @Input() ExersiseForForm: IExersise[]=[];
  exersiseName: INameExersise[] = [];
  addexersiseName: INameExersise = { id: 0, exersise: '' };
  addSelection: boolean = false;
  constructor(private servise: SharedService) { }
  @Output() onChanged = new EventEmitter<boolean>();
  change() {
    this.onChanged.emit();
  }

  ngOnInit(): void {
    this.getExersiseName();
    console.log("ExersiseName1: " + this.exersiseName.length)
    console.log(NgModule.name)
  }
  getExersiseName() {
    this.servise.GetExersiseName().subscribe(d => this.exersiseName = d);
    console.log("ExersiseName: " + this.exersiseName.length)
  }

  saveExersise() {
    var temp = this.exersise
    this.servise.AddExersise(temp).subscribe(res => {
      alert(res.toString());
      this.change();
    })
  }

  addExersiseName() {
    let ex = this.addexersiseName;
    if (!this.exersiseName.find(item => item.exersise == ex.exersise)) {
      this.servise.AddExersiseName(ex).subscribe(res => {
        if (res)
          this.getExersiseName();
      })
    }
    this.addexersiseName.exersise = "";
    this.addSelection = false;

  }
  addSelect(){
    this.addSelection=true
  }

}



