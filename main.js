function bookSearch() {
  const searchResult = document.getElementById("searchBar").value;
  console.log(searchResult);

  $.ajax({
    url: `https://www.googleapis.com/books/v1/volumes?q=${searchResult}`,
    dataType: "json",
    success(data) {
      console.log(data);
      document.getElementById("bookContainer").innerHTML = "";

      for (let i = 0; i < data.items.length; i++) {
        document.getElementById("bookContainer").innerHTML +=
          `<div id='book${i}' class='bookElement'>` + "</div>";
      }

      for (let i = 0; i < data.items.length; i++) {
        /* const authors = data.items[i].volumeInfo.authors[0] || "Nothing"; */
        const authors =
          data.items[i].volumeInfo.authors !== undefined
            ? data.items[i].volumeInfo.authors[0]
            : "Nothing";
        
        

        document.getElementById(`book${i}`).innerHTML =
          `<p class='titleClass'>${data.items[i].volumeInfo.title}</p>` +
          `<p class='authorClass'>${authors}</p>` +
          `<p class='authorClass'>${
            data.items[i].volumeInfo.publishedDate
          }</p>`;
      }
    },
    error() {
      alert(
        "There was an error accessing the Google API. Try refreshing the page please."
      );
    },
    type: "GET"
  });
}

document
  .getElementById("searchButton")
  .addEventListener("click", bookSearch, false);
