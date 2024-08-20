//load tất cả user đang có
const fetchGetData = async()=>{
    try {
    const response = await fetch('https://66c06562ba6f27ca9a567e99.mockapi.io/users');
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error('Đã xảy ra lỗi:', error);
}
}
fetchGetData();
//lấy thông tin user với id
const getUserId = async(id)=>{
    try {
    const response = await fetch(`https://66c06562ba6f27ca9a567e99.mockapi.io/users/${id}`);
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
    }
}
getUserId(30);
//Post user
const postUser = async()=>{
    const newUser ={
        name:"Việt",
       address:"xxx",
       description: " Hello world",
       salary: 10,
       married:true,
       gender:"Male"
    }
    try {
    const response = await fetch(`https://66c06562ba6f27ca9a567e99.mockapi.io/users/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Xác định loại dữ liệu là JSON
              },
            body:JSON.stringify(newUser)
        }
    );
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
    }
}
postUser();
//PUT user
const editUser = async(id)=>{
    const updateUser ={
        name:"Việttttt",
       address:"xxx",
       description: " Hello world",
       salary: 10,
       married:true,
       gender:"Male"
    }
    try {
    const response = await fetch(`https://66c06562ba6f27ca9a567e99.mockapi.io/users/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // Xác định loại dữ liệu là JSON
              },
            body:JSON.stringify(updateUser)
        }
    );
    const data = await response.json();
    console.log('Dữ liệu đã được cập nhật:', data);
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
    }
}


