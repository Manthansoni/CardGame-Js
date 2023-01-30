export default class CardBase extends Phaser.Gameobjects.Container {
    constructor(data){
        let {scene, x, y, name, card, image, depth} = data;
        let spritecard = new Phaser.Gameobjects.Sprite(scene, 0, 0, card);
        let spriteImage = new Phaser.Gameobjects.Sprite(scene, 0, 0, image);
        let textName = new Phaser.Gameobjects.BitmapText(scene,0,0,'pressstart',name,16,Phaser.Gameobjects.BitmapText.ALIGN_CENTER);
        super(scene,x,y,[spriteCard,spriteImage,textName]);
        this.spriteCard = spriteCard;
        this.spriteImage = spriteImage;
        this.textName = textName;
        this.cardname = name;
        this.depth = depth;
        this.scene = scene;
        this.scene.add.existing(this);
    }
}