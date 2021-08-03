  function changeBackground(){
		var body = document.body
		if(body.style.backgroundImage == "https://media3.giphy.com/media/Y8ybhoMQg8ZZ6/200w.gif?cid=82a1493bbufp3279j3s61ir94xr71qmn2vkuq3360noosy2t&rid=200w.gif&ct=g"){
			body.style.backgroundImage = "https://i.gifer.com/5BRl.mp4"
			document.getElementById("display").innerHTML = "https://i.gifer.com/5BRl.mp4"
		}else{
			body.style.backgroundImage = "white"
			document.getElementById("display").innerHTML = "https://media3.giphy.com/media/Y8ybhoMQg8ZZ6/200w.gif?cid=82a1493bbufp3279j3s61ir94xr71qmn2vkuq3360noosy2t&rid=200w.gif&ct=g"
		}
	}

function changeBackgroundColor(){
		var body = document.body
		if(body.style.backgroundImage = "https://media3.giphy.com/media/Y8ybhoMQg8ZZ6/200w.gif?cid=82a1493bbufp3279j3s61ir94xr71qmn2vkuq3360noosy2t&rid=200w.gif&ct=g"){
			body.style.backgroundImage = "https://i.gifer.com/5BRl.mp4"
			document.getElementById("display").innerHTML = "Indigo"
		}else{
			body.style.backgroundImage = "https://media3.giphy.com/media/Y8ybhoMQg8ZZ6/200w.gif?cid=82a1493bbufp3279j3s61ir94xr71qmn2vkuq3360noosy2t&rid=200w.gif&ct=g"
			document.getElementById("display").innerHTML = "White"
		}
	} 

  function hoverGrow(){
	var grow = document.getElementById("grow")
	grow.style.fontSize = "100px"
}