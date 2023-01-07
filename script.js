

//var s = 16;


for (var i = 0;i<256;i++) {
    var container = document.getElementById("grid");
    container.innerHTML += '<div class="no_hover" id="tile"></div>';
}

const tiles = document.querySelectorAll('div')
tiles.forEach(tile => tile.addEventListener('mouseenter',toggleHover));
tiles.forEach(tile => tile.addEventListener('mousedown',toggleHover));


function toggleHover(e){
    e.target.classList.remove('no_hover');
    e.target.classList.add('hover');
}



