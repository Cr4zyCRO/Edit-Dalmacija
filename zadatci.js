M.AutoInit();
$(".dropdown-trigger").dropdown();

const getVal=(id)=>{
    return  Math.abs(Number((document.getElementById(id).value)));
}
const rjesi=(nesto)=>{
    return nesto- nesto.toFixed(4)?nesto.toFixed(4):nesto;
}



// Laboratorijski zadatak 1
function zadatak1(){
    let ukupninapon = getVal("NaponIzvora"); 
    let otpor1= getVal("IznosOtporaR1");
    let otpor2 = getVal("IznosOtporaR2");

    var ukupniotpor = otpor1 + otpor2;
    var ukupnastruja = ukupninapon / ukupniotpor;
    var padnapona1 = ukupnastruja * otpor1;
    var padnapona2 = ukupnastruja * otpor2;

    document.getElementById("ukupniotpor").innerHTML =rjesi(ukupniotpor) + " Ω";
    document.getElementById("ukupnastruja").innerHTML = rjesi(ukupnastruja) + " A";
    document.getElementById("padnapona1").innerHTML = rjesi(padnapona1) + " V";
    document.getElementById("padnapona2").innerHTML = rjesi(padnapona2) + " V";
     
}



// Laboratorijski zadatak 2       
function zadatak2(){
    let uuk = getVal("UI2"); 
    let r1= getVal("r1");
    let r2 = getVal("r2");
    let r3 = getVal("r3");

    var rukzbroj = r1 + r2 + r3;
    var rukumnozak = r1 * r2 * r3;       
    var ruk =  rukumnozak / rukzbroj  ;
    var iuk = uuk / ruk;
    var strujar1 = uuk / r1;
    var strujar2 = uuk / r2;
    var strujar3 = uuk / r3;

    document.getElementById("ruk").innerHTML =rjesi(ruk) + " Ω";
    document.getElementById("iuk").innerHTML = rjesi(iuk) + " A";
    document.getElementById("strujar1").innerHTML = rjesi(strujar1) + "A";
    document.getElementById("strujar2").innerHTML = rjesi(strujar2) + "A";
    document.getElementById("strujar3").innerHTML = rjesi(strujar3) + "A";

}



// Laboratorijski zadatak 3
function zadatak3(){
    let uukz3 = getVal("uukz3"); 
    let r1z3= getVal("r1z3");
    let r2z3 = getVal("r2z3");
    let r3z3 = getVal("r3z3");
    let r4z3 = getVal("r4z3");

    var r12z3zbroj = r1z3 + r2z3;
    var r12z3umnozak = r1z3 * r2z3;
    var r12z3 = r12z3umnozak / r12z3zbroj;
    var r123z3zbroj = r12z3 + r3z3;
    var r123z3umnozak = r12z3 * r3z3;
    var r123z3 = r123z3umnozak / r123z3zbroj;
    var rukz3 = r123z3 + r4z3;
    var iukz3 = uukz3 / rukz3;
    var ir4z3 = iukz3;
    var ir123z3 = iukz3;
    var ur123z3 = iukz3 * r123z3;
    var ur4z3 = iukz3 * r4z3;
    var ur3z3 = ur123z3;
    var ur12z3 = ur123z3;
    var ir3z3 = ur123z3 / r3z3;
    var ir12z3 = ur123z3 / r12z3;
    var ir2z3 = ur123z3 / r2z3;
    var ir1z3 = ur123z3 / r1z3;
    
    document.getElementById("r12z3").innerHTML =rjesi(r12z3) + " Ω";
    document.getElementById("r123z3").innerHTML =rjesi(r123z3) + " Ω";
    document.getElementById("rukz3").innerHTML =rjesi(rukz3) + " Ω";
    document.getElementById("iukz3").innerHTML =rjesi(iukz3) + " A";
    document.getElementById("ir4z3").innerHTML =rjesi(ir4z3) + " A";
    document.getElementById("ir123z3").innerHTML =rjesi(ir123z3) + " A";
    document.getElementById("ur123z3").innerHTML =rjesi(ur123z3) + " V";
    document.getElementById("ur4z3").innerHTML =rjesi(ur4z3) + " V";
    document.getElementById("ur3z3").innerHTML =rjesi(ur3z3) + " V";
    document.getElementById("ur12z3").innerHTML =rjesi(ur12z3) + " V";
    document.getElementById("ur1z3").innerHTML =rjesi(ur12z3) + " V";
    document.getElementById("ur2z3").innerHTML =rjesi(ur12z3) + " V";
    document.getElementById("ir3z3").innerHTML =rjesi(ir3z3) + " A";
    document.getElementById("ir12z3").innerHTML =rjesi(ir12z3) + " A";
    document.getElementById("ir2z3").innerHTML =rjesi(ir2z3) + " A";
    document.getElementById("ir1z3").innerHTML =rjesi(ir1z3) + " A";

}



// Laboratorijski zadatak 4
function zadatak4(){
    let uukz4 = getVal("uukz4");
    let c1z4 = getVal("c1z4");
    let c2z4 = getVal("c2z4");
    let c3z4 = getVal("c3z4");

    var cukz4zbroj= c1z4 + c2z4 + c3z4;
    var cukz4umnozak=c1z4 * c2z4 * c3z4;
    var cukz4 = cukz4umnozak / cukz4zbroj;
    var qukz4 = uukz4 * cukz4;

    document.getElementById("cukz4").innerHTML = cukz4 + " F";
    document.getElementById("qukz4").innerHTML = qukz4 + " As";
    document.getElementById("q1z4").innerHTML = qukz4 + " As";
    document.getElementById("q2z4").innerHTML = qukz4 + " As";
    document.getElementById("q3z4").innerHTML = qukz4 + " As";
}



// Laboratorijski zadatak 5
function zadatak5(){
    let uukz5 = getVal("uukz5");
    let c1z5 = getVal("c1z5");
    let c2z5 = getVal("c2z5");
    let c3z5 = getVal("c3z5");

    var cukz5 = c1z5+c2z5+c3z5 ;
    var qukz5 = uukz5 * cukz5;
    var q1z5 = uukz5 * c1z5;
    var q2z5 = uukz5 * c2z5;
    var q3z5 = uukz5 * c3z5;

    document.getElementById("cukz5").innerHTML = cukz5 + " F";
    document.getElementById("qukz5").innerHTML = qukz5 + " As";
    document.getElementById("q1z5").innerHTML = q1z5  + " As";
    document.getElementById("q2z5").innerHTML = q2z5  + " As";
    document.getElementById("q3z5").innerHTML = q3z5  + " As";

}



// Laboratorijski zadatak 6
function zadatak6(){
    let uukz6 = getVal("uukz6");
    let fz6 = getVal("fz6");
    let c1z6 = getVal("c1z6");
    let c2z6 = getVal("c2z6");
    let c3z6 = getVal("c3z6");
    let c4z6 = getVal("c4z6");
    let c5z6 = getVal("c5z6");
    let c6z6 = getVal("c6z6");

    var cukz6umnozak = c1z6 * c2z6 * c3z6 * c4z6 * c5z6 * c6z6;
    var cukz6zbroj = c1z6 * c2z6 * c3z6 * c4z6 * c5z6 * c6z6;
    var cukz6 = cukz6umnozak / cukz6zbroj;
    var oz6 = 2 * Math.PI * fz6;
    var xukz6 = (1 / oz6 * cukz6);
    var x1z6 = (1 / (oz6 * c1z6));
    var x2z6 = (1 / (oz6 * c2z6));
    var x3z6 = (1 / (oz6 * c3z6));
    var x4z6 = (1 / (oz6 * c4z6));
    var x5z6 = (1 / (oz6 * c5z6));
    var x6z6 = (1 / (oz6 * c6z6));
    var iukz6 = uukz6 / xukz6;

    document.getElementById("cukz6").innerHTML = cukz6 + " F";
    document.getElementById("xukz6").innerHTML = rjesi(xukz6) + " Ω";
    document.getElementById("x1z6").innerHTML = rjesi(x1z6) + " Ω";
    document.getElementById("x2z6").innerHTML = rjesi(x2z6) + " Ω";
    document.getElementById("x3z6").innerHTML = rjesi(x3z6) + " Ω";
    document.getElementById("x4z6").innerHTML = rjesi(x4z6) + " Ω";
    document.getElementById("x5z6").innerHTML = rjesi(x5z6) + " Ω";
    document.getElementById("x6z6").innerHTML = rjesi(x6z6) + " Ω";
    document.getElementById("iukz6").innerHTML = rjesi(iukz6) + " A";

}



// Laboratorijski zadatak 7
function zadatak7(){
    let uukz7 = getVal("uukz7");
    let pvz7 = getVal("pvz7");
    let l1z7 = getVal("l1z7");
    let l2z7 = getVal("l2z7");

    var lukz7 = l1z7 + l2z7;
    var iukz7 = ((uukz7 * pvz7) / lukz7 );

    document.getElementById("lukz7").innerHTML = lukz7 + " mH";
    document.getElementById("iukz7").innerHTML = rjesi(iukz7) + " A";
}



// Laboratorijski zadatak 8
function zadatak8(){
    let uukz8 = getVal("uukz8");
    let pvz8 = getVal("pvz8");
    let l1z8 = getVal("l1z8");
    let l2z8 = getVal("l2z8");
    let l3z8 = getVal("l3z8");

    var lukz8umnozak = l1z8*l2z8*l3z8 ;
    var lukz8zbroj = l1z8+l2z8+l3z8;
    var lukz8 = lukz8umnozak / lukz8zbroj;
    var iukz8 = ((uukz8 * pvz8) / lukz8 );

    document.getElementById("lukz8").innerHTML = lukz8 + " mH";
    document.getElementById("iukz8").innerHTML = rjesi(iukz8) + " A";
}



// Laboratorijski zadatak 9
function zadatak9(){
    let uukz9 = getVal("uukz9");
    let fz9 = getVal("fz9");
    let l1z9 = getVal("l1z9");
    let l2z9 = getVal("l2z9");
    let l3z9 = getVal("l3z9");
    let l4z9 = getVal("l4z9");
    let l5z9 = getVal("l5z9");

    var l123z9umnozak = l1z9*l2z9*l3z9 ;
    var l123z9zbroj = l1z9+l2z9+l3z9;
    var l123z9 = l123z9umnozak / l123z9zbroj;
    var l45z9umnozak = l4z9*l5z9;
    var l45z9zbroj = l4z9+l5z9;
    var l45z9 = l45z9umnozak/l45z9zbroj;
    var lukz9 = l123z9 + l45z9;
    var oz9 = 2 * Math.PI * fz9;
    var xukz9 = (oz9 * lukz9);
    var x1z9 = (oz9 * l1z9);
    var x2z9 = (oz9 * l2z9);
    var x3z9 = (oz9 * l3z9);
    var x4z9 = (oz9 * l4z9);
    var x5z9 = (oz9 * l5z9);
    var iukz9 = uukz9 / xukz9 * oz9;

    document.getElementById("lukz9").innerHTML = rjesi(lukz9) + " mH";
    document.getElementById("xukz9").innerHTML = rjesi(xukz9) + " Ω";
    document.getElementById("x1z9").innerHTML = rjesi(x1z9) + " Ω";
    document.getElementById("x2z9").innerHTML = rjesi(x2z9) + " Ω";
    document.getElementById("x3z9").innerHTML = rjesi(x3z9) + " Ω";
    document.getElementById("x4z9").innerHTML = rjesi(x4z9) + " Ω";
    document.getElementById("x5z9").innerHTML = rjesi(x5z9) + " Ω";
    document.getElementById("iukz9").innerHTML = rjesi(iukz9) + " A";

}



// Laboratorijski zadatak 10
function zadatak10(){
    let uukz10 = getVal("uukz10");
    let x1z10 = getVal("x1z10");
    let r1z10 = getVal("r1z10");

    
    var impz10 = Math.sqrt(Math.pow(r1z10, 2) + Math.pow(x1z10, 2));
    var iukz10 = uukz10 / impz10;
    var rsz10 = Math.pow(uukz10, 2) / r1z10;
    var jsz10 = Math.pow(uukz10, 2) / x1z10;
    var psz10 = Math.pow(uukz10, 2) / impz10;

    document.getElementById("iukz10").innerHTML = rjesi(iukz10) + " A";
    document.getElementById("impz10").innerHTML = rjesi(impz10) + " Ω";
    document.getElementById("rsz10").innerHTML = rjesi(rsz10) + " W";
    document.getElementById("jsz10").innerHTML = rjesi(jsz10) + " VAr";
    document.getElementById("psz10").innerHTML = rjesi(psz10) + " VA";
    
}



// Laboratorijski zadatak 11
function zadatak11(){
    let uukz11 = getVal("uukz11");
    let x1z11 = getVal("x1z11");
    let r1z11= getVal("r1z11");

    var b1z11 = 1 / x1z11 ;
    var g1z11 = 1 / r1z11;
    var pvz11 = Math.sqrt(Math.pow(b1z11, 2) + Math.pow(g1z11, 2));
    var potz11 =1 / pvz11;
    var iukz11 = uukz11 / potz11;
    var rsz11 = Math.pow(uukz11, 2) / r1z11;
    var jsz11 = Math.pow(uukz11, 2) / x1z11;
    var psz11 = Math.pow(uukz11, 2) / potz11;

    document.getElementById("iukz11").innerHTML = rjesi(iukz11) + " A";
    document.getElementById("potz11").innerHTML = rjesi(potz11) + " Ω";
    document.getElementById("pvz11").innerHTML = rjesi(pvz11) + " S";
    document.getElementById("g1z11").innerHTML = rjesi(g1z11) + " S";
    document.getElementById("b1z11").innerHTML = rjesi(b1z11) + " S";
    document.getElementById("rsz11").innerHTML = rjesi(rsz11) + " W";
    document.getElementById("jsz11").innerHTML = rjesi(jsz11) + " VAr";
    document.getElementById("psz11").innerHTML = rjesi(psz11) + " VA";

}



// Laboratorijski zadatak 12
function zadatak12(){
    let uukz12 = getVal("uukz12");
    let x1z12 = getVal("x1z12");
    let r1z12= getVal("r1z12");

    var b1z12 = 1 / x1z12 ;
    var g1z12 = 1 / r1z12;
    var pvz12 = Math.sqrt(Math.pow(b1z12, 2) + Math.pow(g1z12, 2));
    var potz12 =1 / pvz12;
    var iukz12 = uukz12 / potz12;
    var rsz12 = Math.pow(uukz12, 2) / r1z12;
    var jsz12 = Math.pow(uukz12, 2) / x1z12;
    var psz12 = Math.pow(uukz12, 2) / potz12;

    document.getElementById("iukz12").innerHTML = rjesi(iukz12) + " A";
    document.getElementById("potz12").innerHTML = rjesi(potz12) + " Ω";
    document.getElementById("pvz12").innerHTML = rjesi(pvz12) + " S";
    document.getElementById("g1z12").innerHTML = rjesi(g1z12) + " S";
    document.getElementById("b1z12").innerHTML = rjesi(b1z12) + " S";
    document.getElementById("rsz12").innerHTML = rjesi(rsz12) + " W";
    document.getElementById("jsz12").innerHTML = rjesi(jsz12) + " VAr";
    document.getElementById("psz12").innerHTML = rjesi(psz12) + " VA";

}



// Laboratorijski zadatak 13
function zadatak13(){
    let uukz13 = getVal("uukz13");
    let x1z13 = getVal("x1z13");
    let r1z13= getVal("r1z13");

    var potz13 = Math.sqrt(Math.pow(x1z13, 2) + Math.pow(r1z13, 2));
    var iukz13 = uukz13 / potz13;
    var rsz13 = Math.pow(uukz13, 2) / r1z13;
    var jsz13 = Math.pow(uukz13, 2) / x1z13;
    var psz13 = Math.pow(uukz13, 2) / potz13;

    document.getElementById("iukz13").innerHTML = rjesi(iukz13) + " A";
    document.getElementById("potz13").innerHTML = rjesi(potz13) + " Ω";
    document.getElementById("rsz13").innerHTML = rjesi(rsz13) + " W";
    document.getElementById("jsz13").innerHTML = rjesi(jsz13) + " VAr";
    document.getElementById("psz13").innerHTML = rjesi(psz13) + " VA";

}



// Laboratorijski zadatak 14
function zadatak14(){
    let uukz14 = getVal("uukz14");
    let x1z14 = getVal("x1z14");
    let x2z14 = getVal("x2z14");
    let r1z14= getVal("r1z14");

    var q1z14 = Math.pow(uukz14, 2) / x1z14;
    var q2z14 = Math.pow(uukz14, 2) / x2z14;
    var x12z14 = x2z14 - x1z14;
    var potz14 = Math.sqrt(Math.pow((x2z14 - x1z14), 2) + Math.pow(r1z14, 2));
    var iukz14 = uukz14 / potz14;
    var rsz14 = Math.pow(iukz14, 2) * r1z14;
    var jsz14 = Math.pow(iukz14, 2) * (x2z14 - x1z14);
    var psz14 = Math.pow(iukz14, 2) / potz14;
    var urz14 = iukz14 * r1z14;
    var ucz14 = iukz14 * x1z14;
    var ulz14 = iukz14 * x2z14;

    document.getElementById("iukz14").innerHTML = rjesi(iukz14) + " A";
    document.getElementById("potz14").innerHTML = rjesi(potz14) + " Ω";
    document.getElementById("x12z14").innerHTML = rjesi(x12z14) + " Ω";
    document.getElementById("rsz14").innerHTML = rjesi(rsz14) + " W";
    document.getElementById("jsz14").innerHTML = rjesi(jsz14) + " VAr";
    document.getElementById("psz14").innerHTML = rjesi(psz14) + " VA";
    document.getElementById("q1z14").innerHTML = rjesi(q1z14) + " VAr";
    document.getElementById("q2z14").innerHTML = rjesi(q2z14) + " VAr";
    document.getElementById("urz14").innerHTML = rjesi(urz14) + " V";
    document.getElementById("ucz14").innerHTML = rjesi(ucz14) + " V";
    document.getElementById("ulz14").innerHTML = rjesi(ulz14) + " V";

}



// Laboratorijski zadatak 15
function zadatak15(){
    let uukz15 = getVal("uukz15");
    let x1z15 = getVal("x1z15");
    let x2z15 = getVal("x2z15");
    let r1z15= getVal("r1z15");

    
    var b1z15 = 1 / x1z15;
    var b2z15 = 1 / x2z15;
    var g1z15 = 1 / r1z15;
    var pvz15 = Math.sqrt(Math.pow(g1z15, 2) + Math.pow((b1z15 - b2z15), 2));
    var q1z15 = Math.pow(uukz15, 2) * b1z15;
    var q2z15 = Math.pow(uukz15, 2) * b2z15;
    var rsz15 = Math.pow(uukz15, 2) * g1z15;
    var jsz15 = q2z15 -q1z15 ;
    var psz15 = Math.pow(uukz15, 2) *pvz15;
    var potz15 = 1 /pvz15;
    var iukz15 = uukz15 / potz15;

    document.getElementById("iukz15").innerHTML = rjesi(iukz15) + " A";
    document.getElementById("potz15").innerHTML = rjesi(potz15) + " Ω";
    document.getElementById("pvz15").innerHTML = rjesi(pvz15) + " S";
    document.getElementById("g1z15").innerHTML = rjesi(g1z15) + " S";
    document.getElementById("b1z15").innerHTML = rjesi(b1z15) + " S";
    document.getElementById("b2z15").innerHTML = rjesi(b2z15) + " S";
    document.getElementById("rsz15").innerHTML = rjesi(rsz15) + " W";
    document.getElementById("jsz15").innerHTML = rjesi(jsz15) + " VAr";
    document.getElementById("psz15").innerHTML = rjesi(psz15) + " VA";
    document.getElementById("q1z15").innerHTML = rjesi(q1z15) + " VAr";
    document.getElementById("q2z15").innerHTML = rjesi(q2z15) + " VAr";

}