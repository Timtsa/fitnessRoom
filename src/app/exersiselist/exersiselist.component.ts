import { Component, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { IExersise } from '../IExersise';

@Component({
  selector: 'app-exersiselist',
  templateUrl: './exersiselist.component.html',
  styleUrls: ['./exersiselist.component.css']
})
export class ExersiselistComponent implements OnInit {
  openForm = false;
  @Output() ExersiseList: IExersise[] = [];
  @Output() listOfExersise: IExersise[];
  dateMap: Map<Date, IExersise[]> = new Map<Date, IExersise[]>();

  constructor(private servise: SharedService) { }

  ngOnInit(): void {
    this.refreshExersise();
    console.log(this.ExersiseList.length)
    console.log(this.dateMap.size)
  }
  refreshExersise() {
    this.servise.GetExersiseList().subscribe(d => {
      this.ExersiseList = d
      for (var dat of d)
        if (this.dateMap.has(dat.date))
          this.dateMap.get(dat.date).push(dat)

        else {
          var tempExers = [dat]
          this.dateMap.set(dat.date, tempExers)//?
        }
    });
  }
  exersiseOfDay(item: Date) {
    this.listOfExersise = this.dateMap.get(item);
  }
  openThisForm() {
    this.openForm = true;
    console.log("From Parent " + this.ExersiseList.length)
  }
  closeThisForm() {
    this.openForm = false;
    this.refreshExersise();
    console.log("From Parent " + this.ExersiseList.length)
  }
}
