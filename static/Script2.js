//challenge 1: your age in days

function calcAge()
{
    const now = Date();
    const arr = now.split(" ");
    var currentYear = arr[3];

    
    var yearEntered = document.getElementById("year").value;

    var nYears = currentYear - yearEntered;
    var ans = numValidate(yearEntered);
    console.log(ans);

    if (nYears != currentYear) {
        if (ans === true) {
            alert("You are " + nYears + " years old");

        }
        else {
            alert("You need to enter 4 number: \n example: 1991 or 2000 etc ")
        }

    }
   
}

function numValidate(num)
{
    if (isNaN(num)) {
        return false;
    }

    else
    {
        return true;
    }
}




