
/*Funcao usada em ofertas*/
function carregar () {
	var txt = document.getElementById("secao5_txt")
	var msg = document.getElementById("secao5_img")
	var data = new Date()
	var hora = data.getHours()

	if (hora > 0 && hora < 12) {
		txt.innerHTML = `Apple iPhone 13 128GB do dia ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} as ${hora} horas`
		msg.src = "images/iPhone.jpg"
		document.getElementsByClassName("secao5")[0].style.backgroundColor = '#e2cd9d';

	} else if (hora > 12 && hora < 18) {
		txt.innerHTML = `Monitor LG 21 LED do dia ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} as ${hora} horas`
		msg.src = "images/monitorLG.jpg"
		document.getElementsByClassName("secao5")[0].style.backgroundColor = '#b9846f';
	}else {
		txt.innerHTML = `Computador PC Completo I3 do dia ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} as ${hora} horas`
		msg.src = "images/computadorintel.jpg"
		document.getElementsByClassName("secao5")[0].style.backgroundColor = '#515154';
	}
}

/*Funcao usada em ofertas*/
function verificar () {
	var vest = document.getElementsByName("radest")
	var img = document.getElementsByClassName("secao4_img")[0]

	/*Selecionamos um imput do tipo radio*/
	if (vest[0].checked) {
		img.src = "images/goias.png"
	} else if (vest[1].checked) {
		img.src = "images/minas.png"
	}else {
		img.src = "images/tocantins.png"
	}

}

/*Funcao usada em ofertas*/
function mostrar () {

	var inputname= document.getElementById("iname").value
	var inputender= document.getElementById("iendere").value
	var inputemai= document.getElementById("iemail").value
	var output = document.getElementsByClassName("secao4_saida")[0]

	output.innerHTML =  `Cadastro: ${inputname},${inputender},${inputemai}`
}