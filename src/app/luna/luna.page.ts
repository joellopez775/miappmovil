import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-luna',
  templateUrl: './luna.page.html',
  styleUrls: ['./luna.page.scss'],
})
export class LunaPage implements OnInit {

  user = {
    usuario: "",
    pw: "",
  };

  constructor(private navCtrl: NavController, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.user.usuario = params['data1'];
      this.user.pw = params['data2'];
    });
  }

  volverHome() {
    this.navCtrl.navigateRoot('/home');
  }

}
