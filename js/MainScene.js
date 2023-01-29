export default class mainScene extends Phaser.Scene {
    constructor(){
        super('MainScene');
    }

preload(){
    this.preload.image('card','assests/card.png')
}

}