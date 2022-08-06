$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});
function datashow() {
  let r = document.querySelector('.products');
  let h = document.querySelector('.hoodies');
  let j = document.querySelector('.jumpers');
  let t = document.querySelector('.tshirts');
  // Replace ./data.json with your JSON feed
  fetch('./csvjson.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    for (var i = 0; i < data['length']; i++) {
      if (data[i]['UCLan Hoodie'] === "UCLan Hoodie") {
        hoodies = `<div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="${data[i]['./images/items/hoodies/hoodie (1).jpg']}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${data[i]['UCLan Hoodie']}</h5>
              <p >${data[i]['cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks']} <a class="read" onclick="showitem(${i})">readmore</a>.</p>
              <p class="card-text">${data[i]['Only 39.99']}</p>
              <a  onclick="addcart(${i})" class="btn btn-primary">buy</a>
            </div>
          </div>`;
        h.innerHTML = h.innerHTML + hoodies;
      }
      else if (data[i]['UCLan Hoodie'] === "UCLanLogoJumper") {
        hoodies = `<div class="col-md-4">
        <div class="card">
          <img class="card-img-top" src="${data[i]['./images/items/hoodies/hoodie (1).jpg']}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${data[i]['UCLan Hoodie']}</h5>
            <p >${data[i]['cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks']} <a class="read" onclick="showitem(${i})">readmore</a>.</p>
            <p class="card-text">${data[i]['Only 39.99']}</p>
            <a onclick="addcart(${i})" class="btn btn-primary">buy</a>
          </div>
        </div>`;
        j.innerHTML += hoodies;
      }
      else if (data[i]['UCLan Hoodie'] === "UCLan Logo Tshirt") {
        hoodies = `<div class="col-md-4">
        <div class="card">
          <img class="card-img-top" src="${data[i]['./images/items/hoodies/hoodie (1).jpg']}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${data[i]['UCLan Hoodie']}</h5>
            <p >${data[i]['cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks']} <a class="read" onclick="showitem(${i})">readmore</a>.</p>
            <p class="card-text">${data[i]['Only 39.99']}</p>
            <a onclick="addcart(${i})" class="btn btn-primary">buy</a>
          </div>
        </div>`;
        t.innerHTML += hoodies;
      }

      sh1 = `<div class="col-md-4">
        <div class="card">
          <img class="card-img-top" src="${data[i]['./images/items/hoodies/hoodie (1).jpg']}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${data[i]['UCLan Hoodie']}</h5>
            <p >${data[i]['cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks']} <a class="read" onclick="showitem(${i})">readmore</a>.</p>
            <p class="card-text">${data[i]['Only 39.99']}</p>
            <a onclick="addcart(${i})" class="btn btn-primary">buy</a>
          </div>
        </div>`;
      r.innerHTML += sh1;
    }

  }).catch(err => {
    // Do something for an error here
  });
}
function showproduct(n) {
  let elements = document.querySelectorAll(".pro");
  let elements1 = document.querySelectorAll(".products");
  elements1.forEach(element => {
    element.classList.add('notshow');
  });
  elements.forEach(element => {
    element.classList.remove('active');
  });
  elements1[n].classList.remove('notshow');
  elements[n].classList.add('active');
}
function showitem(num) {
  sessionStorage.setItem('id', num);
  window.location.href = "./item.html";
}
function showaitem() {
  let id = sessionStorage.getItem('id');
  let r = document.querySelector('.showitem');
  // Replace ./data.json with your JSON feed
  fetch('./csvjson.json').then(response => {
    return response.json();
  }).then(data => {

    show = `
 <div class ="col-12">
 <div class="card" style="width: 18rem;">
 <img class="card-img-top " src="${data[id]['./images/items/hoodies/hoodie (1).jpg']}" alt="Card image cap">
 <div class="card-body">
   <h5 class="card-title">${data[id]['UCLan Hoodie']}</h5>
   <p class="card-text">${data[id]['cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks']} </p>
   <a onclick="addcart(${id})" class="btn btn-primary">buy</a>
 </div>
</div>
</div>`;

    r.innerHTML += show;
  }).catch(err => {
    alert("no data found");
  });
}
function addcart(data) {
  let products = [];
  if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
  }
  products.push({ 'productId': data });
  localStorage.setItem('products', JSON.stringify(products));
  // console.log(localStorage.getItem('products'))
  alert("Item added to cart");
}
function addchart() {
  let products = localStorage.getItem('products');
  let bc = products.split(',')
  let num = bc.length;
  let a, b, c, tr, num1, num2, total = 0;
  let m = document.querySelector("#total");
  let n = document.querySelector('.tbody1');

  fetch('./csvjson.json').then(response => {
    return response.json();
  }).then(data => {
    // console.log("hhekrh")
    for (let i = 0; i < num; i++) {
      a = bc[i].split(':');
      b = a[1].split('}')
      c = b[0];
      num1 = data[c]['Only 39.99'];
      num1 = num1.split('Only');
      num2 = Number(num1[1]);
      total = num2 + total;
      // console.log(total)
      tr = `<tr>
    <th scope="row">${i + 1}</th>
    <td><img class= "img-fluid img" src="${data[c]['./images/items/hoodies/hoodie (1).jpg']}"></td>
    <td>${data[c]['UCLan Hoodie']}</td>
    <td>${data[c]['Only 39.99']}</td>
  </tr>`;
      n.innerHTML += tr;

    }
    n.innerHTML += `<tr id="total">
    <th colspan="3">Total:</th>
    
    <td>$ ${total.toFixed(2)}</td>
  </tr>`;
  }).catch(err => {
    alert("no data found");
  });
}


function deletechart() {

  window.localStorage.clear();
}