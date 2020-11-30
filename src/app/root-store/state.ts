import {Counter} from '@models/vo/counter';
import {CoinStoreState} from '@root-store/coin-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
counter:Counter;
coin:CoinStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
