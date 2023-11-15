let totallprice=document.querySelector("#total")
let  price=document.querySelectorAll("#price")
let quantity=document.querySelectorAll("#quantity")
let plus=document.querySelectorAll("#plus")
let moins=document.querySelectorAll("#moins")
let favorite=document.querySelectorAll("#heart")
let delet=document.querySelectorAll("#delete")
let card=document.querySelectorAll(".card")
function total_price(){
    var result=0
    for (let i=0; i< price.length; i++) {
        result+=price[i].innerHTML*quantity[i].innerHTML;
        
    }
  return totallprice.innerHTML=result
}
for (let i= 0; i < plus.length; i++) {
    plus[i].addEventListener("click",function add(){

        quantity[i].innerHTML++;
        return total_price()
    })
    
}
for (let i= 0; i < moins.length; i++) {
    moins[i].addEventListener("click",function minus(){
        if (quantity[i].innerHTML>0) {
            
        quantity[i].innerHTML--;
        }

        return total_price()
    })
}
for (let i = 0; i < favorite.length; i++) {
   favorite[i].addEventListener("click",function heart(){
    if (favorite[i].style.color=="red") {
        favorite[i].style.color="black"
        
    }else{
        favorite[i].style.color="red"

    }
    
   })
   
    
}
for (let i = 0; i < delet.length; i++) {
    delet[i].addEventListener("click",function del(){
        document.getElementById("cards").removeChild(card[i])
        

    })
    
}
    
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover",function mouse() {
        card[i].style.backgroundColor="yellow"
        
    })
    
}
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseout",function mouse() {
        card[i].style.backgroundColor="white"
        
    })
    
}

console.log(totallprice,price)