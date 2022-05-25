
setTimeout(function () {
    document.getElementById("load_gif_id").style.display = "none"
}, 1000)

//Кнопка ВЕРНУТЬСЯ НА ВХОД
const Register_form_btn = document.getElementById("close_form_message_btn")
Register_form_btn.addEventListener("click", () => {
    document.location.href = "../html_files/REGISTER_ENTRANCE.html"
})

//Кнопка НОВОЕ СООБЩЕНИЕ
const New_mail_btn = document.getElementById("new_mail_btn");
New_mail_btn.addEventListener("click", () => {
    document.getElementById("block_new_message_id").style.display = "block"
    document.getElementById("mail_id").style.opacity = "0.2";
})

//Кнопка закрыть в форме НОВОЕ СООБЩЕНИЕ
const close_form_new_message = document.getElementById("Close_new_message")
close_form_new_message.addEventListener("click", () => {
    document.getElementById("mail_id").style.opacity = "1";
    document.getElementById("block_new_message_id").style.display = "none"
})

//КНОПКА ОТПРАВИТЬ В ФОРМЕ НОВОЕ СООБЩЕНИЕ
const Send_new_message_btn = document.getElementById("Send_button");
Send_new_message_btn.addEventListener("click", () => {

    const Name_new_message = document.getElementById("name_new")
    const New_text_message = document.getElementById("textarea_new")

    //Контейнер для отправленных сообщений
    const container = document.getElementById("container_form_id");
    const container_form_clear = document.getElementById("clear_message_form_id")

    if (Name_new_message.value === "" || New_text_message.value === "") {
        alert("Заполните все поля!!!")
        return 0;
    }


    //Имя кому отправляем
    const Name_container = document.createElement("div");
    Name_container.className = "Name_input";
    Name_container.innerHTML = Name_new_message.value;
    Name_container.style.fontSize = "17px"

    //Отправленное сообщений
    const Textarea_container = document.createElement("div");
    Textarea_container.className = "TextArea_input";
    Textarea_container.innerHTML = New_text_message.value;

    if (New_text_message.value.length <= 60) {
        Textarea_container.innerHTML = New_text_message.value;
    } else {
        Textarea_container.innerHTML = New_text_message.value.slice(1, 40) + "...";
    }
    //Храним изначальное сообщение
    const Container_text = document.createElement("div");
    Container_text.className = "Container_text_input";
    Container_text.style.display = "none";
    Container_text.innerHTML = New_text_message.value;


    const line_div = document.createElement("hr");
    line_div.className = "hr";

    //Обьединяем имя и сообщение в один блок
    const main_div = document.createElement("div");
    main_div.className = "main_class";


    main_div.appendChild(Name_container);
    main_div.appendChild(Textarea_container);
    main_div.appendChild(Container_text);
    main_div.appendChild(line_div);
    //Добавляем к контейнеру
    container_form_clear.appendChild(main_div);

    container.appendChild(container_form_clear)
    //НАЖАТИЕ НА СООБЩЕНИЕ
    main_div.addEventListener("click", () => {

        const res_name = main_div.getElementsByClassName("Name_input")[0];
        const res_text = main_div.getElementsByClassName("Container_text_input")[0];

        document.getElementById("open_output_name").innerHTML = res_name.textContent
        document.getElementById("open_output_text").value = res_text.textContent

        document.getElementById("open_message_id").style.display = "none"
        document.getElementById("open_message_full_id").style.display = "block"
    })

    //Ведем подсчет количества сообщений в контейнере
    const Count_outgoing_message = document.getElementById("Count_outgoing_message")
    Count_outgoing_message.value = container_form_clear.childElementCount

    document.getElementById("mail_id").style.opacity = "1";
    document.getElementById("block_new_message_id").style.display = "none"


    Name_new_message.value = ""
    New_text_message.value = ""
})


//Кнопка Входящие
const Incoming_message_btn = document.getElementById("incoming_message")
Incoming_message_btn.addEventListener("click", () => {
    document.getElementById("container_form_id").style.display = "none";
    document.getElementById("outgoing_container_id").style.display = "block";
    document.getElementById("name_send_message_id").textContent = "От кого :"
})

//Кнопка Отправленные
const Outgoing_message_btn = document.getElementById("outgoing_message")
Outgoing_message_btn.addEventListener("click", () => {
    document.getElementById("outgoing_container_id").style.display = "none";
    document.getElementById("container_form_id").style.display = "block";
    document.getElementById("name_send_message_id").textContent = "Кому :";
})

//Кнопка ОЧИСТИТЬ ВСЕ
const Clear_message = document.getElementById("Clear_mail_btn")
const Clear_message_outgoing = document.getElementById("Clear_mail_outgoing_btn")

//Удаление входящих сообщений(работа бэкенда по аналогии)
//Clear_message_outgoing.addEventListener("click",()=>{
// const clear_cont = document.getElementById("clear_message_form_id")
//
// while (clear_cont.firstChild) {
//     clear_cont.removeChild(clear_cont.firstChild)
// }
// const Count_outgoing_message = document.getElementById("Count_outgoing_message")
// Count_outgoing_message.value = 0;

//})

//Удаление отправленных сообщений
Clear_message.addEventListener("click", () => {
    const clear_cont = document.getElementById("clear_message_form_id")

    while (clear_cont.firstChild) {
        clear_cont.removeChild(clear_cont.firstChild)
    }
    const Count_outgoing_message = document.getElementById("Count_outgoing_message")
    Count_outgoing_message.value = 0;

    document.getElementById("open_message_id").style.display = "block"
    document.getElementById("open_message_full_id").style.display = "none"


})
