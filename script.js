

function calculateSum() {
    const totalSumma = parseInt(document.getElementById("totalSumma").value);
    const betaldSumma = parseInt(document.getElementById("betaldSumma").value);
    let calculate = betaldSumma - totalSumma;

    const result = document.getElementById("result");


 
    if (isNaN(totalSumma, betaldSumma)) {
        alert("enter a valid number")
    } else {
     result.innerText = "du skall få  tillbaka" + " " + calculate + " " + "kr";
 
    }
 }

   

