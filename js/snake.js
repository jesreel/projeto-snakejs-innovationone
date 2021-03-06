canvas = document.getElementById("snake");
context = canvas.getContext("2d");
box = 32;
snake = [];
snake[0] = {
	x: 8*box,
	y: 8*box
}

direction = "down";

object = {
	x: Math.floor(Math.random() * 15+1) * box,
	y: Math.floor(Math.random() * 15+1) * box
}


//Criar o background do jogo
function background() {
	context.fillStyle = "black";
	context.fillRect(0,0,16*box,16*box);
}

//Criar snake
function createSnake() {
	for (i = 0; i < snake.length; i++) {
		context.fillStyle = "white";
		context.fillRect(snake[i].x,snake[i].y,box,box);
	}		
}


//criando objeto que a snake vai pegar
function createObject() {
	context.fillStyle = "red";
	context.fillRect(object.x, object.y, box, box);
}
	



//pegar o click no botão do teclado
document.addEventListener('keydown', update);

/*
	atualizando a direção da snake
	conforme clique nas setas do teclado
	
	37: left
	38: up
	39: right
	40: down

*/
function update(event) {
	
	if (event.keyCode == 37 && direction != "right") {	
		direction = "left";				
	}
	
	if (event.keyCode == 38 && direction != "down") {	
		direction = "up";		
	}
	
	if (event.keyCode == 39 && direction != "left") {	
		direction = "right";		
	}
	
	if (event.keyCode == 40 && direction != "up") {	
		direction = "down";
	}
	
	//alert(event.keyCode);
	
}//fim update








//Iniciar o jogo
function playSnake() {	
		
	if (snake[0].x > 15*box && direction == "right") {
		snake[0].x = 0;	
	}	
	
	if (snake[0].x < 0 && direction == "left") {
		snake[0].x = 16*box;	
	}	
	
	if (snake[0].y > 15*box && direction == "down") {
		snake[0].y = 0;	
	}	
	
	if (snake[0].y < 0 && direction == "up") {
		snake[0].y = 16*box;	
	}	
	
	
	/*
		verifica se a cabeça se choca com o
		corpo da snake e finaliza o jogo	
	*/
	
	for (i = 1; i < snake.length; i++) {
		if ((snake[0].x == snake[i].x) && (snake[0].y == snake[i].y) ) {
			clearInterval(playSnake);	
			alert("Game Over!");
		}			
	}
	
	
	
	
	background();
	createSnake();
	createObject();
	
	snakex = snake[0].x;
	snakey = snake[0].y;	
	
	if (direction == "right") {
		snakex += box;	
	}
	
	if (direction == "left") {
		snakex -= box;	
	}
	
	if (direction == "down") {
		snakey += box;	
	}
	
	if (direction == "up") {
		snakey -= box;	
	}


	if ((snakex != object.x) || (snakey != object.y)) {
		snake.pop();	
	}
	else {
		object.x = Math.floor(Math.random() * 15+1) * box;
		object.y = Math.floor(Math.random() * 15+1) * box;
	}	
		
	newheadSnake = {
		x: snakex,
		y: snakey	
	}
	
	snake.unshift(newheadSnake);
		
}

jogo = setInterval(playSnake, 100);





