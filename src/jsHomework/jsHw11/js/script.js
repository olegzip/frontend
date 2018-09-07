createList();

setTimeout(clearAll, 10000);


function createList() {

    let num = prompt("Введите колличество пунктов в списке:", 0);
    let content = [];
    for (let i = 0; i < num; i++) {
        content[i] = prompt("Введите содержимое пункта:", "");
    }

    let ul = document.createElement('ul');
    content.map(function (item) {
        let li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    });

    document.getElementsByClassName('container')[0].appendChild(ul);
}

function clearAll() {
    document.body.innerHTML = '';
}



