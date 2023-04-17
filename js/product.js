const filterType = document.querySelectorAll('input[name="filter-type"]');

const typeValues = [];
filterType.forEach((checkbox) => {
  if (checkbox.checked) {
    typeValues.push(checkbox.value);
  }
});

const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");
var minPrice = 50;
var maxPrice = 200;
rangeInput.addEventListener("input", function () {
  rangeValue.innerText = `Từ 50.000đ đến ${rangeInput.value}.000đ`;
  maxPrice = rangeInput.value;
});

const filterBrand = document.querySelectorAll('input[name="filter-type"]');

const brandValues = [];
filterBrand.forEach((checkbox) => {
  if (checkbox.checked) {
    brandValues.push(checkbox.value);
  }
});

const listProducts = [
  {
    id: 1,
    name: "Trà Shan Tuyết",
    price: 50,
    img_url: "./Pictures/tin-tuc/TINTUC_01.jpg",
    weight: "200g",
    brand: "Trà Tân Cương Xanh",
    num: 17,
  },
  {
    id: 2,
    name: "Trà Ô Long",
    price: 70,
    img_url: "./Pictures/tin-tuc/TINTUC_02-05.jpg",
    weight: "200g",
    brand: "Trà Sen Tây Hồ",
    num: 27,
  },
  {
    id: 3,
    name: "Trà Búp",
    price: 70,
    img_url: "./Pictures/tin-tuc/TINTUC_06.jpg",
    weight: "200g",
    brand: "Trà Lộc Tân",
    num: 37,
  },
  {
    id: 4,
    name: "Trà Shan Tuyết",
    price: 50,
    img_url: "./Pictures/tin-tuc/TINTUC_01.jpg",
    weight: "200g",
    brand: "Trà Tân Cương Xanh",
    num: 37,
  },
  {
    id: 5,
    name: "Trà Ô Long",
    price: 70,
    img_url: "./Pictures/tin-tuc/TINTUC_02-05.jpg",
    weight: "200g",
    brand: "Trà Sen Tây Hồ",
    num: 27,
  },
  {
    id: 6,
    name: "Trà Búp",
    price: 70,
    img_url: "./Pictures/tin-tuc/TINTUC_06.jpg",
    weight: "200g",
    brand: "Trà Lộc Tân",
    num: 17,
  },
  {
    id: 7,
    name: "Trà Shan Tuyết",
    price: 50,
    img_url: "./Pictures/tin-tuc/TINTUC_01.jpg",
    weight: "200g",
    brand: "Trà Tân Cương Xanh",
    num: 17,
  },
  {
    id: 8,
    name: "Trà Ô Long",
    price: 70,
    img_url: "./Pictures/tin-tuc/TINTUC_02-05.jpg",
    weight: "200g",
    brand: "Trà Sen Tây Hồ",
    num: 27,
  },
  {
    id: 9,
    name: "Trà Búp",
    price: 90,
    img_url: "./Pictures/tin-tuc/TINTUC_06.jpg",
    weight: "200g",
    brand: "Trà Lộc Tân",
    num: 37,
  },
  {
    id: 10,
    name: "Trà Shan Tuyết",
    price: 110,
    img_url: "./Pictures/tin-tuc/TINTUC_01.jpg",
    weight: "200g",
    brand: "Trà Tân Cương Xanh",
    num: 37,
  },
  {
    id: 11,
    name: "Trà Ô Long",
    price: 130,
    img_url: "./Pictures/tin-tuc/TINTUC_02-05.jpg",
    weight: "200g",
    brand: "Trà Sen Tây Hồ",
    num: 27,
  },
  {
    id: 12,
    name: "Trà Búp",
    price: 150,
    img_url: "./Pictures/tin-tuc/TINTUC_06.jpg",
    weight: "200g",
    brand: "Trà Lộc Tân",
    num: 17,
  },
];

const filteredProducts = listProducts.filter((product) => {
  if (typeValues.length > 0 && !typeValues.includes(product.name)) {
    return false;
  }

  if (brandValues.length > 0 && !brandValues.includes(product.brand)) {
    return false;
  }

  if (product.price < minPrice || product.price > maxPrice) {
    return false;
  }

  return true;
});

function makeElem(coursesItem) {
  const { id, name, price, img_url, weight, brand, num } = coursesItem;
  let li = document.createElement("li");
  li.setAttribute("class", "product-i");

  li.innerHTML = `
  <a href="./product-detail.html">
    <div class="item-header">
      <div class="item-evaluate">
        <i class="fas fa-star" style="color: var(--primary-color)"></i>
          <i class="fas fa-star" style="color: var(--primary-color)"></i>
          <i class="fas fa-star" style="color: var(--primary-color)"></i>
          <i class="fas fa-star" style="color: var(--primary-color)"></i>
          <i class="fas fa-star"style="color: var(--primary-color)"></i>
          <span>(${num})</span>
        </div>
        <div class="item-new">New</div>
      </div>

      <div class="item-content">
        <img src=${img_url} alt="..." />
        <div class="item-name">${name}</div>
        <div class="item-info">
          <div class="item-price">
            <span>${price},000</span>
            VND</div>
          <div class="item-more">
            ${weight}
          <span class="material-symbols-outlined">
            expand_more
          </span>
        </div>
      </div>
    </div>
  </a>
  `;
  return li;
}

function renderProduct(products) {
  const list = document.getElementById("render-products");
  const listContainer = document.createElement("ul");
  listContainer.setAttribute("id", "list-products");
  const listFragment = document.createDocumentFragment();
  products.forEach((item) => {
    try {
      const listElement = makeElem(item);
      listFragment.append(listElement);
    } catch (Error) {
      console.log(Error);
    }
  });
  listContainer.append(listFragment);
  list.append(listContainer);
}

renderProduct(filteredProducts);

const removeProduct = () => {
  var myDiv = document.getElementById("render-products");
  while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
  }
};

const filter = () => {
  return listProducts.filter((product) => {
    if (typeValues.length > 0 && !typeValues.includes(product.name)) {
      return false;
    }
  
    if (brandValues.length > 0 && !brandValues.includes(product.brand)) {
      return false;
    }
    
    if (product.price < minPrice || product.price > maxPrice) {
      return false;
    }
  
    return true;
  });
}

const reRender = function() {
  removeProduct()
  const filteredProducts = filter()
  renderProduct(filteredProducts)
}

rangeInput.addEventListener("change", reRender)

filterType.forEach(type => {
  type.addEventListener("change", reRender)
})

filterBrand.forEach(brand => {
  brand.addEventListener("change", reRender)
})