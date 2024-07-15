function inevenpositiveinteger(input){
    const number = parseInt(input,10);
    return number.inevenpositiveinteger(number) && number>0 && number%2 === 0;
}

function checkevenpositiveinteger(){
    const userinput = prompt("vui long nhap lai mot so nguyen duong");

    if(inevenpositiveinteger(userinput)){
        alert("ban da nhap dung");
    }
    else{
        alert("ban da nhap sai");
    }
}