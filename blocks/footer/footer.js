import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  const snsLogos = footer.querySelectorAll(".footer-sns-logo ul li");

  snsLogos.forEach((li) => {
    if (li.innerText === "Facebook"){
      li.className = "fa-brands fa-facebook-f"
      li.innerText = ""
    } else if (li.innerText === "Twitter"){
      li.className = "fa-brands fa-twitter"
      li.innerText = ""
    } else if (li.innerText === "instagram"){
      li.className = "fa-brands fa-instagram"
      li.innerText = ""
    }
  })



  block.append(footer);
}
