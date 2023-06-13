/*
TASK #1========================================================================================== 
За допомогою методів об’єкта window створити:
        1) нове вікно розміром 300х300 пікселів.
        2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
        3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
        4) із затримкою 2 сек закрийте вікно.
*/
// SOLUTION
// let newWindow = window.open("", "", "width = 300, height = 300");
// setTimeout(function () {
//   newWindow.resizeTo(500, 500);
// }, 2000);
// setTimeout(function () {
//   newWindow.moveTo(200, 200);
// }, 4000);
// setTimeout(function () {
//   newWindow.close();
// }, 6000);

/*
TASK #2========================================================================================== 
Для заданої HTML-сторінки:
<p id ='text'>I learning JavaScript events!</p> 
<div>
        <button . . . . . >Change style!</button>
</div>
напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
*/
// SOLUTION
// const text = document.querySelector("#text");
// const btn = document.getElementsByTagName("button")[0];
// function changeCSS() {
//   text.style.color = "orange";
//   text.style.fontSize = "20px";
//   text.style.fontFamily = "Comic Sans MS";
// }

// btn.addEventListener("click", function (event) {
//   event.target.style;
//   changeCSS();
// });

/*
TASK #3========================================================================================== 
Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
        1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
        2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
        3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
        4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
        Приклад – курсор наведений на лінку.
https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png
*/
// SOLUTION
// function setBackground(color) {
//   document.body.style.backgroundColor = color;
// }

/*
TASK #4========================================================================================== 
Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png
*/
// SOLUTION
// function deleteSelected() {
//   let x = document.getElementById("myList");
//   x.remove(x.selectedIndex);
// }

// SECOND VARIANT
// function deleteSelected() {
//   var myList = document.getElementById("myList");
//   var selectedIndex = myList.selectedIndex;

//   if (selectedIndex !== -1) {
//     myList.remove(selectedIndex);
//   }
// }

/*
TASK #5========================================================================================== 

Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Приклад роботи:
https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png
*/
// SOLUTION
// const button = document.getElementById("notificationBtn");

// button.addEventListener("click", function () {
//   document.getElementById("notificationText").innerHTML += "I was pressed!<br>";
// });

// button.addEventListener("mouseover", function () {
//   document.getElementById("notificationText").innerHTML += "Mouse on me!<br>";
// });

// button.addEventListener("mouseout", function () {
//   document.getElementById("notificationText").innerHTML +=
//     "Mouse is not on me!<br>";
// });
