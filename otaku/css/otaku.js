var count = 0;


// 商品數量

window.onload = function () {
    var subtract = document.getElementById("subtract");
    var i = document.getElementById("qty").value;
    var plus = document.getElementById("plus");
    plus.onclick = function () {
        i++;
        document.getElementById("qty").value = i;
    }
    subtract.onclick = function () {
        if (i > 0) {
            i--;
            document.getElementById("qty").value = i;
        } else {
            i = 0;
            document.getElementById("qty").value = i;
        }
    }
}

// 購物車
function addcart() {
    // var i = document.getElementById("qty").value;
    count += parseInt(document.getElementById("qty").value);
    document.getElementById('cart-qty').innerText = count ;
}

