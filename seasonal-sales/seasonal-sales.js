/* ---- John McCutchan---- */
/*======Seasonal Sales ================*/
//
// ******* BEGIN ***********
console.log("Begin");
// Global Var
var data; // JSON products
var data2; // JSON categories
var discount; // carries value from create discount after button click
//
/*
******* products.json *********
*/
function productList(e) {
  data = JSON.parse(e.target.responseText);
}
//
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", productList);
myRequest.open("GET", "products.json");
myRequest.send();
/*
******** categories.json ***********
*/
function categoryList(e) {
  data2 = JSON.parse(e.target.responseText);
  createContent();
}
//
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", categoryList);
myRequest.open("GET", "categories.json");
myRequest.send();
/*
*********** button ************
*/
document.getElementById("submit").addEventListener("click", createDiscount);
/*
*********** function called by button *************
*/
function createDiscount(){
  var season = document.getElementById("seasons").selectedIndex;
  if(season === 0){ // spring
    discount = data2.categories[2].discount;
  }else if(season === 2){ // autumn
    discount = data2.categories[1].discount;
  }else if(season === 3){ // winter
    discount = data2.categories[0].discount;
  }else{ // summer
    discount = 0;
  }
  createContent();
}
/*
*********** function adds season, calcs discount, builds html *************
*/
function createContent(){
  var content = "";
  for (var i = 0; i < data.products.length; i++) {
    if(data.products[i].category_id === 1){ // assign the department
      var department = data2.categories[0].name;
    }else if(data.products[i].category_id === 2){
      department = data2.categories[1].name;
    }else{
      department = data2.categories[2].name;
    }
    var price = data.products[i].price;
    if(discount > 0){ // keeps original price if there is no discount
      var num = price - (price * discount); // claculates the discount
      var discountPrice = Math.round(num * 100) / 100; // rounds to decimal places
    }else{
      discountPrice = price; // if no discount, keeps original price
    }
  content += `<div class="box col-sm-4">
                <h3>${data.products[i].name}</h3>
                <h4>$${discountPrice}</h4>
                <h5>Located in ${department}</h5>
              </div>`
  document.getElementById("putDataHere").innerHTML = content; // publishes HTML
  }
}
console.log("End");
/*
************** END **************
*/
