var nota1 = document.querySelector('#nota1');
var nota2 = document.querySelector('#nota2');
var situation = document.querySelector('#situation');
var med = document.querySelector('#media');

function limpar(){
    nota1.value = ''
    nota2.value = ''
}

function calcular(){
    let n1 = nota1.value
    let n2 = nota2.value
    // let sit = situation.value
    // let med = media.value

    if (nota1.value == ''){
        alert('Por favor digite a nota 1!')
    }

    if (nota2.value == ''){
        alert('Por favor digite a nota 2!')
    }


    let divisao = 2
    let media = (Number(n1) + Number(n2)) / 2;
    console.log(n1)
    console.log(n2)
    console.log(media);

    if(media >= 6 ){
        med.innerHTML = `${media}`,
        situation.style.color = 'white'
        situation.style.backgroundColor = 'green'
        situation.innerHTML = `Aprovado(a)`
    }else{
        med.innerHTML = `${media}`,
        situation.style.color = 'white'
        situation.style.backgroundColor = 'red'
        situation.innerHTML = `Reprovado(a)`
    }
}