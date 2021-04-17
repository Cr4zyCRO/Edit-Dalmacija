M.AutoInit();
$(".dropdown-trigger").dropdown();

function vjezba1(){
    let jedanruk = Number(document.getElementById("1vj-ruk").value);

    if (jedanruk ==8) {
        document.getElementById("1-ruk").innerHTML = "Točan"
    } else {
        document.getElementById("1-ruk").innerHTML = "Netočan"
    }
}
function vjezba2(){
    let dvaruk = Number(document.getElementById("2vj-ruk").value);

    if (dvaruk == 72) {
        document.getElementById("2-ruk").innerHTML = "Točan"
    } else {
        document.getElementById("2-ruk").innerHTML = "Netočan"
    }
}
function vjezba3(){
    let triruk = Number(document.getElementById("3vj-ruk").value);

    if (triruk == 12.4) {
        document.getElementById("3-ruk").innerHTML = "Točan"
    } else {
        document.getElementById("3-ruk").innerHTML = "Netočan"
    }
}
function vjezba4(){
    let cetvrtiizvor = Number(document.getElementById("4vj-iz").value);
    let cetvrtisturja1 = Number(document.getElementById("4vj-st1").value);
    let cetvrtisturja3 = Number(document.getElementById("4vj-st3").value);
    let cetvrtistruja5 = Number(document.getElementById("4vj-st5").value);

    if (cetvrtiizvor == 32.08 ) {
        document.getElementById("4-st").innerHTML = "Točna"
    } else {
        document.getElementById("4-st").innerHTML = "Netočna"
    }
    if (cetvrtisturja1 == 16.04) {
        document.getElementById("4-st1").innerHTML = "Točna"
    } else {
        document.getElementById("4-st1").innerHTML = "Netočna"
    }
    if (cetvrtisturja3 == 4.58) {
        document.getElementById("4-st3").innerHTML = "Točna"
    } else {
        document.getElementById("4-st3").innerHTML = "Netočna"
    }
    if (cetvrtistruja5 == 13.75) {
        document.getElementById("4-st5").innerHTML = "Točna"
    } else {
        document.getElementById("4-st5").innerHTML = "Netočna"
    }
}
function vjezba5(){
    let petstruja1 = Number(document.getElementById("5vj-st1").value);
    let petstruja2 = Number(document.getElementById("5vj-st2").value);
    let petstruja4 = Number(document.getElementById("5vj-st4").value);

    if (petstruja1 == 3) {
        document.getElementById("5-st1").innerHTML = "Točna"
    } else {
        document.getElementById("5-st1").innerHTML = "Netočna"
    }
    if (petstruja2 == 1) {
        document.getElementById("5-st2").innerHTML = "Točna"
    } else {
        document.getElementById("5-st2").innerHTML = "Netočna"
    }
    if (petstruja4 == 1.2) {
        document.getElementById("5-st4").innerHTML = "Točna"
    } else {
        document.getElementById("5-st4").innerHTML = "Netočna"
    }
}
function vjezba6(){
    let seststruja1 = Number(document.getElementById("6vj-st1").value);
    let seststruja2 = Number(document.getElementById("6vj-st2").value);
    let seststruja3 = Number(document.getElementById("6vj-st3").value);
    let seststruja4 = Number(document.getElementById("6vj-st4").value);

    if (seststruja1 == 0.09) {
        document.getElementById("6-st1").innerHTML = "Točna"
    } else {
        document.getElementById("6-st1").innerHTML = "Netočna"
    }
    if (seststruja2 == 0.03) {
        document.getElementById("6-st2").innerHTML = "Točna"
    } else {
        document.getElementById("6-st2").innerHTML = "Netočna"
    }
    if (seststruja3 == 0.072) {
        document.getElementById("6-st3").innerHTML = "Točna"
    } else {
        document.getElementById("6-st3").innerHTML = "Netočna"
    }
    if (seststruja4 == 0.018) {
        document.getElementById("6-st4").innerHTML = "Točna"
    } else {
        document.getElementById("6-st4").innerHTML = "Netočna"
    }
}
function vjezba7(){
    let sedanstruja1 = Number(document.getElementById("7vj-st1").value);
    let sedanstruja3 = Number(document.getElementById("7vj-st3").value);
    let sedanstruja4 = Number(document.getElementById("7vj-st4").value);

    if (sedanstruja1 == 1.5) {
        document.getElementById("7-st1").innerHTML = "Točna"
    } else {
        document.getElementById("7-st1").innerHTML = "Netočna"
    }
    if (sedanstruja3 == 2) {
        document.getElementById("7-st3").innerHTML = "Točna"
    } else {
        document.getElementById("7-st3").innerHTML = "Netočna"
    }
    if (sedanstruja4 == 1) {
        document.getElementById("7-st4").innerHTML = "Točna"
    } else {
        document.getElementById("7-st4").innerHTML = "Netočna"
    }
}
function vjezba8(){
    let osannaponiz = Number(document.getElementById("8vj-niz").value);
    let osanstruja1 = Number(document.getElementById("8vj-st1").value);
    let osanstruja3 = Number(document.getElementById("8vj-st3").value);
    let osanstruja4 = Number(document.getElementById("8vj-st4").value);

    if ( osannaponiz == 90) {
        document.getElementById("8-niz").innerHTML = "Točan"
    } else {
        document.getElementById("8-niz").innerHTML = "Netočan"
    }
    if (osanstruja1 == 3) {
        document.getElementById("8-st1").innerHTML = "Točna"
    } else {
        document.getElementById("8-st1").innerHTML = "Netočna"
    }
    if (osanstruja3 == 2) {
        document.getElementById("8-st3").innerHTML = "Točna"
    } else {
        document.getElementById("8-st3").innerHTML = "Netočna"
    }
    if (osanstruja4 == 4) {
        document.getElementById("8-st4").innerHTML = "Točna"
    } else {
        document.getElementById("8-st4").innerHTML = "Netočna"
    }
}
function vjezba9(){
    let devetstruja1 = Number(document.getElementById("9vj-st1").value);
    let devetstruja4 = Number(document.getElementById("9vj-st4").value);
    let devetstruja5 = Number(document.getElementById("9vj-st5").value);

    if (devetstruja1 == 18) {
        document.getElementById("9-st1").innerHTML = "Točna"
    } else {
        document.getElementById("9-st1").innerHTML = "Netočna"
    }
    if (devetstruja4 == 12) {
        document.getElementById("9-st4").innerHTML = "Točna"   
    } else {
        document.getElementById("9-st4").innerHTML = "Netočna"
    }
    if (devetstruja5 == 4) {
        document.getElementById("9-st5").innerHTML = "Točna"
    } else {
        document.getElementById("9-st5").innerHTML = "Netočna"
    }
}
function vjezba10(){
    let desetsnagap2 = Number(document.getElementById("10vj-p2").value);
    let desetsnagap6 = Number(document.getElementById("10vj-p6").value);
    let desetsnagap7 = Number(document.getElementById("10vj-p7").value);
    let desetsnagauk = Number(document.getElementById("10vj-puk").value);

    if (desetsnagap2 == 55.6) {
        document.getElementById("10-p2").innerHTML = "Točna"
    } else {
        document.getElementById("10-p2").innerHTML = "Netočna"
    }
    if (desetsnagap6 == 766) {
        document.getElementById("10-p6").innerHTML = "Točna"
    } else {
        document.getElementById("10-p6").innerHTML = "Netočna"
    }
    if (desetsnagap7 == 3.6) {
        document.getElementById("10-p7").innerHTML = "Točna"
    } else {
        document.getElementById("10-p7").innerHTML = "Netočna"
    }
    if (desetsnagauk == 6582) {
        document.getElementById("10-puk").innerHTML = "Točna"
    } else {
        document.getElementById("10-puk").innerHTML = "Netočna"
    }
}
function vjezba11(){
    let jedanestsnagap1 = Number(document.getElementById("11vj-p1").value);
    let jedanestsnagap3 = Number(document.getElementById("11vj-p3").value);

    if (jedanestsnagap1 == 160) {
        document.getElementById("11-p1").innerHTML = "Točna"
    } else {
        document.getElementById("11-p1").innerHTML = "Netočna"
    }
    if (jedanestsnagap3 == 480) {
        document.getElementById("11-p3").innerHTML = "Točna"
    } else {
        document.getElementById("11-p3").innerHTML = "Netočna"
    }
}
function vjezba12(){
    let dvanestsnaga1 = Number(document.getElementById("12vj-p1").value);
    let dvanestsnaga2 = Number(document.getElementById("12vj-p2").value);
    let dvanestsnaga3 = Number(document.getElementById("12vj-p3").value);
    let dvanestsnaga4 = Number(document.getElementById("12vj-p4").value);
    let dvanestsnaga5 = Number(document.getElementById("12vj-p5").value);
    let dvanestsnaga6 = Number(document.getElementById("12vj-p6").value);
    let dvanestsnaga7 = Number(document.getElementById("12vj-p7").value);
    let dvanestsnagau = Number(document.getElementById("12vj-puk").value);

    if (dvanestsnaga1 == 864) {
        document.getElementById("12-p1").innerHTML = "Točna"
    } else {
        document.getElementById("12-p1").innerHTML = "Netočna"
    }
    if (dvanestsnaga2 == 864) {
        document.getElementById("12-p2").innerHTML = "Točna"
    } else {
        document.getElementById("12-p2").innerHTML = "Netočna"
    }
    if (dvanestsnaga3 == 216) {
        document.getElementById("12-p3").innerHTML = "Točna"
    } else {
        document.getElementById("12-p3").innerHTML = "Netočna"
    }
    if (dvanestsnaga4 == 72) {
        document.getElementById("12-p4").innerHTML = "Točna"
    } else {
        document.getElementById("12-p4").innerHTML = "Netočna"
    }
    if (dvanestsnaga5 == 96) {
        document.getElementById("12-p5").innerHTML = "Točna"
    } else {
        document.getElementById("12-p5").innerHTML = "Netočna"
    }
    if (dvanestsnaga7 == 32) {
        document.getElementById("12-61").innerHTML = "Točna"
    } else {
        document.getElementById("12-p6").innerHTML = "Netočna"
    }
    if (dvanestsnaga7 == 16) {
        document.getElementById("12-p7").innerHTML = "Točna"
    } else {
        document.getElementById("12-p7").innerHTML = "Netočna"
    }
    if (dvanestsnagau == 2160) {
        document.getElementById("12-puk").innerHTML = "Točna"
    } else {
        document.getElementById("12-puk").innerHTML = "Netočna"
    }
}
function vjezba13(){
    let trinestnaponu = Number(document.getElementById("13vj-uiz").value);

    if (trinestnaponu == 150) {
        document.getElementById("13-uizv").innerHTML = "Točan"
    } else {
        document.getElementById("13-uizv").innerHTML = "Netočan"
    }

}
function vjezba14(){
    let cetrneststrujaizv = Number(document.getElementById("14vj-sti").value);
    let certneststrujai1 = Number(document.getElementById("14vj-st1").value);
    let certrnestsnagap2 = Number(document.getElementById("14vj-p2").value);

        if (cetrneststrujaizv == 9.5) {
            document.getElementById("14-sti").innerHTML = "Točna"
        } else {
            document.getElementById("14-sti").innerHTML = "Netočna"
        }
        if (certneststrujai1 == 1.9) {
            document.getElementById("14-st1").innerHTML = "Točna"
        } else {
            document.getElementById("14-st1").innerHTML = "Netočna"
        }
        if (certrnestsnagap2 == 346.56) {
            document.getElementById("14-p2").innerHTML = "Točna"
        } else {
            document.getElementById("14-p2").innerHTML = "Netočna"
        }
}
function vjezba15(){
    let petnestkapacitetuk = Number(document.getElementById("15vj-cuk").value);

    if (petnestkapacitetuk == 3) {
        document.getElementById("15-cuk").innerHTML = "Točan"
    } else {
        document.getElementById("15-cuk").innerHTML = "Netočan"
    }
}
function vjezba16(){
    let sesnestkapacitetuk = Number(document.getElementById("16vj-cuk").value);

    if (sesnestkapacitetuk == 50) {
        document.getElementById("16-cuk").innerHTML = "Točan"
    } else {
        document.getElementById("16-cuk").innerHTML = "Netočan"
    }
}
function vjezba17(){
    let sedamnestnabojq4 = Number(document.getElementById("17vj-q4").value);
    let sedamnestnaponu6 = Number(document.getElementById("17vj-u6").value);

    if (sedamnestnabojq4 == 412.5) {
        document.getElementById("17-q4").innerHTML = "Točan"
    } else {
        document.getElementById("17-q4").innerHTML = "Netočan"
    }
    if (sedamnestnaponu6 == 68.75) {
        document.getElementById("17-u6").innerHTML = "Točan"
    } else {
        document.getElementById("17-u6").innerHTML = "Netočan"
    }
}
function vjezba18(){
    let osamnestkapacitetc2 = Number(document.getElementById("18vj-c2").value);
    let osamnestkapacitetc3 = Number(document.getElementById("18vj-c3").value);

     if (osamnestkapacitetc2 == 20 ) {
        document.getElementById("18-c2").innerHTML = "Točan"
     } else {
        document.getElementById("18-c2").innerHTML = "Netočan"
     }
     if (osamnestkapacitetc3 == 0.6) {
         document.getElementById("18-c3").innerHTML =" Točan"
     } else {
         document.getElementById("18-c3").innerHTML = "Netočan"
     }
}
function vjezba19(){
    let devetnestkapacitetc1 = Number(document.getElementById("19vj-c1").value);

    if (devetnestkapacitetc1  == 30) {
        document.getElementById("19-c1").innerHTML = "Točan"
    } else {
        document.getElementById("19-c1").innerHTML = "Netočan"
    }
}
function vjezba20(){
    let dvadesetkapacitetc3 = Number(document.getElementById("20vj-c3").value);
    let dvadesetstapacitetc5 = Number(document.getElementById("20vj-c5").value);

    if (dvadesetkapacitetc3 == 30) {
        document.getElementById("20-c3").innerHTML = "Točan"
    } else {
        document.getElementById("20-c3").innerHTML = "Netočan"
    }
    if (dvadesetstapacitetc5 == 40) {
        document.getElementById("20-c5").innerHTML = "Točan"
    } else {
        document.getElementById("20-c5").innerHTML = "Netočan"
    }
}
function vjezba21(){
    let dvadesetjedandkapacitetc4 = Number(document.getElementById("21vj-c4").value);

    if (dvadesetjedandkapacitetc4  == 2) {
        document.getElementById("21-c4").innerHTML = "Točan"
    } else {
        document.getElementById("21-c4").innerHTML = "Netočan"
    }
}
function vjezba22(){
    let dvadestedvaa2 = Number(document.getElementById("22-a2").value);

    if (dvadestedvaa2 == 8 ) {
        document.getElementById("22-a2").innerHTML = "Točana"
    } else {
        document.getElementById("22-a2").innerHTML = "Netočna"
    }
}
function vjezba23(){
    let dvadesettric1 = Number(document.getElementById("23vj-c1").value);
    let dvadesettric2 = Number(document.getElementById("23vj-c2").value);

    if (dvadesettric1 == 20) {
        document.getElementById("23-c1").innerHTML = "Točan"
    } else {
        document.getElementById("23-c1").innerHTML = "Netočan"
    }
    if (dvadesettric2 == 30) {
        document.getElementById("23-c2").innerHTML = "Točan"
    } else {
        document.getElementById("23-c2").innerHTML = "Netočan"
    }
}
function vjezba24(){
    let dvddesetcetris = Number(document.getElementById("24vj-s").value);
    let dvadesetcetrip = Number(document.getElementById("24vj-p").value);
    let dvadesetcetriq = Number(document.getElementById("24vj-q").value);
    let dvadesetcetrifa = Number(document.getElementById("24vj-fa").value);

    if (dvddesetcetris == 880) {
        document.getElementById("24-s").innerHTML ="Točna"
    } else {
        document.getElementById("24-s").innerHTML = "Netočna"
    }
    if (dvadesetcetrip == 384) {
        document.getElementById("24-p").innerHTML = "Točna"
    } else {
        document.getElementById("24-p").innerHTML = "Netočna"
    }
    if (dvadesetcetriq == 792) {
        document.getElementById("24-q").innerHTML = "Točna"
    } else {
        document.getElementById("24-q").innerHTML = "Netočna"
    }
    if (dvadesetcetrifa == 0.436) {
        document.getElementById("24-fa").innerHTML = "Točna"
    } else {
        document.getElementById("24-fa").innerHTML = "Netočna"
    }
}
function vjezba25(){
    let dvadesetpetu = Number(document.getElementById("25vj-u").value);
    let dvadesetpetq = Number(document.getElementById("25vj-q").value);

    if (dvadesetpetu == 151) {
        document.getElementById("25-u").innerHTML = "Točan"
    } else {
        document.getElementById("25-u").innerHTML = "Netočan"
    }
    if (dvadesetpetq == 37.75) {
        document.getElementById("25-q").innerHTML = "Točan"
    } else {
        document.getElementById("25-q").innerHTML = "Netočna"
    }
}
function vjezba26(){
    let dvadesetsestnaponl = Number(document.getElementById("26vj-u").value);
    let dvadesetsestinduktivitetl = Number(document.getElementById("26vj-l").value);

    if (dvadesetsestnaponl == 190) {
        document.getElementById("26-u").innerHTML = "Točan"
    } else {
        document.getElementById("26-u").innerHTML = "Netočan"
    }
    if (dvadesetsestinduktivitetl == 3)  {
        document.getElementById("26-l").innerHTML = "Točan"
    } else {
        document.getElementById("26-l").innerHTML = "Netočan"
    }
}
function vjezba27(){
    let dvadesetsedanotporz = Number(document.getElementById("27vj-z").value);
    let dvadesetsedanstruja1 = Number(document.getElementById("27vj-st").value);

    if (dvadesetsedanotporz == 34.5) {
        document.getElementById("27-z").innerHTML = "Točna"
    } else {
        document.getElementById("27-z").innerHTML = "Netočna"
    }
    if (dvadesetsedanstruja1 == 6.38) {
        document.getElementById("27-st").innerHTML = "Točna"
    } else {
        document.getElementById("27-st").innerHTML = "Netočna"
    }
}
function vjezba28(){
    let dvadesetosanstruja = Number(document.getElementById("28vj-st").value);
    let dvadesetosannaponr = Number(document.getElementById("28vj-ur").value);
    let dvadesetosannaponl = Number(document.getElementById("28vj-ul").value);
    let dvadesetosannaponc = Number(document.getElementById("28vj-uc").value);

    if (dvadesetosanstruja == 7.1) {
        document.getElementById("28-st").innerHTML = "Točna"
    } else {
        document.getElementById("28-st").innerHTML = "Netočna"
    }
    if (dvadesetosannaponr == 156) {
        document.getElementById("28-ur").innerHTML = "Točan"
    } else {
        document.getElementById("28-ur").innerHTML = "Netočan"
    }
    if (dvadesetosannaponl ==639) {
        document.getElementById("28-ul").innerHTML = "Točan"
    } else {
        document.getElementById("28-ul").innerHTML = "Netočan"
    }
    if (dvadesetosannaponc == 483) {
        document.getElementById("28-uc").innerHTML = "Točan"
    } else {
        document.getElementById("28-uc").innerHTML = "Netočan"
    }
}
