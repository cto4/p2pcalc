if(buy && sell && localStorage){
  window.addEventListener("load", function(){
    var buyOld=localStorage.getItem("buy");
    var sellOld=localStorage.getItem("sell");
    if(buyOld){buy.value=buyOld;}
    if(sellOld){sell.value=sellOld;}
  });
  buy.addEventListener("keyup", function(){
    localStorage.setItem("buy",this.value);
  });
  sell.addEventListener("keyup", function(){
    localStorage.setItem("sell",this.value);
  });
}
function exchange(_buy,_sell,_from,_to){
  if(_from<=1){_from=1}
  var count=((_from/_buy)*_sell).toFixed(2);
  if(from.value>=2){
    to.value=`~ ${count} - ${(count/_from).toFixed(2)}`;
  } else{
    to.value=`~ ${(count/_from).toFixed(2)}`;
  }
}
if(new URL(location.href).searchParams.get("install")=="true"){
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
}

var root=document.querySelector(':root').style;
var mode=localStorage.getItem("mode");
if(mode=="dark"){
  root.setProperty('--theme', '#3f3f3f');
  root.setProperty('--border', 'transprant');
}else{
  root.setProperty('--theme', '#fff');
  root.setProperty('--border', '#ddd');
}
function switchMode(){
  var mode=localStorage.getItem("mode");
  if(mode=="dark"){
    localStorage.setItem("mode","light");
    root.setProperty('--theme', '#fff');
    root.setProperty('--border', '#ddd');
  }else{
    localStorage.setItem("mode","dark");
    root.setProperty('--theme', '#3f3f3f');
    root.setProperty('--border', 'transprant');
  }
}