function toggleNavBar() {
  if (
    document
      .getElementById('menu-links')
      .className.match(/(?:^|\s)active(?!\S)/)
  ) {
    document.getElementById('menu-links').className = document
      .getElementById('menu-links')
      .className.replace(/(?:^|\s)active(?!\S)/g, '');
  } else {
    document.getElementById('menu-links').className += ' active ';
  }
}
