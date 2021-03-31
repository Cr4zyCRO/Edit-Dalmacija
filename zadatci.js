function myFunction(){
    let a = Number(prompt("Unesite vrijednost napona izvora U"))
    let b = Number(prompt("Unesite vrijednost otpora R1"))
    let c = Number(prompt("Unesite vrijednost otpora R2"))

            iotpor = b + c
            istruja = a / iotpor
            inapon1 = istruja * b
            inapon2 = istruja * c
            isnaga1 = istruja * iu1
            isnaga2 = istruja * iu2

        alert("Struja koju daje izvor je " + istruja +  "A") 
        alert("Pad napona na otporniku R1 je " + inapon1 + "V")
        alert("pad napona na otporniku R2 je " + inapon2+ "V")
        alert("Snaga otpornika R1 je "+ isnaga1 + "W")
        alert("Snaga otpornika R2 je "+ isnaga2 + "W")
}

function myFunction1(){
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
function myFunction2(){
    let a = Number(prompt("Unesite vrijednost otpornika R1"))
    let b = Number(prompt("Unesite vrijednost otpornika R2"))
    let c = Number(prompt("Unesite vrijednost otpornika R3"))
    let d = Number(prompt("Unesite vrijednost otpornika R4"))
    let e = Number(prompt("Unesite vrijednost napona izvora"))

            iotpor12 = ( 1 / a ) + ( 1 / b )
            iotpor123 = ( 1 / c ) + ( 1 / iotpor12)
            iotporuk = iotpor123 + d
            istruja1 = e / iotporuk
            inaponp = istruja1 * iotpor123
            istruaj2 = inaponp / iotpor12
            
        alert(inaponab)
}