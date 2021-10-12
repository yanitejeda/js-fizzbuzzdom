// centrare il testo
const tittle = document.querySelector('h1');
tittle.style.textAlign = 'center';


const boxNumber = document.querySelector('.box');
//creare serie di numeri







for (let y = 1 ; y <=10; y++){

console.log('tabella del', y);
boxNumber.innerHTML += y ;
}

/*

for (let i = 1; i<=10 ; i++){
    console.log('tabella del', i );
    for(let x = 1 ; x < 15 ; x++){
        console.log(`${i} * ${x} = ` , i++);
    }
}
*/