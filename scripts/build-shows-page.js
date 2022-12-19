const showsSection = document.querySelector(".shows");

// SECTION HEADER
let header = document.createElement("h2");
header.classList.add("shows__header");
header.classList.add("section__header");
header.innerText = "Shows";
showsSection.appendChild(header);

// -------------------------------------------------------------
// SHOWS LAYOUT
// -------------------------------------------------------------

// TABLET/DESKTOP LABELS DIV
let labels = document.createElement("div");
labels.classList.add("shows__labels");
showsSection.appendChild(labels);

// DATE LABEL
let dateLabel = document.createElement("p");
dateLabel.classList.add("shows__label");
dateLabel.classList.add("shows__label--date");
dateLabel.innerText = "DATE";
labels.appendChild(dateLabel);

// VENUE LABEL
let venueLabel = document.createElement("p");
venueLabel.classList.add("shows__label");
venueLabel.classList.add("shows__label--venue");
venueLabel.innerText = "VENUE";
labels.appendChild(venueLabel);

// LOCATION LABEL
let locationLabel = document.createElement("p");
locationLabel.classList.add("shows__label");
locationLabel.classList.add("shows__label--location");
locationLabel.innerText = "LOCATION";
labels.appendChild(locationLabel);

// -------------------------------------------------------------
// BUILD SHOWS DISPLAY
// -------------------------------------------------------------

const listShows = (shows) => {
  shows.forEach((show) => {
    // WRAPPER WITH MOBILE BUTTON
    let eventBlock = document.createElement("div");
    eventBlock.classList.add("shows__event-block");
    eventBlock.addEventListener("mousedown", toggleActiveShow);
    showsSection.appendChild(eventBlock);

    // CONTAINER WITH TABLET/DESKTOP BUTTON
    let eventData = document.createElement("div");
    eventData.classList.add("shows__event-data");
    eventBlock.appendChild(eventData);

    // DATE CONTAINER
    let dataBlockDate = document.createElement("div");
    dataBlockDate.classList.add("shows__data-block");
    eventData.appendChild(dataBlockDate);

    let dateLabelMobile = document.createElement("p");
    dateLabelMobile.classList.add("shows__label");
    dateLabelMobile.classList.add("shows__label--date");
    dateLabelMobile.classList.add("shows__label--mobile");
    dateLabelMobile.innerText = "DATE";
    dataBlockDate.appendChild(dateLabelMobile);

    let date = document.createElement("p");
    date.classList.add("shows__info");
    date.classList.add("shows__info--date");
    date.innerText = new Date(show.date).toDateString();
    dataBlockDate.appendChild(date);

    // VENUE CONTAINER
    let dataBlockVenue = document.createElement("div");
    dataBlockVenue.classList.add("shows__data-block");
    eventData.appendChild(dataBlockVenue);

    let venueLabelMobile = document.createElement("p");
    venueLabelMobile.classList.add("shows__label");
    venueLabelMobile.classList.add("shows__label--venue");
    venueLabelMobile.classList.add("shows__label--mobile");
    venueLabelMobile.innerText = "VENUE";
    dataBlockVenue.appendChild(venueLabelMobile);

    let venue = document.createElement("p");
    venue.classList.add("shows__info");
    venue.innerText = show.place;
    dataBlockVenue.appendChild(venue);

    // LOCATION CONTAINER
    let dataBlockLocation = document.createElement("div");
    dataBlockLocation.classList.add("shows__data-block");
    eventData.appendChild(dataBlockLocation);

    let locationLabelMobile = document.createElement("p");
    locationLabelMobile.classList.add("shows__label");
    locationLabelMobile.classList.add("shows__label--location");
    locationLabelMobile.classList.add("shows__label--mobile");
    locationLabelMobile.innerText = "LOCATION";
    dataBlockLocation.appendChild(locationLabelMobile);

    let location = document.createElement("p");
    location.classList.add("shows__info");
    location.innerText = show.location;
    dataBlockLocation.appendChild(location);

    let button = document.createElement("button");
    button.classList.add("shows__button");
    button.classList.add("shows__button--nomobile");
    button.innerText = "BUY TICKETS";
    eventData.appendChild(button);

    let mobileButton = document.createElement("button");
    mobileButton.classList.add("shows__button");
    mobileButton.classList.add("shows__button--mobile");
    mobileButton.innerText = "BUY TICKETS";
    eventBlock.appendChild(mobileButton);
  });
};

// -------------------------------------------------------------
// GET API DATA & DISPLAY SHOWS
// -------------------------------------------------------------

let showsUrl = "https://project-1-api.herokuapp.com/showdates?";
let apiKey = "api_key=556d9ea4-0972-48e0-940f-2466d2396117";

const getShowdates = () => {
  axios
    .get(showsUrl + apiKey)
    .then((result) => {
      let showdates = result.data;
      listShows(showdates);
    })
    .catch((error) => {
      console.error(error);
    });
};
getShowdates();

// -------------------------------------------------------------
// ONCLICK STYLING
// -------------------------------------------------------------

function toggleActiveShow(event) {
  const allShows = document.querySelectorAll(".shows__event-block");
  allShows.forEach((show) => {
    show.classList.remove("shows__event-block--active");
  });

  const clickedShow = event.target.closest(".shows__event-block");
  clickedShow.classList.add("shows__event-block--active");
}
