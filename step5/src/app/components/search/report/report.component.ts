import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _loading = true;
  _sortValue = null;
  _filterGender = [
    { name: 'male', value: false },
    { name: 'female', value: false }
  ];

  sort(value) {
    this._sortValue = value;
    this.refreshData();
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }

  constructor(private _randomUser: ReportService) {
  }

  refreshData(reset = false) {
    // if (reset) {
    //   this._current = 1;
    // }
    this._loading = true;
    const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
    // this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender).subscribe((data: any) => {
    //   this._loading = false;
    //   this._total = 200;
    //   this._dataSet = data.results;
    // })
    this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender).subscribe((data: any) => {
      this._loading = false;
      console.log(data.results);
      this._total = 10;
      this._dataSet = data.results;
    })
  };

  del(obj){
    console.log(obj);
    this._dataSet.splice(obj, 1);
    console.log(obj)
  }

  ngOnInit() {
    this.refreshData();
  }

}
