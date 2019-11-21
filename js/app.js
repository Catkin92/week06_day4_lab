document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const textTitle = document.querySelector('#title');
  // textTitle.addEventListener('input', handleFormSubmit);
  //
  // const textAuthor = document.querySelector('#author');
  // textAuthor.addEventListener('input', handleFormSubmit);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  console.log(event);

  const inputTitle = document.createElement('li');
  inputTitle.textContent = `Title: ${event.target.title.value}`;


  const inputAuthor = document.createElement('li');
  inputAuthor.textContent = `Author: ${event.target.author.value}`;

  const select = document.createElement('li');
  select.textContent = `Category: ${event.target.category.value}`;
  // console.log(event.target.title.value);



  const item = document.querySelector('ul');
  item.appendChild(inputTitle);
  item.appendChild(inputAuthor);
  item.appendChild(select);

  document.getElementById('new-item-form').reset();
};
