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
    updateProductListByAdding(item)
    const product = productList.find(element => element.id === item);
    document.getElementById(item).value = product.total;
    updateTotalPrice();
}

function updateProductListByAdding(item) {
    switch (item) {
        case 'A':
            productList[0].count += 1;
    
        if(productList[0].count % 3 === 0){
            productList[0].total += productList[0].price;
            productList[0].total = productList[0].total - 20;
        } else {
            productList[0].total += productList[0].price;
        }
        break;
    
        case 'B':
            productList[1].count += 1;
    
            if(productList[1].count % 2 === 0){
                productList[1].total += productList[1].price;
                productList[1].total = productList[1].total - 15;
            } else {
                productList[1].total += productList[1].price;
            }
                break;
    
        case 'C':
            productList[2].count += 1;
            productList[2].total += productList[2].price;
                break;
        default:
            productList[3].count += 1;
            productList[3].total += productList[3].price;
        }
}

function remove(item) {
    updateProductListByRemoving(item)
    const product = productList.find(element => element.id === item);
    document.getElementById(item).value = product.total;
    updateTotalPrice()
}

function updateProductListByRemoving(item) {
    switch (item) {
        case 'A':
    
        if(productList[0].count % 3 === 0 && productList[0].total>=50){
            productList[0].count -= 1;
            productList[0].total -= productList[0].price;
            productList[0].total = productList[0].total + 20;
        } else if(productList[0].total>=50) {
            productList[0].count -= 1;
            productList[0].total -= productList[0].price;
        }
        else {
            alert("You can not remove any more items!");
        }
             break;
    
        case 'B':
            if(productList[1].count % 2 === 0 && productList[1].total>=30){
                productList[1].count -= 1;
                productList[1].total -= productList[1].price;
                productList[1].total = productList[1].total + 15;
            } else if( productList[1].total>=30){
                productList[1].count -= 1;
                productList[1].total -= productList[1].price;
            } else {
                alert("You can not remove any more items!");
            }
                break;
    
        case 'C':
            if( productList[2].total >= 20) {
            productList[2].count -= 1;
            productList[2].total -= productList[2].price;
            } else {
                alert("You can not remove any more items!");

            }
                break;
        default:
            if( productList[3].total >= productList[3].price) {
            productList[3].count -= 1;
            productList[3].total -= productList[3].price;
            } else {
                alert("You can not remove any more items!");

            }
    }
}

function updateTotalPrice() {
    document.getElementById('total').value = productList[0].total + productList[1].total + productList[2].total + productList[3].total;
}