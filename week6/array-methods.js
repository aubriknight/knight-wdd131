
// foreach 
// looping through the list, not really changing it

// map 
// makes a new array with changed values from the old array
// keeps old array the same

// const numbers = [1, 2, 3, 4]
// const numbersDoubled = numbers.map(() => { 
//      return num * 2;
// });
// console.log(numbersDoubled);

// filter
// gets a new array but not all the data

// const evenNumbers = numbers.filter((num) => {
//     return num % 2 === 0;
// });
// console.log(evenNumbers);

// an object is a dictionary (mostly)

// reduce
// gets one value back

// const sum = numbers.reduce((total, num) => {
//     return total + num;
// });
// console.log(sum);

function convert(grade) {
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const upperWords = words.map(item => item.toUpperCase());

const students = [
    { last: 'Andrus', first: 'Aaron', grade: "A"},
    { last: 'Masa', first: 'Manny', grade: "C"},
    { last: 'Tanda', first: 'Tamanda', grade: "B"}
];

const tableBody = document.getElementById('studentTable');

students.forEach(student => {
    const tr = document.createElement('tr');
    const fruit = upperWords[Math.floor(Math.random() * upperWords.length)];
    const letterGrade = convert(student.grade)

    tr.innerHTML = `
                <td>${student.first} ${student.last}</td>
                <td>${student.grade}</td>
                <td>${letterGrade}</td>
                <td>${fruit}</td>
            `;

    tableBody.appendChild(tr);
});

