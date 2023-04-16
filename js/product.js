const listProducts = [
  {
      id: 1,
      name: "Trà Shan Tuyết",
      price: "50",
      img_url: "./Pictures/tin-tuc/TINTUC_01.jpg",
      weight: "200g",
      brand: "Trà Tân Cương Xanh"
  },
  {
      id: 2,
      name: "Trà Ô Long",
      price: "70",
      img_url: "./Pictures/tin-tuc/TINTUC_02-05.jpg",
      weight: "200g",
      brand: "Trà Sen Tây Hồ"
  },
  {
      id: 3,
      name: "Trà Búp",
      price: "70",
      img_url: "./Pictures/tin-tuc/TINTUC_06.jpg",
      weight: "200g",
      brand: "Trà Lộc Tân"
  },
  {
      id: 4,
      name: "Trà Shan Tuyết",
      price: "50",
      img_url: "./Pictures/tin-tuc/TINTUC_01.jpg",
      weight: "200g",
      brand: "Trà Tân Cương Xanh"
  },
  {
      id: 5,
      name: "Trà Ô Long",
      price: "70",
      img_url: "./Pictures/tin-tuc/TINTUC_02-05.jpg",
      weight: "200g",
      brand: "Trà Sen Tây Hồ"
  },
  {
      id: 6,
      name: "Trà Búp",
      price: "70",
      img_url: "./Pictures/tin-tuc/TINTUC_06.jpg",
      weight: "200g",
      brand: "Trà Lộc Tân"
  },
  {
      id: 7,
      name: "Trà Shan Tuyết",
      price: "50",
      img_url: "./Pictures/tin-tuc/TINTUC_01.jpg",
      weight: "200g",
      brand: "Trà Tân Cương Xanh"
  },
  {
      id: 8,
      name: "Trà Ô Long",
      price: "70",
      img_url: "./Pictures/tin-tuc/TINTUC_02-05.jpg",
      weight: "200g",
      brand: "Trà Sen Tây Hồ"
  },
  {
      id: 9,
      name: "Trà Búp",
      price: "70",
      img_url: "./Pictures/tin-tuc/TINTUC_06.jpg",
      weight: "200g",
      brand: "Trà Lộc Tân"
  },
  {
      id: 10,
      name: "Trà Shan Tuyết",
      price: "50",
      img_url: "./Pictures/tin-tuc/TINTUC_01.jpg",
      weight: "200g",
      brand: "Trà Tân Cương Xanh"
  },
  {
      id: 11,
      name: "Trà Ô Long",
      price: "70",
      img_url: "./Pictures/tin-tuc/TINTUC_02-05.jpg",
      weight: "200g",
      brand: "Trà Sen Tây Hồ"
  },
  {
      id: 12,
      name: "Trà Búp",
      price: "70",
      img_url: "./Pictures/tin-tuc/TINTUC_06.jpg",
      weight: "200g",
      brand: "Trà Lộc Tân"
  }
]

const filterType = document.querySelectorAll('input[name="filter-type"]');

const typeValues = [];
typeValues.forEach((checkbox) => {
  if (checkbox.checked) {
    typeValues.push(checkbox.value);
  }
});

const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");

rangeInput.addEventListener("input", function () {
  rangeValue.innerText = `Từ 50.000đ đến ${rangeInput.value}.000đ`;
});

const filterBrand = document.querySelectorAll('input[name="filter-type"]');

const brandValues = [];
typeValues.forEach((checkbox) => {
  if (checkbox.checked) {
    brandValues.push(checkbox.value);
  }
});

function makeElem(coursesItem) {
  const { id, name, price, img_url, weight, brand } = coursesItem;
  let li = document.createElement("li");
  li.innerHTML = `<img src="${img_url}" alt="img" style="width: 300px; object-fit: cover;" />`;
  return li;
}

function renderProduct(products) {
  const list = document.getElementById("list-products");
  const listContainer = document.createElement("ul");
  listContainer.setAttribute("id", "listcourses");
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

// renderProduct(listProducts);
