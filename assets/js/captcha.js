
// var a = Math.ceil(Math.random()*(0 + 9999));
// var c = a;

// function captcha() {
//   document.getElementById('text').innerHTML = '<div class="captcha">' + a + '</div>' + 'прикол';
// }

// function checkCaptcha() {
//   var d = document.getElementById('captchaEdit').value;

//   if (d == c) {
//     alert('Правильный ответ!');
//     window.location.href = "index.html";
//   } else {
//     alert('Неправильный ответ, попробуйте еще раз.');
//     // Генерируем новое число
//     a = Math.ceil(Math.random() * (0 + 9999));
//     c = a;
//     captcha(); // Обновляем CAPTCHA
//   }
// }
 
var firstValue = Math.ceil(Math.random()*(0 + 99));
var secondValue = Math.ceil(Math.random()*(0 + 99));
var result = firstValue + secondValue;
var operator = '+'
var c = result;

function captcha() {
  document.getElementById('text').innerHTML = '<div class="captcha">' + `${firstValue}` + ` ${operator} `+ `${secondValue}`+ '</div>' + 'Решите пример';
}

function checkCaptcha() {
  var d = document.getElementById('captchaEdit').value;

  if (d == c) {
    alert('Правильный ответ!');
    window.location.href = "index.html";
  } else {
    alert('Неправильный ответ, попробуйте еще раз.');
    window.location.reload();
    
    // Генерируем новое число
    var firstValue = Math.ceil(Math.random()*(0 + 99));
    var secondValue = Math.ceil(Math.random()*(0 + 99));
    var result = firstValue + secondValue;
    c = result;
    captcha(); // Обновляем CAPTCHA
  }
}
 
