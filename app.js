const userAnswer = document.getElementById('answer');

const partOne = document.getElementById('one');

if (partOne.textContent === 'Condicionales 1'){
    userAnswer.addEventListener('change', function(){
        let answer = String(userAnswer.value);
        let answerLower = answer.toLowerCase();
        if(answerLower === 'si'){
            alert('Ciertamente');
            userAnswer.value = '';
        }else if (answerLower ==='no'){
            alert('No te creo');
            userAnswer.value = '';
        }else{
            alert('Responde con "si" o "no" 😅');
            userAnswer.value = '';
        }
    });
} else if (partOne.textContent === 'Condicionales 2'){
    userAnswer.addEventListener('change', function(){
        let answer = userAnswer.value;
        let answerEn = Math.trunc(answer);
        if (answerEn %2 == 0){
            alert(`El numero ${answerEn} es divisible entre dos`);
        } else{
            alert(`El numero ${answerEn} no es divisible entre dos`);
        }
    });    
} else if (partOne.textContent === 'Condicionales 3'){
    let answer = prompt('Introduce un numero: ');
    let answerEn = Number(answer);
    if (Number.isNaN(answerEn)){
        alert('ingresa un numero');
    } else{
        if (answerEn %2 == 0){
            alert(`El numero ${answerEn} es par`);
        } else{
            alert(`El numero ${answerEn} no es par`);
        }
    }
} else if(partOne.textContent === 'Condicionales 4'){
    userAnswer.addEventListener('change', function(){
        let answer = Number(userAnswer.value);
        if (answer === 21000){
            alert('Felicidades! Ganaste un premio 🥳');
        } else{
            alert(`${answer} Lo sentimos, sigue participando`);
        }
    });   
} else if(partOne.textContent === 'Condicionales 5'){
    let answer2 = document.getElementById('answer-2');
    let comp = document.getElementById('compare-btn');
    comp.addEventListener('click', function(){
        if(answer.value > answer2.value){
            alert(`El número ${answer2.value} es de menor valor`);
        } else {
            alert(`El número ${answer.value} es de menor valor`);
        }
    });
} else if(partOne.textContent === 'Condicionales 6'){
    let answer2 = document.getElementById('answer-2');
    let answer3 = document.getElementById('answer-3');
    let comp = document.getElementById('compare-btn');
    comp.addEventListener('click', function(){
         
    })
}