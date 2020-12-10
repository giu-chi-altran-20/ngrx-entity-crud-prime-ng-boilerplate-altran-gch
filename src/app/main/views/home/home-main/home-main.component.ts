import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-home-main',
  template: `<div style="text-align: center"><h2> NGRX-ENTITY-CRUD </h2></div>`,
  styleUrls: ['home-main.component.scss']
})
export class HomeMainComponent implements OnInit {

  title = 'ngrx-crud-altran-gch';

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
  }


  renderData(clazzName: string): string {
    let result = '';
    result += `ng generate ngrx-entity-crud:crud-store --name=${clazzName} --clazz=${clazzName}\n`;
    result += `ng generate ngrx-entity-crud:crud-section --clazz=${clazzName}`;
    return result;
  }
}

