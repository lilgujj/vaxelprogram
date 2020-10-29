

function calculateSum() {
    const totalSumma = parseInt(document.getElementById("totalSumma").value);
    const betaldSumma = parseInt(document.getElementById("betaldSumma").value);
    let calculate = betaldSumma - totalSumma;

    const result = document.getElementById("result");
    result.innerText = "du skall få  tillbaka" + " " + calculate +  " " + "kr";
    
}

