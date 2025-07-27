var i = 0
var j = 0
var k = 0

function abrirAcord1(){
    
    if(i%2 == 0){
        document.getElementById('acord1').classList.remove('displayNone');
        document.getElementById('setaFecha1').classList.add('displayNone');
        document.getElementById('setaAbre1').classList.remove('displayNone');

    }else{
        document.getElementById('acord1').classList.add('displayNone');
        document.getElementById('setaFecha1').classList.remove('displayNone');
        document.getElementById('setaAbre1').classList.add('displayNone');
    }
    i++

    confirmarAcord2()
    confirmarAcord3()
}

function abrirAcord2(){
    
    if(j%2 == 0){
        document.getElementById('acord2').classList.remove('displayNone');
        document.getElementById('setaFecha2').classList.add('displayNone');
        document.getElementById('setaAbre2').classList.remove('displayNone');

    }else{
        document.getElementById('acord2').classList.add('displayNone');
        document.getElementById('setaFecha2').classList.remove('displayNone');
        document.getElementById('setaAbre2').classList.add('displayNone');
    }
    j++

    confirmarAcord1()
    confirmarAcord3()
}

function abrirAcord3(){
    
    if(k%2 == 0){
        document.getElementById('acord3').classList.remove('displayNone');
        document.getElementById('setaFecha3').classList.add('displayNone');
        document.getElementById('setaAbre3').classList.remove('displayNone');

    }else{
        document.getElementById('acord3').classList.add('displayNone');
        document.getElementById('setaFecha3').classList.remove('displayNone');
        document.getElementById('setaAbre3').classList.add('displayNone');
    }
    k++

    confirmarAcord1()
    confirmarAcord2()
}

function confirmarAcord1(){
    if(i%2 == 1){
        document.getElementById('acord1').classList.add('displayNone');
        document.getElementById('setaFecha1').classList.remove('displayNone');
        document.getElementById('setaAbre1').classList.add('displayNone');
        i++
    }
}

function confirmarAcord2(){
    if (j%2 ==1){
        document.getElementById('acord2').classList.add('displayNone');
        document.getElementById('setaFecha2').classList.remove('displayNone');
        document.getElementById('setaAbre2').classList.add('displayNone');
        j++
    }
}

function confirmarAcord3(){
    if (k%2 == 1){
        document.getElementById('acord3').classList.add('displayNone');
        document.getElementById('setaFecha3').classList.remove('displayNone');
        document.getElementById('setaAbre3').classList.add('displayNone');
        k++
    }
}