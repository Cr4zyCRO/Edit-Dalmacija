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
function zadatak5(){
    let kondezatorc1 = Number(prompt("Unesite vrijednost kondezatora C1 (u F)"))
    let kondezatorc2 = Number(prompt("Unesite vrijednost kondezatora C2 (u F)"))
    let kondezatorc3 = Number(prompt("Unesite vrijednost kondezatora C3 (u F)"))
    let naponc = Number(prompt("Unesite iznos napona U (u V)"))

            ukupni1c = (1 / kondezatorc1 ) + (1 / kondezatorc2) + (1 / kondezatorc3)
            ukupnic = 1 / ukupni1c
            Qc = ukupnic * naponc
            uc1 = Qc / kondezatorc1
            uc2 = Qc / kondezatorc2
            uc3 = Qc / kondezatorc3

        alert("Ukupni kapacitiet spoja je " + ukupnic + "F")
        alert("Ukupna kolicina naboja je " + Qc + "C")
        alert("Napon na kondezatoru C1 " + uc1 + "V")
        alert("Napon na kondezatoru C2 " + uc2 + "V")
        alert("Napon na kondezatoru C3 " + uc3 + "V")        
}
function zadatak6(){
    let snagap1 = Number(prompt("Kolika je snaga na otporniku P1"))
    let otporp2 = Number(prompt("Koliko iznosi otpor R2"))
    let strujap = Number(prompt("Unesite vrijednost struje izvora I"))

            b = otporp2 *   strujap
            b2 = b * b
            cetriac = 4 * otporp2 * snagap1
            dvaa = 2 * otporp2
            strujap = (b + Math.sqrt(b2 - cetriac)) / dvaa
            strujakva = strujap * strujap
            otporp1 = snagap1 / strujakva
            naponp = strujap * otporp1

        alert("Iznos otpora R1 je " + otporp1 + "Ohma")
        alert("Napon izvora je " + naponp + "V")
}
function zadatak7(){
    let otpora1 = Number(prompt("Kolika je vrijednost otpora R1"))
    let otpora2 = Number(prompt("Kolika je vrijednost otpora R2"))
    let otpora3 = Number(prompt("Kolika je vrijednost otpora R3"))
    let otpora4 = Number(prompt("Kolika je vrijednost otpora R4"))
    let otpora5 = Number(prompt("Kolika je vrijednost otpora R5"))
    let otpora6 = Number(prompt("Kolika je vrijednost otpora R6"))
    let naponaa = Number(prompt("Unesite vrijednost napona izvora U"))

            otpora12 = (otpora1 * otpora2) / (otpora1 + otpora2)
            otpora123 = (otpora12 * otpora3 ) / (otpora12 + otpora3)
            otpora45 = otpora4 + otpora5
            otpora456 = (otpora45 * otpora6) / (otpora45 + otpora6)
            otporau = otpora123 + otpora456 
            strujaizvoraa = naponaa / otporau
            padu1a = strujaizvoraa * otpora123
            padu2a = strujaizvoraa * otpora456
            strujaa1 = padu1a / otpora1
            strujaa2 = padu1a / otpora2
            strujaa3 = padu1a / otpora3
            strujaa4 = padu2a / otpora45
            strujaa5 = padu2a / otpora6
        
        alert("Struja I1 iznosi " + strujaa1 + "A")
        alert("Struja I2 iznosi " + strujaa2 + "A")
        alert("Struja I3 iznosi " + strujaa3 + "A")
        alert("Struja I4 iznosi " + strujaa4 + "A")
        alert("Struja I5 iznosi " + strujaa5 + "A")
}
function zadatak8(){
    let otporz1 = Number(prompt("Kolika je vrijednost otpora R1"))
    let otporz2 = Number(prompt("Kolika je vrijednost otpora R2"))
    let otporz3 = Number(prompt("Kolika je vrijednost otpora R3"))
    let otporz4 = Number(prompt("Kolika je vrijednost otpora R4"))

            otporz12 = (otporz1 * otporz2) / (otporz1 + otporz2)
            ukupniz = otporz12 + otporz3 + otporz4

        alert("Ukupni otpor strujnog kruga je " + ukupniz + "ohma")
}
function zadatak9(){
    let otporw1 = Number(prompt("Unesite vrijednost otpora R1"))
    let otporw2 = Number(prompt("Unesite vrijednost otpora R2"))
    let otporw3 = Number(prompt("Unesite vrijednost otpora R3"))
    let otporw4 = Number(prompt("Unesite vrijednost otpora R4"))
    let otporw5 = Number(prompt("Unesite vrijednost otpora R5"))
    let otporw6 = Number(prompt("Unesite vrijednost otpora R6"))
    let otporw7 = Number(prompt("Unesite vrijednost otpora R7"))
    let otporw8 = Number(prompt("Unesite vrijednost otpora R8"))

            otporwa123 = ( 1 / otporw1) + ( 1 / otporw2) + ( 1 / otporw3)
            otporw123 = 1 / otporwa123
            otporwa56 = ( 1 / otporw5 ) + ( 1 / otporw6)
            otporw56 = 1 / otporwa56
            otporw78 = otporw7 + otporw8
            otporw123456 = otporw123 + otporw4 + otporw56
            otporwuk = (otporw123456 * otporw78) / (otporw123456 + otporw78)

        alert("Ukupni otpor spoja je " + otporwuk + "Ohma")
}
function zadatak10(){
    let otpore1 = Number(prompt("Koliko iznosi R1"))
    let otpore2 = Number(prompt("Koliko iznosi R2"))
    let otpore3 = Number(prompt("Koliko iznosi R3"))
    let otpore4 = Number(prompt("Koliko iznosi R4"))
    let naponeu = Number(prompt("kolika je vrijednost napona U"))

            otpore2a3 = otpore2 + otpore3
            otpore123 = (otpore1 * otpore2a3) / (otpore1 + otpore2a3)
            otporeuk = otpore123 + otpore4
            strujaeiz = naponeu / otporeuk
            napone2 = strujaeiz * otpore4
            napone1 = naponeu - napone2
            strujae1 = napone1 / otpore1
            strujae2 = napone1 / otpore2a3
            snagaep1 = strujae1 * strujae1 * otpore1
            snagaep2 = strujae2 * strujae2 * otpore2
            snagaep3 = strujae2 * strujae2 * otpore3
            snagaep4 = strujaeiz * strujaeiz * otpore4

        alert("Snaga na otporniku R1 " + snagaep1 + "W")
        alert("Snaga na otporniku R2 " + snagaep2 + "W")
        alert("Snaga na otporniku R3 " + snagaep3 + "W")
        alert("Snaga na otporniku R4 " + snagaep4 + "W")
}
function zadatak11(){
    let naponm = Number(prompt("Unesite vrijednost napona izvora U"))
    let snagam2 = Number(prompt("Unesite vrijednost dnage P2 "))
    let otporm1 = Number(prompt("Koliko iznosi otpor R1"))
            
            bkvadratm = naponm * naponm
            mac = 4 * otporm1 * snagam2
            mm = Math.sqrt(bkvadratm - mac)
            strujam = ( naponm - mm ) / (2 * otporm1)
            strujakvadm = strujam * strujam
            otporm2 = snagam2 / strujakvadm 

        alert("Struja koju daje izvor je " + strujam + "A")
        alert("Vrijednost otpora R2 je " + otporm2 + "Ohma")
}
function zadatak12(){
    let otporb1 = Number(prompt("Unesite otpor grijaca R1 "))
    let otporb2 = Number(prompt("Unesite otpor grijaca R2 "))
    var duljinab = 653.4
    var otporizovrab = 0.8
    var prijesjekalb = 25
    var strujaizb = 50
    var roodm = 0.0287
        
            otporgrijača12 = ( otporb1 * otporb2 ) / (otporb1 + otporb2)
            napontrosilab12 = otporgrijača12 * strujaizb
            rvb = 2 * roodm * ( duljinab / prijesjekalb )
            gubitaknaponaspojb = rvb * strujaizb
            naponnaizvorub = napontrosilab12 + gubitaknaponaspojb
            elektromotornasilab = naponnaizvorub + otporizovrab * strujaizb
            snaganatrosilimab = strujaizb * strujaizb * otporgrijača12
            gubitagpvodab = strujaizb * strujaizb * rvb 
            gubotakpizvorab = strujaizb * strujaizb *otporizovrab
            sangaizobrab = elektromotornasilab * strujaizb
        
        alert("Napon na trosilu je" + napontrosilab12 + "V")
        alert("Gubitak napona na spojnom vodu je " + gubitaknaponaspojb + "V")    
        alert("Napon na stezaljkama izvora je " + naponnaizvorub + "V")
        alert("Elektromotorna sila izvora je " + elektromotornasilab + "V")
        alert("Razvijena snaga na tosilima je " + snaganatrosilimab + "W")
}
function zadatak13(){
    let c1y = Number(prompt("Koliko iznosi kapacitet kondezatora C1"))
    let c2y = Number(prompt("Koliko iznosi kapacitet kondezatora C2"))
    let c3y = Number(prompt("Koliko iznosi kapacitet kondezatora C2"))
    let uy = Number(prompt("Unesite vrijednost napona izvora U"))

            ukupnicy = c1y + c2y + c3y
            q1y = c1y * uy
            q2y = c2y * uy
            q3y = c3y * uy
            quky = q1y + q2y + q3y
            a1y = 0.5 * q1y * uy
            a2y = 0.5 * q2y * uy
            a3y = 0.5 * q3y * uy

        alert("Ukupni kapacitet je " + ukupnicy + "F")
        alert("Kolicina naboja na C1 je " + q1y + "C")
        alert("Kolicina naboja na C2 je " + q2y + "C")
        alert("Kolicina naboja na C3 je " + q3y + "C")
        alert("Nagomilana energija na C1 je " + a1y + "J")
        alert("Nagomilana energija na C2 je " + a2y + "J")
        alert("Nagomilana energija na C3 je " + a3y + "J")
}