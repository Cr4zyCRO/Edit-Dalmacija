function vjezba1(){
    let odgovor1 = Number(prompt("Kolko si dobio ukupni otpor je "))
 
        if (odgovor1 == 8) {
            alert("Čestitamo tvoj odgovor je točan ")
        } else {
            alert("Nažalost tvoj odgovor nije točan. Probaj ponovo ?")
        }

    }
function vjezba2(){
    let odgovor2 = Number(prompt("Kolika je tvoja vrijednost ukupnog otpora ?"))
    
        if (odgovor2 == 72) {
            alert("Čestitamo tvoj odgovor je točan ")
        } else {
            alert("Nažalost tvoj odgovor nije točan. Probaj ponovo")
        }

}
function vjezba3(){
    let odgovor3 = Number(prompt("Tvoj odgovor je ? "))

        if (odgovor3 == 12.4) {
            alert("Čestitamo tvoj odgovor je točan ")
        } else {
            alert("Nažalost tvoj odgovor nije točan. Probaj ponovo")
        }
}
function vjezba4(){
    let odgovor4a = Number(prompt("Kolika je tvoja struja I ?"))
    let odgovor4b = Number(prompt("a struja I1 ?"))
    let odgovor4c = Number(prompt("Što kazeš za struju I3,Koliko iznosi ?"))
    let odgovor4d = Number(prompt("I za kraju struja I5 ?"))

        if (odgovor4a == 32.08 ) {
            alert("Čestitamo. Dobor si izrčunao struju izvora")
        } else {
            alert("Tvoj odgovor nije točan kreni ispočetka")
        }
        if (odgovor4b == 16.04) {
            alert("Tvoj odgovor je za struju I1 je točan")
        } else {
            alert("Nažalost si krivo izračunao struju I1")
        }
        if (odgovor4c == 4.58) {
            alert("Tvoj odgovor je struju I3 točan")
        } else {
            alert("Nije dobro. Negdje si pogriješio struj I3 neiznosi toliko")
        }
        if (odgovor4d == 13.75) {
            alert("Napravio si dobar posao tvoj odgovor za struju I5 je točan")
        } else {
            alert("Nisi točno izračunao struju I5 probaj ponovo")
        }
}
function vjezba5(){
    let odgovor5a = Number(prompt("Pa krenimo. Koliko si dobio struju I1 ?"))
    let odgovor5b = Number(prompt("Idemo dalje koliko je tvoja struja I2 ?"))
    let odgovor5c = Number(prompt("I za kraj kako si izračunao struju I4 koliko ona iznosi ?"))

        if (odgovor5a == 3) {
            alert("Izvrsno dobro si izračunao struju I1")
        } else {
            alert("Tvoj izračun za struju I1 je netočan ")
        }
        if (odgovor5b == 1) {
            alert("Tvoj odgovor za struju I2 je točan")
        } else {
            alert("Ups! Krivo si izračunao struju I4 možda da kreneš izpočetka")
        }
        if (odgovor5c == 1.2) {
            alert("Točan odgovor za struju I4")
        } else {
            alert("Negdje si napravo grešku pa struja I4 nije dobra ")
        }
}
function vjezba6(){
    let odgovor6a = Number(prompt("Kolika je vrijednost struje I1"))
    let odgovor6b = Number(prompt("Kolika si dobio struju I2"))
    let odgovor6c = Number(prompt("Tvoja vrijednost struje I3"))
    let odgovor6d = Number(prompt("I za kraj vrijednost struje I4"))

        if (odgovor6a == 0.09) {
            alert("Tvoj odgovor za struju I1 je točan")
        } else {
            alert("Negdje si napravio grešku i krivo si odgovorio za struju I1")
        }
        if (odgovor6b == 0.03) {
            alert("Nice. Točan odgovor za I2")
        } else {
            alert("Wrong. Imaš grešku odgovori nije toča za I2")
        }
        if (odgovor6c == 0.072) {
            alert("Točan odgovor za I3")
        } else {
            alert("Negdje ti se potkrala greška pa je odgovor za I3 netočan")
        }
        if (odgovor6d == 0.018) {
            alert("Svaka čast točan odgovor za I4")
        } else {
            alert("Krivo si odgovorio za I4")
        }
}