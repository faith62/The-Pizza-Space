
let totalPizzaPrice;

//    Order constructor
// function Pizza(size,crust,tooping,total,orderNo){
//     this.size =size;
//     this.crust=crust;
//     this.tooping=tooping;
//     this.total= total;
//     this.orderNo=orderNo
// }

// Pizza.prototype.totalPrice = function(){
//     let sizePrice;
//     let toopingPrice;
//     let crustPrice;
//     if(this.size=== "small"){
//         sizePrice=600;
//     }
//     else if(this.size === "medium"){
//         sizePrice =800
//     }
//     else{
//         sizePrice=1200
//     }

//     if(this.crust=== "crispy"){
//         crustPrice=100;
//     }
//     else if(this.size === "stuffed"){
//         crustPrice=150;
//     }
//     else{
//         crustPrice=200;
//     }

//     if(this.tooping === "pepperoni"){
//         toopingPrice=100;

//     }
//     else if (this.tooping ==="Mushroom"){
//         toopingPrice=150;
//     }
//     else if (this.tooping ==="Meat Deluxe"){
//         toopingPrice=180;
//     }
//     else{
//         toopingPrice=120;
//     }
//     totalPizzaPrice = sizePrice + crustPrice +toopingPrice;
//     console.log(totalPizzaPrice)
// }

$(document).ready(function(){
    $("#order").click(function(){
       

        let pizzaSize =$("#pizza-size").find(":selected").text();
        let pizzaCrust =$("#pizza-crust").find(":selected").text();
        let pizzaTooping =$("#pizza-tooping").find(":selected").text();
        let total = totalPizzaPrice
        let order =1;
        let priceTotal = 0;

        $("#tb-size").html(pizzaSize); 
        $("#tb-tooping").html(pizzaTooping);
        $("#tb-crust").html(pizzaCrust);
        $("#tb-total").html(total);  

        function Pizza(size,crust,tooping,total,orderNo){
            this.size =size;
            this.crust=crust;
            this.tooping=tooping;
            this.total= total;
            this.orderNo=orderNo
        }
        
        Pizza.prototype.totalPrice = function(){
            let sizePrice;
            let toopingPrice;
            let crustPrice;
            if(this.size=== "small"){
                sizePrice=600;
            }
            else if(this.size === "medium"){
                sizePrice =800
            }
            else{
                sizePrice=1200
            }
        
            if(this.crust=== "crispy"){
                crustPrice=100;
            }
            else if(this.size === "stuffed"){
                crustPrice=150;
            }
            else{
                crustPrice=200;
            }
        
            if(this.tooping === "pepperoni"){
                toopingPrice=100;
        
            }
            else if (this.tooping ==="Mushroom"){
                toopingPrice=150;
            }
            else if (this.tooping ==="Meat Deluxe"){
                toopingPrice=180;
            }
            else{
                toopingPrice=120;
            }
            totalPizzaPrice = sizePrice + crustPrice +toopingPrice;
            console.log(totalPizzaPrice)
        }
        


        $("#add-order").click(function(){
        
        
        
            let pizzaSize =$("#pizza-size").find(":selected").text();
            let pizzaCrust =$("#pizza-crust").find(":selected").text();
            let pizzaTooping =$("#pizza-tooping").find(":selected").text();
            let total = totalPizzaPrice
            let order =2;
            priceTotal= priceTotal+ totalPizzaPrice;

            let newPizza =new Pizza(pizzaSize,pizzaCrust,pizzaTooping,total,order);
            newPizza.totalPrice()
        

            let newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + " - " + newPizza.size + '</td><td id="tooping">' + " - " + newPizza.tooping + '</td><td id="crust">'+ " - " + newPizza.crust+ '</td><td id="total">' + newPizza.total + '</td></tr>'
            $("#tb").append(newRow)
        });

        $("#checkOut").click(function(){
            $(".more-information h6").hide()
            $("button#yes").hide()
            $("button#no").hide()
            priceTotal= priceTotal+ totalPizzaPrice;
            
            // totalPrice = totalPrice + total;
            $(".more-information h4 span").html(priceTotal);

        });
        $("#yes").click(function(){
            alert("The delivery charge is : 100")
            
            let location =prompt("Please enter your location:")
            alert(`Your Order will be delivered to your location: ${location}`)
            $(".more-information h4 span").html(priceTotal + 100);


        });
        $("#no").click(function(){
            $(".more-information h6").hide()
            $("button#yes").hide()
            $("button#no").hide()
            alert("please proceed and click checkout ")
        })
        // $("button#checkout").click(function(){
        //     $(".more-information h6").hide()
        //     $(".more-information #yes").hide()
        //     $(".more-information #no").hide()
        //     $(".more-information h4 span").html(totalPizzaPrice);

        // });

        
    });
});