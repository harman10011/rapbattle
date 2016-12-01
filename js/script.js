var list = [
{
	name:'Drake',
	keyword:"drake"
},
{
	name:'Eminem',
	keyword:'eminem'
},
{
	name: 'Nicki Minaj',
	keyword: 'nicki minaj'
}
]

function getInfo() {
	var bhinda = document.getElementById('bhinda').value
	var hello = document.getElementById('button')
	var text = document.createElement('a')
	for (var i = 0; i < list.length; i++) {
		if (bhinda == list[0].keyword){
			window.open("drake/drake.html")
			return
		} 
		if (bhinda == list[1].keyword) {
			window.open("eminem/eminem.html")
			return
		} if (bhinda ==list[2].keyword){
			window.open("nicki/nicki.html")

		}
			else alert('username not found')
		return
		
		}

	
	}
	

function clickMe() {
	var newList = document.getElementById('jhund0')
	var newList1 = document.getElementById('jhund1')
	var newList2 = document.getElementById('jhund2')
	var create = document.createTextNode('1.Drake')
	var create1 = document.createTextNode('2.Eminem')
	var create2 = document.createTextNode('3.Nicki Minaj')
	newList.appendChild(create)
    newList1.appendChild(create1)
	newList2.appendChild(create2)
}














