export default function loadMenu() {
  const divContent = document.getElementById("content");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  menuDiv.appendChild(heading);

  const items = [
    { name: "Pizza", price: "₹ 600", desc: "Delicious cheese and toppings" },

    { name: "Pasta", price: "₹ 200", desc: "Homemade sauce with herbs" },

    // Add more items
  ];

  items.forEach(function (item) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");

    const name = document.createElement("h3");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = item.price;

    const desc = document.createElement("p");
    desc.textContent = item.desc;

    menuDiv.appendChild(itemDiv);
    itemDiv.appendChild(name);
    itemDiv.appendChild(price);
    itemDiv.appendChild(desc);
  });

  menuDiv.insertBefore(heading, menuDiv.firstChild);
  divContent.appendChild(menuDiv);
}
