import { Injectable } from "@angular/core";
import { LoginServiceService } from "../services/login-service.service";

@Injectable({
  providedIn: "root"
})
export class GameService {
  score: string = null;
  counter = [
    {
      name: "Player 1",
      label: "⭕️",
      points: 0
    },
    {
      name: "Player 2",
      label: "❌",
      points: 0
    }
  ];
  constructor(private loginService: LoginServiceService) {}

  generateCombos(arr): string {
    let combos = [
      [arr[0], arr[1], arr[2]],
      [arr[3], arr[4], arr[5]],
      [arr[6], arr[7], arr[8]],
      [arr[0], arr[3], arr[6]],
      [arr[1], arr[4], arr[7]],
      [arr[2], arr[5], arr[8]],
      [arr[0], arr[4], arr[8]],
      [arr[6], arr[4], arr[2]]
    ];
    combos.forEach(element => this.checkWinner(element));
    this.checkTie(arr);
    return this.score;
  }

  checkWinner(el) {
    if (el[0] === "⭕️" && el[0] === el[1] && el[0] === el[2]) {
      this.score = "⭕️ CIRCLE ⭕️";
      this.counter[0].points += 1;
      return;
    } else if (el[0] === "❌" && el[0] === el[1] && el[0] === el[2]) {
      this.score = "❌ CROSS ❌";
      this.counter[1].points += 1;
      return;
    }
  }

  checkTie(arr) {
    if (this.score === null && arr.indexOf("") === -1) {
      return (this.score = "tie");
    }
  }
}
