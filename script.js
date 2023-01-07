

let size = 16
let eraser_enabled = false;
let c = 0;
generateGrid();
function generateGrid(){
    //size = changeSize()
    for (var i = 0;i<(size**2);i++) {
        var container = document.getElementById("grid");
        container.innerHTML += '<div class="no_hover" id="tile"></div>';
    }

    const tiles = document.querySelectorAll('div')
    //tiles.forEach(tile => tile.addEventListener('mouseenter',toggleHover));
    tiles.forEach(tile => tile.addEventListener('mousedown',Hover));
}




const btns = document.querySelectorAll('button.size')
btns.forEach(btn => btn.addEventListener('click',changeSize));

const erasers = document.querySelectorAll('button.eraser')
erasers.forEach(eraser => eraser.addEventListener('click',eraser_mod));

function eraser_mod(e){
    c++
    if (c%2 == 1){
        eraser_enabled = true;
        e.target.classList.remove('eraser');
        e.target.classList.add('eraser_on');
        e.target.classList.remove('eraser_off');
    }
    else {
        eraser_enabled = false;
        e.target.classList.remove('eraser');
        e.target.classList.add('eraser_off');
        e.target.classList.remove('eraser_on');
    }
    
}


function Hover(e){
    if (eraser_enabled == false){
        e.target.classList.remove('no_hover');
        e.target.classList.add('hover');
    }
    else{
        e.target.classList.remove('hover');
        e.target.classList.add('no_hover');
    }
    
}




function changeSize(e){
    size = window.prompt('enter side length of grid (1-100)')
    
    if (size>0 && size<=75){
        size = size
    }
    else{
        size = 16
    }
    
    var container = document.getElementById('grid');
    container.innerHTML = '';
    generateGrid()
    
    let new_size = 48/size;
    const new_tiles = document.querySelectorAll("div.no_hover")
    new_tiles.forEach(new_tile => new_tile.style.cssText = 'height: '+new_size+"vh;\n width: "+new_size+"vh;")

    
}










