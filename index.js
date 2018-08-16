function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRanBy(n){
  const lis = document.querySelectorAll('#app ul .ranked-list li')
  for (let i = 0, 1 = rank.length; i < 1; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML + n)
  }
}
