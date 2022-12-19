const commentsSection = document.querySelector(".comments");

// SECTION HEADER
let header = document.createElement("h2");
header.classList.add("comments__header");
header.classList.add("section__header");
header.innerText = "Join the Conversation";
commentsSection.appendChild(header);

// -------------------------------------------------------------
// FORM BUILDING
// -------------------------------------------------------------

// COMMENT FORM DIV
let form = document.createElement("form");
form.classList.add("comments__form");
commentsSection.appendChild(form);

// AVATAR
let avatar = document.createElement("div");
avatar.classList.add("comments__pfp-box");
avatar.classList.add("comments__pfp-box--form");
form.appendChild(avatar);

// INPUTS DIV
let inputsDiv = document.createElement("div");
inputsDiv.classList.add("comments__input");
form.appendChild(inputsDiv);

// NAME LABEL
let nameLabel = document.createElement("label");
nameLabel.classList.add("comments__form-name");
nameLabel.for = "name";
nameLabel.name = "name";
nameLabel.innerText = "NAME";
inputsDiv.appendChild(nameLabel);

// NAME INPUT
let nameInput = document.createElement("input");
nameInput.classList.add("comments__form-name");
nameInput.type = "text";
nameInput.name = "name";
nameInput.placeholder = "Enter your name";
nameInput.required = true;
inputsDiv.appendChild(nameInput);

// COMMENT LABEL
let commentLabel = document.createElement("label");
commentLabel.classList.add("comments__form-text");
commentLabel.for = "comment";
commentLabel.name = "comment";
commentLabel.innerText = "COMMENT";
inputsDiv.appendChild(commentLabel);

// COMMENT INPUT
let commentInput = document.createElement("textarea");
commentInput.classList.add("comments__form-text");
commentInput.name = "comment";
commentInput.placeholder = "Add a new comment";
commentInput.required = true;
inputsDiv.appendChild(commentInput);

// SUBMIT BUTTON
let button = document.createElement("button");
button.classList.add("comments__button");
button.innerText = "COMMENT";
inputsDiv.appendChild(button);

// -------------------------------------------------------------
// DISPLAY COMMENTS FUNCTION
// -------------------------------------------------------------

// BUILD COMMENTS DISPLAY DIV
let allCommentsBox = document.createElement("div");
allCommentsBox.classList.add("comments__all-comments");
allCommentsBox.innerHTML = "";
commentsSection.appendChild(allCommentsBox);

displayComments = (commentData) => {
  // BUILDING COMMENT CARDS

  commentData.forEach((comment) => {
    // COMMENT BOX
    let commentBox = document.createElement("div");
    commentBox.classList.add("comments__box");
    commentBox.innerHTML = "";
    allCommentsBox.appendChild(commentBox);

    // AVATAR
    let avatar = document.createElement("div");
    avatar.classList.add("comments__pfp-box");
    commentBox.appendChild(avatar);

    // TEXT DIV
    let textDisplay = document.createElement("div");
    textDisplay.classList.add("comments__text-display");
    commentBox.appendChild(textDisplay);

    // NAME-DATE DIV
    let nameDateDiv = document.createElement("div");
    nameDateDiv.classList.add("comments__name-date");
    textDisplay.appendChild(nameDateDiv);

    // NAME
    let name = document.createElement("p");
    name.classList.add("comments__name");
    name.innerText = comment.name;
    nameDateDiv.appendChild(name);

    // DATE
    let date = document.createElement("p");
    date.classList.add("comments__date");
    date.innerText = new Date(comment.timestamp).toLocaleDateString();
    nameDateDiv.appendChild(date);

    // COMMENT
    let commentText = document.createElement("p");
    commentText.classList.add("comments__comment");
    commentText.innerText = comment.comment;
    textDisplay.appendChild(commentText);
  });
};

// -------------------------------------------------------------
// API
// -------------------------------------------------------------

// -- -------------  GET API DATA & DISPLAY COMMENTS------------- --

let commentsUrl = "https://project-1-api.herokuapp.com/comments?";
let apiKey = "api_key=556d9ea4-0972-48e0-940f-2466d2396117";

const getComments = () => {
  axios
    .get(commentsUrl + apiKey)
    .then((result) => {
      let comments = result.data;
      displayComments(
        comments.sort(function (x, y) {
          return y.timestamp - x.timestamp;
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
};
getComments();

// -- -------------  COMMENT FORM LOGIC ------------- --

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };

  axios
    .post(commentsUrl + apiKey, newComment)
    .then(() => {
      getComments();
    })
    .catch((error) => {
      console.error(error);
    });

  event.target.reset();
});
