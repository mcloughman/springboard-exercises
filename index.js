function countdown(num) {
  setInterval(() => {
    while (num >= 1) {
      if (num - 1 > 0) {
        console.log(num - 1);
      } else {
        console.log("DONE!");
      }
      num--;
    }
  }, 1000);
}

function randomGame() {
  counter = 0;
  const timerId = setInterval(() => {
    const num = Math.random();
    counter++;
    if (num > 0.75) {
      console.log(counter);
      clearInterval(timerId);
    }
  }, 1000);
}
