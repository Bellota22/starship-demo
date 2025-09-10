import Phaser from "phaser";
import Bootloader from "./scenes/Bootloader";
import Outro from "./scenes/Outro";
import Splash from "./scenes/Splash";
import Transition from "./scenes/Transition";
import Game from "./scenes/Game";
import { AUTO, Game as PhaserGame } from "phaser";

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
  width: 1000,
  height: 800,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  autoRound: false,
  parent: "contenedor",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [Bootloader, Splash, Transition, Game, Outro],
};



const StartGame = (parent) => {
  return new PhaserGame({ ...config, parent });
};

export default StartGame;
