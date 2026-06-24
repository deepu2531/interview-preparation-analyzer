function analyzeSkills() {  
    let python = document.getElementById("python").value;
    let dsa = document.getElementById("dsa").value;
    let sql = document.getElementById("sql").value;
    if(python ===""||dsa ===""||sql ==="")
{
alert("please enter all scores");
return;
}

if (python < 0 || python > 100 || dsa < 0 || dsa > 100 || sql < 0 || sql > 100) {
    alert("Scores must be between 0 and 100");
    return;
}

    let result = "";

    if (python < 50) {
        result +="[Python]Improve Python <br>";
    }

    if (dsa < 50) {
        result += "[DSA]Improve DSA <br>";
    }

    if (sql < 50) {
        result += "[SQL]Improve SQL <br>";
    }

    if (python >= 50 && dsa >= 50 && sql >= 50) {
        result ="Ready for Mock Interviews";
    }

    let resultBox = document.getElementById("result");
    resultBox.innerHTML = result;

    if (result.includes("Ready")) {
        resultBox.style.color = "green";
    } else {
        resultBox.style.color = "red";
    }
let average=(Number(python)+Number(dsa)+Number(sql))/3;
document.getElementById("average").innerHTML = "Average Score: " + average.toFixed(2) + "%";
let level = "";

if (average >= 80) {
    level = "Skill Level: Excellent";
}
else if (average >= 60) {
    level = "Skill Level: Good";
}
else {
    level = "Skill Level: Needs Improvement";
}

document.getElementById("level").innerHTML = level;

}
