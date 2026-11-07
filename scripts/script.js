const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseListElement = document.querySelector('#course-list');
const courseCountElement = document.querySelector('#course-count');
const filterButtons = document.querySelectorAll('.course-filter');

// Build and display one card for each course in the list.
function displayCourses(courseArray) {
    courseCountElement.textContent = `The total number of courses listed below is ${courseArray.length}.`;
    courseListElement.replaceChildren();

    courseArray.forEach((course) => {
        const courseCard = document.createElement('article');
        courseCard.classList.add('course-item', course.completed ? 'completed' : 'incomplete');

        const courseName = document.createElement('h3');
        courseName.textContent = `${course.subject} ${course.number}`;

        const courseStatus = document.createElement('p');
        courseStatus.classList.add('course-status');
        courseStatus.textContent = course.completed ? 'Completed' : 'Not completed';

        courseCard.append(courseName, courseStatus);
        courseListElement.append(courseCard);
    });
}

// Keep courses that match the selected subject. "all" matches every course.
function getFilteredCourses(selectedSubject) {
    return courses.filter((course) => {
        return selectedSubject === 'all' || course.subject === selectedSubject;
    });
}

// Update the selected button and show its matching courses.
function selectCourseFilter(selectedButton) {
    const selectedSubject = selectedButton.dataset.filter;
    const filteredCourses = getFilteredCourses(selectedSubject);

    filterButtons.forEach((button) => {
        const isSelected = button === selectedButton;
        button.classList.toggle('is-active', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
    });

    displayCourses(filteredCourses);
}

// Listen for clicks on each filter button.
filterButtons.forEach((button) => {
    button.addEventListener('click', () => selectCourseFilter(button));
});

// Show all courses when the page first loads.
displayCourses(courses);

