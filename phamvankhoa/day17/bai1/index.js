function submitForm() {
    const inputName = document.querySelector('input[name="name"]');
    const inputCountry = document.querySelector('select[name="country"]');
    const inputGender = document.querySelector('input[name="gender"]:checked');
    const inputLike = document.querySelectorAll('input[name="like"]:checked')
    const output = document.getElementById('output');
    output.innerHTML = '';
    output.innerHTML += `Họ và tên: ${inputName.value}<br>`;
    const selectCountry = inputCountry.options[inputCountry.selectedIndex];
    output.innerHTML += `Địa chỉ: ${selectCountry.text}<br>`;
    output.innerHTML += `Giới tính: ${inputGender.value}<br>`;
    let likes = [];
    inputLike.forEach(like => likes.push(like.value));
    output.innerHTML += `Sở thích: ${likes.join(', ')}<br>`;
}
