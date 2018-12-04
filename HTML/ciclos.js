/**
 * imprimir 100 veces el mensaje en consola
 */

for(conta = 1; conta < 100; conta++){
    console.log ('me canso el ganzo' +conta);
    if(conta==7500)
    break;
}

for(j=1; j<=10; j++){
    console.log(`Tabla del ${j}`) 
    for(x=1; x <= 10; x++){
        console.log (`${j} x ${x} = ${x*j}`);
    }

}

var elbody=document.getElementsByTagName('body')[0];

for(var i=1; i<= 100; i++){ 

    var elboton=document.createElement('button');
    elboton.textContent='cualquier texto';
    elbody.appendChild(elboton);


}