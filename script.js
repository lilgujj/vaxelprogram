


function calculateSum() {
    
    const totalSumma = parseInt(document.getElementById("totalSumma").value);
    const betaldSumma = parseInt(document.getElementById("betaldSumma").value);
   
    let totalSum = betaldSumma - totalSumma;
    let result = document.getElementById("result");
    let calculate = totalSum;
    let cash = [100, 50, 20, 10, 5, 1];
    let array = []
    
    if (isNaN(totalSumma, betaldSumma)) {
        alert("enter a valid number");
        return;
    }
    for (i = 0; i < cash.length; i++) { 
        let quotient = Math.floor(calculate/cash[i]);
        calculate -= cash[i] * quotient;
        //console.log(quotient)
        if (array += cash.length) {
            cash[0]++;
            console.log(quotient)
            let resultTwo = document.getElementById("arrayResult")
            resultTwo.innerText = array;
        
        }
        
    }
    
    result.innerText = "du skall få  tillbaka" + " " + totalSum + " " + "kr";
    

 


 }





