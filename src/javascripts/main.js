//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


document.getElementById('navbar').innerHTML = `
<nav class="navbar navbar-expand-lg webercolor navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/pages/index.html"><i class="bi bi-cpu"></i> STA Spot</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="/pages/index.html">Home</a>
              <a class="nav-link" href="/pages/maps&ous.html">Maps & OUs</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>

`;





