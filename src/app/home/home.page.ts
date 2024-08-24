import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre = "Pedro";

  constructor(private navCtrl: NavController) { }

  caricatura = {
    nombre: "Tom y jerry",
    subtitulo: "Holaa",
    description: `Tom y Jerry (Tom and Jerry en inglés original) son dos personajes animados...`,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHt1aBFkbQE-gbIINFN9VMuX98RYjleUFBw&s"
  };

  user = {
    usuario: "",
    password: ""
  };

  validarUsuario() {
    if (this.user.usuario === "joel" && this.user.password === "7398") {
      this.navCtrl.navigateForward('/luna');
      alert("Bienvenido")
    } else {
      alert("Error de login");
      this.navCtrl.navigateRoot('/home');
    }
  }

}
