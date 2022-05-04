import { canonicalProducts } from './product-details';

function createFromHTML(html) {
  const div = window.document.createElement('div'); //eslint-disable-line
  div.innerHTML = html;
  return div.childNodes[0];
}

function createMobileDropdown(products) {
  const { flagships, others, resources, abouts } = products;

  function createListItem(obj) {
    return `<li class="global-nav__list-item">
        <a class="global-nav__link" href=${obj.url}>${obj.title}</a>
      </li>`;
  }

  const mobileFlagships = flagships
    .map(flagship => createListItem(flagship))
    .join('');

  const mobileOthers = others.map(other => createListItem(other)).join('');

  const mobileResources = resources
    .map(resource => createListItem(resource))
    .join('');

  const mobileAbouts = abouts.map(about => createListItem(about)).join('');

  const mobileDropdown = `<div class="global-nav__mobile-strip">
      <div class="global-nav__row">
        <h3 class="global-nav__muted-heading global-nav__expanding-row">Products</h3>
        <ul class="global-nav__split-list">
          ${mobileFlagships}
        </ul>
      </div>
      <div class="global-nav__row">
        <h3 class="global-nav__muted-heading global-nav__expanding-row">Also from Canonical</h3>
        <ul class="global-nav__split-list">
          ${mobileOthers}
        </ul>
      </div>
      <div class="global-nav__row">
        <h3 class="global-nav__muted-heading global-nav__expanding-row">Resources</h3>
        <ul class="global-nav__split-list">
          ${mobileResources}
        </ul>
      </div>
      <div class="global-nav__row">
        <h3 class="global-nav__muted-heading global-nav__expanding-row">About</h3>
        <ul class="global-nav__split-list u-no-margin--bottom">
          ${mobileAbouts}
        </ul>
      </div>
    </div>`;

  return mobileDropdown;
}

function createProductDropdown(products) {
  const { flagships, others, resources, abouts } = products;

  function createLinkListItems(item) {
    const items = item.links
      .map(link => {
        const itemMarkup = `<li class="global-nav__list-item">
        <a class="global-nav__link" href="${link.url}">
          ${link.text}&nbsp;&rsaquo;
        </a>
      </li>`;

        return itemMarkup;
      })
      .join('');

    return items;
  }

  const productFlagships = flagships
    .map((flagship, index) => {
      let linkList = '';

      if (flagship.links) {
        linkList = `<ul class="global-nav__inline-list .u-no-padding--bottom">
          ${createLinkListItems(flagship)}
        </ul>`;
      }

      let flagshipMarkup = `<li class="global-nav__matrix-item">
          <a class="global-nav__link" href=${flagship.url}>
            <img class="global-nav__matrix-image" src=${flagship.logoUrl} width="32" height="32" alt="">
            <h4 class="global-nav__matrix-title">${flagship.title}&nbsp;&rsaquo;</h4>
          </a>
          <div class="global-nav__matrix-content">
            <p class="global-nav__matrix-desc">${flagship.description}</p>
            ${linkList}
          </div>
        </li>`;

      // Check whether to add extra empty matrix items
      if (index === flagships.length - 1) {
        const extraMatrixCount = (2 * flagships.length) % 3;
        for (let i = 0; i < extraMatrixCount; i += 1) {
          flagshipMarkup += `<li class="global-nav__matrix-item">
              &nbsp;
            </li>`;
        }
      }

      return flagshipMarkup;
    })
    .join('');

  const productOthers = others
    .map((other, index) => {
      let linkList = '';

      if (other.links) {
        linkList = `<ul class="global-nav__inline-list .u-no-padding--bottom u-no-padding--left">
          ${createLinkListItems(other)}
        </ul>`;
      }

      let otherMarkup = `<li class="global-nav__matrix-item">
          <div class="global-nav__matrix-content">
            <h4 class="global-nav__matrix-title"><a class="global-nav__link" href=${other.url}>${other.title}&nbsp;&rsaquo;</a></h4>
            <p class="global-nav__matrix-desc u-no-margin--left">${other.description}</p>
            ${linkList}
          </div>
        </li>`;

      // Check whether to add extra empty matrix items
      if (index === others.length - 1) {
        const extraMatrixCount = (2 * others.length) % 3;
        for (let i = 0; i < extraMatrixCount; i += 1) {
          otherMarkup += `<li class="global-nav__matrix-item">
              &nbsp;
            </li>`;
        }
      }

      return otherMarkup;
    })
    .join('');

  const productResources = resources
    .map(resource => {
      const resourceMarkup = `<li class="global-nav__list-item">
          <a class="global-nav__link" href=${resource.url} title="Visit ${resource.title}">${resource.title}</a>
        </li>`;
      return resourceMarkup;
    })
    .join('');

  const productAbouts = abouts
    .map(about => {
      const aboutMarkup = `<li class="global-nav__list-item">
          <a class="global-nav__link" href=${about.url}>${about.title}</a>
        </li>`;
      return aboutMarkup;
    })
    .join('');

  const mobileDropdown = createMobileDropdown(products);

  const productDropdown = `${mobileDropdown}
    <div class="global-nav__strip u-hide--mobile">
      <div class="global-nav__row is-bordered">
        <ul class="global-nav__matrix">
          ${productFlagships}
        </ul>
      </div>
    </div>
    <div class="global-nav__strip u-hide--mobile">
      <div class="global-nav__row">
        <div class="global-nav__flex-container">
          <div class="global-nav__others-col">
            <h3 class="global-nav__muted-heading">Also from Canonical</h3>
            <div class="global-nav__matrix">
              ${productOthers}
            </div>
          </div>
          <div class="global-nav__resources-col">
            <h3 class="global-nav__muted-heading">Resources</h3>
            <ul class="global-nav__split-list">
              ${productResources}
            </ul>
            <h3 class="global-nav__muted-heading">About</h3>
            <ul class="global-nav__split-list">
              ${productAbouts}
            </ul>
          </div>
        </div>
      </div>
    </div>`;

  return productDropdown;
}

function addListeners(wrapper) {
  const headerLinks = wrapper.querySelectorAll(
    '.global-nav__dropdown-toggle .global-nav__header-link-anchor'
  );
  const dropdownContainer = wrapper.querySelector('.global-nav__dropdown');
  const dropdownContents = wrapper.querySelectorAll(
    '.global-nav__dropdown-content'
  );
  const expandingRows = wrapper.querySelectorAll('.global-nav__expanding-row');
  const overlay = wrapper.querySelector('.global-nav__overlay');

  function closeNav() {
    dropdownContainer.classList.remove('show-content');

    headerLinks.forEach(link => {
      const anchor = link.querySelector('.global-nav__header-link-anchor');

      link.classList.remove('is-selected');

      if (anchor) {
        anchor.setAttribute('aria-expanded', 'false');
      }
    });

    dropdownContents.forEach(menu => {
      menu.setAttribute('aria-hidden', 'true');
    });

    // we are hiding dropdown content after the animation
    // to prevent it from being focusable
    // 500ms is hardcoded here, which should be enough for
    // most of Vanilla animation speeds
    // setTimeout(() => {
    dropdownContents.forEach(menu => {
      menu.classList.add('u-hide');
    });
    // }, 500);

    overlay.classList.remove('show-overlay');
  }

  function openDropdown(headerLink) {
    const targetMenuId = headerLink.getAttribute('href');
    const targetMenu = wrapper.querySelector(targetMenuId);

    headerLink.classList.add('is-selected');
    headerLink.setAttribute('aria-expanded', 'true');

    dropdownContents.forEach(menu => {
      if (menu !== targetMenu) {
        menu.classList.add('u-hide');
        menu.setAttribute('aria-hidden', 'true');
      }
    });

    targetMenu.classList.remove('u-hide');
    targetMenu.setAttribute('aria-hidden', 'false');

    overlay.classList.add('show-overlay');
  }

  headerLinks.forEach(headerLink => {
    headerLink.addEventListener('click', e => {
      e.preventDefault();

      if (dropdownContainer.classList.contains('show-content')) {
        if (headerLink.classList.contains('is-selected')) {
          if (e.target === headerLink) {
            closeNav();
          }
        } else {
          headerLinks.forEach(link => link.classList.remove('is-selected'));
          openDropdown(headerLink);
        }
      } else {
        dropdownContainer.classList.add('show-content');
        openDropdown(headerLink);
      }

      e.stopPropagation();
    });
  });

  expandingRows.forEach(expandingRow => {
    expandingRow.addEventListener('click', e => {
      e.target.classList.toggle('is-active');
    });
  });

  overlay.addEventListener('click', closeNav);
}

export const createNav = ({ maxWidth = '68rem' } = {}) => {
  // Recruitment call to action
  // eslint-disable-next-line no-console
  console.log(
    'Interested in what makes us tick? Then we are interested in you! See our jobs page for more info: http://ubunt.eu/dev-jobs'
  );

  const container = document.querySelector('.global-nav');

  // Build global nav components
  const skipLink = createFromHTML(
    '<div class="skip-content" role="navigation"><a href="#main-content">Skip to main content</a></div'
  );
  const overlay = createFromHTML('<div class="global-nav__overlay"></div>');

  const navItem =
    createFromHTML(`<li class="p-navigation__item--dropdown-toggle global-nav__dropdown-toggle" id="all-canonical">
      <a href="#canonical-products" aria-controls="canonical-products" class="p-navigation__link global-nav__header-link-anchor ">All Canonical</a>
    </li><`);

  const navDropdown = createFromHTML(
    `<div class="global-nav__dropdown">
      <div class="global-nav__dropdown-content u-hide" aria-hidden="true" id="canonical-products" style="max-width:${maxWidth}">
        ${createProductDropdown(canonicalProducts)}
      </div>
    </div>`
  );

  // Attach to the DOM
  document.body.insertBefore(skipLink, document.body.firstElementChild); //eslint-disable-line
  navItem.appendChild(navDropdown);
  navItem.appendChild(overlay);

  if (container) {
    container.prepend(navItem);
    // Add event listeners
    addListeners(container);
  }
};
