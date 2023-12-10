document.addEventListener("DOMContentLoaded", () => {
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
    if (ballX > 680 || ballX <= 0) dx *= -1;
    if (ballY > 380 || ballY <= 0) dy *= -1;
  }, 10);
});
