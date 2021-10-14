// centrare il testo
const tittle = document.querySelector('h1');
tittle.style.textAlign = 'center';


//dichiaro l'elemento nel quale voglio inserire i miei dati
const boxes= document.getElementsByClassName('box');
console.log(boxes);



//conto quantola lunghezza dei mio container ovvero fino all'ultimo box
for (let i = 1; i <= boxes.length; i++){
    

    //faccio partire a cotare da 0 la mia variabile 
    //di conseguenza devo togliere 1 a boxes
    let square = boxes[i-1];


    if ( i % 3 ===0 && i % 5 === 0){
        square.classList.add('x3-5');
        square.innerHTML = 'fizzbuzz';


    } else if (i % 3 === 0 ){
        square.classList.add('x5');
        square.innerHTML = 'buzz'

        
    }else if (i % 5 === 0){
        square.classList.add('x3');
        square.innerHTML = 'fizz'

        
    } else{
        square.classList.add('std');
        square.innerHTML = i;

    }
}

