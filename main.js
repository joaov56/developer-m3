const products = [
  {
    image: "./imagens/img_2.png",
    name: "Camiseta de Mescla",
    price: 28,
    color: "cinza",
    size: "M",
    parcel: "Até 3x R$9,33",
    recent: 2,
  },
  {
    image: "./imagens/img_3.png",
    name: "Saia em couro",
    price: 398,
    color: "preto",
    size: "P",
    parcel: "Até 5x R$30,00",
    recent: 8,
  },
  {
    image: "./imagens/img_4.png",
    name: "Cardigan Tigre",
    price: 300,
    color: "laranja",
    size: "GG",
    parcel: "Até 5x R$60,00",
    recent: 3,
  },

  {
    image: "./imagens/img_5.png",
    name: "Cardigan Off White",
    price: 100,
    color: "branco",
    size: "M",
    parcel: "Até 3x R$99,00",
    recent: 9,
  },
  {
    image: "./imagens/img_6.png",
    name: "Body de Leopardo",
    price: 129.9,
    color: "laranja",
    size: "P",
    parcel: "Até 3x de R$43,33",
    recent: 1,
  },
  {
    image: "./imagens/img_7.png",
    name: "Casaco Pelos",
    price: 399.99,
    color: "rosa",
    size: "M",
    parcel: "Até 3x de R$133,33",
    recent: 4,
  },
  {
    image: "./imagens/img_8.png",
    name: "Cropped Stripes",
    price: 120,
    color: "amarelo",
    size: "G",
    parcel: "Até 3x de R$40,00",
    recent: 6,
  },
  {
    image: "./imagens/img_9.png",
    name: "Camisa Transparente",
    price: 400,
    color: "preto",
    size: "GG",
    parcel: "Até 4x de R$100,00",
    recent: 7,
  },

  {
    image: "./imagens/img_10.png",
    name: "Pochete Clutch",
    price: 99,
    color: "preto",
    size: 46,
    parcel: "Até 3x de R$99,00",
    recent: 5,
  },
];

const cart = document.querySelector(".cart");
const cards = document.querySelector(".cards");

const div_sizes = document.querySelector(".sizes");

const sizes = div_sizes.querySelectorAll("p");

const cores = document.querySelector(".cores ul");

const order = document.querySelector("#order");

const options = document.querySelectorAll("option");

const prices = document.querySelector(".prices ul");

const button_more = document.querySelector(".see_more");

const see_more = document.querySelector(".colors_more");

const colors_ul = document.querySelector(".cores ul");

const load_more = document.querySelector(".loadMore");

button_more.addEventListener("click", () => {
  see_more.style.display = "block";
  if (see_more.style.display === "block") {
    see_more.style.display = "hidden";
  }
});

load_more.addEventListener("click", () => {
  for (let product of products) {
    loadMore.push(product);
  }
  for (let product of products) {
    loadMore.push(product);
  }

  renderProducts(loadMore);
  console.log(loadMore);
});

cores.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    const value = event.target.name;

    if (colors.includes(value)) {
      colors = colors.filter((color) => color !== value);

      if (
        colors.length <= 0 &&
        sizesFilter.length <= 0 &&
        pricess.length <= 0
      ) {
        renderProducts(products);
      } else {
        filterProducts();
      }
    } else {
      colors.push(value);
      filterProducts();
    }
  }
});

prices.addEventListener("click", (event) => {
  const value = event.target.name;

  if (included.includes(value)) {
    included = included.filter((include) => include !== value);
    if (included.length <= 0) {
      renderProducts(products);
    }
  } else {
    included.push(value);
  }

  if (event.target.tagName === "INPUT") {
    if (included.includes("first")) {
      let show = products.filter((product) => {
        return product.price >= 0 && product.price <= 50;
      });

      renderProducts(show);
    } else if (included.includes("second")) {
      let show = products.filter((product) => {
        return product.price >= 51 && product.price <= 150;
      });

      renderProducts(show);
    } else if (included.includes("third")) {
      let show = products.filter((product) => {
        return product.price >= 151 && product.price <= 300;
      });

      renderProducts(show);
    } else if (included.includes("forth")) {
      let show = products.filter((product) => {
        return product.price >= 301 && product.price <= 500;
      });

      renderProducts(show);
    } else if (included.includes("fifth")) {
      let show = products.filter((product) => {
        return product.price >= 501;
      });

      renderProducts(show);
    }
  }
});

div_sizes.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    const value = event.target.textContent;

    if (sizesFilter.includes(value)) {
      sizesFilter = sizesFilter.filter((size) => size !== value);
      if (sizesFilter.length <= 0 && colors.length <= 0) {
        renderProducts(products);
      } else {
        filterProducts();
      }
    } else {
      sizesFilter.push(value);
      filterProducts();
    }
  }
});

function filterProducts() {
  if (colors.length <= 0) {
    const filter = products.filter((product) =>
      sizesFilter.includes(product.size)
    );
    renderProducts(filter);
    return;
  }
  if (sizesFilter.length <= 0) {
    const filter = products.filter((product) => colors.includes(product.color));
    renderProducts(filter);
    return;
  }

  const filter = products.filter(
    (product) =>
      colors.includes(product.color) && sizesFilter.includes(product.size)
  );

  console.log(filter);

  renderProducts(filter);
}

function renderProducts(produtos) {
  cards.innerHTML = "";
  produtos.forEach((product, index) => {
    const li = document.createElement("li");
    li.classList.add("card");
    li.innerHTML = `<img src="${product.image}" alt="">
    <h2>${product.name}</h2>
    <p class="price">R$ ${product.price}</p>

    <p class="parcel">${product.parcel}</p>
    <button onClick= "addCart(${index})" class="button_card">COMPRAR</button>`;

    cards.append(li);
  });
}

function addCart(index) {
  cart.style.display = "block";
  cartItems.push(products[index]);
  cart.innerHTML = `${cartItems.length}`;
}

function higherPrice() {
  let price = [];
  for (product of products) {
    price.push(product);
  }

  price.sort(function (a, b) {
    return parseInt(a.price) - parseInt(b.price);
  });
  console.log(price);

  renderProducts(price);
}

function lowerPrice() {
  let price = [];
  for (product of products) {
    price.push(product);
  }

  price.sort(function (a, b) {
    return parseInt(b.price) - parseInt(a.price);
  });
  renderProducts(price);
}

function recent() {
  let recent = [];
  for (product of products) {
    recent.push(product);
  }

  recent.sort(function (a, b) {
    return parseInt(a.recent) - parseInt(b.recent);
  });
  renderProducts(recent);
}

function update() {
  var option = order.options[order.selectedIndex].value;
  if (option === "lower") {
    higherPrice();
  } else if (option === "higher") {
    lowerPrice();
  } else if (option === "recent") {
    recent();
  }
}

renderProducts(products);
let colors = [];
let sizesFilter = [];
let cartItems = [];
let pricess = [];
let included = [];
let loadMore = [];

for (let size of sizes) {
  size.addEventListener("click", function () {
    const atributo = size.getAttribute("class");

    if (atributo === "border_off") {
      size.classList.remove("border_off");
      size.classList.add("border_on");
    }
    if (atributo === "border_on") {
      size.classList.remove("border_on");
      size.classList.add("border_off");
    }
  });
}
