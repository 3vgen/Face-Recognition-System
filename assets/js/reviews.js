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


function extractLinks(text) {
  // Использовать регулярное выражение для поиска ссылок в тексте
  const regex = /(?:https?|ftp):\/\/[\w/\-?=%.]+\.[\w/\-?=%.]+/g;

  // Удалить найденные ссылки из текста
  const textWithoutLinks = text.replace(regex, "");

  // Вернуть текст без ссылок
  return textWithoutLinks;
}

const itemsList = document.getElementById('items-list');
    const addItemButton = document.getElementById('submit-comment');
    const deleteItemButton = document.getElementById('delete-comment');

    const itemTextInput = document.getElementById('name');
    const itemMessageInput = document.getElementById('message')

    addItemButton.addEventListener('click', () => {
      const itemText = itemTextInput.value.trim();
      const itemMessageText = itemMessageInput.value.trim();
      const textWithoutLinks = extractLinks(itemMessageText)
      const newItem = document.createElement('div');
      newItem.classList.add('container');
      // newItem.textContent = itemText;
      newItem.innerHTML = `<p><span>${itemText}</span></p>
      <p>${textWithoutLinks}</p>`

      itemsList.appendChild(newItem);
    });

    deleteItemButton.addEventListener('click', () => {
      location.reload(true);
    });