// Set the inner HTML of the element (should be <span>) with ID "footer" to that of the footer.
// The purpose of this is to allow code reuse, so we don't have to copy-paste into every page.

document.getElementById("footer").innerHTML = `
<footer class="footer text-center text-light bg-body-tertiary bg-primary" data-bs-theme="dark">
  <div class="col-12 py-3">
    <div class="row">
      <p>CS11001 Assignment 1 - Nethra Kadupitige, Aiden Isik &amp; James Dunbar</p>
      <a class="link-light" href="./References.html">References/Attribution</a>
    </div>
  </div>
</footer>`;
