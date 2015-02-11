"use strict";

var Game = {
    canvas : undefined,
    canvasContext : undefined,
    backgroundSprite : undefined,
    orbSprite : undefined,
    paddleSprite : undefined,
    paddle2Sprite : undefined,
    paddlePosition : { x : 1000, y : 120 },
    paddle2Position : { x : 0, y : 120 },
    orbPosition : { x : 0, y : 120 }
};

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.backgroundSprite = new Image();
    Game.backgroundSprite.src = "brain.svg";
    Game.orbSprite = new Image();
    Game.orbSprite.src = "LittleLight.png";
    Game.paddleSprite = new Image();
    Game.paddleSprite.src = "Motor.png";
    Game.paddle2Sprite = new Image();
    Game.paddle2Sprite.src = "Motor02.png";
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener( 'DOMContentLoaded', Game.start);

Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.drawImage = function (sprite, position) {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y);
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
        0, 0, sprite.width, sprite.height);
    Game.canvasContext.restore();
};

Game.mainLoop = function() {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

Game.update = function () {
    var d = new Date();
    Game.orbPosition.x = d.getTime() * 0.4 % Game.canvas.width;
    Game.paddlePosition.y = d.getTime() * 0.2 % Game.canvas.height;
    Game.paddle2Position.y = d.getTime() * 0.2 % Game.canvas.height;
};

Game.draw = function () {
    Game.drawImage(Game.backgroundSprite, { x : 0, y : 0 });
    Game.drawImage(Game.orbSprite, Game.orbPosition);
    Game.drawImage(Game.paddleSprite, Game.paddlePosition);
    Game.drawImage(Game.paddle2Sprite, Game.paddle2Position);
};
