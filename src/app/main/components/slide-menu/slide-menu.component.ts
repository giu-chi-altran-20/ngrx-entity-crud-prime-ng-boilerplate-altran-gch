import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootStoreState, RouterStoreActions, SlideMenuStoreActions, SlideMenuStoreSelectors} from '../../../root-store/';
import {MenuItem} from 'primeng/api';
import {MonoTypeOperatorFunction, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-slide-menu',
  template: `
    <div class="slide-header"><i class="fas fa-heart"></i> Menù</div>
    <!--    <p-panelMenu [model]="items" [style.width.%]="100"></p-panelMenu>-->
    <p-scrollPanel #scrollPanel [style]="{height: '100%'}">
      <p-menu [model]="items$ | async" styleClass="slide-menu" [style.width.%]="100"></p-menu>
    </p-scrollPanel>
  `,
  styles: [`
    .slide-header {
      height: 70px;
      top: 0;
      left: 0;
      right: 0;
      background-color: #0067b7;
      color: #FFF;
      font-size: x-large;
      padding: 18px;
    }

    .slide-header i {
      font-size: xx-large;
    }

    .p-menu {
      width: unset !important;
      border: unset !important;
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SlideMenuComponent implements OnInit, OnDestroy {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  // items: MenuItem[];
  items$: Observable<MenuItem[]>;

  ngOnDestroy(): void {
  }

  // todo: completare profilazione dei pulsanti.
  ngOnInit(): void {
    this.items$ = this.store$.pipe(select(SlideMenuStoreSelectors.selectItems), menuDecorator(this.store$));

    this.store$.dispatch(SlideMenuStoreActions.Select({
      item: {
        data: {},
        breadcrumb: ['Home']
      }
    }));
  }
}

export const menuDecorator = <T>(store$): MonoTypeOperatorFunction<any> => {
  return input$ => input$.pipe(
    map((items: MenuItem[]) => items.map(value => ({...value, store$})))
  );
};
