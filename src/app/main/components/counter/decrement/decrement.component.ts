import {Component, EventEmitter, NgModule, OnInit, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CounterStoreActions} from "@root-store/counter-store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.scss']
})
export class DecrementComponent implements OnInit {

  // @Output() elmPropagationEvent = new EventEmitter<any>();

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onClickButton($event: any): void {
    // this.elmPropagationEvent.emit();
    console.log('CounterMainComponent.decrement()');
    this.store$.dispatch(CounterStoreActions.Decrement());
  }

}

@NgModule({
  exports: [DecrementComponent],
  imports: [
    ButtonModule
  ],
  declarations: [DecrementComponent]
})
export class DecrementModule {}
