import { Observable } from '@nativescript/core'
import { openUrl } from '@nativescript/core/utils'
import { handleOpenURL, AppURL } from 'nativescript-urlhandler';
import { openApp } from "nativescript-open-app";


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
    //const fbScheme = "facebook://"; // works
    const appScheme = "com.example.myapplication"
    //openUrl(fbScheme);// works
    openUrl(appScheme);
    //openApp("com.facebook.katana");


  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
    } else {
      this.message = `${this._counter} taps left`
    }
  }
}
