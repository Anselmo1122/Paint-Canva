
const canva = document.getElementById("canva");
const dif = canva.getBoundingClientRect();
const ctx = canva.getContext("2d");

let painting, color, linewidth, difX, difY;

canva.addEventListener("mousedown", (e)=>{
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("lw").value;
})

canva.addEventListener("mousemove", (e)=>{
    if(painting) {
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    } 
})

canva.addEventListener("mouseup", ()=>{
    ctx.closePath();
    ctx.beginPath();
    painting = false;
})

const dibujar = (x1, y1, x2, y2) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}









