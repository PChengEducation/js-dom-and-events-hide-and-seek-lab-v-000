function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRanBy(n){
  const rank = document.querySelectorAll('#app ul .ranked-list li')
  for (let i = 0, l = rank.length; i < l; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML + n)
  }
}
