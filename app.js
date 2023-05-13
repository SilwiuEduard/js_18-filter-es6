let filteredProducts = [...products];

// console.log(filteredProducts);
// Array(12)
// 0:{id: 'rec43w3ipXvP28vog', title: 'high-back bench', company: 'ikea', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…/react-comfy-store-products/iuYyO9RP_o_upinxq.jpg', price: 9.99}
// 1:{id: 'rec4f2RIftFCb7aHh', title: 'albany table', company: 'marcos', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…2/react-comfy-store-products/product-2_lusrzx.jpg', price: 79.99}
// 2:{id: 'rec8kkCmSiMkbkiko', title: 'accent chair', company: 'caressa', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…4/react-comfy-store-products/product-3_znpiqa.jpg', price: 25.99}
// 3:{id: 'recBohCqQsot4Q4II', title: 'wooden table', company: 'caressa', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…9/react-comfy-store-products/product-4_ebl6q1.jpg', price: 45.99}
// 4:{id: 'recDG1JRZnbpRHpoy', title: 'dining table', company: 'caressa', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…6/react-comfy-store-products/product-5_n184nu.jpg', price: 6.99}
// 5:{id: 'recNWGyP7kjFhSqw3', title: 'sofa set', company: 'liddy', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…1/react-comfy-store-products/product-6_rhaxfo.jpg', price: 69.99}
// 6:{id: 'recZEougL5bbY4AEx', title: 'modern bookshelf', company: 'marcos', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…3280/react-comfy-store-products/prod-7_ta21yy.jpg', price: 8.99}
// 7:{id: 'recjMK1jgTb2ld7sv', title: 'emperor bed', company: 'liddy', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…3314/react-comfy-store-products/prod-8_qzulqi.jpg', price: 21.99}
// 8:{id: 'recmg2a1ctaEJNZhu', title: 'utopia sofa', company: 'marcos', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…3354/react-comfy-store-products/prod-9_j3dsja.jpg', price: 39.95}
// 9:{id: 'recvKMNR3YFw0bEt3', title: 'entertainment center', company: 'liddy', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…394/react-comfy-store-products/prod-10_d0jqoh.jpg', price: 29.98}
// 10:{id: 'recxaXFy5IW539sgM', title: 'albany sectional', company: 'ikea', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…441/react-comfy-store-products/prod-11_lff6yt.jpg', price: 10.99}
// 11:{id: 'recyqtRglGNGtO4Q5', title: 'leather sofa', company: 'liddy', image: 'https://res.cloudinary.com/dt2g7mgtv/image/upload/…501/react-comfy-store-products/prod-12_ga6sdq.jpg', price: 9.99}
// length: 12
// [[Prototype]]:Array(0)

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, we could't find your desired product</h6>`;
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `
            <article class="product" data-id="${id}">
              <img
                src="${image}"
                class="product-img img"
                alt=""
              />
              <footer>
                <h5 class="product-name">${title}</h5>
                <span class="product-price">${price}€</span>
              </footer>
            </article>
            `;
    })
    .join("");
};

displayProducts();

// Text Filter
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  console.log(filteredProducts);
  displayProducts();
});

// Filter Buttons

const companiesDOM = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  // console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join("");
};

displayButtons();

companiesDOM.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = "";
    displayProducts();
  }
});
