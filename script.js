

//var s = 16;


for (var i = 0;i<256;i++) {
    var container = document.getElementById("grid");
    container.innerHTML += '<div class="tile_no_hover" id="tile"></div>';
}

const tiles = document.querySelectorAll('div')
tiles.forEach(tile => tile.addEventListener('mouseenter',toggleHover));


function toggleHover(e){
    e.target.classList.remove('tile_no_hover')
    e.target.classList.add('tile_hover')
}



