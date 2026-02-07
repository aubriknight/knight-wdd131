
const allRatingElems = document.querySelectorAll('article.movie p span');

allRatingElems.forEach((elem) => {
    const rating = elem.innerText.length;
    elem.setAttribute('aria-label', `${rating} out of 5 stars`);
});

// for loops 
// for(let i = 0; i < spans.length; i += 1)
//      addStars(spans[i]);
// ^ don't do this if looping through everything (it is the same as line 4)
// use if need to iterate a certain way, start at different index, break in the middle of the loop (more control)
