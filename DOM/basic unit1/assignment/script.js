document.getElementById("greeting").innerHTML="Hi, I'm sahithi!"
let para=document.getElementById("intro");
para.style.color="purple";
para.style.fontSize="18"
//2
document.querySelectorAll(".task").forEach(el => {
  el.style.fontStyle="italic";
});
//3
document.getElementById("mainImage").src="dom 2 photo.png"
document.getElementById("caption").innerHTML="this is image2!"
document.getElementById("caption").style.color="teal"
//4
const books=["book A","book b","book c","book D","book E"];
const bookList=document.getElementById("bookList");
for(let i=0;i<books.length;i++){
    let li=document.createElement("li");
    li.textContent=books[i];
    bookList.appendchild(li);
}
let table=document.getElementById("multiplicationTable");
    let row=document.createElement("tr");
    let th1=document.createElement("th");
    th1.textContent="number";
    let th2=document.createElement("th");
    th2.textContent="x5 result"
