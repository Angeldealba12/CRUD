// Arreglo con los datos a mostrar 

let usersList = [{
        name: "Angel",
        lastName: "De Alba",
        email: "angel@academlo.com"
    },
    {
        name: "Juan",
        lastName: "Martinez",
        email: "daniel@academlo.com"
    },

    {
        name: "Samanta",
        lastName: "Lopez",
        email: "samantha@academlo.com"
    },
];

let usersListUI  = document.getElementById("userList")
let userForm = document.getElementById("addUser")

const renderList = () => {
    usersListUI.innerHTML = "";

    usersList.forEach((user, index) => {        
        let  userItemDiv = document.createElement("div");
        userItemDiv.setAttribute("class", "userItem")
        usersListUI.appendChild(userItemDiv);

        let userInfoDiv = document.createElement("div");
        userInfoDiv.setAttribute("class", "userInfo")
        userItemDiv.appendChild(userInfoDiv);

        const nameUserDiv = document.createElement("p");
        const emailUserDiv = document.createElement("p");
        nameUserDiv.innerHTML = (`${user.name} ${user.lastName}`);
        emailUserDiv.innerHTML = (`${user.email}`);

        userInfoDiv.appendChild(nameUserDiv);
        userInfoDiv.appendChild(emailUserDiv);

        const actionButton = document.createElement("div");
        actionButton.setAttribute("class", "actions");
        userItemDiv.append(actionButton);

        const updateBtn = document.createElement("button");
        updateBtn.setAttribute("class", "update");
        updateBtn.addEventListener("click", () => 
        console.log('Este boton sirve para editar')
        );
        updateBtn.setAttribute('id', 'update');
        updateBtn.innerText = 'Edit';
        actionButton.appendChild(updateBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete");
        deleteBtn.addEventListener("click", () => deleteUser(index));
        console.log("Sirve para borrar un elemento");
        deleteBtn.setAttribute("id", "delete");
        deleteBtn.innerText = "Delete";

        actionButton.appendChild(updateBtn);
        actionButton.appendChild(deleteBtn);

    });
};

const createUser = event => {
    event.preventDefault();
    let user = {
        name: document.getElementById("name").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
    };
    usersList.push(user);
    renderList();
};

const deleteUser = index => {
    usersList.splice(index, 1);
    renderList();
};

userForm.addEventListener("submit", createUser);
document.addEventListener("DOMcontentLoaded", renderList());

