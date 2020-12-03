import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {State} from './state';
import {Names} from './names';
import {SlideMenuItem} from '@models/vo/slide-menu-item';
import {MenuItem} from 'primeng/api';

const getOpen = (state: State): boolean => state.open;
const getItem = (state: State): SlideMenuItem => state.item;
const getBreadcrumb = (value: SlideMenuItem): string[] => value.breadcrumb;
const getItems = (state: State): MenuItem[] => state.items;

export const selectState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);

export const selectItem: MemoizedSelector<object, SlideMenuItem> = createSelector(
  selectState,
  getItem
);

export const selectItems: MemoizedSelector<object, MenuItem[]> = createSelector(
  selectState,
  getItems
);

export const selectOpen: MemoizedSelector<object, boolean> = createSelector(
  selectState,
  getOpen
);

export const selectBreadcrumb: MemoizedSelector<object, string[]> = createSelector(
  selectItem,
  getBreadcrumb
);

export const selectBreadcrumbRenderized: MemoizedSelector<object, string> = createSelector(
  selectBreadcrumb,
  (values: string[]): string => {
    return values.join(' > ');
  }
);
