let dropDownList = document.getElementById("drop-down"),
    getUsersBtn = document.getElementById("get-user-details"),
    details = document.querySelector('#details')

const Users_URL = "https://jsonplaceholder.typicode.com/users";

//fetch users
fetch(Users_URL)
    .then((response) => response.json())
    .then((jsonRes) => fillMenue(jsonRes));

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