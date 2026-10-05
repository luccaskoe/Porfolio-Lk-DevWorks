// FAQ
const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const opening = !item.classList.contains('open');
    items.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', false);
    });
    if (opening) {
      item.classList.add('open');
      item.querySelector('.faq-q').setAttribute('aria-expanded', true);
    }
  });
});
