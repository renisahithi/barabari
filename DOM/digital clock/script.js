const timeElement=document.getElementById("time")
const dateElement=document.getElementById("date")
 let is24Hours=false;
    const toggleBtn=document.getElementById("toggle-btn")
function updateTime(){
           const now=new Date()
            let hours=now.getHours()
            let minutes=now.getMinutes()
             let seconds=now.getSeconds()
               
             let day=now.getDate()
           let month=now.getMonth()+1
            let year=now.getFullYear()

           minutes=String(minutes).padStart(2,"0")
           seconds=String(seconds).padStart(2,"0")
            let ampm="";
            let timeString="";
            if(is24Hours){
                hours=String(hours).padStart(2,"0")
                timeString=hours+":"+minutes+":"+seconds;
            }
          else{
             if(hours>=12){
                ampm="PM"
             }else{
                ampm="AM"
             }
        
                hours=hours%12;
    
            if(hours===0){
            hours=12;
          }
          hours=String(hours).padStart(2,"0")
          timeString=hours+":"+minutes+":"+seconds+"-"+ampm;
          }
           timeElement.innerText=timeString
           dateElement.innerText=day+"/"+month+"/"+year;
           
        }
           toggleBtn.addEventListener("click",()=>{
            is24Hours=!is24Hours;
            if(is24Hours){
                toggleBtn.textContent="switch to 12 hours formate"
            }
            else{
                toggleBtn.textContent="switch to 24 hours formate"
            }
           });
           updateTime()
           setInterval(updateTime,1000)
