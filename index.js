document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("ping-pong-table");
  let paddle = document.getElementById("paddle"); // targetting the paddle element
  let ball = document.getElementById("ball"); //targetting the ball element

  //here the ballX and ballY will be helping us to set a starting point w.r.t table

  let ballX = 50; //distance of the top of the ball w.r.t ping pong  table
  let ballY = 50; //distance of the left of the ball w.r.t  ping pong table

  let dx = 2; //displacement  factor  in x-direction , 2 ->you will displace by 2 px in +x direction , -2 -> you will displace by 2px in -x direction
  let dy = 2; //displacement  factor  in y-direction , 2 ->you will displace by 2 px in +y direction , -2 -> you will displace by 2px in -y direction

  ball.style.left = `${ballX}px`;

  setInterval(function exec() {
    ballX += dx;
    ballY += dy;
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    // if (ballX > 680 || ballX <= 0) dx *= -1;
    // if (ballY > 380 || ballY <= 0) dy *= -1;
    if (
      ballX < paddle.offsetLeft + paddle.offsetWidth &&
      ballY > paddle.offsetTop &&
      ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
    ) {
      dx *= -1;
    }
    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
    if (ballY > table.offsetHeight - ball.offsetWidth || ballY <= 0) dy *= -1;
  }, 1);

  let paddleY = 0;
  let dPy = 10; // displacement of paddle in y-direction

  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.keyCode == 38 && paddleY > 0) {
      //key up
      console.log("key up");
      // paddleY += dPy;
      paddleY += -1 * dPy;
    } else if (
      event.keyCode == 40 &&
      paddleY < table.offsetHeight - paddle.offsetHeight
    ) {
      //key down
      console.log("key down");
      // paddleY += -1 * dPy;
      paddleY += dPy;
    }
    // console.log(`${paddleY}px`);
    // console.log(paddle.style.top);
    paddle.style.top = `${paddleY}px`;
  });

  document.addEventListener("mousemove", (event) => {
    let moveDistanceFromTop = event.clientY; // this is the distance of mouse point from top of the screen.
    let distanceOfTableFromTop = table.offsetTop;
    let mousePointControl =
      moveDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight / 2;

    paddleY = mousePointControl;

    if (paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) {
      return; // if bottom of the paddle touches bottom of the table return
    }
    paddle.style.top = `${paddleY}px`;
  });
});
