document.addEventListener("DOMContentLoaded", function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((books) => {
      console.log(books);
      const booksContainer = document.getElementById("books");
      let booksHTML = "";

      books.forEach((element) => {
        booksHTML += `<div class="col-3 g-5">
            <div class="card h-100" >
              <img src="${element.img}" class="card-img-top img-fluid" alt="${element.title}"  />
              <div class="card-body d-flex flex-column flex-wrap justify-content-between">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">
                ${element.price} $
                </p>
                <div class="d-flex justify-content-between buttonz" >
                <button class="btn btn-primary">Add to cart</button>
                <button class="btn btn-danger">Remove</button>
              </div>
              </div>
            </div>
          </div>`;
      });
      booksContainer.innerHTML = booksHTML;

      const removeButtons = document.querySelectorAll(".btn-danger");

      removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          button.parentNode.parentNode.parentNode.parentNode.remove();
        });
      });

      //  ADDING TO CART
      const listContainer = document.getElementById("cart");

      const addToCartButtons = document.querySelectorAll(".btn-primary");
      addToCartButtons.forEach((cartButton) => {
        cartButton.addEventListener("click", () => {
          const card = cartButton.closest(".card");
          const clonedCard = card.cloneNode(true);

        const removingButtonz = clonedCard.querySelectorAll(".buttonz");
        removingButtonz.forEach(rButton => {
            rButton.remove();
        });


          listContainer.appendChild(clonedCard);
        });
      });
    })

    .catch((err) => {
      console.log(err);
    });
});
