let productList = [{
    id: 'A',
    price: 50,
    specialCount: 3,
    specialPrice:130, 
    count:0,
    total:0
},
{
    id: 'B',
    price: 30,
    specialCount: 2,
    specialPrice:45, 
    count:0,
    total: 0
},
{
    id: 'C',
    price: 20,
    specialCount: 0,
    specialPrice:0,
    count:0,
    total: 0
},
{
    id: 'D',
    price: 15,
    specialCount: 0,
    specialPrice:0,
    count:0,
    total: 0
}]

function add(item) {
    addingProductPrice(item)
    updateTotalPrice(item)
    document.getElementById(item).value = productList[0].total;
    updateTotalPrice(item);
}

function addingProductPrice(item) {
   switch(item) {
       case 'A':
           productList[0].count += 1;
        if(productList[0].count % 3 === 0){
            productList[0].total += productList[0].price;
            productList[0].total = productList[0].total - 20;
        } else {
            productList[0].total += productList[0].price;
        }
        break;
   }
}

function remove() {
    updateTotalPrice()
}

function updateTotalPrice() {
    document.getElementById('total').value = productList[0].total;
}