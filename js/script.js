
 let totalPizzaPrice;
let sizePrice;
let toopingPrice;
let crustPrice;

//    Order constructor
function Pizza(size,crust,tooping,total,orderNo){
    this.size =size;
    this.crust=crust;
    this.tooping=tooping;
    this.total= total;
    this.orderNo=orderNo
}

Pizza.prototype.totalPrice = function(){
    // let sizePrice;
    // let toopingPrice;
    // let crustPrice;
    // let totalPizzaPrice;
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
    else if(this.crust === "stuffed"){
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
    window.totalPizzaPrice = sizePrice + crustPrice +toopingPrice;
    $("#tb-total").html(totalPizzaPrice); 
    // console.log(totalPizzaPrice)
}


$(document).ready(function(){
    $("#order").click(function(){
       

        let pizzaSize =$("#pizza-size").find(":selected").val();  //het input as values (eg.1200)
        let pizzaCrust =$("#pizza-crust").find(":selected").val();
        let pizzaTooping =$("#pizza-tooping").find(":selected").val();
        let total = parseInt(pizzaSize)+parseInt(pizzaCrust)+parseInt(pizzaTooping);
        let order =1;
        let priceTotal = 0;

        $("#tb-size").html($("#pizza-size").find(":selected").text()+"-"+pizzaSize);  //get text as input (eg.medium)
        $("#tb-tooping").html($("#pizza-tooping").find(":selected").text()+"-"+pizzaTooping);
        $("#tb-crust").html($("#pizza-crust").find(":selected").text()+"-"+pizzaCrust);
        $("#tb-total").html(total);  

        $("#add-order").click(function(){
        
            let pizzaSize =$("#pizza-size").find(":selected").val(); //get values as input (eg. 800)
            let pizzaCrust =$("#pizza-crust").find(":selected").val();
            let pizzaTooping =$("#pizza-tooping").find(":selected").val();
            let total = parseInt(pizzaSize)+parseInt(pizzaCrust)+parseInt(pizzaTooping);
            order = +1;
            priceTotal= priceTotal+ total;

            let newPizza =new Pizza(pizzaSize,pizzaCrust,pizzaTooping,total,order);
            newPizza.totalPrice()
        

            let newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $("#pizza-size").find(":selected").text()+" - " + newPizza.size + '</td><td id="tooping">' +$("#pizza-tooping").find(":selected").text()+ " - " + newPizza.tooping + '</td><td id="crust">'+ $("#pizza-crust").find(":selected").text()+" - " + newPizza.crust+ '</td><td id="total">' + newPizza.total + '</td></tr>'
            $("#tb").append(newRow)
        });

        $("#checkOut").click(function(){
            $("#deliv-quiz").hide()
            $("button#yes").hide()
            $("button#no").hide()

            $("button#checkOut").hide()
            $("button#add-order").hide()
            $("button#order").hide()
            priceTotal= priceTotal+ total;
            
            // totalPrice = totalPrice + total;
            result.innerHTML =`The total amount is: ${priceTotal} .Thankyou and welcome again.`

        });
        $("#yes").click(function(){
            $("#deliv-quiz").hide()
            $("button#yes").hide()
            $("button#no").hide()
           
            $("button#checkOut").hide()
            $("button#add-order").hide()
            $("button#order").hide()
            alert("The delivery charge is : 100")
            
            let location =prompt("Please enter your location:")
            alert(`Your Order will be delivered to your location: ${location}`)
            
            let totalAndDelivery = priceTotal + total+ 100
            result.innerHTML =`The total amount is: ${totalAndDelivery} .Thankyou and welcome again.`
            // result.innerHTML ="The total amount is:" + ();


        });
        $("#no").click(function(){
            $("#deliv-quiz").hide()
            $("button#yes").hide()
            $("button#no").hide()
            alert("Please proceed and click checkout ")
        });
       
       
        
    });
  
});
//   $("#reset").click(function(){
//         $("#deliv-quiz").show()
//         $("button#yes").show()
//         $("button#no").show()
//         $("button#checkOut").show()
//         $("button#add-order").show()
//         $("button#order").show()
//         $("#tb").empty();
//         result.innerHTML=" "
        
      

//     });