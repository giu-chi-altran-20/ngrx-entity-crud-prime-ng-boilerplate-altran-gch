import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Coin} from '@models/vo/coin';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoinStoreActions} from '@root-store/coin-store';
import {JValidators} from '@core/utils/j-validators';


@Component({
  selector: 'app-coin-edit',
  templateUrl: './coin-edit.component.html',
  styles: [``]
})
export class CoinEditComponent extends PopUpBaseComponent<Coin> {

  form: FormGroup;
  keys: string[];

  id: FormControl; // attributo
  name: FormControl; // attributo
  value: FormControl; // attributo

  setItemPerform(value: Coin): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {
    this.id = this.fb.control({value: '', disabled: true});
    this.name = this.fb.control('', JValidators.required());
    this.value = this.fb.control('', [JValidators.required(), JValidators.maxLength(2)]);

    this.form = this.fb.group({ // form
      id: this.id, // attributo
      name: this.name, // attributo
      value: this.value // attributo
    });
  }

  // setItemPerform(value: Coin): void {
  //   const group = this.fb.group({});
  //   this.keys = Object.keys(value);
  //   this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
  //   this.form = group;
  // }

  acceptPerform(item: Coin): void {
    if (item.id) {
      this.store$.dispatch(CoinStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(CoinStoreActions.CreateRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    }
  }

  // cancel(): void {
  //   this.store$.dispatch(closePopUpAction(this.route));
  // }
}
