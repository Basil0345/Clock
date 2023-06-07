setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    document.getElementById("time").innerHTML = `${formatAMPM(d)}`
    document.getElementById("date").innerHTML = `${date(d)}`
    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000)

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 12 ? `0${hours}` : hours
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function date(d) {
    let day = d.getDay();
    let year = d.getFullYear();
    day = day < 10 ? `0${day}` : day;
    let dayName = days[d.getDay()];
    return `${day} ${dayName} ${year}`;
}
