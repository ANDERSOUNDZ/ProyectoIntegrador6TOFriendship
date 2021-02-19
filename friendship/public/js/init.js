let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

PIXI.utils.sayHello(type)

//Altura del Juego
var heightWindow = window.innerHeight;
var width = 700;

//Creando Variables para Pixi, Usuario y enemigos
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle,
    Graphics = PIXI.Graphics,
    renderer = PIXI.autoDetectRenderer(width, heightWindow);

let principal;
let enemigos = [];
let velocidadGeneraEnemigo = 100;
let cuentaInfinita = 0;
let velocidadEnemigo = 1;
let velocidadPrincipal =4;
let velocidaEstandarEnemigo = 1;

//Dando forma a el juego
let game = new Application({ width:width, height:heightWindow });
game.renderer.backgroundColor = 0x061639;
game.renderer.autoRezise = true;

//Devolviendo a la vista HTML
document.getElementById("juego").appendChild(game.view);

//Configuracion Jugador
setup();
function setup(delta) {
    //Declarando variables de teclado
    let left = keyboard("ArrowLeft"), 
        right = keyboard("ArrowRight");
        down = keyboard("ArrowDown");
    //Creando y configurando jugador
    principal = jugador();
    game.stage.addChild(principal);
    //Funciones de reconocimiento de Teclado
    left.press = () => { 
        principal.vx = -velocidadPrincipal;
        principal.vy = 0;
    }   
    left.release = () => {
            principal.vx = 0;
            principal.vy = 0;
    }
    right.press = () => { 
        principal.vx = velocidadPrincipal;
        principal.vy = 0;
    }   
    right.release = () => {
            principal.vx = 0;
            principal.vy = 0;
    }
    //Para la velocidad de enemigo se utilizara el down
    down.press = () => { 
        velocidadEnemigo += 10;
        velocidadGeneraEnemigo = 10; 
    }   
    down.release = () => {
        velocidadEnemigo = velocidaEstandarEnemigo;
        velocidadGeneraEnemigo = 100;;
    }
    //
    state = play;
    //
    game.ticker.add(delta => gameLoop(delta));
}

//Creando enemigos aleatorios
function gameLoop(delta) {
    //CreandoEnemigos Aleatorios
    cuentaInfinita++;
    if((cuentaInfinita % velocidadGeneraEnemigo)==0){
        game.stage.addChild(boots());
    }

    for (let index = 1; index < enemigos.length; index++) {
        enemigos[index].vy = enemigos[index].vy + velocidadEnemigo; 
        enemigos[index].y = enemigos[index].vy; 
    }

    state(delta);
   
}

function play (delta){
    //Reconocimiento de Tecla, perimite conocer el estado al momento de aplastar, va cambiando mediante lo reconoce de izquierda a derecha
    principal.x += principal.vx;
    principal.y += principal.vy;
    
    //Reconocimiento de choque de enemigo para parar el juego
    for (let index = 1; index < enemigos.length; index++) {
        if (hitTestRectangle(enemigos[index], principal)) {            
            console.log("Enemigo lo golpeo");
            //game.stop();    
        }
        else{

        }
    }
}