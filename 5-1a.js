// データ
var result = "";
// =で計算したかどうか
var is_calc = false;

// 初期表示
window.onload = function () {
  result = document.getElementById('result');
};

// Cキー押下
function cClick(){
  result.value = "0";
  is_calc = false;
}

// 数字キー押下
function numClick(val){
  if(result.value == "0" && val == "0"){
    result.value = "0";
  }else if(result.value == "0" && val == "."){
    result.value = "0.";
  }else if(result.value == "0"){
    result.value = val;
  }else{
    result.value += val;
  }
}

// 演算子キー押下
function opeClick(val){
  if(is_calc)  is_calc = false;
  
  if(isOpeLast(result.value)){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
}

// =キークリック
function equalClick(){
  if(isOpeLast(result.value))  result.value = result.value.slice(0, -1);

  var temp = math.evaluate(result.value.replaceAll("×", "*").replaceAll("÷", "/"));
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
}

// 入力されている値が演算子かどうか
function isOpeLast(char){
    var judge = char.charAt(char.length-1);
    var operator = ["+","-","×","÷"]
    for(var i = 0; i < operator.length; i++){
        if(judge == operator[i]){return true;}
    }
    return false;
}