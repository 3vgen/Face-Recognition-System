        const captchaQuestion = document.getElementById('captcha-question');
        const captchaInput = document.getElementById('captcha-input');
        const checkButton = document.getElementById('captcha-check');
        const errorMessage = document.getElementById('error-message');

        // Генерация случайного арифметического примера
        function generateCaptchaQuestion() {
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            const operators = ['+', '-', '*'];
            const operator = operators[Math.floor(Math.random() * operators.length)];
            return ${num1} ${operator} ${num2} = ?;
        }

        // Проверка введенного ответа
        function checkCaptcha() {
            const userAnswer = parseInt(captchaInput.value.trim(), 10); // Преобразуем в число
            const questionText = captchaQuestion.textContent; // Получаем текст вопроса
            const [num1, operator, num2] = questionText.split(' ');
            const correctAnswer = eval(${num1}${operator}${num2}); // Вычисляем правильный ответ

            if (userAnswer === correctAnswer) {
                errorMessage.textContent = '';
                // Если CAPTCHA верна, вы можете перенаправить пользователя или выполнить другие действия
                alert('CAPTCHA верна!');
            } else {
                errorMessage.textContent = 'Неверный ответ!';
            }
        }

        // Инициализация при загрузке страницы
        captchaQuestion.textContent = generateCaptchaQuestion();
        checkButton.addEventListener('click', checkCaptcha);
