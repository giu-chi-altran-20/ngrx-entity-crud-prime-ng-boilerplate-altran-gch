import {Component, EventEmitter, NgModule, OnInit, Output} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CounterStoreActions} from '@root-store/counter-store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  // @Output() elmPropagationEvent = new EventEmitter<any>();

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onClickButton($event: any): void {
    // this.elmPropagationEvent.emit();
    console.log('CounterMainComponent.reset()');
    this.store$.dispatch(CounterStoreActions.Reset());
  }
}

@NgModule({
  exports: [ResetComponent],
  imports: [
    ButtonModule
  ],
  declarations: [ResetComponent]
})
export class ResetModule {}
