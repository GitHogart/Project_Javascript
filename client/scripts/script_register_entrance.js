const button_register1 = document.getElementById("register_form1");
const button_register2 = document.getElementById("register_form2");

const button_entrance1 = document.getElementById("entrance_form1");
const button_entrance2 = document.getElementById("entrance_form2");




//Форма Регистрация Кнопка Регистрация
button_register1.addEventListener("click",()=>{
    const name_register = document.getElementById("Register_name");
    const family_register = document.getElementById("Register_family");
    const ID_register = document.getElementById("Register_ID");
    const Password_register = document.getElementById("Register_password");
    const Password2_register = document.getElementById("Register_return_password");
    //alert(Password_register.value)
    if(name_register.value === "" || family_register.value === "" || ID_register.value === "" || Password_register.value === "" || Password2_register.value === ""  ){
        alert("Введите данные полностью");
        return false;
    }else {
        if (Password_register.value !== Password2_register.value) {
            alert("Не удалось подтвердить пароль.Попробуйте ввести пароль еще раз.");
            Password_register.value = "";
            Password2_register.value = "";
            return false
        }else{
            if (Password_register.value.length < 8){
                alert("Пароль должен содержать более 8-ми символов")
                return false
            }else {
                document.location.href = "../html_files/MY_MAIL.html"
            }
        }
    }
})



//Форма Регистрация Кнопка Вход
button_register2.addEventListener("click",()=>{

    document.getElementById("entrance_form_id").style.display = "block";
    document.getElementById("register_form_id").style.display = "none";

})

//Форма Вход Кнопка Регистрация
button_entrance1.addEventListener("click",()=>{

    document.getElementById("entrance_form_id").style.display = "none";
    document.getElementById("register_form_id").style.display = "block";
})


//Форма Вход Кнопка Вход
const entrance_ID = document.getElementById("entrance_ID")
const entrance_pass = document.getElementById("entrance_password")

button_entrance2.addEventListener("click",()=>{

    if(entrance_ID.value === "" || entrance_pass.value === ""){
        alert("Введите данные полностью(форма входа)")
        return false;
    }else{
        if(entrance_pass.value.length < 8){
            alert("Введите пароль достаточной длины")
            return false;
        }else{
            document.location.href = "../html_files/MY_MAIL.html"
        }
    }
})
