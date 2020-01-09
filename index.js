function quote(){
	//functie care generează un citat automat
    quotes = ["The gladdest moment in human life is a departure into unknown lands.", 
	"Travel makes one modest. You see what a tiny place you occupy in the world.", 
	"Traveling – it leaves you speechless, then turns you into a storyteller.", 
	"Adventure may hurt you but monotony will kill you.", "To Travel is to Live", 
	"All you need to know is that it’s possible.", 
	"Don’t listen to what they say. Go see.", 
	"The life you have led doesn’t need to be the only life you have.", 
	"The most beautiful in the world is, of course, the world itself.", 
	"Work, Travel, Save, Repeat"]
	//generarea unul număr random
	var returnedQuote = quotes[Math.floor(Math.random()*quotes.length)];
	return returnedQuote;
	
}

function haide(){
	var vacays1 = [
	    {
        destinatie: "Londra",
        zile: 2,
        unit_price: "$45.99"
      },
      {
        destinatie: "Praga",
        zile: 4,
        unit_price: "$123.75"
      },
      {
        destinatie: "Istanbul",
        zile: 7,
        unit_price: "$299.50"
      }
	]
	var vacays2 = [
	    {
        destinatie: "Madrid",
        zile: 5,
        unit_price: "$245.99"
      },
      {
        destinatie: "Paris",
        zile: 4,
        unit_price: "$143.75"
      },
      {
        destinatie: "New York",
        zile: 7,
        unit_price: "$499.50"
      }
	]
	//returnează ultima vacantă din array
	var total = vacays2.concat(vacays1);
	var vacation = total.pop();
	return "Vacanță la " + vacation.destinatie + " pentru " + vacation.zile + " la doar " + vacation.unit_price;
}