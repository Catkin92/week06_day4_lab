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
};
