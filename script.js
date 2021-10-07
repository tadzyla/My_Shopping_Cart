let productList = [{
    id: 'A',
    price: 50,
    specialCount: 3,
    discount: 20, 
    count:0,
    total:0
},
{
    id: 'B',
    price: 30,
    specialCount: 2,
    discount: 15, 
    count:0,
    total: 0
},
{
    id: 'C',
    price: 20,
    specialCount: 0,
    discount: 0,
    count:0,
    total: 0
},
{
    id: 'D',
    price: 15,
    specialCount: 0,
    discount: 0,
    count:0,
    total: 0
}]

function updateProductListByAdding(item) {
    const product = productList.find(element => element.id === item);
    const index = productList.indexOf(product);
    productList[index].count += 1;
    productList[index].total += productList[index].price;
    if(productList[index].discount>0) {
       if (productList[index].count % productList[index].specialCount === 0) {
        productList[index].total = productList[index].total - productList[index].discount
        }   
    }
}


function update(item, toRemove) {
    (toRemove)? updateProductListByRemoving(item) : updateProductListByAdding(item);
    const product = productList.find(element => element.id === item);
    document.getElementById(item).value = product.total;
    updateTotalPrice()
}

function updateProductListByRemoving(item) {
    const product = productList.find(element => element.id === item);
    const index = productList.indexOf(product);
    if(productList[index].discount > 0 && productList[index].count % productList[index].specialCount === 0 && productList[index].total>=productList[index].price) {
        productList[index].count -= 1;
        productList[index].total -= productList[index].price 
        productList[index].total = productList[index].total + productList[index].discount
    } else if(productList[index].total>=productList[index].price) {
        productList[index].count -= 1;
        productList[index].total -= productList[index].price;
    }   else {
        alert("You can not remove any more items!");              
    }
}

function updateTotalPrice() {
    document.getElementById('total').value = productList.reduce((sum, p) => {
        return sum + p.total
    }, 0)
    };
