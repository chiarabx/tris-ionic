import { Component } from "@angular/core";
import { LoginServiceService } from "../services/login-service.service";
import { GameService } from "../services/game.service";
import { NavController } from "@ionic/angular";
import { CounterPage } from "../pages/counter/counter.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  cellArray: Array<string> = ["", "", "", "", "", "", "", "", ""];
  turn: number = 1;
  score: string = null;
  constructor(
    private loginService: LoginServiceService,
    private nav: NavController,
    private gameService: GameService
  ) {}
  ngOnInit() {
    console.log(this.gameService.counter);
    if (this.loginService.verifiedUser === false) {
      this.nav.navigateRoot("/");
    }
  }

  empty() {
    this.cellArray = ["", "", "", "", "", "", "", "", ""];
    this.score = null;
    this.gameService.score = null;
  }

  play(index) {
    if (this.cellArray[index] !== "") {
      return alert("This box is already taken, please select an empty one!");
    }
    if (this.turn === 1) {
      this.turn = -this.turn;
      this.cellArray[index] = "⭕️";
    } else {
      this.turn = -this.turn;
      this.cellArray[index] = "❌";
    }
    this.score = this.gameService.generateCombos(this.cellArray);
  }

  seeCounter() {
    this.nav.navigateForward("/counter");
  }
}
