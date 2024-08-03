const person = {
    name: "Jane",
    age: 28,
    address: {
      city: "San Francisco",
      state: "CA",
    },
  };
  
  // Viết một function in ra dòng chữ `Name: Jane, City: San Francisco`

function tenMoi(person){
    console.log(`Name : ${person.name} , City: ${person.address.city}`)
}
tenMoi(person)