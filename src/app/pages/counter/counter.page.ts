import { Component, OnInit } from "@angular/core";
import { GameService } from "../../services/game.service";
import { Location } from "@angular/common";
import { LoginServiceService } from "../../services/login-service.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.page.html",
  styleUrls: ["./counter.page.scss"]
})
export class CounterPage implements OnInit {
  counter = [];
  constructor(
    private gameService: GameService,
    private loginService: LoginServiceService,
    private nav: NavController
  ) {}

  ngOnInit() {
    if (this.loginService.verifiedUser === false) {
      this.nav.navigateRoot("/");
    }
    this.getCounter();
  }
  getCounter() {
    this.counter = this.gameService.counter;
  }

  goBack() {
    this.nav.back();
  }
}
