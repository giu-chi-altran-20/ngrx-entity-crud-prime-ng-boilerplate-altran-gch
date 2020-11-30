import {Component, EventEmitter, NgModule, OnInit, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.scss']
})
export class DecrementComponent implements OnInit {

  @Output() elmPropagationEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton($event: any): void {
    this.elmPropagationEvent.emit();
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
