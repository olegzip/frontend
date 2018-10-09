
let btn = document.getElementsByTagName("button")[0];
btn.innerText = "Нарисовать круг";
btn.onclick = addForm;

function addForm() {

    btn.style = "display: none";
    let form = document.createElement('div');
    form.innerHTML = '<input type="text" name="diam" placeholder="диаметр (px)" class="input1">';
    form.innerHTML += '<input type="text"  name="color" placeholder="цвет (name, RGB, HEX, HSL)" class="input2">';
    form.innerHTML += '<button class="btn2">НАРИСОВАТЬ</button>';
    document.body.insertBefore(form, document.getElementsByTagName("script"));
}


alert("sdfsdfds");

let btn2 = document.getElementsByClassName(".btn2")[0];
console.log(btn2);

btn2.onsubmit = drawCircle();
function drawCircle() {
    let circle = document.createElement('div');
    circle.className = "circle";
    console.log(circle);
    document.body.insertBefore(circle, document.getElementsByTagName("button")[0]);

}

