import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { GameService } from "../../services/game.service";
import { LoginServiceService } from "../../services/login-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  player1: string = "Chiara";
  player2: string = "";
  password: string = "1234";
  constructor(
    private loginService: LoginServiceService,
    private gameService: GameService,
    private nav: NavController
  ) {}

  ngOnInit() {}

  login() {
    if (this.loginService.checkUser(this.player1, this.password)) {
      this.nav.navigateRoot("/home");
      this.gameService.counter[0].name = this.player1;
      this.player2 ? (this.gameService.counter[1].name = this.player2) : null;
    }
    console.log(this.gameService.counter);
  }
}
