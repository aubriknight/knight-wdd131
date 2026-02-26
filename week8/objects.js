
// const aCourse = {
//     code: 'CSE121b',
//     name: 'Javascript Language',
//     logo: 'images/js-logo.png'
//   };
            


// sections: [
//     { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
//     { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
//     ]
            


// enrollStudent: function () {
//         console.log('student enrolled');
//       }
            


const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      }
  };

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
      
const newSectionForm = document.querySelector("#newSectionForm");
newSectionForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the form from refreshing the page
    const sectionNum = aCourse.sections.length; // get the value from the form input
    const roomNum = document.querySelector("#newRoomNumber").value;
    const days = document.querySelector("#newDays").value;
    const instructor = document.querySelector("#newInstructor").value;
    const enrolled = document.querySelector("#enrolled").value;
    aCourse.sections.push({
        sectionNum,
        roomNum,
        enrolled,
        days,
        instructor
    });
    newSectionForm.reset(); // clear the form inputs
    // aCourse.sections.push(newSection);
    renderSections(aCourse.sections);
});