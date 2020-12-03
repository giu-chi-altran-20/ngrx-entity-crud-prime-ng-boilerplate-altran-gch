import {StructureStoreState} from '@root-store/structure-store';
import {CarStoreState} from '@root-store/car-store';
import {PersonStoreState} from '@root-store/person-store';
import {Counter} from '@models/vo/counter';
import {CoinStoreState} from '@root-store/coin-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
structure:StructureStoreState.State;
car:CarStoreState.State;
person:PersonStoreState.State;
counter:Counter;
coin:CoinStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
