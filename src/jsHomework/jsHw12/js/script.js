let btn = document.getElementsByTagName("button")[0];
btn.innerText = "Нарисовать круг";
btn.onclick = addForm;

function addForm() {

    btn.style = "display: none";
    let form = document.createElement('div');
    form.innerHTML = '<input type="text" name="diam" placeholder="диаметр (px)" class="input1">';
    form.innerHTML += '<input type="text"  name="color" placeholder="цвет (name, RGB, HEX, HSL)" class="input2">';
    form.innerHTML += '<input type="submit" value="Нарисовать">';
    document.body.appendChild(form);
}

