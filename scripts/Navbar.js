// Set the inner HTML of the element (should be <span>) with ID "navbar" to that of the navbar.
// The purpose of this is to allow code reuse, so we don't have to copy-paste into every page.

document.getElementById("navbar").innerHTML = `
<!-- The navigation bar -->
<nav class="navbar bg-body-tertiary fixed-top bg-primary" data-bs-theme="dark">
  
  <div class="container-fluid">
    
    <a class="navbar-brand col">
      <img src="../images/Untitled.png" class="rounded-pill" alt="The logo of Tom & Jerry" width="100" height="50">
    </a>

    <!-- The search bar for searching for the character
	 In theory this should allow the user to search for a charcter and show that character -->
    
    <div class="d-flex align-items-center gap-2">
      <form class="d-flex" role="search">
	<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
	<button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Drop" aria-controls="Drop" aria-expanded="false" aria-label="Toggle navigation">
	<i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>

    <!-- The links inside the button -->
    <div class="collapse navbar-collapse justify-content-end" id="Drop">
      <ul class="navbar-nav d-flex gap-4">
	<li class="nav-item">
	  <a class="nav-link" href="../Overview.html">Home</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="../Characters.html">Characters</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="../Controversies.html">Controversies</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./Cultural-Influences.html">Cultural Influences</a>
	</li>
	<li class="nav-item">
	<a class="nav-link" href="../Feature-Films.html">Feature Films</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./History.html">History</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./Home-Media.html">Media</a> <!-- not sure if this is the correct page -->
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="../In-Other-Media.html">In Other Media</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="../Outside-the-United-States.html">Outside the United States</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="../Television.html">Television</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./References.html">References</a>
	</li>
      </ul>
    </div>
  </div>	
</nav>`;
