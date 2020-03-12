
function readMore() {
    var moreText = document.getElementById("readMore");
    var btnText = document.getElementById("ler");
    
    //if user press the button
    if(moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.style.display = 'block';
        btnText.innerHTML = "Read Less";
    }
    //user don't want to read more.
    else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More";
    }
}

function openTab2() {
    window.open("https://github.com/andremonte/students-icon");
}

function showBTN() {
    var dispBtn = document.getElementById('butt');
    dispBtn.style.display = 'block';
}

function removeBTN() {
    var rmvBtn = document.getElementById('butt');
    rmvBtn.style.display = 'none';
}



//FALTA ficar escutando se a tela mudou ou não!
function expandBTN() {
    var btn = document.getElementById('ler');
    
    // Se a tela for sm ou xs:
    if ($(window).width() <= 500) {
        //se a classe nao tiver btn-block dentro:
        if(!btn.className.match(('btn-block'))) {
            //addiciona btn-block na classe
            btn.classList.add('btn-block');
        }
    }
    // se a tela for maior que sm e xs
    else {
        btn.classList.remove('btn-block');
    }
}

function openTab() {
    window.open("https://github.com/andremonte/employees-Positions");
}
