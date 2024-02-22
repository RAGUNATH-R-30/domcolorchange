var prom = prompt("enter the details")
var span = document.createElement("span")
span.innerHTML = `${prom}`
span.addEventListener("mouseover",colorchange)
document.body.append(span)
function colorchange(){
    var res = document.querySelector("span")
    res.setAttribute("style","color: blue;")
    console.log(res)
}
