import {SlideMenuItem} from '@models/vo/slide-menu-item';
import {MenuItem} from 'primeng/api';
import {RouterStoreActions} from '@root-store/router-store';
import * as SlideMenuStoreActions from '@root-store/slide-menu-store/actions';

export interface State {
  open: boolean;
  item: SlideMenuItem;
  items: MenuItem[];
}

export const initialState: State = {
  open: false,
  item: {breadcrumb: [], data: null},
  items: [{
    label: 'Counter',
    icon: 'pi pi-fw pi-user-plus',
    command: (event$) => {
      // invoco il router per cambiare pagina
      event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['/counter']}));

      // salvo nello store del menù l'elemento selezionato.
      event$.item.store$.dispatch(SlideMenuStoreActions.Select({
        item: {
          data: {},
          breadcrumb: ['home', 'counter']
        }
      }));
    }
  },
    {
      label: 'Coin',
      icon: 'pi pi-fw pi-user-plus',
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['/coin']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['home', 'coin']
          }
        }));
      }
    },
    {
      label: 'Person',
      icon: 'pi pi-fw pi-user-plus',
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['/person']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['home', 'person']
          }
        }));
      }
    },
    {
      label: 'Car',
      icon: 'pi pi-fw pi-user-plus',
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['/car']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['home', 'car']
          }
        }));
      }
    },
    {
      label: 'Structure',
      icon: 'pi pi-fw pi-user-plus',
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['/structure']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['home', 'structure']
          }
        }));
      }
    }]
};
