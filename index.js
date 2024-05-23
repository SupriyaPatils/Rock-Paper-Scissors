let con=document.querySelectorAll(".con");
let comp=document.querySelectorAll(".comp");
let random=Math.floor(Math.random()*3);
con.forEach((Element,index) => {
    Element.addEventListner("click", () =>{
        con.forEach(item =>{
            item.style.display="none"
        });

    });
    
});
