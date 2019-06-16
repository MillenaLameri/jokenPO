function joke(b)
{
	var resultado = document.getElementById("resultado");
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var a = Math.trunc(Math.random()*3);
	var s = "";
	var j = [
	'<img class="img-fluid img-thumbnail" src="https://images.vexels.com/media/users/3/145826/isolated/preview/37a6335f8116ec5d233efd8019e2b2c4-pedra-redonda-by-vexels.png">',
	'<img class="img-fluid img-thumbnail" src="https://st.depositphotos.com/1029434/4866/v/950/depositphotos_48668579-stock-illustration-notebook-paper-drawing.jpg">',
	'<img class="img-fluid img-thumbnail" src="https://image.flaticon.com/icons/png/512/40/40734.png">'
	];
	if(a == b)
	{
		s = '<h1 class="text-primary">Empate</h1>';
	}else if((a > b && b == a-1) || (a == 0 && b == 2))
	{
		s = '<h1 class="text-danger">Você perdeu</h1>';
	}else
	{
		s = '<h1 class="text-success">Você ganhou</h1>';
	}
	resultado.innerHTML = s;
	img1.innerHTML = j[b];
	img2.innerHTML = j[a];
}