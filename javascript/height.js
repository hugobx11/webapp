window.addEventListener('resize', updateMainHeight);

function updateMainHeight() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;

    const main = document.querySelector('main');

    main.style.minHeight = `calc(100vh - ${headerHeight}px - ${footerHeight}px - 21px)`;
}

updateMainHeight();
