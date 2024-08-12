document.addEventListener('DOMContentLoaded', (event) => {

    const inputAvatar = document.getElementById('inputAvatar');
    const imageList = document.getElementById('imageList');
    const inputId = document.getElementById('InputId');
    const inputName = document.getElementById('InputName');
    const saveButton = document.getElementById('saveButton');
    const resetButton = document.getElementById('resetButton');
    
    inputAvatar.addEventListener('change', function(event) {
        let fileData = "";
        if(inputAvatar.files[0]){
            const fileURL = URL.createObjectURL(inputAvatar.files[0]);
            console.log(fileURL);
            fileData = `
                <li>
                    <img width='100' src='${fileURL}' />
                </li>
            `;
            imageList.innerHTML = fileData;
        }
    });

    saveButton.addEventListener('click', function() {
        const selectedGender = document.querySelector('input[name="gender"]:checked');
        const isMarried = document.querySelector('input[name="isMarried"]').checked;
        
        if (inputId.value) {
            console.log(`ID: ${inputId.value}`);
        } else {
            console.log('No ID provided');
        }

        if (inputName.value) {
            console.log(`Name: ${inputName.value}`);
        } else {
            console.log('No Name provided');
        }

        if (selectedGender) {
            console.log(`Gender: ${selectedGender.value}`);
        } else {
            console.log('No Gender selected');
        }

        console.log(`Married: ${isMarried}`);
    });

    resetButton.addEventListener('click', function() {
        inputId.value = '';
        inputName.value = '';
        imageList.innerHTML = '';
        document.querySelectorAll('input[name="gender"]').forEach(radio => {
            radio.checked = false;
        });
        document.querySelector('input[name="isMarried"]').checked = false;
    });

});
