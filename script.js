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

function clear_loc() {
    alert("You will be logged out of all the accounts");
    localStorage.clear();
    window.location.href = "index.html";
}

function checkprof(num) {
    // console.log("Profile Checked");
    localStorage.setItem("profnum", num);
}

function videoembed(ch) {
    // console.log("Choosen");
    localStorage.setItem("Choice", ch);
    window.open("video.html", "_blank");
}

function compare() {
    // console.log("compared");
    let prof = localStorage.getItem("profnum");
    if (prof == "1") {
        myprofvid();
    }
    else if (prof == "2") {
        frontmanvid();
    }
    else if (prof == "3") {
        randomvid();
    }
}

function myprofvid() {
    // console.log("myprof run");
    const anime = [
        "https://www.youtube.com/embed/BHUPZpSKkhk?si=dZF5tz_Hv43mmhC7",
        "https://www.youtube.com/embed/vGuQeQsoRgU?si=JHb_VHzMK-dkt5rJ",
        "https://www.youtube.com/embed/pkKu9hLT-t8?si=4Z86ov99PsvS7jNe",
        "https://www.youtube.com/embed/OOmRInABehI?si=mO5KjLkZ8fNAPJ0F",
        "https://www.youtube.com/embed/TRr_dS2REo4?si=yM4bYGJBhFjMlklm",
        "https://www.youtube.com/embed/VwwZU7YgC6A?si=nuf1v-jYQvT-ujZp",
        "https://www.youtube.com/embed/22R0j8UKRzY?si=sz2mPczRDJ2uUlEe",
        "https://www.youtube.com/embed/1KMcoJBMWE4?si=Q1ZKiOxgwm5HPA06",
        "https://www.youtube.com/embed/qE27ziji4Wc?si=SZfnybvVW5TwL3Sx",
        "https://www.youtube.com/embed/TXSBIvoQIFw?si=nG1juNphebXLCXlh"
    ];

    let choice = localStorage.getItem("Choice");
    document.getElementById("VideoPlayer").src = anime[choice] + "&autoplay=1";

}

function frontmanvid() {
    // console.log("frontman run");
    const shows = [
        "https://www.youtube.com/embed/fXmAurh012s?si=KgQgLcmxL_5ExlpR",
        "https://www.youtube.com/embed/oZn3qSgmLqI?si=xwp78_s5fglFIY8L",
        "https://www.youtube.com/embed/ILWJWR36bIk?si=juXNtmRGMrDLuMWX",
        "https://www.youtube.com/embed/_EonRi0yQOE?si=DF0vObZ9lnmruI2X",
        "https://www.youtube.com/embed/8AcNEVUzV4o?si=QddfIv_0VyCav84E",
        "https://www.youtube.com/embed/KYD__HR-oac?si=i4MDd1o5JDgzBO-N",
        "https://www.youtube.com/embed/oVzVdvGIC7U?si=4DTNz6lH2O9-ii1r",
        "https://www.youtube.com/embed/oqxAJKy0ii4?si=6LGqtx84gF83cT3H",
        "https://www.youtube.com/embed/b9EkMc79ZSU?si=4AUE0b5vyO6IIHnk",
        "https://www.youtube.com/embed/cUnkjEIW2-o?si=xBjGZVmkvHqQK-Q_",

    ];

    let choice = localStorage.getItem("Choice");
    document.getElementById("VideoPlayer").src = shows[choice] + "&autoplay=1";

}

function randomvid() {
    // console.log("random executed");
    const movies = [
        "https://www.youtube.com/embed/kBskrYZfhw8?si=-6DzBSkcCJRmiPzF",
        "https://www.youtube.com/embed/BKOVzHcjEIo?si=sEt5vAPc6IlLH_5g",
        "https://www.youtube.com/embed/KlfUbZJVInA?si=kiwgOH19ljAXhivj",
        "https://www.youtube.com/embed/tVMAQAsjsOU?si=jiQAfTe1_PkOD7ii",
        "https://www.youtube.com/embed/qGqiHJTsRkQ?si=yvmWhYx4VhMZDcAu",
        "https://www.youtube.com/embed/Y8yvXoyLPvM?si=R9NXhgJYjHHJOzfj",
        "https://www.youtube.com/embed/v8yrZSkKxTA?si=BmRfprF1hrhlqpTn",
        "https://www.youtube.com/embed/cqGjhVJWtEg?si=2oMEjaFt5Y47vV3d",
        "https://www.youtube.com/embed/hxkKeniT-0Q?si=LR2iLxPzT1bEyVE3",
        "https://www.youtube.com/embed/p8HQ2JLlc4E?si=d8fSdpIxaPvvA5ta"
    ];

    let choice = localStorage.getItem("Choice");
    document.getElementById("VideoPlayer").src = movies[choice] + "&autoplay=1";

}
