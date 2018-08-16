function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rank = document.querySelectorAll('.ranked-list li')
  for (let i = 0, l = rank.length; i < l; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML + n)
  }
}

function deepstChild(){
  return document.querySelector('div#grand-node div div div div')
}
