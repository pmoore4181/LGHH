$(document).ready(function(){

function bar(barName, location, startTime, endTime, priceRange, daysWithSpecials, genre, drinkType, picture) {
	this.barName = barName;
	this.location = location;
	this.startTime = startTime;
	this.endTime = endTime;
	this.priceRange = priceRange;
	this.daysWithSpecials = daysWithSpecials;
	this.genre = genre;
	this.drinkType= drinkType;
	this.picture = picture;
}

var libertineBar = new bar ('Libertine', '2101 Greenville Ave', '5', '7', '2', ['mon', 'tue', 'wed', 'thu', 'fri'],  'full bar', '<img class="barPicture" src="Libertine.jpeg"/>');

var truckYardBar = new bar ('Truck Yard', '5624 Sears St', '5', '7', '2', ['mon', 'wed', 'fri'], 'outdoor', 'full bar', '<img src="truckyard.jpg" />');

var dallasBeerKitchenBar = new bar ('Dallas Beer Kitchen', '1802 Greenville Ave Ste 110', '5', '7', '1', ['fri', 'sat'], 'dive', 'beer');

var shipsLoungeBar = new bar ('Ships Lounge', '1613 Greenville Ave', '5', '7', '1', ['fri', 'sat'], 'pool hall', 'beer');

var theOldMonkBar = new bar ('The Old Monk', '2847 N Henderson Ave', '5', '7', '2', ['fri', 'sat'], 'pub', 'full bar');

var veritasWineRoomBar = new bar ('Veritas Wine Room', '2323 N Henderson Ave', '5', '7', '2', ['fri', 'sat'], 'wine bar', 'wine');

var singleWideBar = new bar ('Single Wide', '2110 Greenville Ave', '5', '7', '1', ['fri', 'sat'], 'dive', 'full bar');

var lgTapsBar = new bar ('LG Taps', '3619 Greenville Ave', '5', '7', '1', ['fri', 'sat'], 'restaurant', 'craft beer');

var thePorchBar = new bar ('The Porch', '2912 N Henderson Ave', '5', '7', '2', ['fri', 'sat'], 'restaurant', 'craft beer');

var victorTangosBar = new bar ('Victor Tangos', '3001 N Henderson Ave', '5', '7', '2', ['fri', 'sat'], 'cocktail bar', 'cocktails');

var theOldCrowBar = new bar ('The Old Crow', '1911 Greenville Ave', '5', '7', '1', ['fri', 'sat'], 'dive', 'beer');

var rapscallionBar = new bar ('Rapscallion', '2023 Greenville Ave Ste 110', '5', '7', '2', ['fri', 'sat'], 'restaurant', 'beer');

var barArray = [];
barArray.push(libertineBar, truckYardBar, dallasBeerKitchenBar, shipsLoungeBar, theOldMonkBar, veritasWineRoomBar, singleWideBar, 
	lgTapsBar, thePorchBar, victorTangosBar, theOldCrowBar, rapscallionBar);

console.log(barArray[0].picture);


// search by day of the week
function checkDaysWithSpecials(searchDate){
	for(i = 0; i < 5; i++) {
		for(j=0; j < barArray.length; j++) {
			if(barArray[j].daysWithSpecials[i] === searchDate) {

				var newDiv = $("<div>");
				$(newDiv).append(barArray[j].barName + "<br>");
				$(newDiv).append(barArray[j].location);
				$(newDiv).append("Hours: " + barArray[j].startTime + " to " + barArray[j].endTime + "<br>");
				$(newDiv).append("Price: " + barArray[j].priceRange + "<br>");
				$(newDiv).append(barArray[j].daysWithSpecials.join(", ").toString() + "<br>");
				$(newDiv).append(barArray[j].genre + "<br>");
				$(newDiv).append(barArray[j].drinkType + "<br>");
				$(newDiv).append(barArray[j].picture);
				$(newDiv).append("<br><br>");
				$(".barSection").append($(newDiv));

			}
		} 
	}
}
checkDaysWithSpecials("mon");


// ========================================================================================
// // search by price
// function checkPrice(searchPrice){
// 	for(i = 0; i < barArray.length; i++) {
// 		if(searchPrice === barArray[i].priceRange) {


// 			var newDiv = $("<div>");
// 			$(newDiv).append(barArray[i].barName + "<br>");
// 			$(newDiv).append(barArray[i].location);
// 			$(newDiv).append("Hours: " + barArray[i].startTime + " to " + barArray[i].endTime + "<br>");
// 			$(newDiv).append("Price: " + barArray[i].priceRange + "<br>");
// 			$(newDiv).append(barArray[i].daysWithSpecials.toString() + "<br>");
// 			$(newDiv).append(barArray[i].genre + "<br>");
// 			$(newDiv).append(barArray[i].drinkType);
// 			$(newDiv).append("<br><br>");
// 			$(".barSection").append($(newDiv));



// 			console.log(barArray[i].barName);
// 			console.log(barArray[i].location);
// 			console.log("Hours: " + barArray[i].startTime + " to " + barArray[i].endTime);
// 			console.log(barArray[i].priceRange);
// 			console.log(barArray[i].daysWithSpecials.toString());
// 			console.log(barArray[i].genre);
// 			console.log(barArray[i].drinkType);
// 			console.log("===================================");
// 		}
// 	}
// }
// checkPrice("2");



});
