const inputName = document.querySelector('#inputName');
const inputEmail = document.querySelector("#inputEmail");
const inputGender = document.querySelectorAll('input[name="inputGender"]');
const inputSubmit = document.querySelector(".submit-form");
const inputPolicy = document.querySelector('#policy');
inputSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    const getName = inputName.value;
    console.log(`Họ và tên: ${getName}`);
    const getEmail = inputEmail.value;
    console.log(`Email: ${getEmail}`);
    let selectedGender = null;
    for (const radio of inputGender) {
        if (radio.checked) {
            selectedGender = radio.value;
            break;
        }
    }
    console.log('Selected Gender:', selectedGender);
    const isPolicyChecked = inputPolicy.checked;

    
        if (isPolicyChecked) {
        console.log(`Bạn ${getName} rất yêu Đảng`);
        
    } else {
        console.log(`-.-`)
        
    }
    ;

    
    
})
