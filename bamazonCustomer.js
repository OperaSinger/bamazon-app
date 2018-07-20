var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;

    dispInventory()
});

// 

function choose() {

    inquirer.prompt([

        {
            name: "id_select",
            type: "input",
            message: "Enter ID of desired purchase item: ",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "Enter quantity desired: ",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ])

        // .then to take user input and find item in stock to match it. 
        .then(function (input) {

            var item = input.id_select;
            var quantity = input.quantity;

            //query Database to confirm that entered ID exists and that there is sufficient quantity in stock

            console.log(input);

            var queryStr = "SELECT * FROM inventory WHERE ?";

            connection.query(queryStr, { item_id: input.id_select }, function (err, data) {
                if (err) throw err;

                // if user enters invalid input for ID, throw error

                if (data[0].length === 0) {
                    console.log("Error! - invalid Item ID Entered. Please select a valid ID.");
                    displayInventory();
                }
                else {

                    if (quantity <= data[0].stock_quantity) {
                        console.log("Congratulations! The product you ordered is in stock. Placing order now.");

                        var updateQueryStr = "UPDATE inventory SET stock_quantity = " + data[0].stock_quantity + " WHERE item_id = " + item;
                        console.log("updateQueryStr = " + updateQueryStr);

                        // update stock quantity
                        connection.query(updateQueryStr, function (err, response) {
                            if (err) throw err;
                            // console.log(data)
                            console.log("Your order has been placed. Your order total is: $" + data[0].price * quantity);
                            console.log("Thank you for shopping at Bamazon!");
                            console.log("\n------------- BAM ON YA! --------------");

                            connection.end();
                        })
                    }

                    else {
                        console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
                        console.log('Please modify your order.');
                        console.log("\n---------------------------------------------------------------------\n");

                        displayInventory();
                    }

                };

            })

        })
}

// var query = "SELECT  FROM inventory WHERE ?" 

// == answer.id-select) {
//     console.log("******" + query);

//     var purchaseItem = 

// stockCheck(res, answer);
//         });
// };


function stockCheck(res, answer) {

    connection.query(query, function (err, res) {

        if (err) throw err;

        console.log(
            "Item Chosen:\nitem id: " +
            res.item_id +
            " || Product Name: " +
            res.product_name +
            " || Item Price: " +
            res.price +
            " || Quantity in Stock" +
            res.stock_quantity
        );

        if (res.stock_quantity > answer.quantity) {
            var stockRemaining = 0;
            stockRemaining = res.stock_quantity - input.id - select;


        }
        else {
            console.log("There is insufficient quantities of that item to fulfill your order. Please choose a lesser amount of your desired item:");
            inquirer.prompt([

                {
                    name: "quantityRetry",
                    type: "input",
                    message: "Enter quantity desired: ",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ]);

            stockCheck();
        };
    });
}

// function orderReview() {
//     connection.query("SELECT ")
// }

function dispInventory() {
    connection.query("SELECT inventory.item_id, inventory.product_name, inventory.price FROM inventory", function (err, res) {
        // console.log(res);

        console.log("\n\n\n\n--------Welcome to BAMAZON!--------\n---------------BAM!----------------\n");
        console.log("take a look at our inventory to make your shopping choice: \n");
        for (i = 0; i < res.length; i++) {
            console.log(
                "\nItem ID: " +
                res[i].item_id +
                " || Product Name: " +
                res[i].product_name +
                " || Price: " +
                res[i].price +
                "\n_____________________________________________________________________________________________________________________________"
            )
        }

        choose();

    });

}


// function purchase() {

//     let itemChoice = 0;

//     let purchasedItems = [];
// }






// prompt for welcome
// create login? 

// display all objects for sale in inventory with ID, Name, Prices

// Prompt with two messages:
// 1. ask for ID of item they wish to purchase
// 2. ask how many units they wish to purchase

// When choice has been made - function purchase() is called

// compare number of units to number in stock

// if NOT - then print "Insufficient quantity" end order
    // prompt if they still wish to make a purchase? 
    // then purchaseStart()
// else - function completeOrder()
    // subtract item(s) from inventory
    // add cost and display to customer
    // print "Thanks for..." or the like. 




    // validateInput makes sure that the user is supplying only positive integers for their inputs
// function validateInput(value) {
// 	var integer = Number.isInteger(parseFloat(value));
// 	var sign = Math.sign(value);

// 	if (integer && (sign === 1)) {
// 		return true;
// 	} else {
// 		return 'Please enter a whole non-zero number.';
// 	}
// }