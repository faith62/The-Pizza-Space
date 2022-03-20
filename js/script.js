


$(document).ready(function(){
    $("#order").click(function(e){
        e.preventDefault();

        let size =$("#pizza-size").find(":selected").text();
        let crust =$("#pizza-crust").find(":selected").text();
        let tooping =$("#pizza-tooping").find(":selected").text();
        let order =1;
        let totalPrice = 0;

    $("").html($(".size option:selected").text()+ "-"+sizeOfPizza); 
    $("").html($(".tooping option:selected").text()+ "-"+sizeOfPizza);
    $("").html($(".crust option:selected").text()+ "-"+sizeOfPizza);
    $("").html(total);  

    })
//    Order constructor
    function Pizza(size,crust,tooping,total, orderNo){
        this.size =size;
        this.crust=crust;
        this.tooping=tooping;
        this.total=total;
        this.orderNo=orderNo
    }
    
    Order.prototype.calculatePrice = function(){}

    $("#add-order").click(function(){
        
        let size =$("#pizza-size").find(":selected").text();
        let crust =$("#pizza-crust").find(":selected").text();
        let tooping =$("#pizza-tooping").find(":selected").text();
        let order =1;
        totalPrice = totalPrice + total;

        let newPizza =new Pizza(size, crust, tooping,total,order);

        let newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' +$("#pizza-size").find(":selected").text() + " - " + newPizza.size + '</td><td id="toppings">' +$("#pizza-tooping").find(":selected").text() + " - " + newPizza.toopings + '</td><td id="crust">' + $("#pizza-crust").find(":selected").text()+ " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
        $("table").append(newRow)
    });

    $("#checkout").click(function(){
        totalPrice = totalPrice + total;
        $("").html(totalPrice);

    });
    $("button#yes").click(function(){
        alert("The delivery charge is : 100")
        prompt("Please enter your location:")
        let location= $("prompt").val();
        alert(`Your Order will be delivered to your ${location}`)

    })



})