const usercontainer = document.querySelector(".users");
var url = "https://randomuser.me/api/?results=100";
//resolve or reject
fetch(url).then((res) =>
  res.json().then((result) => {
    console.log(result);
    result.results.forEach((entry) => {
            var runhtml = `<div class="usr">
            <img src="${entry.picture.medium}" alt="">
            <div class="username">${entry.name.title + " " + entry.name.first+ " "+ entry.name.last}</div>
            <div class="email">
                ${entry.email}
            </div>
            <div class="address">
                ${entry.location.city+ ", "+entry.location.state + ", "+entry.location.country}
            </div>
        </div>`;
        usercontainer.innerHTML += runhtml;
    });
  })
);
console.log("hi");
