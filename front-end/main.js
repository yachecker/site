var counter = 0;
let text = document.getElementById("text")
async function go(){
setInterval(()=>{
    document.title = ` It\`s ${counter}`
text.innerHTML = counter++;
},800)
}
go()