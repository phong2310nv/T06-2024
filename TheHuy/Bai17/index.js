// Bai 1
document.getElementById('displayButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const province = document.getElementById('provinceSelect').value;

    let gender;
    if (document.getElementById('maleRadio').checked) {
        gender = document.getElementById('maleRadio').value;
    } else if (document.getElementById('femaleRadio').checked) {
        gender = document.getElementById('femaleRadio').value;
    }

    console.log(`Name: ${name}`);
    console.log(`Province and City: ${province}`);
    console.log(`Gender: ${gender}`);
});

//Bai 2
document.addEventListener('DOMContentLoaded', (event) => {
    const btnClickRed = document.getElementById("red");
    const btnClickBlue = document.getElementById("blue");

    if (btnClickRed) {
        console.dir(btnClickRed);
        btnClickRed.style.color = "red";
        btnClickRed.addEventListener('click', () => {
            document.querySelectorAll('.content').forEach(p => {
                p.style.color = "red";
            });
        });
    } else {
        console.error('Button with ID "red" not found.');
    }

    if (btnClickBlue) {
        console.dir(btnClickBlue);
        btnClickBlue.style.color = "blue";
        btnClickBlue.addEventListener('click', () => {
            document.querySelectorAll('.content').forEach(p => {
                p.style.color = "blue";
            });
        });
    } else {
        console.error('Button with ID "blue" not found.');
    }
});


