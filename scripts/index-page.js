const commentsSection = document.querySelector('.comments');

// SECTION HEADER
let header = document.createElement('h2');
header.classList.add('comments__header');
header.classList.add('section__header');
header.innerText = 'Join the Conversation';
commentsSection.appendChild(header);

// -------------------------------------------------------------
// FORM BUILDING
// -------------------------------------------------------------

// COMMENT FORM DIV
let form = document.createElement('form');
form.classList.add('comments__form');
commentsSection.appendChild(form);

// AVATAR
let avatar = document.createElement('div');
avatar.classList.add('comments__pfp-box');
avatar.classList.add('comments__pfp-box--form');
form.appendChild(avatar);

// INPUTS DIV
let inputsDiv = document.createElement('div');
inputsDiv.classList.add('comments__input');
form.appendChild(inputsDiv);

// NAME LABEL
let nameLabel = document.createElement('label');
nameLabel.classList.add('comments__form-name');
nameLabel.for = 'name';
nameLabel.innerText = 'NAME'
inputsDiv.appendChild(nameLabel);

// NAME INPUT
let nameInput = document.createElement('input');
nameInput.classList.add('comments__form-name');
nameInput.type ='text';
nameInput.name ='name';
nameInput.placeholder = 'Enter your name'
nameInput.required = true;
inputsDiv.appendChild(nameInput);

// COMMENT LABEL
let commentLabel = document.createElement('label');
commentLabel.classList.add('comments__form-text');
commentLabel.for = 'comment';
commentLabel.innerText = 'COMMENT';
inputsDiv.appendChild(commentLabel);

// COMMENT INPUT
let commentInput = document.createElement('input');
commentInput.classList.add('comments__form-text');
commentInput.type = 'textarea';
commentInput.name = 'comment';
commentInput.placeholder = 'Add a new comment';
commentInput.required = true;
inputsDiv.appendChild(commentInput);

// SUBMIT BUTTON
let button = document.createElement('button');
button.classList.add('comments__button');
button.type = 'submit';
button.innerText = 'COMMENT';
inputsDiv.appendChild(button);



// -------------------------------------------------------------
// COMMENT DATA
// -------------------------------------------------------------

commentData = [
    {
        name: 'Connor Walton',
        date: '02/17/2021',
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    },
    {
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    },
    {
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
]




// -------------------------------------------------------------
// DISPLAY COMMENTS FUNCTION
// -------------------------------------------------------------



// BUILD COMMENTS DISPLAY DIV
let allCommentsBox = document.createElement('div');
allCommentsBox.classList.add('comments__all-comments');
allCommentsBox.innerHTML = '';
commentsSection.appendChild(allCommentsBox);



displayComments = (commentArray) => {

    // CLEAR COMMENTS
    allCommentsBox.innerHTML = '';

    // REBUILD COMMENTS 
    commentArray.forEach(comment => {


        // COMMENT BOX
        let commentBox = document.createElement('div');
        commentBox.classList.add('comments__box');
        commentBox.innerHTML = '';
        allCommentsBox.appendChild(commentBox);

        // AVATAR
        let avatar = document.createElement('div');
        avatar.classList.add('comments__pfp-box');
        commentBox.appendChild(avatar);

        // TEXT DIV
        let textDisplay = document.createElement('div');
        textDisplay.classList.add('comments__text-display');
        commentBox.appendChild(textDisplay);

        // NAME-DATE DIV
        let nameDateDiv = document.createElement('div');
        nameDateDiv.classList.add('comments__name-date');
        textDisplay.appendChild(nameDateDiv);

        // NAME
        let name = document.createElement('p');
        name.classList.add('comments__name');
        name.innerText = comment.name;
        nameDateDiv.appendChild(name);

        // DATE
        let date = document.createElement('p');
        date.classList.add('comments__date');
        date.innerText = comment.date;
        nameDateDiv.appendChild(date);

        // COMMENT
        let commentText = document.createElement('p');
        commentText.classList.add('comments__comment');
        commentText.innerText = comment.comment;
        textDisplay.appendChild(commentText);

    });
}

displayComments(commentData);



// -------------------------------------------------------------
// FORM LOGIC
// -------------------------------------------------------------

const submit = document.querySelector('form');

submit.addEventListener('submit', (event) => {
    
    event.preventDefault();
    
    const name = event.target.name.value;
    const comment = event.target.comment.value;
    const date = new Date();


    const newEntry = {
        name: name,
        date: date.toLocaleDateString(),
        comment: comment,
    };


    commentData.unshift(newEntry);

    displayComments(commentData);

    event.target.reset();

    
})


