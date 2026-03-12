
/**
 * A jumbled array of letters to be sorted in alphabetical order.
 * @type {string[]}
 */
const jumbledLetters = ['E', 'l', 'z', 'o', 'w', 'r', 'd'];

/**
 * Sorts an array of letters in A → Z alphabetical order.
 *
 * @param {string} a - The first letter to compare
 * @param {string} b - The second letter to compare
 * @returns {number} Negative, positive, or zero to determine sort order
 */
jumbledLetters.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a < b) {
        return -1; // 'a' comes BEFORE 'b' → normal A → Z order
    } else if (a > b) {
        return 1;  // 'a' comes AFTER 'b' → normal A → Z order
    }
    return 0;      // equal → no change
});

console.log(jumbledLetters.join(', '));

/**
 * Sorts an array of letters in reverse alphabetical order (Z → A).
 * Uses toLowerCase() so uppercase and lowercase letters are treated equally.
 *
 * @param {string} a - The first letter to compare
 * @param {string} b - The second letter to compare
 * @returns {number} Negative, positive, or zero to determine sort order
 */
jumbledLetters.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a < b) {
        return 1;  // 'a' comes AFTER 'b' → reverse Z → A order
    } else if (a > b) {
        return -1; // 'a' comes BEFORE 'b' → reverse Z → A order
    }
    return 0;      // equal → no change
});

console.log(jumbledLetters.join(', '));

// ---------------------------------------------------------------------------


/**
 * A list of all books in the Book of Mormon with their chapter counts.
 * @type {Array<{name: string, chapters: number}>}
 */
const bookOfMormonChapters = [
    { name: '1 Nephi',          chapters: 22 },
    { name: '2 Nephi',          chapters: 33 },
    { name: 'Jacob',            chapters:  7 },
    { name: 'Enos',             chapters:  1 },
    { name: 'Jarom',            chapters:  1 },
    { name: 'Omni',             chapters:  1 },
    { name: 'Words of Mormon',  chapters:  1 },
    { name: 'Mosiah',           chapters: 29 },
    { name: 'Alma',             chapters: 63 },
    { name: 'Helaman',          chapters: 16 },
    { name: '3 Nephi',          chapters: 30 },
    { name: '4 Nephi',          chapters:  1 },
    { name: 'Mormon',           chapters:  9 },
    { name: 'Ether',            chapters: 15 },
    { name: 'Moroni',           chapters: 10 }
];

/**
 * Sorts books by chapter count, largest first (most chapters → fewest).
 *
 * @param {{ chapters: number }} a - The first book to compare
 * @param {{ chapters: number }} b - The second book to compare
 * @returns {number} Negative, positive, or zero to determine sort order
 */
bookOfMormonChapters.sort((a, b) => {
    if (a.chapters < b.chapters) {
        return 1;  // 'a' has fewer chapters → push it later in the list
    } else if (a.chapters > b.chapters) {
        return -1; // 'a' has more chapters → pull it earlier in the list
    }
    return 0;
});

console.log(bookOfMormonChapters);


// ---------------------------------------------------------------------------
// FILTER EXAMPLES — finding books whose name contains "nephi"
// ---------------------------------------------------------------------------

/**
 * All books in the Book of Mormon whose name contains "Nephi" (case-insensitive).
 * @type {Array<{name: string, chapters: number}>}
 */
const booksOfNephi = bookOfMormonChapters.filter((book) => {

    // ✅ OPTION 1 — toLowerCase() + includes()    (most beginner-friendly)
    return book.name.toLowerCase().includes('nephi');

    // ✅ OPTION 2 — toUpperCase() + includes()
    // return book.name.toUpperCase().includes('NEPHI');

    // ✅ OPTION 3 — Store the lowercased name in a variable first
    // const lowerName = book.name.toLowerCase();
    // return lowerName.includes('nephi');

    // ✅ OPTION 4 — Check both casings with OR  (no toLowerCase needed)
    // return book.name.includes('Nephi') || book.name.includes('nephi');

    // ✅ OPTION 5 — startsWith() instead of includes()
    // return book.name.toLowerCase().startsWith('nephi');

    // ✅ OPTION 6 — Compare the whole name exactly with ===
    // return book.name === '1 Nephi';

    // ✅ OPTION 7 — Regular expression with the /i flag (case-insensitive)
    // return /nephi/i.test(book.name);

});

console.log(booksOfNephi);


// ---------------------------------------------------------------------------
// USING FILTER AS A SEARCH
// ---------------------------------------------------------------------------

/**
 * Searches the Book of Mormon chapter list by name (case-insensitive).
 *
 * @param {string} searchTerm - The text to search for within book names
 * @returns {Array<{name: string, chapters: number}>} Matching books
 */
function searchBooks(searchTerm) {
    return bookOfMormonChapters.filter((book) => {
        return book.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

console.log(searchBooks('nephi')); // → 1 Nephi, 2 Nephi, 3 Nephi, 4 Nephi
console.log(searchBooks('mo'));    // → Words of Mormon, Mormon, Moroni