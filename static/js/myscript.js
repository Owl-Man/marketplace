console.log("hello world!")
$('.plus-cart').click(function(){
    var id=$(this).attr("pid").toString();
    var eml=this.parentNode.children[2] 
    $.ajax({
        type:"GET",
        url:"/pluscart",
        data:{
            prod_id:id
        },
        success:function(data){
            eml.innerText=data.quantity 
            document.getElementById("amount").innerText=data.amount 
            document.getElementById("total_amount").innerText=data.total_amount
        }
    })
})

$('.minus-cart').click(function(){
    var id=$(this).attr("pid").toString();
    var eml=this.parentNode.children[2] 
    $.ajax({
        type:"GET",
        url:"/minuscart",
        data:{
            prod_id:id
        },
        success:function(data){
            eml.innerText=data.quantity 
            document.getElementById("amount").innerText=data.amount 
            document.getElementById("total_amount").innerText=data.total_amount
        }
    })
})


$('.remove-cart').click(function(){
//    var id=$(this).attr("pid").toString();
//    var eml=this
//    $.ajax({
//        type:"GET",
//        url:"/removecart",
//        data:{
//            prod_id:id
//        },
//        success:function(data){
//            document.getElementById("amount").innerText=data.amount
//            document.getElementById("total_amount").innerText=data.total_amount
//            eml.parentNode.parentNode.parentNode.parentNode.remove()
//        }
//    })
    console.log("button click")
})


$('.plus-wishlist').click(function(){
    var id=$(this).attr("pid").toString();
    $.ajax({
        type:"GET",
        url:"/pluswishlist",
        data:{
            prod_id:id
        },
        success:function(data){
            //alert(data.message)
            window.location.href = `http://localhost:8000/product-detail/${id}`
        }
    })
})


$('.minus-wishlist').click(function(){
    var id=$(this).attr("pid").toString();
    $.ajax({
        type:"GET",
        url:"/minuswishlist",
        data:{
            prod_id:id
        },
        success:function(data){
            window.location.href = `http://localhost:8000/product-detail/${id}`
        }
    })
})