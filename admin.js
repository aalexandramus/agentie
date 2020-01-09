
var afisareVacante = document.getElementById('toate-vacantele');
afisareVacante.style.background = "rgba(51, 27, 26, 0.5)";
var buton = document.getElementById('show-vacante-btn');
buton.addEventListener("click", function(){

    $.get("http://localhost:3000/vacante")
        .done(function (response) {
            console.log("s-a terminat cu bine", response);
            if(response != null){
                response.forEach(function (i){
                    let parag = document.createElement("p");
                    parag.innerHTML = "Mergem la " + i.destination + " pentru " + i.nrNights + " nopti nebune la doar " + i.price + " euro, nu fii sarac!";
                    parag.style.color = "white";
                    parag.style.fontWeight = "bold";
                    afisareVacante.appendChild(parag);
                });
            }
        })
        .fail(function (error) {
            console.log("error", error);
        });
});

//pt adauga vacante
var butonPost = document.getElementById('submit-post');
butonPost.addEventListener("click", function(){
    var destination = document.getElementById('destination').value;
    var nrNights = document.getElementById('nrNights').value;
    var price = document.getElementById('price').value;

    const obiect =  {destination: destination, nrNights: nrNights, price:price}
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/vacante",
        contentType:"application/json",
        data:JSON.stringify(obiect)

    }).done(function(){
        console.log('POST succesfull');
    });
});

//pt actualizareza vacanta
var butonUpdate = document.getElementById('submit-update');
butonUpdate.addEventListener("click", function(){
    var destination = document.getElementById('destination1').value;
    var nrNights = document.getElementById('nrNights1').value;
    var price = document.getElementById('price1').value;
    var idUp = document.getElementById('id-vacanta').value;

    const obiect =  {destination: destination, nrNights: nrNights, price:price}
    $.ajax({
        type: "PUT",
        url: "http://localhost:3000/vacante/"+idUp,
        contentType:"application/json",
        data:JSON.stringify(obiect)

    }).done(function(){
        console.log('UPDATE succesfull');
    });
});

//delete
var butonDelete = document.getElementById('submit-delete');
butonDelete.addEventListener("click", function(){
    var idDel = document.getElementById("id-vacanta1").value;
    $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/vacante/"+idDel,
        contentType:"application/json",

    }).done(function(){
        console.log('DELETE succesfull');
    }).fail(function (error) {
        console.log('err', error)
    });
});