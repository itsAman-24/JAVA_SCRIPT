const cart = ["shoes" , "shirts" , "jeans"];

createOrderId(cart)
.then(function(orderId) {
    console.log(orderId);
    return orderId;
})

.then(function(orderId) {
    return proceedToPayment(orderId);
})

.then(function paymentDone(payment) {
    console.log("Payement done");
    return payment;
})

.then(function(order) {
    return orderSummary(order);
})

.then(function(amount) {
    return updateWallet(amount);
})

.then(function(walletInfo) {
    return walletBalance(walletInfo);
})

function proceedToPayment(orderId) {
    return new Promise(function(reject,resolve) {
        setTimeout(function() {
            if(orderId) {
                console.log("Payment successfully done");
                resolve(orderId);
            }
            else {
                const err = new Error("Error while payment");
                reject(err);
            }
        },4000)
    })
};

function orderSummary(order) {
    return new Promise(function(reject,resolve) {
        setTimeout(function() {
            if(order) {
                console.log("Order is placed successfully");
                resolve(order);
            }
            else {
                const err = new Error("Order is not placed");
            }
        },4000)
    })
};

