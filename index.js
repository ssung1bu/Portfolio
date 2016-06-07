$(document).ready(function(){
    $("button").click(function(){
        $(this).hide();
    });
});


function handleClick(img){
  var apple = document.getElementById('display')
  var orange = document.getElementsByTagName('img')
  apple.src = orange

}


function handleClick(img){
  var clickedElement = img;
  var src = clickedElement.src;
  var display = document.getElementById('display');
  display.src = src;
}