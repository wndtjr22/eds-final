import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);

  const snsLogos = block.querySelectorAll(".circle-image ul li .cards-card-body a");

  snsLogos.forEach((li) => {
    console.log(li)
    if (li.innerText.toLowerCase() === "facebook"){
      li.className = "fa-brands fa-facebook-f"
      li.innerText = ""
    } else if (li.innerText.toLowerCase() === "twitter"){
      li.className = "fa-brands fa-twitter"
      li.innerText = ""
    } else if (li.innerText.toLowerCase() === "instagram"){
      li.className = "fa-brands fa-instagram"
      li.innerText = ""
    }
  })
}
