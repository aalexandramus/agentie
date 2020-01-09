function check() {
  document.getElementById("nou").checked = true;
  document.getElementById("vechi").checked = false;
}
function uncheck() {
  document.getElementById("nou").checked = false;
  document.getElementById("vechi").checked = true;
}

function myCheckFunction(){
	a = document.getElementById("myCheck").checked;
	if (a == 'true')
		a = a + 'nimic';
}

function rezervam(){
	console.log('Ajunge aiciiiiiiiiiiiii');
	
}

let rezervari = [];
	//lista de rezervari de forma {nume, email parola..}
	const addRezervare = (ev)=>{
		ev.preventDefault();
		//oprim pagina din a-si face reload pentru ca asta face un tag form cand are un buton
		var name = document.getElementById("nume").value;
		if (name === '' || name == null){
		    messages.push('Numele este Obligatoriu');
		}
		
		//validare email
		var email = document.getElementById("email").value;
		function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
		if (!validateEmail(email)){
			alert("Adresa de email nu e valida!");
			return false;
		}
		
		//validare parolă
		var pass = document.getElementById("parola").value;
		function validatePassword(pass){
			var reg = /(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/;
			return reg.test(pass);
		}
		if (!validatePassword(pass)){
			alert("Parola nu este suficient de sigură");
			return false;
		}
		
		//validate telefon
		var telef = document.getElementById("telefon").value;
		if (telef.length < 10 && telef.length > 10){
			alert('Introduceti un numar de telefon din 10 cifre');
		}
		
		//clientul trebuie să fie nou sau vechi
		var client
		if (document.getElementById("nou").checked == true) {
			client = "nou";
		}else {
			client = "vechi";
		}
		let rezervare = {
			nume: name,
			email: email,
			parola: pass,
			telefon: telef,
			destinatie: document.getElementById("destinatie").value,
			client: client,
			termeniiConditii: document.querySelector('input[id="myCheck"]:checked').value
		}
		rezervari.push(rezervare);
		//refacem formmularul pentru o nouă completare
		document.querySelector('form').reset();
		//salvăm in localStorage
		localStorage.setItem('Rezervarile mele', JSON.stringify(rezervari));
		console.log('Ajunge aici');
		console.log(JSON.parse(localStorage.getItem('Rezervarile mele')));
	}
	document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btnn').addEventListener('click', addRezervare);
        });
		
function selecteaza() {
  document.getElementById("parola").select();
}

function ranging() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "range");
  document.body.appendChild(x);
}