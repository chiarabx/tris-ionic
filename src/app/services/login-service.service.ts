import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginServiceService {
  verifiedUser: boolean = false;
  name: string = "Chiara";
  password: string = "1234";
  cellArray: Array<string> = ["", "", "", "", "", "", "", "", ""];
  turn: number = 1;
  constructor() {}
  checkUser(inputName: string, inputPassword: string) {
    if (inputName === this.name && inputPassword === this.password) {
      this.verifiedUser = true;
      return true;
    } else return false;
  }
}
