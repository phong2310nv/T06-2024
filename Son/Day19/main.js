// Fetch API

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(Response => Response.json());
// .then((data) => {
//         console.log(data);

//     });

const fetchPost = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts"
            {
                method: "Get",
            }
        );
        const jsonRespone = await response.json();
        console.log(jsonRespone);

    } catch (error) {
        console.log(error);

    }
};
fetchPost();