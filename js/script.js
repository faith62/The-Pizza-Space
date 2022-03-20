
let totalPizzaPrice;

$(document).ready(function(){
    $("#order").click(function(){
       

        let size =$("#pizza-size").find(":selected").text();
        let crust =$("#pizza-crust").find(":selected").text();
        let tooping =$("#pizza-tooping").find(":selected").text();
        let order =1;
        let priceTotal = 0;

    // $("").html($(".size option:selected").text()+ "-"+sizeOfPizza); 
    // $("").html($(".tooping option:selected").text()+ "-"+sizeOfPizza);
    // $("").html($(".crust option:selected").text()+ "-"+sizeOfPizza);
    // $("").html(total);  

    });
//    Order constructor
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
    }

    $("#add-order").click(function(){
        
        
        let size =$("#pizza-size").find(":selected").text();
        let crust =$("#pizza-crust").find(":selected").text();
        let tooping =$("#pizza-tooping").find(":selected").text();
        let order =1;
        priceTotal= priceTotal+ totalPizzaPrice;

        let newPizza =new Pizza(size, crust, tooping,total,order);
    

        let newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' +$("#pizza-size").find(":selected").text();+ " - " + newPizza.size + '</td><td id="crust">' +$("#pizza-crust").find(":selected").text(); + " - " + newPizza.crust + '</td><td id="tooping">' + $("#pizza-tooping").find(":selected").text();+ " - " + newPizza.tooping+ '</td><td id="total">' + newPizza.total + '</td></tr>'
        $("table").append(newRow)
    });

    $("#checkout").click(function(){
        
        // totalPrice = totalPrice + total;
        $(".more-information h4").html(totalPizzaPrice);

    });
    $("#yes").click(function(){
        alert("The delivery charge is : 100")
        
        let location =prompt("Please enter your location:")
        alert(`Your Order will be delivered to your location: ${location}`)
        $(".more-information h4").html(totalPizzaPrice + 100);


    });
    $("#no").click(function(){
        alert("please proceed and click checkout ")
    })
    $("button#checkout").click(function(){
        $(".more-information h6").hide()
        $(".more-information #yes").hide()
        $(".more-information #no").hide()
        $(".more-information h4").html(totalPizzaPrice);

    });



})