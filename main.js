function bookSearch() {
  let searchResult = document.getElementById("searchBar").value;
  document.getElementById("book1").innerHTML = "";
  console.log(searchResult);

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + searchResult,
    dataType: "json",
    success: function(data) {
      console.log(data);
      for (let i = 0; i < data.items.length; i++) {
        bookContainer.innerHTML +=
          "<h4>" + data.items[i].volumeInfo.title + "</h4>";
      }
    },
    type: "GET"
  });
}

document
  .getElementById("searchButton")
  .addEventListener("click", bookSearch, false);
