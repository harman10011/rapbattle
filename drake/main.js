var list = [
{
   name:"harman",
   password:"kidakida"
},
{
	name:"bhinda",
	password:"ambersar123"
},
{
	name:"raman",
	password:"chandigarh"
}
]

function getInfo() {
var userName = document.getElementById('username').value
var passWord = document.getElementById('password').value

	for (var i = 0; i < list.length; i++) {
		if (userName == list[i].name && passWord == list[i].password) {
			alert("thank you " + userName +" for voting! Results will be out soon") 
			return
		}
}  alert("inncorrect username or password")
}

function register() {
	var newUserName = document.getElementById('newusername').value
	var newPassWord = document.getElementById('newpassword').value
	var combined = {
		name: newUserName,
		password: newPassWord
	}
	for (var i = 0; i < list.length; i++) {
		if ( newUserName == list[i].name || newPassWord == list[i].password){
			alert('username taken')
			return
       } 
	}alert('resgisterd')
	list.push(combined)
	return
} 












