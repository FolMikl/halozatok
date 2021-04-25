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
        sorszám++;
        if (kérdés == kérdések.lenth) {
            kérdés = 0;
        }
        kérdésMegjelenítés(kérdés);
    }

}
fetch('/questions/1')
    .then(response => response.json())
    .then(data => kérdésMegjelenítés(data)
    );

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
}
function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}    