M.AutoInit();
$(".dropdown-trigger").dropdown();


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
    let odgovor6a = Number(prompt("Kolika je vrijednost struje I1 ?"))
    let odgovor6b = Number(prompt("Kolika si dobio struju I2 ?"))
    let odgovor6c = Number(prompt("Tvoja vrijednost struje I3 ?"))
    let odgovor6d = Number(prompt("I za kraj vrijednost struje I4 ?"))

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
function vjezba7(){
    let odgovor7a = Number(prompt("Koliko je iznosi tvoja struja I1 ?"))
    let odgovor7b = Number(prompt("Vrijednost je vrijednost struje I3 ?"))
    let odgovor7c = Number(prompt("I za kraj struja I4 ?"))

        if (odgovor7a == 1.5 ) {
            alert("Dobor si izračunao struju I1")
        } else {
            alert("Tvoj odgovor za struju i1 nije točan")
        }
        if (odgovor7b == 2) {
            alert("Točan odgovor za struju I3")
        } else {
            alert("Krivi odgovor struja I3 nije dobra")
        }
        if (odgovor7c == 1) {
            alert("Izvrsno, struja I4 je točna")
        } else {
            alert("Nažalost si krivo odgovorio struja I4 nije dobra")
        }
}
function vjezba8(){
    let odgovor8a = Number(prompt("Koliko ti iznosi napon izvora ?"))
    let odgovor8b = Number(prompt("Za struju I1 koji se rezultat dobio )"))
    let odgovor8c = Number(prompt("Tvoja vrijednost struje I3 ?"))
    let odgovor8d = Number(prompt("I tvoja vrijednsot struje I4 ?"))

        if (odgovor8a == 90 ) {
            alert("Napon izvora U je dobro izračunat")
        } else {
            alert("Negdje si pogriješio napon izvora U ne iznosi toliko")
        }
        if (odgovor8b == 3) {
            alert("Točan odgovor za struju I1")
        } else {
            alert("Krivo si odgovorio za struju I1")
        }
        if (odgovor8c == 2) {
            alert("Dobro si izračunao struju I3")
        } else {
            alert("Nažalost struja I3 nije dobra")
        }
        if (odgovor8d == 4) {
            alert("Struja I4 je dobro izračunata")
        } else {
            alert("Netočan odgovor struja I4 ne iznosi toliko")
        }
}
function vjezba9(){
    let odgovor9a = Number(prompt("Koliko iznosi struja I1 ?"))
    let odgovor9b = Number(prompt("A zatim sturja I4 ?"))
    let odgovor9c = Number(prompt("I na kraju struja I5 ?"))

        if (odgovor9a == 18) {
            alert("Za početak struja I1 je dobro izračunata")
        } else {
            alert("Krivo si počeo struja I1 nije dobra ")
        }
        if (odgovor9b == 12 ) {
            alert("Točan odgovor za struju I4")
        } else {
            alert("Nažalost kriv odgovor za struju I4")
        }
        if (odgovor9c == 4) {
            alert("Struja I5 je točna")
        } else {
            alert("Negdje imaš grešku sturja I5 nije točna")
        }
}
function vjezba10() {
    let odgovor10a = Number(prompt("Unesit svoju snagu P2 ?"))
    let odgovor10b = Number(prompt("snagu P6 ?"))
    let odgovor10c = Number(prompt("snagu P7 (u kw) ?"))
    let odgovor10d = Number(prompt("i ukupnu snagu spoja P ?"))

        if (odgovor10a == 55.6) {
            alert("Tvoja sanga P2 je točnog iznosa")
        } else {
            alert("Krivo si izračunao snagu P2")
        }
        if (odgovor10b == 766) {
            alert("Snaga P6 je točno izračunata")
        } else {
            alert("Nažalost P6 nije točna ")
        }
        if (odgovor10c == 3.6) {
            alert("Snagu P7 si točno riješio")
        } else {
            alert("Imaš grešku snaga P7 nije točna")
        }
        if (odgovor10d == 6582) {
            alert("Tvoj odgovor za ukupnu snagu P je točan")
        } else {
            alert("Tvoj odgovor za ukupnu sangu spoja je netočan")
        }
}
function vjezba11(){
    let odgovor11a = Number(prompt("Unesi svoju snagu P1 ?"))
    let odgovor11b = Number(prompt("i unesi svoju snagu P3 ?"))

        if (odgovor11a == 160 ) {
            alert("Dobro si izračunao sangu P1")
        } else {
            alert("Nažalost imaš grešku snaga P1 je netočna")
        }
        if (odgovor11b == 480) {
            alert("Točan odgovor za snagu P3")
        } else {
            alert("Krivo si odgovorio snaga P3 je netočna")
        }
}
function vjezba12(){
    let odgovor12a = Number(prompt("koliko si dobio snagu P1"))
    let odgovor12b = Number(prompt("snagu P2"))
    let odgovor12c = Number(prompt("snagu P3"))
    let odgovor12d = Number(prompt("snagu P4"))
    let odgovor12e = Number(prompt("snagu P5"))
    let odgovor12f = Number(prompt("snagu P6"))
    let odgovor12g = Number(prompt("snagu P7"))
    let odgovor12h = Number(prompt("unkupnu snagu spoja"))
       
    if (odgovor12a == 864) {
            alert("Tvoja snaga P1 je točan odgovor")
        } else {
            alert("Krivi odgovor za snagu P1")
        }
        if (odgovor12b == 864) {
            alert("Snagu P2 si dobro izračunao")
        } else {
            alert("Imaš grešku snaga P2 nije dobra")
        }
        if (odgovor12c == 216) {
            alert("Izvrsno točan odgovor za snagu P3")
        } else {
            alert("Tvoj odgovor za snagu P3 je netočan")
        }
        if (odgovor12d == 72) {
            alert("Točna je snaga P4")
        } else {
            alert("Neočna snaga P4")
        }
        if (odgovor12e == 96) {
            alert("Točan odgovor za snagu P5")
        } else {
            alert("Negdje ti se podkrala greška P5 nije točan")
        }
        if (odgovor12f == 32) {
            alert("Tvoj odgovor za P6 je točan")
        } else {
            alert("Kriv odgovor za snagu P6")
        }
        if (odgovor12g == 16) {
            alert("Vrlo dobro točan odgovor za snagu P7")
        } else {
            alert("Imaš pogrešku kriv je odgovor za snagu P7")
        }
        if (odgovor12h == 2160) {
            alert("Nice ukupna snaga spoja je točna")
        } else {
            alert("Wrong ukupna snaga spoja je netočna")
        }
}
function vjezba13(){
    let odgovor13a = Number(prompt("Unesi koliko si vreijdnost napona izvora U dobio ?"))
      
        if (odgovor13a =150) {
            alert("Točno si odgovrio na pitanje")
        } else {
            alert("Nažalost odgovor je netočan")
        }
}
function vjezba14(){
    let odgovor14a = Number(prompt("Koliku si struju izovra I izračunao ?"))
    let odgovor14b = Number(prompt("kolika je vrijednost struj I1 ?"))
    let odgovor14c = Number(prompt("Tvoja snaga P2 je ?"))

        if (odgovor14a == 9.5 ) {
            alert("Struja izvora I je dobro izračunata")
        } else {
            alert("Dao si krivi odgovor za struju I")
        }
        if (odgovor14b == 1.9) {
            alert("Točan odgovor za struju I1")
        } else {
            alert("Netočan odgovor za I1")
        }
        if (odgovor14c == 346.56) {
            alert("Tvoja snaga je točna ")
        } else {
            alert("Tvoja snaga je netočna")
        }
}
function vjezba15(){
    let vjezba15a = Number(prompt("Unesi ukupni kapacitet kruga C (u mikrofaradima)"))
        
        if (vjezba15a == 3) {
            alert("Dobro si odredio ukupni kapacitet C")
        } else {
            alert("Neuspješno si odredio kapacitet spoja C")
        }
}
function vjezba16(){
    let vjezba16a = Number(prompt("Koliki je ukupni kapacitet spoja (u mikrofaradima"))
         
        if (vjezba16a == 50) {
            alert("Uspješno si riješio ovaj zadatak")
        } else {
            alert("Nažalost nisi bio uspjesan u svom riješavanju")
        }
}
function vjezba17(){
    let vjezba17a = Number(document.getElementById("17a").value);
    let vjezba17b = Number(document.getElementById("17b").value);

        if (vjezba17a == 412.5) {
            document.getElementById("nabojq1").innerHTML = "Točan"
        } else {
            document.getElementById("nabojq1").innerHTML = "Netočan"
        }
        if (vjezba17b == 68.75) {
            document.getElementById("napon6").innerHTML = "Točan"
        } else {
            document.getElementById("napon6").innerHTML = "Netočan"
        }
}
function vjezba18(){
    let vjezba18a = Number(document.getElementById("18a").value); 
    let vjezba18b = Number(document.getElementById("18b").value);

        if (vjezba18a == 20) {
            document.getElementById("kapacitetc2").innerHTML = "Točan"
        } else {
            document.getElementById("kapacitetc2").innerHTML = "Netočan"
        }
        if (vjezba18b == 0.6) {
            document.getElementById("kapacitetc3").innerHTML = "Točan"
        } else {
            document.getElementById("kapacitetc3").innerHTML = "Netočan"
        }
}
function vjezba19(){
    let vjezba19a = Number(document.getElementById("19a").value);

        if (vjezba19a == 30) {
            document.getElementById("kapacitec1").innerHTML = "Točan"
        } else {
            document.getElementById("kapacitec1").innerHTML = "Netočan"
        }
}
function vjezba20(){
    let odgovor20a = Number(document.getElementById("20a").value);
    let odgovor20b = Number(document.getElementById("20b").value);

        if (odgovor20a == 40 ) {
            document.getElementById("kapacitetc3").innerHTML = "Točan"
        } else {
            document.getElementById("kapacitetc3").innerHTML = "Netočan"
        }
        if (odgovor20b == 30) {
            document.getElementById("kapacitetc5").innerHTML = "Točan"
        } else {
            document.getElementById("kapacitetc5").innerHTML = "Netočan"
        }
}
function vjezba21(){
    let odgovor21a = Number(document.getElementById("21a").value);
       
        if (odgovor21a == 2) {
            document.getElementById("kapacitetc4").innerHTML = "Točan"
        } else {
            document.getElementById("kapacitetc4").innerHTML = "Netočan"
        }
}
function vjezba22(){
    let odgovor22a = Number(document.getElementById("22a".value));

        if (odgovor22a == 8) {
            document.getElementById("energija").innerHTML = "Točan "
        } else {
            document.getElementById("energija").innerHTML = "Netočan"
        }
}
function vjezba23(){
    let odgovor23a = Number(document.getElementById("23a").value);
    let odgovor23b = Number(document.getElementById("23b").value);

        if (odgovor23a == 20) {
            document.getElementById("kapacitetc1").innerHTML = "Točan odgovor"
        } else {
            document.getElementById("kapacitetc1").innerHTML = "Netočan odgovor"
        }
        if (odgovor23b == 30) {
           document.getElementById("kapacitetc2").innerHTML = "Točan odgovor"
        } else {
            document.getElementById("kapacitetc2").innerHTML = "Netočan odgovor"
        }
function vjezba24(){
    let prividnasnaga = Number(document.getElementById("24a").value);
    let radnasnaga = Number(document.getElementById("24b").value);
    let jalovasnaga = Number(document.getElementById("24c").value);
    let faktorsnage = Number(document.getElementById("24d").value);

        if (prividnasnaga == 880) {
            document.getElementById("prividnasnaga").innerHTML = "Točan odgovor"
        } else {
            document.getElementById("prividnasnaga").innerHTML = "Netočan odgovor"
        }
        if (radnasnaga == 384) {
            document.getElementById("radnasnaga").innerHTML = "Točan odgovor"
        } else {
            document.getElementById("radnasnaga").innerHTML = "Netočan odgovor"
        }
        if (jalovasnaga == 792 ) {
            document.getElementById("jalovasnaga").innerHTML = "Točan odgovor"
        } else {
            document.getElementById("jalovasnaga").innerHTML = "Netočan odgovor"
        }
        if (faktorsnage == 0.436) {
            document.getElementById("faktorsnage").innerHTML = "Točan odgovor"
        } else {
            document.getElementById("faktorsnage").innerHTML = "Netočan odgovor"
        }
}
}
    
        
