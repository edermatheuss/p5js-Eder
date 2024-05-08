

let xBolinha = 250; // eixo x
let yBolinha = 250; // eixo Y
let diametro = 15; // diametro
let raio = diametro / 2 ;

let velocidadexBolinha = 6; // velocidade em x
let velocidadeyBolinha = 6; // velocidade em y

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;

let colidiu = false

// placar do jogo
let meupontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;


  function preload(){
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
  }

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  

}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
   circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
  
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  
  if(yBolinha + raio > height ||
    yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraRaquete (x,y){
  rect( x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y ){
  colidiu = colideRectCircle( x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  
  if (colidiu){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}
function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaquete -=
  }
}


