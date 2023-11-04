let btn = document.querySelector('button');
let list = document.querySelector('.list');
let input = document.querySelector('input');
let ol = document.querySelector('ol');
let two = document.querySelector('.two');
let x = document.querySelector(".img1");
let y = document.querySelector('.img2');
let li = document.querySelectorAll("li");
function task() {
    if (input.value == '') {
        alert('Please write information');
    }
    else {
        ol.style.display = 'block';
        let li = document.createElement('li');
        li.innerHTML = "<span></span>";
        li.children[0].innerHTML = input.value;
        li.classList.add('scroll');
        const x = document.createElement("a");
        x.src = "#";
        x.className = "remove-item";
        li.children[0].append(x);
        li.children[0].style.display = "flex";
        li.children[0].style.justifyContent = "space-between";
        li.children[0].style.width = "100%";
        ol.append(li);
        input.value = "";
        x.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentElement.parentElement.remove();
        })
    }
}
let flag = true
let k = 0;
function z() {
    let li = document.querySelectorAll("li");
    let a = [];
    li.forEach(e => {
        a.push(e.textContent);
    })
    if (flag) {
        flag = !flag;

        return a.sort();
    } else {
        flag = !flag;
        return a.sort().reverse();
    }
}
let flag1 = true;
y.addEventListener('click', () => {
    if (flag1) {
        y.src = './images/Group91.svg'
        y.addEventListener('mouseover', () => {
            y.src = './images/Group91.svg'
        })
        y.addEventListener('mouseleave', () => {
            y.src = './images/Group90.svg'
        })
    }
    else {
        y.src = './images/Group73.svg'
        y.addEventListener('mouseover', () => {
            y.src = './images/Group73.svg'
        })
        y.addEventListener('mouseleave', () => {
            y.src = './images/Group74.svg'
        })
    }
    flag1 = !flag1;
})
y.addEventListener('mouseover', () => {
    y.src = './images/Group73.svg'
})
y.addEventListener('mouseleave', () => {
    y.src = './images/Group74.svg'
})
x.addEventListener("click", event => {
    event.target.parentElement.children[0].value = "";
})
let check = true;
y.addEventListener("click", e => {
    if (check) {
        let ol = document.querySelector('ol');
        let f = z();
        let clone = [...ol.children];
        clone.forEach(e => {
            e.remove();
        })
        f.forEach(item => {
            let li = document.createElement('li');
            li.innerHTML = "<span></span>";
            li.children[0].innerHTML = item;
            li.classList.add('scroll');
            const x = document.createElement("a");
            x.src = "#";
            x.className = "remove-item";
            li.children[0].append(x);
            li.children[0].style.display = "flex";
            li.children[0].style.justifyContent = "space-between";
            li.children[0].style.width = "100%";
            x.addEventListener("click", (e) => {
                e.preventDefault();
                e.target.parentElement.parentElement.remove();
            })
            ol.append(li);
        })
        check = !check;
    } else {
        let ol = document.querySelector('ol');
        let f = z();
        let clone = [...ol.children];
        clone.forEach(e => {
            e.remove();
        })
        f.forEach(item => {
            let li = document.createElement('li');
            li.innerHTML = "<span></span>";
            li.children[0].innerHTML = item;
            li.classList.add('scroll');
            const x = document.createElement("a");
            x.src = "#";
            x.className = "remove-item";
            li.children[0].append(x);
            li.children[0].style.display = "flex";
            li.children[0].style.justifyContent = "space-between";
            li.children[0].style.width = "100%";
            x.addEventListener("click", (e) => {
                e.preventDefault();
                e.target.parentElement.parentElement.remove();
            })
            ol.append(li);
        })
    }
})
function cansel1() {
    event.target.src = "./images/Group70.svg"
}
function cansel2() {
    event.target.src = "./images/Group77.svg"
}
x.addEventListener('mouseover', cansel1);
x.addEventListener('mouseleave', cansel2);
btn.addEventListener('click', task);
two.addEventListener('click', task);