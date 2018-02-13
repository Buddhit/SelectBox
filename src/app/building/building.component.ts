import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import { DataService } from '../data-service';
@Component({
  selector: 'building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
 data:any[]= [];
 data1:any[] = [];
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
selectedCity: any;
  constructor(private service : DataService) { }

  ngOnInit() {
    this.service.getData().subscribe(data =>{
      this.data = data['result'];
      console.log(this.data);
      let i1 = this.data;
      let i2 = this.data;
      let i3 = this.data;
      let i4 = this.data;

      this.data1 = i1.concat(i2).concat(i3).concat(i4);

    })
  console.log();
  }

}
