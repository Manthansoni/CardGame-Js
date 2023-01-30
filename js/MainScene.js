export default class mainScene extends Phaser.Scene {
    constructor(){
        super('MainScene');
    }

    preload(){
        this.load.image('armor','assests/armor.png')
        this.load.image('card','assests/card.png')
        this.load.image('dead','assests/dead.png')
        this.load.image('deathknight','assests/deathknight.png')
        this.load.image('firedrake','assests/firedrake.png')
        this.load.image('goldendragon','assests/goldendragon.png')
        this.load.image('healingportion','assests/healingportion.png')
        this.load.image('kabold','assests/kabold.png')
        this.load.image('ogre','assests/ogre.png')
        this.load.image('paladin','assests/paladin.png')
        this.load.image('playercard','assests/playercard.png')
        this.load.image('restartbutton','assests/restartbutton.png')
        this.load.image('shield','assests/shield.png')
        this.load.image('troll','assests/troll.png')
        this.load.bitmapFont('pressstart','assests/pressstart.png','assests/pressstart.fnt');

    }
    create(){
        this.player = new CardBase({
            scene: this,
            name: 'paladin',
            x:0,
            y:0,
            card: 'playercard',
            image: 'paladin',
            depth: 1
        });
    }

}