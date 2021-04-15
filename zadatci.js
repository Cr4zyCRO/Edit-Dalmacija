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
    document.getElementById("ukupniotpor").innerHTML =rjesi(ukupniotpor) + " Ω";
    var ukupnastruja = ukupninapon / ukupniotpor;
    document.getElementById("ukupnastruja").innerHTML = rjesi(ukupnastruja) + " A";
    var padnapona1 = ukupnastruja * otpor1;
    document.getElementById("padnapona1").innerHTML = rjesi(padnapona1) + " V";
    var padnapona2 = ukupnastruja * otpor2;
    document.getElementById("padnapona2").innerHTML = rjesi(padnapona2) + " V";
            
    console.log (ukupnastruja);
    console.log (otpor1);
    console.log (otpor2);
    console.log (ukupninapon);
    console.log (padnapona1);
    console.log (padnapona2);       
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
    document.getElementById("ruk").innerHTML =rjesi(ruk) + " Ω";
    var iuk = uuk / ruk;
    document.getElementById("iuk").innerHTML = rjesi(iuk) + " A";
    var strujar1 = uuk / r1;
    document.getElementById("strujar1").innerHTML = rjesi(strujar1) + "A";
    var strujar2 = uuk / r2;
    document.getElementById("strujar2").innerHTML = rjesi(strujar2) + "A";
    var strujar3 = uuk / r3;
    document.getElementById("strujar3").innerHTML = rjesi(strujar3) + "A";

    console.log (uuk);
    console.log (r1);
    console.log (r2);
    console.log (r3);
    console.log (ruk);
    console.log (iuk);
    console.log (strujar1); 
    console.log (strujar2); 
    console.log (strujar3); 

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
    document.getElementById("r12z3").innerHTML =rjesi(r12z3) + " Ω";
    var r123z3zbroj = r12z3 + r3z3;
    var r123z3umnozak = r12z3 * r3z3;
    var r123z3 = r123z3umnozak / r123z3zbroj;
    document.getElementById("r123z3").innerHTML =rjesi(r123z3) + " Ω";
    var rukz3 = r123z3 + r4z3;
    document.getElementById("rukz3").innerHTML =rjesi(rukz3) + " Ω";

    var iukz3 = uukz3 / rukz3;
    document.getElementById("iukz3").innerHTML =rjesi(iukz3) + " A";
    var ir4z3 = iukz3;
    document.getElementById("ir4z3").innerHTML =rjesi(ir4z3) + " A";
    var ir123z3 = iukz3;
    document.getElementById("ir123z3").innerHTML =rjesi(ir123z3) + " A";

    var ur123z3 = iukz3 * r123z3;
    document.getElementById("ur123z3").innerHTML =rjesi(ur123z3) + " V";
    var ur4z3 = iukz3 * r4z3;
    document.getElementById("ur4z3").innerHTML =rjesi(ur4z3) + " V";
    var ur3z3 = ur123z3;
    document.getElementById("ur3z3").innerHTML =rjesi(ur3z3) + " V";
    var ur12z3 = ur123z3;
    document.getElementById("ur12z3").innerHTML =rjesi(ur12z3) + " V";
    document.getElementById("ur1z3").innerHTML =rjesi(ur12z3) + " V";
    document.getElementById("ur2z3").innerHTML =rjesi(ur12z3) + " V";

    var ir3z3 = ur123z3 / r3z3;
    document.getElementById("ir3z3").innerHTML =rjesi(ir3z3) + " A";
    var ir12z3 = ur123z3 / r12z3;
    document.getElementById("ir12z3").innerHTML =rjesi(ir12z3) + " A";
    var ir2z3 = ur123z3 / r2z3;
    document.getElementById("ir2z3").innerHTML =rjesi(ir2z3) + " A";
    var ir1z3 = ur123z3 / r1z3;
    document.getElementById("ir1z3").innerHTML =rjesi(ir1z3) + " A";
    
    console.log (uukz3);
    console.log (r1z3);
    console.log (r2z3);
    console.log (r3z3);
    console.log (r4z3);
    console.log (r12z3);
    console.log (r123z3);
    console.log (rukz3);
    console.log (iukz3);
    console.log (ir4z3);
    console.log (ir123z3);
    console.log (ur4z3);
    console.log (ur3z3);
    console.log (ur12z3);
    console.log (ir3z3);
    console.log (ir12z3);
    console.log (ir2z3);
    console.log (ir1z3);
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
    document.getElementById("cukz4").innerHTML = cukz4 + " F";

    var qukz4 = uukz4 * cukz4;
    var q1z4 = qukz4;
    var q2z4 = qukz4;
    var q3z4 = qukz4;
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
    document.getElementById("cukz5").innerHTML = cukz5 + " F";

    var qukz5 = uukz5 * cukz5;
    var q1z5 = uukz5 * c1z5;
    var q2z5 = uukz5 * c2z5;
    var q3z5 = uukz5 * c3z5;
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
    document.getElementById("cukz6").innerHTML = cukz6 + " F";

    var oz6 = 2 * Math.PI * fz6;
    var xukz6 = (1 / oz6 * cukz6);
    document.getElementById("xukz6").innerHTML = rjsei(xukz6) + " Ω";
    var x1z6 = (1 / (oz6 * c1z6));
    document.getElementById("x1z6").innerHTML = rjesi(x1z6) + " Ω";
    var x2z6 = (1 / (oz6 * c2z6));
    document.getElementById("x2z6").innerHTML = rjesi(x2z6) + " Ω";
    var x3z6 = (1 / (oz6 * c3z6));
    document.getElementById("x3z6").innerHTML = rjesi(x3z6) + " Ω";
    var x4z6 = (1 / (oz6 * c4z6));
    document.getElementById("x4z6").innerHTML = rjesi(x4z6) + " Ω";
    var x5z6 = (1 / (oz6 * c5z6));
    document.getElementById("x5z6").innerHTML = rjesi(x5z6) + " Ω";
    var x6z6 = (1 / (oz6 * c6z6));
    document.getElementById("x6z6").innerHTML = rjesi(x6z6) + " Ω";

    var iukz6 = uukz6 / xukz6;
    document.getElementById("iukz6").innerHTML = rjesi(iukz6) + " A";

}



// Laboratorijski zadatak 7
function zadatak7(){
    let uukz7 = getVal("uukz7");
    let pvz7 = getVal("pvz7");
    let l1z7 = getVal("l1z7");
    let l2z7 = getVal("l2z7");

    var lukz7 = l1z7 + l2z7;
    document.getElementById("lukz7").innerHTML = lukz7 + " mH";

    var iukz7 = ((uukz7 * pvz7) / lukz7 );
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
    document.getElementById("lukz8").innerHTML = lukz8 + " mH";

    var iukz8 = ((uukz8 * pvz8) / lukz8 );
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
    document.getElementById("lukz9").innerHTML = rjesi(lukz9) + " mH";
    
    var oz9 = 2 * Math.PI * fz9;
    var xukz9 = (oz9 * lukz9);
    document.getElementById("xukz9").innerHTML = rjesi(xukz9) + " Ω";
    var x1z9 = (oz9 * l1z9);
    document.getElementById("x1z9").innerHTML = rjesi(x1z9) + " Ω";
    var x2z9 = (oz9 * l2z9);
    document.getElementById("x2z9").innerHTML = rjesi(x2z9) + " Ω";
    var x3z9 = (oz9 * l3z9);
    document.getElementById("x3z9").innerHTML = rjesi(x3z9) + " Ω";
    var x4z9 = (oz9 * l4z9);
    document.getElementById("x4z9").innerHTML = rjesi(x4z9) + " Ω";
    var x5z9 = (oz9 * l5z9);
    document.getElementById("x5z9").innerHTML = rjesi(x5z9) + " Ω";

    var iukz9 = uukz9 / xukz9 * oz9;
    document.getElementById("iukz9").innerHTML = rjesi(iukz9) + " A";

}



// Laboratorijski zadatak 10
function zadatak10(){
    let uukz10 = getVal("uukz10");
    let fz10 = getVal("fz10");
    let c1z10 = getVal("c1z10");
    let r1z10 = getVal("r1z10");

    var c1z10pf = c1z10 * Math.pow(10, -9);
    var oz10 = 2 * Math.PI * fz10;
    var x1z10 = 1 / (oz10 * c1z10pf);
    document.getElementById("x1z10").innerHTML = rjesi(x1z10) + " Ω";

    var impz10 = Math.sqrt(Math.pow(r1z10, 2) + Math.pow(x1z10, 2));
    document.getElementById("impz10").innerHTML = rjesi(impz10) + " Ω";

    var iukz10 = uukz10 / impz10;
    document.getElementById("iukz10").innerHTML = rjesi(iukz10) + " A";

}



// Laboratorijski zadatak 11
function zadatak11(){
    let uukz11 = getVal("uukz11");
    let fz11 = getVal("fz11");
    let c1z11 = getVal("c1z11");
    let r1z11= getVal("r1z11");

    var c1z11pf = c1z11 * Math.pow(10, -9);
    var oz11 = 2 * Math.PI * fz11;
    var x1z11 = 1 / (oz11 * c1z11pf);
    document.getElementById("x1z11").innerHTML = rjesi(x1z11) + " Ω";

    var admz11 = Math.sqrt(Math.pow(r1z11, 2) + Math.pow(x1z11, 2));
    document.getElementById("impz10").innerHTML = rjesi(impz10) + " Ω";

    var iukz10 = uukz10 / impz10;
    document.getElementById("iukz10").innerHTML = rjesi(iukz10) + " A";

}
