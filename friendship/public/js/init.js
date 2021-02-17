let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

PIXI.utils.sayHello(type)

//Altura del Juego
var heightWindow = window.innerHeight;
var width = 700;

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle,
    Graphics = PIXI.Graphics,
    renderer = PIXI.autoDetectRenderer(width, heightWindow);

let game = new Application({ width:width, height:heightWindow });
game.renderer.backgroundColor = 0x061639;
game.renderer.autoRezise = true;

document.getElementById("juego").appendChild(game.view);

//Creando enemigoss
setup();

function setup(delta) {
    //Creando jugador
    var anchoPersonaje = 64;
    var altoPersonaje = 64;
    var posicionX = (renderer.width/2)-(anchoPersonaje/2);
    var posicionY = renderer.height - altoPersonaje;
    var rectangle = new Graphics();
    rectangle.lineStyle(4, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(0, 0, anchoPersonaje, altoPersonaje);
    rectangle.endFill();
    rectangle.x = posicionX;
    rectangle.y = posicionY;
    rectangle.vx = 0;
    rectangle.vy = 0;
    game.stage.addChild(rectangle);

    game.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    //console.log(1);
}