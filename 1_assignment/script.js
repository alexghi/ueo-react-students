setInterval(() => {
    date = new Date();
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    hours = date.getHours();
    sec_rotation = 6 * seconds;
    min_rotation = 6 * minutes;
    hr_rotation = 30 * hours + minutes / 2; 
    second.style.transform = `rotate(${sec_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    console.clear()
    console.log("hr rotation:", hr_rotation)
    console.log("minute rotation:", min_rotation)
    console.log("seconds rotation:", sec_rotation)
}, 1000);