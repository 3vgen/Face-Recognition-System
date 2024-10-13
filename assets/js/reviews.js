// const commentForm = document.getElementById('items-list');
//           const commentList = document.getElementById('comments-list');

//           commentForm.addEventListener('submit-comment', (e) => {
//             e.preventDefault();

//             const name = document.getElementById('name').value;
//             const message = document.getElementById('message').value;

//             // Создать новый элемент комментария
//             const newComment = document.createElement('div');
//             newComment.classList.add('container');
//             newComment.innerHTML = `
//               <p>${name}</p>
//               <p>${message}</p>
//             `;

//             // Добавить новый комментарий к списку комментариев
//             commentList.appendChild(newComment);

//             // Очистить форму комментариев
//             commentForm.reset();
//           });

function stemmer(word) {
  word = word.toLowerCase(); // приводим к нижнему регистру

  // Правила стемминга для русского языка:
  // 1. Удаляем окончания -ие, -ые, -ий, -ый:
  if (word.endsWith("ие") || word.endsWith("ые") || word.endsWith("ий") || word.endsWith("ый")) {
    word = word.slice(0, -2);
  }

  // 2. Удаляем окончания -ое, -ее, -ая, -яя:
  if (word.endsWith("ое") || word.endsWith("ее") || word.endsWith("ая") || word.endsWith("яя")) {
    word = word.slice(0, -2);
  }

  // 3. Удаляем окончания -ого, -его, -ими, -ыми, -ами:
  if (word.endsWith("ого") || word.endsWith("его") || word.endsWith("ими") || word.endsWith("ыми") || word.endsWith("ами")) {
    word = word.slice(0, -3);
  }

  // 4. Удаляем окончания -ом, -ем:
  if (word.endsWith("ом") || word.endsWith("ем")) {
    word = word.slice(0, -2);
  }

  // 5. Удаляем окончания -е, -а, -я:
  if (word.endsWith("е") || word.endsWith("а") || word.endsWith("я")) {
    word = word.slice(0, -1);
  }

  // 6. Удаляем окончания -ть, -ся:
  if (word.endsWith("ть") || word.endsWith("ся")) {
    word = word.slice(0, -2);
  }

  return word;
}
function hasBadWords(text) {
  const badWords = [
        "идиот",
        "глуп",
        "банан",
      ];
  const stemmedWords = text.toLowerCase().split(" ").map(word => stemmer(word));
  for (const word of stemmedWords) {
    if (badWords.some(badWord => word.includes(badWord))) {
      return true;
    }
  }
  return false;
}

function extractLinks(text) {
  // Использовать регулярное выражение для поиска ссылок в тексте
  const regex = /(?:https?|ftp):\/\/[\w/\-?=%.]+\.[\w/\-?=%.]+/g;

  // Удалить найденные ссылки из текста
  const textWithoutLinks = text.replace(regex, "");

  // Вернуть текст без ссылок
  return textWithoutLinks;
}

// function hasBadWords(text) {
//   const badWords = [
//     "идиот",
//     "глуп",
//     "банан",
//   ];
//   const stemmedWords = text.toLowerCase().split(" ").map(word => PorterStemmer.stem(word));
//   for (const word of stemmedWords) {
//     if (badWords.some(badWord => word.includes(badWord))) {
//       return true;
//     }
//   }
//   return false;
// }


const itemsList = document.getElementById('items-list');
    const addItemButton = document.getElementById('submit-comment');
    const deleteItemButton = document.getElementById('delete-comment');

    const itemTextInput = document.getElementById('name');
    const itemMessageInput = document.getElementById('message')

    addItemButton.addEventListener('click', () => {
      const itemText = itemTextInput.value.trim();
      const itemMessageText = itemMessageInput.value.trim();
      const textWithoutLinks = extractLinks(itemMessageText)
      if(hasBadWords(textWithoutLinks)){
        alert('Неправильный ответ, попробуйте еще раз.');
      }
      else{
        const newItem = document.createElement('div');
        newItem.classList.add('container');
        newItem.innerHTML = `<p><span>${itemText}</span></p>
        <p>${textWithoutLinks}</p>`
        itemsList.appendChild(newItem);
      }
      
    });

    deleteItemButton.addEventListener('click', () => {
      location.reload(true);
    });