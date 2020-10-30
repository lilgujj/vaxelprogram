



function calculateSum() {


    const totalSumma = parseInt(document.getElementById("totalSumma").value);
    const betaldSumma = parseInt(document.getElementById("betaldSumma").value);
    let calculate = betaldSumma - totalSumma;

    let result = document.getElementById("result");

    let cash = [100, 50, 20, 10, 5, 1];
    for (i = 0; i < cash.length; i++) {
          
    }

 
    if (isNaN(totalSumma, betaldSumma)) {
        alert("enter a valid number")
    }
    else {
     result.innerText = "du skall få  tillbaka" + " " + calculate + " " + "kr";
    }


 }





