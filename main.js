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

        const title =
          data.items[i].volumeInfo.title !== undefined
            ? data.items[i].volumeInfo.title
            : "Title Not Specified";

        const image =
          data.items[i].volumeInfo.imageLinks !== undefined
            ? data.items[i].volumeInfo.imageLinks.thumbnail
            : "No Image Available";

        const author =
          data.items[i].volumeInfo.authors !== undefined
            ? data.items[i].volumeInfo.authors[0]
            : "Not Specified";

        const publisher =
          data.items[i].volumeInfo.publisher !== undefined
            ? data.items[i].volumeInfo.publisher
            : "Not Specified";

        const publishedDate =
          data.items[i].volumeInfo.publishedDate !== undefined
            ? data.items[i].volumeInfo.publishedDate
            : "Not Specified";

        document.getElementById(`book${i}`).innerHTML =
          `<p class='titleClass'>${title}</p>` +
          `<p class='imageClass'><img src="${image}" alt="${title}"></p>` +
          `<p class='authorClass'>Author: ${author}</p>` +
          `<p class='publisherClass'>Publisher: ${publisher}</p>` +
          `<p class='publishedDateClass'>Published Date: ${publishedDate}</p>`;
      }
    },
    error() {
      alert(
        "There was an error accessing the Google API. Please try refreshing the page."
      );
    },
    type: "GET"
  });
}

document
  .getElementById("searchButton")
  .addEventListener("click", bookSearch, false);
