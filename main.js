const input = document.querySelector('input');

input.addEventListener('click', () => {
  if(input.checked) {
    const image = document.getElementById('image');
  const content = '<img src="images/pic_bulbon.gif" alt="">';
  image.innerHTML= content;
  } else {
    const image = document.getElementById('image');
  const content = '<img src="images/pic_bulboff.gif" alt="">';
  image.innerHTML= content;
  }
});
