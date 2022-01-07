let dropDownList = document.getElementById("drop-down"),
    getUsersBtn = document.getElementById("get-user-details"),
    details = document.querySelector('#details')
const Users_URL = "https://jsonplaceholder.typicode.com/users";


//fetch users without async
// function getResponse() {
//     return response = new Promise((resolve, rejcet) => {
//             fetch(Users_URL).then(userData => resolve(userData))    //Explist
//         })
//         .then((userData) => userData.json())
// }

//fetch users without async
async function getResponse() {
    let response = await fetch(Users_URL),
        userData = response.json();
    return userData
}

getResponse().then((userData) => fillMenue(userData))


//  fill them in drop down
let fillMenue = (jsonRes) => {
    getUsersBtn.removeAttribute("disabled");
    for (let item of jsonRes) {
        dropDownList.innerHTML += `<option value=${item.id}>${item.name}</option>`;
    }
};

//show single user details on select
let showUserDetails = () => {
    fetch(`${Users_URL}?id=${dropDownList.value}`)
        .then((response) => response.json())
        .then((data) => {
            let userData = data[0];
            details.innerHTML = "";
            details.innerHTML += `
                name : ${userData.name} ,</br>
                username : ${userData.username} ,</br>
                email : ${userData.email} ,</br>
                phone : ${userData.phone} ,</br>
            `;
        });
};

getUsersBtn.addEventListener("click", showUserDetails);