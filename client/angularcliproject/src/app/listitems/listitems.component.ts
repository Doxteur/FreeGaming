import { Component } from '@angular/core';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.scss']
})
export class ListitemsComponent {

  data = [{
    "name": "Fauteuil",
    "image": "",
    "info": "La chaise Free Gaming est la solution idéale pour toutes personnes peu importe la taille. Très confortable, ergonomique et extrêmement stable. Elle possède un look unique grâce à sa forme originale conçue spécialement pour l'évènement. Vou pourrez ainsi passer des heures sans les compter dessus."
  }, {
    "name": "Ecran",
    "image": "",
    "info": "Mettez toutes les chances de votre côté pour atteindre les sommets grâce à l'écran PC gaming MSI Optix G241. Porté par une dalle IPS de 23.8 pouces à résolution Full HD, ce modèle dispose de toutes les qualités pour vous aider à prendre l'avantage sur vos adversaires. Retrouvez des performances de jeu supérieures (FreeSync, 144 Hz, 1 ms), un confort oculaire optimal et un design frameless très agréable. Ne visez que le succès et préparez-vous pour la gloire !"
  }, {
    "name": "Clavier/Souris",
    "image": "",
    "info": "Le combo clavier et souris de jeu sans fil rechargeable RedThunder K10 sera votre meilleur choix. Transmission haute vitesse et stable 2.4G, garantissant qu'il peut facilement faire face aux batailles les plus intenses. Remarque : le récepteur USB se trouve au bas de la souris."
  }, {
    "name": "Ordinateur",
    "image": "",
    "info": "Avec son couple infernal Intel 7 9th gen et GeForce RTX 3060, ce PC Backstab fait l'objet de nombreuses convoitises chez les gamers.... Une machine ultra efficace portée par 2 composants au sommet de leur art."
  }, {
    "name": "Casque",
    "image": "",
    "info": "Le casque HyperX Cloud Flight est le casque-micro de jeu sans fil avec batteries extra longue durée. Niveau de pression acoustique: 106 dB. Sensibilité: -45 dBV (0 dB = 1 V / Pa, 1 kHz). Tout cela avec un confort HyperX Signature. Cadre aluminium durable avec arceau élargi. Audio de jeu immersif. Arceau en acier réglable et résistant. Écouteurs rotatifs à 90° avec effets lumineux LED"
  }]

}
