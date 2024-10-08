alert('Boas vindas ao jogo do numero sercreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

//enquanto chute n for ogual a n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo} `);
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
       
    } else{
        if (chute > numeroSecreto)
            alert(`O numero secreto é menor que ${chute} `);
        else {
            alert(`O numero secreto é maior que ${chute} `);
        }
         tentativas++;
    }
}
if (tentativas > 1){
    alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto}, com ${tentativas} tentativas.` );
} else {
    alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto}, com ${tentativas} tentativa.` );
}

