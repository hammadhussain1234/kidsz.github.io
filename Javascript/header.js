document.getElementById("header").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light">
<a class="navbar-brand" ><img src="image/img1.png" width="50%" alt=""></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item">
      <a style="font-size: 3vmin;" class="nav-link  p-4" href="home.html" id="Home">Home</a>
    </li>
    <li class="nav-item dropdown">
          <a style="font-size: 3vmin;" class="nav-link p-4  dropdown-toggle" href="Cetagary.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Activity
          </a>
          <ul class="dropdown-menu bg-warning" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="animals.html" id="animals">Animals Name</a></li>
            <li><a class="dropdown-item" href="vegatable.html" id="vegatable">Vegatable Name</a></li>
            <li><a class="dropdown-item" href="Friut.html" id="friut">Friut Name</a></li>
            <li><a class="dropdown-item" href="table.html" id="table">Color/Shapes Name</a></li>
            <li><a class="dropdown-item" href="day.html" id="day">Day And Month Name</a></li>
          </ul>
        </li>
    <li class="nav-item">
      <a style="font-size: 3vmin;" class="nav-link   p-4" href="phonics.html" id="Phonics">Phonics</a>
    </li>
    <li class="nav-item">
      <a style="font-size: 3vmin;" class="nav-link   p-4" href="game.html" id="game">Game</a>
    </li>
    <li class="nav-item">
      <a style="font-size: 3vmin;" class="nav-link   p-4" href="math.html" id="math">Mathematic</a>
    </li>
    <li class="nav-item">
    <a style="font-size: 3vmin;" class="nav-link   p-4" href="About.html" id="About">About Us</a>
  </li>
    <li class="nav-item">
      <a style="font-size: 3vmin;" class="nav-link   p-4" href="Contact.html" id="Contact">Contact Us</a>
    </li>
  </ul>
</div>
</nav>`