// Set the inner HTML of the element (should be <span>) with ID "navbar" to that of the navbar.
// The purpose of this is to allow code reuse, so we don't have to copy-paste into every page.

document.getElementById("navbar").innerHTML = `
<!-- The navigation bar -->
<nav class="navbar bg-body-tertiary fixed-top bg-primary" data-bs-theme="dark">
  
  <div class="container-fluid">
    
    <a class="navbar-brand col">
      <img src="../images/Untitled.png" class="rounded-pill img-fluid" alt="The logo of Tom & Jerry" width="100" height="50">
    </a>

    <!-- The search bar for searching for the character
	 In theory this should allow the user to search for a charcter and show that character -->
    
    <div class="d-flex align-items-center gap-2">
      <div class="d-flex">
	<input class="form-control me-2" id="searchbar" type="search" placeholder="Search" aria-label="Search">
	<button class="btn btn-outline-success" onclick="search()">Search</button>
      </div>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Drop" aria-controls="Drop" aria-expanded="false" aria-label="Toggle navigation">
	<i class="bi bi-list"></i>
      </button>
    </div>

    <!-- The links inside the button -->
    <div class="collapse navbar-collapse justify-content-end" id="Drop">
      <ul class="navbar-nav d-flex gap-4">
	<li class="nav-item">
	  <a class="nav-link" href="./Overview.html">Home</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./Characters.html">Characters</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./Controversies.html">Controversies</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./Cultural-Influences.html">Cultural Influences</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./History.html">History</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./Home-Media.html">Media</a> <!-- not sure if this is the correct page -->
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="./References.html">References</a>
	</li>
      </ul>
    </div>
  </div>	
</nav>`;

// Search bar code
function search()
{
    // Retrieve the search string and convert to lowercase, escaping quotes
    let searchString = document.getElementById("searchbar").value
	.toLowerCase()
	.replace(/"/g, "&quot;")
	.replace(/'/g, "&apos;");

    // Get HTML representations of special characters.
    // We can do a bit of a hack here to save a lot of effort, and make the browser do it for us.
    // If we load the search string into innerText of an element, then read it back as innerHTML,
    // we get the HTML representations.
    let converter = document.createElement("div");
    converter.innerText = converter.textContent = searchString;
    searchString = converter.innerHTML;
    converter.remove();

    // The previous step screws with our already converted quotes, fix them here.
    // (We can't just not escape them before that step or it could wreak havoc on the page).
    searchString = searchString
	.replace(/&amp;quot;/g, "&quot;")
	.replace(/&amp;apos;/g, "&apos;");
    
    alert(searchString);
    return;
}
