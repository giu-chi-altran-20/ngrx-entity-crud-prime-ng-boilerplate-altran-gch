import {Component, NgModule, OnInit, Output, EventEmitter} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CounterStoreActions} from "@root-store/counter-store";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss']
})
export class IncrementComponent implements OnInit {

  // @Output() elmPropagationEvent = new EventEmitter<any>();

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onClickButton($event: any): void {
    // this.elmPropagationEvent.emit();
    console.log('CounterMainComponent.increment()');
    this.store$.dispatch(CounterStoreActions.Increment());
  }


}

@NgModule({
  exports: [IncrementComponent],
  imports: [
    ButtonModule
  ],
  declarations: [IncrementComponent]
})

export class IncrementModule{ }
