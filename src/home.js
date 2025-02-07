import briyaniImage from "./images/briyani.jpg";

export default function loadHome() {
  const divContent = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-content");

  const heading = document.createElement("h1");
  heading.textContent = "Silver Spoons";

  const tagline = document.createElement("h2");
  tagline.textContent = "A Taste of South India to Delight Family and Friends";

  const description = document.createElement("p");
  description.textContent =
    "Experience the finest dining in town with our exquisite menu and ambiance.";

  const image = document.createElement("img");
  image.src = briyaniImage;
  image.alt = "Restaurant interior";

  homeDiv.appendChild(heading);
  homeDiv.appendChild(tagline);
  homeDiv.appendChild(description);
  homeDiv.appendChild(image);
  divContent.appendChild(homeDiv);
}
