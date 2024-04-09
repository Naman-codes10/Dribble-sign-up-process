const options = document.querySelectorAll('.option');
const checkboxes = document.querySelectorAll('input[name="option"]');

options.forEach((option, index) => {
  option.addEventListener('click', () => {
    option.classList.toggle('selected');
    checkboxes[index].checked = !checkboxes[index].checked;
  });
});