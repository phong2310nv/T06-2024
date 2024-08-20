// const fetchPost = async () => {
//     try {
//         const response = await fetch (
//             "https://jsonplaceholder.typicode.com/posts",
//             {
//                 method: "GET",
//             }
//         );
//         const jsonResponse = await response.json();
//         console.log(jsonResponse);
//     } catch (error){
//         console.log(error); 
//     }
// };
// fetchPost();

const getAlluser = async () => {
    try {
        const response = await fetch(
            "https://66c06562ba6f27ca9a567e99.mockapi.io/users"
        );
        const users = await response.json();
        console.log(users);
    } catch (error){
        console.log(error);
    }
};
getAlluser();
const getDetailID = async (id) => {
    try {
        const response = await fetch (
            `https://66c06562ba6f27ca9a567e99.mockapi.io/users/${id}`
        );
        const users = await response.json();
        console.log(users);
    } catch (error){
        console.log(error);
        
    }
};
getDetailID(9);
const getDetailAddress = async (address) => {
    try {
        const response = await fetch (
            `https://66c06562ba6f27ca9a567e99.mockapi.io/users/${address}`
        );
        const users = await response.json();
        console.log(users);
    } catch (error){
        console.log(error);
        
    }
};
getDetailAddress(19);

const addUser = async () => {
    const payload = {
      name: "new User" + Date.now(),
      address: "HN",
      description: "some des",
      salary: 99999999,
      married: true,
      gender: "male",
      duration: 9,
      favorites: ["soccer", "tennis"],
    };
    console.log(JSON.stringify(payload));
    try {
      const response = await fetch(
        `https://66c06562ba6f27ca9a567e99.mockapi.io/users`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          "Content-Type": "application/json",
        }
      );
      const user = await response.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
const deleteUser =  async (id) =>{
    try {
        const response = await fetch (
            `https://66c06562ba6f27ca9a567e99.mockapi.io/users/${id}`,
            {
                method: "DELETE"
            }
        );
        const user = await response.json();
        console.log(user)
    }
    catch (error) {
        console.log(error);
    }
}
deleteUser(10);
const editUser = async (id) => {
    const payload = {
      name: "new User" + Date.now(),
      address: "HN",
      description: "some des",
      salary: 1999,
      married: true,
      gender: "male",
      duration: 9,
      favorites: ["soccer", "tennis"],
    };
    console.log(JSON.stringify(payload));
    try {
      const response = await fetch(
        `https://66c06562ba6f27ca9a567e99.mockapi.io/users/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
        }
      );
      const user = await response.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
editUser(19);