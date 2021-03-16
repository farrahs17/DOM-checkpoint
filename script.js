let products = {
    fifties: {
        name: '50s Wanda',
        price: 200,
        quantity: 0,
    },
    seventies: {
        name: '70s Wanda',
        price: 200,
        quantity: 0,
    },
    halloween: {
        name: 'Halloween Wanda',
        price: 200,
        quantity: 0,
    },
    scarlet: {
        name: 'Scarlet Witch Wanda',
        price: 200,
        quantity: 0,
    }
}
var total = 0;


var addButton = document.getElementsByClassName('add');
var removeButton = document.getElementsByClassName('remove');

for (let i = 0; i < addButton.length; i++) {
    var button = addButton[i];
    button.addEventListener('click', function (event) {
        event.preventDefault();
        var buttonClicked = event.target;
        var parent = buttonClicked.parentElement;
        var child = parent.children[1];
        var value = Number(child.value) + 1;
        child.value = value;
        console.log(buttonClicked);
        console.log(child);
        console.log(value);
        calculate();
        
    })
    
}

for (let i = 0; i < removeButton.length; i++) {
    var button = removeButton[i];
    button.addEventListener('click', function (event) {
        event.preventDefault();
        var buttonClicked = event.target;
        var parent = buttonClicked.parentElement;
        var child = parent.children[1];
        var value = Number(child.value) - 1;
        child.value = value;
        console.log(buttonClicked);
        console.log(child);
        console.log(value);

        if (child.value == 0) {
            var product = parent.parentElement;
            product.style.display = 'none';
        }

        calculate();
        
    })
    
}


function calculate() {

    total = 0;
    var productDivs = document.getElementsByClassName('product')[0].parentElement.children;
    console.log(productDivs);
    for (const product of productDivs) {
        console.log(product);
        var quantity = product.getElementsByClassName('quantity')[0].children[1].value;
        var price = product.getElementsByClassName('price')[0].getElementsByTagName('P')[0].innerHTML;
        console.log(quantity);
        console.log(price);
        
        total += price * quantity
        console.log(total)
    }
    var totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = total + ' EGP';
    console.log(total)
}

calculate();



function onFav(el) {
    console.log(el);
    el.classList.toggle("red");
}
  

function deleteProduct(params) {
    var deleteButton = document.getElementsByClassName('delete');

    for (let i = 0; i < deleteButton.length; i++) {
        var button = deleteButton[i];
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var buttonClicked = event.target;
            var product = buttonClicked.parentElement;

            product.remove();

            // var value = Number(child.value) + 1;
            // child.value = value;
            console.log(buttonClicked);
            console.log(product);
            // console.log(value);
            calculate();
            
        })
        
    }
}

deleteProduct();