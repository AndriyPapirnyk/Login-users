let alphabet = [];
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
};
for (let i = 65; i<= 90; i++) {
    alphabet.push(String.fromCharCode(i));
};
alphabet.push('а', 'б', 'в', 'г', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'О', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я');
for (let i = 48; i<= 57; i++) {
    alphabet.push(String.fromCharCode(i));
};
for (let i = 33; i<= 47; i++) {
    alphabet.push(String.fromCharCode(i));
};
for (let i = 58; i<= 64; i++) {
    alphabet.push(String.fromCharCode(i));
};
for (let i = 91; i<= 96; i++) {
    alphabet.push(String.fromCharCode(i));
};
for (let i = 123; i<= 126; i++) {
    alphabet.push(String.fromCharCode(i));
};
function chypher(password, n) {
    let res = '';
    for (let el of password) {
        let currentIndx = alphabet.indexOf(el);
        if(currentIndx>=0 && currentIndx<=25) {
            if (currentIndx + n <= 25) {
                res += alphabet[currentIndx + n];
            } else {
                res += alphabet[(currentIndx + n) - 26];
            };
        } else if(currentIndx>=26 && currentIndx<=51) {
            if (currentIndx + n <= 51) {
                res += alphabet[currentIndx + n];
            } else {
                res += alphabet[(currentIndx + n) - 26];
            };
        } else if(currentIndx>=52 && currentIndx<=83) {
            if (currentIndx + n <= 83) {
                res += alphabet[currentIndx + n];
            } else {
                res += alphabet[(currentIndx + n) - 32];
            };
        } else if(currentIndx>=84 && currentIndx<=115) {
            if (currentIndx + n <= 115) {
                res += alphabet[currentIndx + n];
            } else {
                res += alphabet[(currentIndx + n) - 32];
            };
        } else if(currentIndx>=116 && currentIndx<=125) {
            if (currentIndx + n <= 125) {
                res += alphabet[currentIndx + n];
            } else {
                res += alphabet[(currentIndx + n) - 10];
            };
        } else if(currentIndx>=126 && currentIndx<=157) {
            if (currentIndx + n <= 157) {
                res += alphabet[currentIndx + n];
            } else {
                res += alphabet[(currentIndx + n) - 32];
            };
        };
    };
    return res;
};

let key = 3;

let flexPage = localStorage.getItem('flexPage') || 'flex';
let nonePage = localStorage.getItem('nonePage') || 'none';
let db = JSON.parse(localStorage.getItem('db')) || [];
wrap.style.display = flexPage;
usersPage.style.display = nonePage;
signinBtn.onclick = function() {
    let loginData = login.value;
    let passwordData = chypher(password.value, key);
    login.value = '';
    password.value = '';
    let userData = {
        userLogin: loginData,
        userPassword: passwordData
    };
    db.push(userData);
    console.log(userData);
    localStorage.setItem('db', JSON.stringify(db));
    if(flexPage == 'flex' && nonePage == 'none' ){
        localStorage.setItem('flexPage', 'none');
        localStorage.setItem('nonePage', 'flex');
        flexPage = 'none';
        nonePage = 'flex';
        usersPage.style.display = nonePage;
        wrap.style.display = flexPage;
    };
    $('#userPlace').append('<div class="box">' + userData.userLogin + '</div>');
};
backBtn.onclick = function() {
    if(flexPage == 'none' && nonePage == 'flex' ){
        localStorage.setItem('flexPage', 'flex');
        localStorage.setItem('nonePage', 'none');
        flexPage = 'flex';
        nonePage = 'none';
        usersPage.style.display = nonePage;
        wrap.style.display = flexPage;
    };
};
loginBtn.onclick = function(){
for (let i = 0; i < db.length; i++) {
    localStorage.getItem('db', JSON.stringify(db[i].userLogin));
    localStorage.getItem('db', JSON.stringify(db[i].userPassword));
if(chypher(password.value, key) == db[i].userPassword  &&  login.value == db[i].userLogin){
    login.value = '';
    password.value = '';
if(flexPage == 'flex' && nonePage == 'none' ){
    localStorage.setItem('flexPage', 'none');
    localStorage.setItem('nonePage', 'flex');
    flexPage = 'none';
    nonePage = 'flex';
    usersPage.style.display = nonePage;
    wrap.style.display = flexPage;
}
}
} 
}

function showUsers() {
    for (let i = 0; i < db.length; i++) {
        $('#userPlace').append('<div class="box">' + db[i].userLogin + '</div>');
    };
};
showUsers();










