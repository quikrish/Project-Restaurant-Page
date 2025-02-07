export default function loadContact() {
  const divContent = document.getElementById("content");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 022 -236934";

  const address = document.createElement("p");
  address.textContent = `Address:From Kerala🌴 With Love ❤️ `;

  contactDiv.appendChild(heading);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(address);
  divContent.appendChild(contactDiv);
}
