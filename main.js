console.log("setup");

let team5 = [
    {
        id: 1,
        name: "Grace",
        favoriteColor: "Green",
        favoriteNumbee: "4",
        uniqueness: "She's a twin",
        email: "rgs6090@gmail.com",
        userImg: "https://avatars.githubusercontent.com/u/78558344?v=4",
    },
    {
        id: 2,
        name: "Meseret",
        favoriteColor: "Tumeric Yellow",
        favoriteNumber: "3",
        uniqueness: "9 siblings",
        email: "nedafh4@gmail.com",
        userImg: "https://avatars.githubusercontent.com/u/86808221?v=4",
    },
    {
        id: 3,
        name: "Derek M.",
        favoriteColor: "Blue",
        favoriteNumber: "5",
        uniqueness: "Arthritc Knees",
        email: "laxmalone@gmail.com",
        userImg: "https://avatars.githubusercontent.com/u/77118878?v=4"
    },
    {
        id: 4,
        name: "Derek B.",
        favoriteColor: "Green",
        favoriteNumber: "5",
        uniqueness: "Excellent vision",
        email: "dbaylor25@gmail.com",
        userImg: "https://avatars.githubusercontent.com/u/83030603?v=4",
    },
];


// team5.forEach(memberObj) => {
//     console.log(memberObj.name);
// }

// const filterFavColor = (array, color) =>{
//    return array.filter(memberObj => memberObj.favoriteColor === color );
// }
// const filterFavNum = (array, number) =>{
//     return array.filter(memberObj => memberObj.favoriteNumber === 5 )
//  }

// console.log(filterFavColor(team5, "Green"),filterFavNum,"5");

//  const teamFilter = (array = null, property = null, value = null) =>{
//      return array.filter(memberObj => memberObj[property] === value); 
//  };
//  console.log(teamFilter());
  
const divElement = document.querySelector('#main');
divElement.innerHTML = "Main Homepage";