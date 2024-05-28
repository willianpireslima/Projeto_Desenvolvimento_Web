window.onresize = screen;
window.onload = screen;

function screen () {
  myWidth = window.innerWidth;
  size = "";

  if (myWidth >= 1200) {
    size = "Extra large"
  } else if (myWidth >= 992) {
    size = "Large"
  } else if (myWidth >= 768) {
    size = "Medium"
  } else if (myWidth >= 576) {
    size = "Small"
  } else  {
    size = "Extra small"
  }

  document.getElementById("size").innerHTML = "Largura : " +  myWidth  
  + " px" + "<br>"+ "Tamanho de Tela : " + size;
}