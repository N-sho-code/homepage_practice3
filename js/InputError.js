// エラーチェック
document.addEventListener('DOMContentLoaded',function(){
    var nInput = document.getElementById("kind");
    var nText =document.getElementsByName("message");
    var KindErr = document.getElementById("KindError");
    if(nText.Value===""){
        error.push("入力してください");
    }
});