function clearTv() {
  document.getElementById("result").value = '';
}
 function inp(val) {
  let symb = ['+', '*', '.','/'];
  let minus = '-';
  let last = document.getElementById("result").value;
  if(symb.includes(val) && symb.includes(last.slice(-1))){
    alert("wrong imput");
  }else if(last.slice(-1) == minus && last.slice(-2).slice(0,1) == minus && (symb.includes(val) || val == minus)){
    alert("wrong imput");
  } else
  document.getElementById("result").value += val;
}
function back(){
  let val = document.getElementById("result").value;
  val = val.slice(0, -1);
  document.getElementById("result").value = val;
}
function solve() {
  let str = document.getElementById("result").value;
  let res = ""

  try {
    res = eval(str);
    document.getElementById("result").value = res;
  } catch (error) {
    alert("wrong input")
  }
}
