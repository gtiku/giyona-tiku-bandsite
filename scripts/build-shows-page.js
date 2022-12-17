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
// SHOWS DISPLAY
// -------------------------------------------------------------

const showsData = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane ",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 202",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021 ",
    venue: "Hyatt Agency ",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center ",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club ",
    location: "San Francisco, CA",
  },
];

listShows = (shows) => {
  shows.forEach((show) => {
    // WRAPPER WITH MOBILE BUTTON
    let eventBlock = document.createElement("div");
    eventBlock.classList.add("shows__event-block");
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
    date.innerText = show.date;
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
    venue.innerText = show.venue;
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

listShows(showsData);

// -------------------------------------------------------------
// ONCLICK STYLING
// -------------------------------------------------------------



let show = document.querySelector("shows__event-block");
show.addEventListener("click", () => {
  
  document.querySelectorAll('.shows__event-block').classList.remove('shows__event-block--selected');
  show.classList.add("shows__event-block--selected");
});
