import {Component, OnInit} from '@angular/core';
import {CrisisService} from '../crisis.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Crisis} from '../crisis';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises$: Observable<Crisis[]>;

  selectedId: number;

  constructor(private service: CrisisService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.crises$ = this.route.paramMap.switchMap((params: ParamMap) => {
      this.selectedId = +params.get('id');
      return this.service.getCrises();
    });
  }

}
