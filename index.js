function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRanBy(n){
  const lis = document.querySelectorAll('#app ul .ranked-list li')
  return lis.each do |li|{
    li + n}
  }
}
