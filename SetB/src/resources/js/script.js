
let search;
let output;


const searchCall = () => {

  fetch(`https://api.tvmaze.com/search/shows?q=${search.value}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let outputData = `<div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">`;
      if (json.shows[0].show) {
        outputData += `<img src=${json.shows[0].show} alt="..." style="max-width:270px">`;
      } else {
        outputData += `Image Link Unavailable`;
      }


      outputData += `
        </div>
        <div class="col-md-8">
          <div class="card-body">
          <h4 class="card-text">${json.shows[0].image || "-"}</p>
            <h5 class="card-title">rating</h5>
            
            <h4 class="card-title">${json.shows[0].show || "-"}</h4>
            <h5 class="card-title">show</h5>

            <p class="card-text">${json.shows[0].name || "-"}</p>
            <h5 class="card-title">name</h5>

            <h4 class="card-text">${json.shows[0].genres || "-"}</p>
            <h5 class="card-title">genres</h5>

            <h4 class="card-text">${json.shows[0].rating || "-"}</p>
            <h5 class="card-title">rating</h5>

          </div>`;


      if (json.shows[0].strSource) {
        outputData += `<a href=${json.shows[0].strSource}><button type="button" class="btn btn-outline-primary">View Source Website</button></a>`;
      } else {
        outputData += `Link to Source Unavailable`;
      }
    

      outputData += `
      <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="${json.shows[0].strshow}">Add Review</button>
        </div>
        </div>
        </div>`;
      output.innerHTML = outputData;
    });
};

document.addEventListener("DOMContentLoaded", function (event) {
  search = document.getElementById("search");
  output = document.getElementById("output");
  document.getElementById("searchButton").addEventListener("click", searchCall);


  var exampleModal = document.getElementById("exampleModal");
  exampleModal.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes



    var recipient = button.getAttribute("data-bs-whatever");
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.

    
    var modalTitle = exampleModal.querySelector(".modal-title");
    var modalBodyInput = exampleModal.querySelector(".modal-body input");

    modalTitle.textContent = "Add Review of " + recipient;
    modalBodyInput.value = recipient;
  });
});
