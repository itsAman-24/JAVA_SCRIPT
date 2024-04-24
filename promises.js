const carts = ["shoes" , "pants" , "Tshirst"];

//BEFORE USING PROMISES OBJECTS the creatOrderId() has total control over callback function which is proceedToPayment() ,,this will eliminate our control over the proceedToPayment() which could be dangerous somtime

//once Id will be generated callback() will be executed then only
const Id = (carts , callback) => {
    const orderId =  generateOrderId(carts);

    callback(orderId);
}


//this function will hold the callback function also
const getId = createOrderId (carts , (orderId) => {
    proceedToPayment(orderId);
});


//AFTER USING PROMISES OBJECTS the creatOrderId() has no control over callback function which is proceedToPayment() ,, as we are using PROMISES here to store the returned value from the creatOrderId() aftet getting the returned value form the creatOrderId() PROMISES.then() will be called which is totally independent from the creatOrderId(); by this PROMISES helps to control the callback functions by the developers itself 

const promises = createOrderId(carts);  // createOrderId() function will return orderId which will be stored inside promise object

promises.then( function (orderId) {      //then() is executed after the data get by the promise object as a returned value 
    proceedToPayment(orderId);
} )

// we can also write arrow function to reduce the callback hell nd also code readability
