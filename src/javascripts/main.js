//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import { service } from "./service"
import { items } from "./items"

document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-lg webercolor navbar-dark py-1">
        <div class="container-fluid align-items-baseline">
            <a class="navbar-brand" href="/pages/index.html"><i class="bi bi-cpu fs-1 me-2"></i><h2 class="d-inline-flex bg-white webertext p-1 rounded-3 me-1">STA</h2> Spot</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="/pages/index.html">Home</a>
              <a class="nav-link" href="/pages/maps&ous.html">Maps & OUs</a>
              <a class="nav-link" href="/pages/imaging.html">Imaging</a>
              <a class="nav-link" href="/pages/post-image.html">Post-Image</a>
              <a class="nav-link" href="/pages/office-organization.html">Office Organization</a>
              <a class="nav-link" href="/pages/readiness.html">Readiness</a>
              <a class="nav-link" href="/pages/faqs.html">FAQs</a>
            </div>
          </div>
        </div>
      </nav>

`

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active")
    link.setAttribute("aria-current", "page")
  }
})

if (window.location.pathname === "/pages/maps&ous.html") {
  for (let g = 0, i = service.length; g < i; g++) {
    document.getElementById("grid").innerHTML += `<div class="col carhov" id="s${service[g].id}"></div>`
  }

  for (let s of service) {
    document.getElementById("s" + s.id).innerHTML += `
    <div class="card h-100">
      <div class="card-header webercolor text-white">
      ${s.name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Building: ${s.building}</li>
        <li class="list-group-item">Room: ${s.room}</li>
        <li class="list-group-item">OU: ${s.ou}</li>
      </ul>
    </div>
    `
  }
}

if (window.location.pathname === "/pages/office-organization.html") {
  for (let l = 0, y = items.length; l < y; l++) {
    document.getElementById("inventoryTable").innerHTML += `<tr id="i${items[l].id}" ></tr>`
  }

  for (let i of items) {
    document.getElementById("i" + i.id).innerHTML += `
      <td>${i.name}</td>
      <td>${i.type}</td>
      <td>${i.location}</td>
    `
  }

  document.getElementById("itemtablesearch").addEventListener("input", function() {
    let input = this.value.toLowerCase();
    let table = document.getElementById("orgTable");
    let tbody = table.getElementsByTagName("tbody")[0];
    let rows = tbody.getElementsByTagName("tr");
  
    for (let row of rows) {
      let cells = row.getElementsByTagName("td");
      let shouldShow = false;
  
      for (let cell of cells) {
        if (cell) {
          let cellText = cell.textContent.toLowerCase();
          if (cellText.indexOf(input) > -1) {
            shouldShow = true;
            break;
          }
        }
      }
  
      
      if (shouldShow) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  })}
