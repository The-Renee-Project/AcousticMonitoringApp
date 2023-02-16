import { Observable } from '@nativescript/core'
import { openUrl } from '@nativescript/core/utils'
import { handleOpenURL, AppURL } from 'nativescript-urlhandler'
import { openApp } from "nativescript-open-app"
//import { Utils } from '@nativescript/core'


export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string

  constructor() {
    super()

    // Initialize default values.
    this._counter = 42
    this.updateMessage()
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value
      this.notifyPropertyChange('message', value)
    }
  }

  onTap() {
    this._counter--
    this.updateMessage()
    const fbScheme = "facebook://"; // works
    const appScheme = "org.nativescript.ConnectApp2://";
    //const appScheme = "com.example.myremotedatabaseapp://app";
    //openUrl(fbScheme);// works
    openUrl(appScheme);

    //openApp("com.facebook.katana");
    //openApp(appScheme);

    //const intent = new android.content.Intent(application.android.content.Context, com.example.remotedatabaseapp.MainActivity.class);
    //application.android.foregroundActivity.startActivity(intent);
    //const open = require('open');
    //open.openApp('org.nativescript.ConnectApp2');


  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
    } else {
      this.message = `${this._counter} taps left`
    }
  }
}
