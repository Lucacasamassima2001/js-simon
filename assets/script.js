// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!



let countDown = new Date(" 2023-04-28 9:30:00").getTime();
console.log(countDown)

let time = setInterval(function(){
    let now = new Date().getTime();
    let whatremains = countDown - now;

    let hours = Math.floor((whatremains % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // console.log(hours)
    let minutes = Math.floor((whatremains % (1000 * 60 * 60)) / (1000 * 60));
    // console.log(minutes)
    let seconds = Math.floor((whatremains % (1000 * 60)) / 1000);
    // console.log(seconds)


    document.getElementById("hours").innerHTML = "ORE: " + hours + "!";
    document.getElementById("minutes").innerHTML = "MINUTI: " + minutes + "!";
    document.getElementById("seconds").innerHTML = "SECONDI: " + seconds + "!";

    if(whatremains <= 0){
        clearInterval(time)
        document.getElementById("timesover").innerHTML = "IL TEMPO E' SCADUTO!"
        console-log("è scaduto il tempo")
    }


})
