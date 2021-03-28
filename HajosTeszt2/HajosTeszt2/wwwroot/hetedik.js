var kérdések;
var kérdés;
function Letöltés() {
    fetch('/question.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));

    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdések = d;
        kérdésMegjelenítés(0);
    }
}

function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/teszt-0050.jpg";

}
window.onload = function () {
    Letöltés();
    document.getElementById("vissza").onclick = function vissza() {
        kérdés--;
        if (kérdés == -1) {
            kérdés = kérdések.length - 1;
        }
        kérdésMegjelenítés(kérdés);
    }
    document.getElementById("előre").onclick = function előre() {
        kérdés++;
        if (kérdés == kérdések.lenth) {
            kérdés = 0;
        }
        kérdésMegjelenítés(kérdés);
    }

}