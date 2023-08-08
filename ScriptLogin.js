const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click",() =>{
    container.classList.add("right-panel-active");
})
loginButton.addEventListener("click",() =>{
    container.classList.remove("right-panel-active");
})

/*check form*/
const username = document.getElementById('username');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('password');

function Register(){
    if(name1.value == ""){ 
        alert("Vui lòng nhập tên của bạn");
        name1.focus();  
        return false;    
    }
    if(username.value != ""){
        if(username.value.length < 8){
            alert("Vui lòng nhập tên đăng nhập nhiều hơn 8 ký tự");
            username.focus();
            return false;
        }
    }
    else{
        alert("Vui lòng nhập tên đăng nhập");
        username.focus();
        return false;
    }
    if(email.value == ""){
        alert("Vui lòng nhập Email của bạn");
        email.focus();
        return false;
    }
    if(pass.value == ""){
        alert("Vui lòng nhập mật khẩu của bạn");
        pass.focus();
        return false;
    }
    const user = {
        name1 :name1.value,
        username : username.value,
        email : email.value,
        pass :pass.value,
    }
    let json = JSON.stringify(user);
    localStorage.setItem(username.value,json);
    alert("Chúc mừng bạn !!! Đã đăng ký thành công");
}
function login(){
    var username2 = document.getElementById('username2');
    var pass2 = document.getElementById('password2');
    const data = JSON.parse(localStorage.getItem(username2.value));
    if(username2.value == ""){ 
        alert("Vui lòng nhập tên đăng nhập của bạn");
        name1.focus();  
        return false;    
    }
    else{
        if(pass2.value == ""){
            alert("Vui lòng nhập mật khẩu của bạn");
            pass2.focus(); 
            return false;
        }
        if(data.username == username2.value && data.pass == pass2.value){
            alert("Đăng nhập thành công!!!");
            setInterval(hrefTo(),10000);
            return true;

        }
    }
    alert("Đăng nhập không thành công, Vui lòng kiểm tra lại tên đăng nhập và mật khẩu !!!");
    return false;
    
}
function hrefTo(){
    window.open("Index.html");
}

