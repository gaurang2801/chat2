var socket=io.connect("http://localhost:8000");


var message=document.getElementById("message");


var handle=document.getElementById("handle");


var output=document.getElementById("output");


var btn=document.getElementById("send");

var feedback=document.getElementById("feedback");

message.addEventListener("keypress",function(){
	socket.emit("typing",handle.value);
});

btn.addEventListener("click",function(){
	socket.emit("chat",{'message':message.value,'handle':handle.value});
});
btn.addEventListener("click",function(){
	message.value=" ";
	});


socket.on("chat",function(data){
	feedback.innerHTML=" ";	
	output.innerHTML+='<p><strong>' + data.handle + '</strong>' +'<br>' + data.message + '</br>' + '</p>';
	
});

socket.on("typing",function(data){
	feedback.innerHTML='<p><em>' + data + '  is typing a message......</em></p>';
});
