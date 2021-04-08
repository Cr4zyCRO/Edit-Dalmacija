function zadatak1(){
    let naponizvora= Number(prompt("Unesite vrijednost napona izvora U"))
    let otpor1 = Number(prompt("Unesite vrijednost otpora R1"))
    let otpor2 = Number(prompt("Unesite vrijednost otpora R2"))

            ukupniotpor = otpor1 + otpor2
            ukupnastruja = naponizvora / ukupniotpor
            padnapona1 = ukupnastruja * otpor1
            padnapona2 = ukupnastruja * otpor2
            snaga1 = padnapona1 * ukupnastruja
            snaga2 = padnapona2 * ukupnastruja

        alert("Struja koju daje izvor je " + ukupnastruja + "A")
        alert("Pad napona na otporniku R1 je " + padnapona1 + "V")
        alert("Pad napona na otporniku R2 je " + padnapona2 + "V")
        alert("Snaga na otporu R1 je " + snaga1 + "W")
        alert("Snaga na otporu R2 je " + snaga2 + "W")
}

function zadatak2(){
    let a = Number(prompt("Unesite vrijednost otpornika R3"))
    let b = Number(prompt("Unesite vrijednost struje I3"))
    let c = Number(prompt("Unesite vrijednost otpora R2"))
    let d = Number(prompt("Unesite vrijednost struje I1"))
            
            iup = a * b
            ii2 = iup / c
            ir1 = iup / d
            iru = (1 / ir1)+(1 / c )+(1 / a)
            iiu = d + ii2 + c
            iui = iru * iiu

        alert("Vrijednost struje I2 je " + ii2 + "A")
        alert("Vrijednost otpora R1 je " + ir1 + "Ohma") 
        alert("Napon izvora je " + iui + "V")
}
function zadatak3(){
    let naponizvorar = Number(prompt("Unesite vrijednost napon izvora"))
    let otporr1 = Number(prompt("Unesite vrijednost otpora R1"))
    let otporr2 = Number(prompt("Unesite vrijednost otpora R2"))
    let otporr3 = Number(prompt("Unesite vrijednost otpora R3"))
    let otporr4 = Number(prompt("Unesite vrijednost otpora R4"))

            otporr12 = (1 / otporr1) + (1 /otporr2)
            otporr123 = (1 / otporr12) + (1 / otporr3)   
            otporr1234 = otporr123 + otporr4
            ukupnastrujar = naponizvorar / otporr1234
            naponapabr = ukupnastrujar * otporr123
            ampermetarr = naponapabr / otporr12

        alert("Struja koju pokazuje ampermetar je " + ampermetarr + "A")
}
function zadatak4(){
    let otport = Number(prompt("Unesite iznos otpora R"))
    let induktivitett = Number(prompt("Unesite iznos zavojnice L(u H)"))
    let kapacitett = Number(prompt("Unesite iznos kondezatora C (u F)"))
    let naponizovrat = Number(prompt("Unesite iznos napona V"))
    let frekvencijat = Number(prompt("Unesite frekvenciju f"))

            impinduktivitett = 2 * 3.14159265359 * frekvencijat * induktivitett
            impkapacitett = 1 / (2 * 3.1415925359 * frekvencijat * kapacitett)
            impedancijat = otport + impinduktivitett + impkapacitett
            strujat = naponizovrat / impedancijat
        
        alert("Struja koju daje izvor je " + strujat + "A")
}

