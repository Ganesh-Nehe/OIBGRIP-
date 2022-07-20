function number(num){
    var result = document.getElementById("input");
    result.value += num
}
function result(){
    var result = document.getElementById("input");
    result.value = eval(result.value)
}
function clear_result(){
    var result = document.getElementById("input");
    result.value = "";
}
function deletedigit(){
    var number = document.getElementById("input");
    var remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove;
}