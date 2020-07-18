
setInterval(function Now() {

    let hourp = $(".hour-p");
    let minutep = $(".minute-p");
    let secondp = $(".second-p");

    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let hh;
    let mm;
    let ss;

    if (hour < 10) {
        hh = `0${hour}`;
        hourp.text(hh);
    }
    else {
        hourp.text(hour);
    }

    if (minute < 10) {
        mm = `0${minute}`;
        minutep.text(mm);
    }
    else {
        minutep.text(minute);
    }

    if (second < 10) {
        ss = `0${second}`;
        secondp.text(ss);
    }
    else {
        secondp.text(second);
    }

}, 1000);
