const cart = ["shoes", "shirts", "jeans"];
// Promise 

createOrderId(cart)
    .then(function(orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(payment) {
        console.log("Payment done");
        return payment;
    })
    .then(function(order) {
        console.log(order);
        return orderSummary(order);
    })
    .then(function(amount) {
        console.log(amount);
        return updateWallet(amount);
    })
    .then(function(walletInfo) {
        console.log("Wallet updated");
        return walletBalance(walletInfo);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (orderId) {
                console.log("Payment successfully done");
                resolve(orderId);
            } else {
                const err = new Error("Error while payment");
                reject(err);
            }
        }, 1000);
    });
}

function orderSummary(order) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (order) {
                console.log("Order is placed successfully");
                resolve(order);
            } else {
                const err = new Error("Order is not placed");
                reject(err);
            }
        }, 2000);
    });
}

function updateWallet(amount) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (amount) {
                console.log("Amount paid");
                resolve(amount);
            } else {
                const err = new Error("Amount is pending");
                reject(err);
            }
        }, 1000);
    });
}

function walletBalance(amount) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (amount) {
                console.log("Wallet updated");
                resolve(amount);
            } else {
                const err = new Error("Error in updating wallet amount");
                reject(err);
            }
        }, 1000);
    });
}

function createOrderId(cart) {
    //creating promise
    return new Promise(function(resolve, reject) {
        if (!verifyOrderId(cart)) {
            const error = new Error("There is some problem");
            reject(error);
        } else {
            resolve(cart);
        }
    });
}

function verifyOrderId(cart) {
    return true;
}
