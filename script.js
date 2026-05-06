function login() {
    let mail = document.getElementById("mail").value;
    let passwd = document.getElementById("passwd").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === mail && users[i].password === passwd) {
            found = true;
            break;
        }

    }
    if (found) {
        window.location.href = "profiles.html";
    }
    else {
        alert("Invalid Credentials");
    }
}

function check() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let mail = document.getElementById("mail").value;

    let found = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === mail) {
            found = true;
            break;
        }
    }

    if (found) {
        window.location.href = "login.html";
    } else {
        window.location.href = "sign-up.html";
    }
}

function signup() {
    const mail = document.getElementById("mail").value;
    document.getElementById("mail").value = mail;
    const passwd = document.getElementById("passwd").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        email: mail,
        password: passwd
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account Created");
    window.location.href = "login.html";
}

function is_empty() {
    let email = document.getElementById("mail").value;
    if (email == "") {
        alert("Please enter your E-mail");
    }
    else if (email != "") {
        check();
    }
}

function save_mail() {
    let mail = document.getElementById("mail").value;
    localStorage.setItem("usrMail", mail);
}

function get_mail() {
    let mail = localStorage.getItem("usrMail");
    document.getElementById("mail").value = mail;
}

function clear_loc(){
    alert("You will be logged out of all the accounts");
    localStorage.clear();
    window.location.href = "index.html";
}