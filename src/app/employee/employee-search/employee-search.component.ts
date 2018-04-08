import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'hrs-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  @ViewChild('search') private searchInput: ElementRef;
  @Input() private searchValue: String;

  constructor(private router: Router) { }

  ngOnInit() {
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((value: String) => {
        if (value.length > 0){
          this.router.navigate(['employees', 'search', value]);
        } else {
          this.router.navigate(['employees']);
        }
      });
  }

}
