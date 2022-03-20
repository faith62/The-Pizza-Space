


$(document).ready(function(){
    $("#order").submit(function(e){
        e.preventDefault();

        let size =$("#pizza-size").find(":selected").text();
        let crust =$("#pizza-crust").find(":selected").text();
        let tooping =$("#pizza-tooping").find(":selected").text();

        console.log(size);

    })
//    Order constructor
    function Order(size,crust,tooping){
        this.size =size
        this.crust=crust
        this.tooping=tooping
    }
    
    Order.prototype.calculatePrice = function()


})