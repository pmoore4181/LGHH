$(document).ready(function() {

    window.twttr = (function() {
                  twttr.widgets.createTweet(
                    '967078764734763009',
                    document.getElementByClass('resultRow'),
                    {
                      theme: 'dark'
                    }
                  );
                });

    function bar(barName, location, startTime, endTime, priceRange, daysWithSpecials, genre, drinkType, picture, twitter) {
        this.barName = barName,
            this.location = location,
            this.startTime = startTime,
            this.endTime = endTime,
            this.priceRange = priceRange,
            this.daysWithSpecials = daysWithSpecials,
            this.genre = genre,
            this.drinkType = drinkType,
            this.picture = picture,
            this.twitter = twitter
    }

    var libertineBar = new bar('Libertine', '2101 Greenville Ave', '5', '7', 'Moderate', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'Restaurant', 'Full Bar', '<img class="barPicture" src="../corrected/libertineD.png" style="width:350px; height: 350px"/>', '<script type=”text/javascript” src=”http://twitter.com/javascripts/blogger.js”></script><script type=”text/javascript” src=”http://twitter.com/statuses/user_timeline/libertinebar.json?callback=twitterCallback2&count=1″></script>');

    

    var truckYardBar = new bar('Truck Yard', '5624 Sears St', '5', '7', 'Moderate', ['Monday', 'Wednesday', 'Friday'], 'Outdoor', 'Full Bar', '<img class="barPicture" src="../corrected/Truck-Yard-in-Dallas_201240.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/texastruckyard" data-tweet-limit="1"> Tweets by @texastruckyard </a>');

    var dallasBeerKitchenBar = new bar('Dallas Beer Kitchen', '1802 Greenville Ave Ste 110', '5', '7', 'Cheap', ['Friday', 'Saturday'], 'Dive', 'Beer', '<img class="barPicture" src="../corrected/dallasBearKitchen.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/FollowDBK" data-tweet-limit="1"> Tweets by @FollowDBK </a>');

    var shipsLoungeBar = new bar('Ships Lounge', '1613 Greenville Ave', '5', '7', 'Cheap', ['Friday', 'Saturday'], 'Pool Hall', 'Beer', '<img class="barPicture" src="../corrected/ships.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/theship171" data-tweet-limit="1"> Tweets by @theship171 </a>');

    var theOldMonkBar = new bar('The Old Monk', '2847 N Henderson Ave', '5', '7', 'Moderate', ['Friday', 'Saturday'], 'Pub', 'Full Bar', '<img class="barPicture" src="../corrected/dallas-the-old-monk.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/OldMonkDallas" data-tweet-limit="1"> Tweets by @OldMonkDallas </a>');

    var veritasWineRoomBar = new bar('Veritas Wine Room', '2323 N Henderson Ave', '5', '7', 'Moderate', ['Friday', 'Saturday'], 'Wine Bar', 'Wine', '<img class="barPicture" src="../corrected/veritasWine.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/veritasdallas" data-tweet-limit="1"> Tweets by @veritasdallas </a>');

    var singleWideBar = new bar('Single Wide', '2110 Greenville Ave', '5', '7', 'Cheap', ['Friday', 'Saturday'], 'Dive', 'Full Bar', '<img class="barPicture" src="../corrected/singlewide.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/dmillennials" data-tweet-limit="1"> Tweets by @dmillennials </a>');

    var lgTapsBar = new bar('LG Taps', '3619 Greenville Ave', '5', '7', 'Cheap', ['Monday', 'Saturday'], 'Restaurant', 'Craft Beer', '<img class="barPicture" src="../corrected/lgtaps.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/LGTAPSTAVERN" data-tweet-limit="1"> Tweets by @LGTAPSTAVERN </a>');

    var thePorchBar = new bar('The Porch', '2912 N Henderson Ave', '5', '7', 'Moderate', ['Friday', 'Saturday'], 'Restaurant', 'Craft Beer', '<img class="barPicture" src="../corrected/porch.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/porchrestaurant" data-tweet-limit="1"> Tweets by @porchrestaurant </a>');

    var victorTangosBar = new bar('Victor Tangos', '3001 N Henderson Ave', '5', '7', 'Moderate', ['Friday', 'Saturday'], 'Cocktail Bar', 'Cocktails', '<img class="barPicture" src="../corrected/victortangos.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/Victor_Tangos" data-tweet-limit="1"> Tweets by @Victor_Tangos </a>');

    var theOldCrowBar = new bar('The Old Crow', '1911 Greenville Ave', '5', '7', 'Cheap', ['Friday', 'Saturday'], 'Dive', 'Beer', '<img class="barPicture" src="../corrected/oldcrow.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/oldcrowbarnf" data-tweet-limit="1"> Tweets by @oldcrowbarnf </a>');

    var rapscallionBar = new bar('Rapscallion', '2023 Greenville Ave Ste 110', '5', '7', 'Moderate', ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'Restaurant', 'Beer', '<img class="barPicture" src="../corrected/rapscallion.png" style="width:350px; height: 350px"/>', '<a class="twitter-timeline" href="https://twitter.com/RpscllnDallas" data-tweet-limit="1"> Tweets by @RpscllnDallas </a>');

    var barArray = [];
    barArray.push(libertineBar, truckYardBar, dallasBeerKitchenBar, shipsLoungeBar, theOldMonkBar, veritasWineRoomBar, singleWideBar,
        lgTapsBar, thePorchBar, victorTangosBar, theOldCrowBar, rapscallionBar);


    // click day of week to search
    $(".day").on("click", function() {
        var searchDate = $(this).attr("value");

        // replace old search and add day to top of section
        $(".dayOfTheWeek").html("<h2 id='dayHeader'>" + searchDate + " Happy Hours</h2>");
        $("#resultRow").html("");

        checkDaysWithSpecials();


        // search by day of the week
        function checkDaysWithSpecials() {
            for (i = 0; i < barArray.length; i++) {
                for (j = 0; j < 6; j++) {
                    if (barArray[i].daysWithSpecials[j] === searchDate) {

                        // create new div and apply to #address section
                        var newDiv = $("<div class='resultPicture col-md-6'>");
                        var rightSideDiv = $("<div class='resultTwitter col-md-6'>");
                        $(newDiv).append("<div class='barName'>" + barArray[i].barName + "</div>");
                        $(newDiv).append("<div class='barLocation'>" + barArray[i].location + "</div>");
                        $(newDiv).append("<div class='barTime'>Hours: " + barArray[i].startTime + " to " + barArray[i].endTime + "</div>");
                        $(newDiv).append("<div class='barPrice'>Price: " + barArray[i].priceRange + "</div>");
                        $(newDiv).append("<div class='barSpecials'>" + barArray[i].daysWithSpecials.join(", ").toString() + "</div>");
                        $(newDiv).append("<div class='barGenre'>" + barArray[i].genre + "</div>");
                        $(newDiv).append("<div class='barDrinks'>" + barArray[i].drinkType + "</div><br>");
                        $(newDiv).append(barArray[i].picture + "<br>");
                        $(newDiv).append("<br><br><hr id='hr'>");
                        $('#resultRow').append(newDiv);

                        // //Inserting Twitter API
                        // window.twttr = (function(d, s, id) {
                        //     var js, fjs = d.getElementsByTagName(s)[0],
                        //     t = window.twttr || {};
                        //     if (d.getElementById(id)) return t;
                        //     js = d.createElement(s);
                        //     js.id = id;
                        //    js.src = "https://platform.twitter.com/widgets.js";
                        //     fjs.parentNode.insertBefore(js, fjs);

                        //     t._e = [];
                        //     t.ready = function(f) {
                        //     t._e.push(f);
                        //     };

                        //     return t;
                        //     }(document, "script", "twitter-wjs"));

                        var tweets = '<a class="twitter-timeline" href="https://twitter.com/twittername" data-tweet-limit = "1"> Tweets by @twittername </a> <script async src="//platform.twitter.com/widgets.js"charset = "utf-8" > </script>';


                        $(rightSideDiv).append(barArray[i].twitter);
                        $('#resultRow').append($(rightSideDiv));


                    }

                }
            }
            $('html, body').animate({
                scrollTop: $("#barHeading").offset().top
            }, 500);
        }

    })


    // <blockquote class="twitter-tweet" data-lang="en"><p lang="und" dir="ltr"><a href="https://t.co/hW47shNnla">https://t.co/hW47shNnla</a></p>&mdash; The Libertine Bar (@libertinebar) <a href="https://twitter.com/libertinebar/status/966765388255068162?ref_src=twsrc%5Etfw">February 22, 2018</a></blockquote>
    // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

    // <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">TX Beer &amp; Wine Wednesdays! ALL NIGHT from 4pm! $3 select TX beers on tap, bottle or can and 1/2 price Times Ten... <a href="https://t.co/5KkJou9dgs">https://t.co/5KkJou9dgs</a></p>&mdash; The Libertine Bar (@libertinebar) <a href="https://twitter.com/libertinebar/status/966404518652076032?ref_src=twsrc%5Etfw">February 21, 2018</a></blockquote>
    // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



    // click on pictures to choose bar
    $(".barPictures").on("click", function() {
        var searchBar = $(this).attr("value");

        $("#resultRow").html("");
        $(".dayOfTheWeek").html("");



        for (i = 0; i < barArray.length; i++) {
            if (searchBar === barArray[i].barName) {

                // // create new div and apply to #address section
                var newDiv = $("<div class='resultPicture col-md-6'>");
                var rightSideDiv = $("<div class='resultTwitter col-md-6'>");
                $(newDiv).append("<div class='barName'>" + barArray[i].barName + "</div>");
                $(newDiv).append("<div class='barLocation'>" + barArray[i].location + "</div>");
                $(newDiv).append("<div class='barTime'>Hours: " + barArray[i].startTime + " to " + barArray[i].endTime + "</div>");
                $(newDiv).append("<div class='barPrice'>Price: " + barArray[i].priceRange + "</div>");
                $(newDiv).append("<div class='barSpecials'>" + barArray[i].daysWithSpecials.join(", ").toString() + "</div>");
                $(newDiv).append("<div class='barGenre'>" + barArray[i].genre + "</div>");
                $(newDiv).append("<div class='barDrinks'>" + barArray[i].drinkType + "</div><br>");
                $(newDiv).append(barArray[i].picture + "<br>");
                $(newDiv).append("<br><br>");
                $('#resultRow').append(newDiv);

// ++++++++++++++++++ OLD TWITTER FEED CODE ++++++++++++++++++++
                // //Inserting Twitter API
                // window.twttr = (function(d, s, id) {
                //     var js, fjs = d.getElementsByTagName(s)[0],
                //         t = window.twttr || {};
                //     if (d.getElementById(id)) return t;
                //     js = d.createElement(s);
                //     js.id = id;
                //     js.src = "https://platform.twitter.com/widgets.js";
                //     fjs.parentNode.insertBefore(js, fjs);

                //     t._e = [];
                //     t.ready = function(f) {
                //         t._e.push(f);
                //     };

                //     return t;
                // }(document, "script", "twitter-wjs"));

// +++++++++++++++++++ NEW TWITTER FEED CODE +++++++++++++++++++
                window.twttr = (function() {
                  twttr.widgets.createTweet(
                    '967078764734763009',
                    document.getElementByClass('resultTwitter'),
                    {
                      theme: 'dark'
                    }
                  );
                  $(rightSideDiv).append(twttr);
                });





                // display results
                $(rightSideDiv).append(window.twttr);
                $('#resultRow').append($(rightSideDiv));
                $('#resultRow').append("<hr>");




                // <a class="twitter-timeline"  href="https://twitter.com/search?q=%40libertinebar" data-widget-id="967078764734763009" tweet-limit="1">Tweets about @libertinebar</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                




            }
        }
        $('html, body').animate({
            scrollTop: $("#barHeading").offset().top
        }, 1000);
    });



});