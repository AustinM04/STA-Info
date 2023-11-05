//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

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
            </div>
          </div>
        </div>
      </nav>

`

document.querySelectorAll('.nav-link').forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active')
    link.setAttribute('aria-current', 'page')
  }
})


let service = [
  {
    id: '1',
    name: 'filler',
    building: 'filler',
    room: 'filler',
    ou: 'filler'
  },
  {
    id: '2',
    name: 'filler',
    building: 'filler',
    room: 'filler',
    ou: 'filler'
  },
  {
    id: '3',
    name: 'filler',
    building: 'filler',
    room: 'filler',
    ou: 'filler'
  },
  {
    id: '4',
    name: 'filler',
    building: 'filler',
    room: 'filler',
    ou: 'filler'
  },
  {
    id: '5',
    name: 'filler',
    building: 'filler',
    room: 'filler',
    ou: 'filler'
  },
  {
    id: '6',
    name: 'filler',
    building: 'filler',
    room: 'filler',
    ou: 'filler'
  },
  {
    id: '7',
    name: 'filler',
    building: 'filler',
    room: 'filler',
    ou: 'filler'
  },
  {
    id: '8',
    name: 'filler',
    building: 'filler',
    room: 'filler',
    ou: 'filler'
  },
  {
    id: '9',
    name: 'filler',
    building: 'filler',
    room: 'filler',
    ou: 'filler'
  }

]

for (let g =0, i = service.length; g < i; g++){
  document.getElementById("grid").innerHTML +=
  `<div class="col carhov" id="s${service[g].id}"></div>`
}

for(let s of service){
  let service_card = document.getElementById("s" + s.id).innerHTML += `
  <div class="card">
    <div class="card-header">
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

