import {Component, NgModule, OnInit, Output, EventEmitter} from '@angular/core';
import {ButtonModule} from "primeng/button";


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss']
})
export class IncrementComponent implements OnInit {

  @Output() elmPropagationEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton($event: any): void {
    this.elmPropagationEvent.emit();
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
