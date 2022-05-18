"use strict";

const result = document.querySelector("#result");
const filter = document.querySelector("#filter");

const apiUrl = "https://randomuser.me/api/?results=50";

const listItems = [];

// --------------------------------------------------------

const getData = async function () {
  const res = await fetch(apiUrl);
  const { results } = await res.json();

  // Clear results
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    
    li.innerHTML = `
    <img
    src="${user.picture.large}" alt="${user.name.first}"
    />
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    
    result.appendChild(li);

    listItems.push(li);
  });
};

// --------------------------------------------------------

const filterData = function (searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};
filter.addEventListener("input", (e) => filterData(e.target.value));

// --------------------------------------------------------

getData();

console.log('Zeile 55: ',listItems);
