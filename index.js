

let main_container = document.querySelector('.main_container');

function generateSquare(square){
    return `<li class="square" data-card="${square}" style="grid-column:${square%10}/ span 1; grid-row: ${Math.floor(square/10)}/ span 1;"><i class="fa ${square}">${square}</i></li>`;
}

function initBoard(){ 
  let squareHTML = [...Array(110).keys()].slice(11, 110).filter(s => s%10 !== 0).map(sq => generateSquare(sq));
  
  main_container.innerHTML = squareHTML.join('');
}

initBoard(); 