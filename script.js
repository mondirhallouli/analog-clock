function tick() {
    // ANALOG CLOCK HANDS
    const secondsHand = document.querySelector(".secondsHand");
    const minutesHand = document.querySelector(".minutesHand");
    const hoursHand = document.querySelector(".hoursHand");

    // TIME
    const now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let interval = 6;

    // ANALOG HANDS MOVEMENT
    minutesHand.style.transform = `rotate(${
        minutes * interval + seconds / 10
    }deg)`;
    secondsHand.style.transform = `rotate(${seconds * interval}deg)`;
    hoursHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
}

setInterval(tick, 100);
