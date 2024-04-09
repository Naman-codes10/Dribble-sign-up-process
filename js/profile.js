const avatarPreview = document.getElementById('avatarPreview');
const chooseImageBtn = document.getElementById('chooseImageBtn');
const locationInput = document.getElementById('locationInput');
const nextBtn = document.getElementById('nextBtn');

chooseImageBtn.addEventListener('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      avatarPreview.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
  fileInput.click();
});

nextBtn.addEventListener('click', () => {
  const avatar = avatarPreview.src;
  const location = locationInput.value;
  // Here, you can send the avatar and location data to a server or handle it locally as needed
  console.log('Avatar:', avatar);
  console.log('Location:', location);
});