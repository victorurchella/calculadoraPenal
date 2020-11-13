$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener("message", function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })

    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://calc/exit', JSON.stringify({}))
            return
        }
    }

    $("#close").click(function() {
        $.post('http://calc/exit', JSON.stringify({}))
    })

})

var valorGeral = [0,0,0]

function somar() {
    var temFianca = true
    var valor0 = [15,10,150]
    var valor1 = [8,5,150]
    var valor2 = [15,8,150]
    var valor3 = [30,6,150]
    var valor4 = [30,10,150]
    var valor5 = [50,15,0] // s/ fianca
    var valor6 = [0,10,150]
    var valor7 = [15,15,0] // s/ fianca
    var valor8 = [15,10,200]
    var valor9 = [12,10,200]
    var valor10 = [15,10,0] // s/ fianca
    var valor11 = [0,20,0]
    var valor12 = [0,10,0] // s/ fianca
    var valor13 = [20,10,0] // s/ fianca
    var valor14 = [10,10,180]
    var valor15 = [30,15,0] // s/ fianca
    var valor16 = [20,10,0] // s/ fianca
    var valor17 = [25,10,0] // s/ fianca
    var valor18 = [50,20,0] // s/ fianca
    var valor19 = [45,20,0] // s/ fianca
    var valor20 = [60,30,0] // s/ fianca
    var valor21 = [40,20,0] // s/ fianca
    var valor22 = [10,5,15]
    var valor23 = [0,15,0]
    var valor24 = [10,5,150]
    var valor25 = [10,5,150]
    var valor26 = [15,5,150]
    var valor27 = [15,10,400]
    var valor28 = [20,20,700]
    var valor29 = [30,30,0] // s/ fianca
    var valor30 = [20,10,450]
    var valor31 = [10,10,150]
    var valor32 = [60,20,0] // s/ fianca
    var valor33 = [10,5,200]
    var valor34 = [20,15,250]
    var valor35 = [60,40,300]
    var valor36 = [40,30,300]
    var valor37 = [15,20,300]
    var valor38 = [20,30,300]
    var coca = parseInt(document.getElementById('39').value)
    var maconha = parseInt(document.getElementById('40').value)
    var meta = parseInt(document.getElementById('41').value)
    var dirt = parseInt(document.getElementById('42').value)
    var gunparts = parseInt(document.getElementById('43').value)
    var master = parseInt(document.getElementById('44').value)
    var lock = parseInt(document.getElementById('45').value)
    var keycard = parseInt(document.getElementById('46').value)
    var algema = parseInt(document.getElementById('47').value)
    var capuz = parseInt(document.getElementById('48').value)
    var valor49 = [10,10,12]

    var check0 = document.getElementById('0')
    if(check0.checked == true){
        valorGeral[0] += valor0[0]
        valorGeral[1] += valor0[1]
        valorGeral[2] += valor0[2]
    }

    var check1 = document.getElementById('1')
    if(check1.checked == true){
        valorGeral[0] += valor1[0]
        valorGeral[1] += valor1[1]
        valorGeral[2] += valor1[2]
    }

    var check2 = document.getElementById('2')
    if(check2.checked == true){
        valorGeral[0] += valor2[0]
        valorGeral[1] += valor2[1]
        valorGeral[2] += valor2[2]
    }

    var check3 = document.getElementById('3')
    if(check3.checked == true){
        valorGeral[0] += valor3[0]
        valorGeral[1] += valor3[1]
        valorGeral[2] += valor3[2]
    }

    var check4 = document.getElementById('4')
    if(check4.checked == true){
        valorGeral[0] += valor4[0]
        valorGeral[1] += valor4[1]
        valorGeral[2] += valor4[2]
    }

    var check5 = document.getElementById('5')
    if(check5.checked == true){
        valorGeral[0] += valor5[0]
        valorGeral[1] += valor5[1]
        valorGeral[2] += valor5[2]
        temFianca = false
    }

    var check6 = document.getElementById('6')
    if(check6.checked == true){
        valorGeral[0] += valor6[0]
        valorGeral[1] += valor6[1]
        valorGeral[2] += valor6[2]
    }

    var check7 = document.getElementById('7')
    if(check7.checked == true){
        valorGeral[0] += valor7[0]
        valorGeral[1] += valor7[1]
        valorGeral[2] += valor7[2]
        temFianca = false
    }

    var check8 = document.getElementById('8')
    if(check8.checked == true){
        valorGeral[0] += valor8[0]
        valorGeral[1] += valor8[1]
        valorGeral[2] += valor8[2]
    }

    var check9 = document.getElementById('9')
    if(check9.checked == true){
        valorGeral[0] += valor9[0]
        valorGeral[1] += valor9[1]
        valorGeral[2] += valor9[2]
    }

    var check10 = document.getElementById('10')
    if(check10.checked == true){
        valorGeral[0] += valor10[0]
        valorGeral[1] += valor10[1]
        valorGeral[2] += valor10[2]
        temFianca = false
    }

    var check11 = document.getElementById('11')
    if(check11.checked == true){
        valorGeral[0] += valor11[0]
        valorGeral[1] += valor11[1]
        valorGeral[2] += valor11[2]
    }

    var check12 = document.getElementById('12')
    if(check12.checked == true){
        valorGeral[0] += valor12[0]
        valorGeral[1] += valor12[1]
        valorGeral[2] += valor12[2]
        temFianca = false
    }

    var check13 = document.getElementById('13')
    if(check13.checked == true){
        valorGeral[0] += valor13[0]
        valorGeral[1] += valor13[1]
        valorGeral[2] += valor13[2]
        temFianca = false
    }

    var check14 = document.getElementById('14')
    if(check14.checked == true){
        valorGeral[0] += valor14[0]
        valorGeral[1] += valor14[1]
        valorGeral[2] += valor14[2]
    }

    var check15 = document.getElementById('15')
    if(check15.checked == true){
        valorGeral[0] += valor15[0]
        valorGeral[1] += valor15[1]
        valorGeral[2] += valor15[2]
        temFianca = false
    }

    var check16 = document.getElementById('16')
    if(check16.checked == true){
        valorGeral[0] += valor16[0]
        valorGeral[1] += valor16[1]
        valorGeral[2] += valor16[2]
        temFianca = false
    }

    var check17 = document.getElementById('17')
    if(check17.checked == true){
        valorGeral[0] += valor17[0]
        valorGeral[1] += valor17[1]
        valorGeral[2] += valor17[2]
        temFianca = false
    }

    var check18 = document.getElementById('18')
    if(check18.checked == true){
        valorGeral[0] += valor18[0]
        valorGeral[1] += valor18[1]
        valorGeral[2] += valor18[2]
        temFianca = false
    }

    var check19 = document.getElementById('19')
    if(check19.checked == true){
        valorGeral[0] += valor19[0]
        valorGeral[1] += valor19[1]
        valorGeral[2] += valor19[2]
        temFianca = false
    }

    var check20 = document.getElementById('20')
    if(check20.checked == true){
        valorGeral[0] += valor20[0]
        valorGeral[1] += valor20[1]
        valorGeral[2] += valor20[2]
        temFianca = false
    }

    var check21 = document.getElementById('21')
    if(check21.checked == true){
        valorGeral[0] += valor21[0]
        valorGeral[1] += valor21[1]
        valorGeral[2] += valor21[2]
        temFianca = false
    }

    var check22 = document.getElementById('22')
    if(check22.checked == true){
        valorGeral[0] += valor22[0]
        valorGeral[1] += valor22[1]
        valorGeral[2] += valor22[2]
    }

    var check23 = document.getElementById('23')
    if(check23.checked == true){
        valorGeral[0] += valor23[0]
        valorGeral[1] += valor23[1]
        valorGeral[2] += valor23[2]
    }

    var check24 = document.getElementById('24')
    if(check24.checked == true){
        valorGeral[0] += valor24[0]
        valorGeral[1] += valor24[1]
        valorGeral[2] += valor24[2]
    }

    var check25 = document.getElementById('25')
    if(check25.checked == true){
        valorGeral[0] += valor25[0]
        valorGeral[1] += valor25[1]
        valorGeral[2] += valor25[2]
    }

    var check26 = document.getElementById('26')
    if(check26.checked == true){
        valorGeral[0] += valor26[0]
        valorGeral[1] += valor26[1]
        valorGeral[2] += valor26[2]
    }

    var check27 = document.getElementById('27')
    if(check27.checked == true){
        valorGeral[0] += valor27[0]
        valorGeral[1] += valor27[1]
        valorGeral[2] += valor27[2]
    }

    var check28 = document.getElementById('28')
    if(check28.checked == true){
        valorGeral[0] += valor28[0]
        valorGeral[1] += valor28[1]
        valorGeral[2] += valor28[2]
    }

    var check29 = document.getElementById('29')
    if(check29.checked == true){
        valorGeral[0] += valor29[0]
        valorGeral[1] += valor29[1]
        valorGeral[2] += valor29[2]
        temFianca = false
    }

    var check30 = document.getElementById('30')
    if(check30.checked == true){
        valorGeral[0] += valor30[0]
        valorGeral[1] += valor30[1]
        valorGeral[2] += valor30[2]
    }

    var check31 = document.getElementById('31')
    if(check31.checked == true){
        valorGeral[0] += valor31[0]
        valorGeral[1] += valor31[1]
        valorGeral[2] += valor31[2]
    }

    var check32 = document.getElementById('32')
    if(check32.checked == true){
        valorGeral[0] += valor32[0]
        valorGeral[1] += valor32[1]
        valorGeral[2] += valor32[2]
        temFianca = false
    }

    var check33 = document.getElementById('33')
    if(check33.checked == true){
        valorGeral[0] += valor33[0]
        valorGeral[1] += valor33[1]
        valorGeral[2] += valor33[2]
    }

    var check34 = document.getElementById('34')
    if(check34.checked == true){
        valorGeral[0] += valor34[0]
        valorGeral[1] += valor34[1]
        valorGeral[2] += valor34[2]
    }

    var check35 = document.getElementById('35')
    if(check35.checked == true){
        valorGeral[0] += valor35[0]
        valorGeral[1] += valor35[1]
        valorGeral[2] += valor35[2]
    }

    var check36 = document.getElementById('36')
    if(check36.checked == true){
        valorGeral[0] += valor36[0]
        valorGeral[1] += valor36[1]
        valorGeral[2] += valor36[2]
    }

    var check37 = document.getElementById('37')
    if(check37.checked == true){
        valorGeral[0] += valor37[0]
        valorGeral[1] += valor37[1]
        valorGeral[2] += valor37[2]
    }

    var check38 = document.getElementById('38')
    if(check38.checked == true){
        valorGeral[0] += valor38[0]
        valorGeral[1] += valor38[1]
        valorGeral[2] += valor38[2]
        temFianca = false
    }

    var check49 = document.getElementById('49')
    if(check49.checked == true){
        valorGeral[0] += valor49[0]
        valorGeral[1] += valor49[1]
        valorGeral[2] += valor49[2]
    }


    if(coca > 5){
        valorGeral[0] += coca * 0.1
        valorGeral[0] = Math.round(valorGeral[0])
    }

    if(maconha > 5){
        valorGeral[0] += maconha * 0.1
        valorGeral[0] = Math.round(valorGeral[0])
    }

    if(meta > 5){
        valorGeral[0] += meta * 0.1
        valorGeral[0] = Math.round(valorGeral[0])
    }

    if(dirt > 5000){
        valorGeral[0] += dirt * 0.001
        valorGeral[0] = Math.round(valorGeral[0])
    }

    if(gunparts >= 1){
        valorGeral[0] += gunparts * 1.5
        valorGeral[0] = Math.round(valorGeral[0])
    }

    if(master >= 1){
        valorGeral[0] += master * 15
        valorGeral[0] = Math.round(valorGeral[0])
    }

    if(lock >= 1){
        valorGeral[0] += lock * 10
        valorGeral[0] = Math.round(valorGeral[0])
    }

    if(keycard >= 1){
        valorGeral[0] += keycard * 0
        valorGeral[0] = Math.round(valorGeral[0])
    }

    if(algema >= 1){
        valorGeral[0] += algema * 5
        valorGeral[0] = Math.round(valorGeral[0])
    }

    if(capuz >= 1){
        valorGeral[0] += capuz * 5
        valorGeral[0] = Math.round(valorGeral[0])
    }

    var exibirPena = document.getElementById('exibirPena')
    var exibirMulta = document.getElementById('exibirMulta')
    var exibirFianca = document.getElementById('exibirFianca')

    if(temFianca == true) {
        exibirPena.innerHTML = `${valorGeral[0]} Meses`
        exibirMulta.innerHTML = `R$${valorGeral[1]*1000},00` 
        exibirFianca.innerHTML = `R$${valorGeral[2]*1000},00`
    } else {
        exibirPena.innerHTML = `${valorGeral[0]} Meses`
        exibirMulta.innerHTML = `R$${valorGeral[1]*1000},00`
        exibirFianca.innerHTML = `Sem fiança`
    }

    console.log(valorGeral)
    valorGeral = [0,0,0]
}
