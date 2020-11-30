import {Component, EventEmitter, NgModule, OnInit, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  @Output() elmPropagationEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton($event: any): void {
    this.elmPropagationEvent.emit();
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
