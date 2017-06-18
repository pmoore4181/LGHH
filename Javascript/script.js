$(document).ready(function(){

function bar(barName, location, startTime, endTime, priceRange, daysWithSpecials, genre, drinkType, picture, yelpReview) {
	this.barName = barName,
	this.location = location,
	this.startTime = startTime,
	this.endTime = endTime,
	this.priceRange = priceRange,
	this.daysWithSpecials = daysWithSpecials,
	this.genre = genre,
	this.drinkType= drinkType,
	this.picture = picture,
	this.yelpReview = yelpReview
}

var libertineBar = new bar ('Libertine', '2101 Greenville Ave', '5', '7', '2', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'Restaurant', 'Full Bar', '<img class="barPicture" src="photos/libertineD.jpg"/>', );

var truckYardBar = new bar ('Truck Yard', '5624 Sears St', '5', '7', '2', ['Monday', 'Wednesday', 'Friday'], 'outdoor', 'Full Bar', '<img class="barPicture" src="photos/Truck-Yard-in-Dallas_201240.jpg"/>');

var dallasBeerKitchenBar = new bar ('Dallas Beer Kitchen', '1802 Greenville Ave Ste 110', '5', '7', '1', ['Friday', 'Saturday'], 'Dive', 'Beer', '<img class="barPicture" src="photos/dallasBearKitchen.jpg"/>');

var shipsLoungeBar = new bar ('Ships Lounge', '1613 Greenville Ave', '5', '7', '1', ['Friday', 'Saturday'], 'Pool Hall', 'Beer', '<img class="barPicture" src="photos/ships3.png"/>');

var theOldMonkBar = new bar ('The Old Monk', '2847 N Henderson Ave', '5', '7', '2', ['Friday', 'Saturday'], 'Pub', 'Full Bar', '<img class="barPicture" src="photos/theoldMonk.jpg"/>');

var veritasWineRoomBar = new bar ('Veritas Wine Room', '2323 N Henderson Ave', '5', '7', '2', ['Friday', 'Saturday'], 'Wine Bar', 'Wine', '<img class="barPicture" src="photos/veritasWine.jpg"/>');

var singleWideBar = new bar ('Single Wide', '2110 Greenville Ave', '5', '7', '1', ['Friday', 'Saturday'], 'Dive', 'Full Bar', '<img class="barPicture" src="photos/singlewide.jpg"/>');

var lgTapsBar = new bar ('LG Taps', '3619 Greenville Ave', '5', '7', '1', ['Monday', 'Saturday'], 'Restaurant', 'Craft Beer', '<img class="barPicture" src="photos/lgtaps"/>');

var thePorchBar = new bar ('The Porch', '2912 N Henderson Ave', '5', '7', '2', ['Friday', 'Saturday'], 'Restaurant', 'Craft Beer', '<img class="barPicture" src="photos/porch.jpg"/>');

var victorTangosBar = new bar ('Victor Tangos', '3001 N Henderson Ave', '5', '7', '2', ['Friday', 'Saturday'], 'Cocktail Bar', 'Cocktails', '<img class="barPicture" src="photos/victortangos.jpg"/>');

var theOldCrowBar = new bar ('The Old Crow', '1911 Greenville Ave', '5', '7', '1', ['Friday', 'Saturday'], 'Dive', 'Beer', '<img class="barPicture" src="photos/oldcrow.jpg"/>');

var rapscallionBar = new bar ('Rapscallion', '2023 Greenville Ave Ste 110', '5', '7', '2', ['Friday', 'Saturday'], 'Restaurant', 'Beer', '<img class="barPicture" src="photos/rapscallion.JPG"/>');

var barArray = [];
barArray.push(libertineBar, truckYardBar, dallasBeerKitchenBar, shipsLoungeBar, theOldMonkBar, veritasWineRoomBar, singleWideBar, 
	lgTapsBar, thePorchBar, victorTangosBar, theOldCrowBar, rapscallionBar);



$(".day").on("click", function(){
	var searchDate = $(this).attr("value");

	// replace old search and add day to top of section
	$(".searchResults").html("<h1>" + searchDate + " Happy Hours</h1>");

	// search by day of the week
	function checkDaysWithSpecials(){
		for(i = 0; i < barArray.length; i++) {
			for(j=0; j < 6; j++) {
				if(barArray[i].daysWithSpecials[j] === searchDate) {

					// create new div and apply to #address section
					var newDiv = $("<div class='result'>");
					$(newDiv).append("<div class='barName'>" + barArray[i].barName + "</div>");
					$(newDiv).append("<div class='barLocation'>" + barArray[i].location + "</div>");
					$(newDiv).append("<div class='barTime'>Hours: " + barArray[i].startTime + " to " + barArray[i].endTime + "</div>");
					$(newDiv).append("<div class='barPrice'>Price: " + barArray[i].priceRange + "</div>");
					$(newDiv).append("<div class='barSpecials'>" + barArray[i].daysWithSpecials.join(", ").toString() + "</div>");
					$(newDiv).append("<div class='barGenre'>" + barArray[i].genre + "</div>");
					$(newDiv).append("<div class='barDrinks'>" + barArray[i].drinkType + "</div>");
					$(newDiv).append(barArray[i].picture);
					$(newDiv).append("<br><br>");
					$(".searchResults").append($(newDiv));


				}
			} 
		}
	}
	checkDaysWithSpecials();
})



});
