const allRatingElems = document.querySelectorAll('article.book p span');

allRatingElems.forEach((elem) => {
    const rating = elem.innerText.length;
    elem.setAttribute('aria-label', `${rating} out of 5 stars`);
});