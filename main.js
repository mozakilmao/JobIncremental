var clicks = 0;

function addClick(number){
    clicks = clicks + number;
    document.getElementById("clicks").innerHTML = clicks;
};

var homelessguys = 0;

function buyHomelessguy(){
    var homelessguyCost = Math.floor(10 * Math.pow(1.2,homelessguys));     //works out the cost of this cursor
    if(clicks >= homelessguyCost){                                   //checks that the player can afford the cursor
        homelessguys = homelessguys + 1;                                   //increases number of cursors
    	clicks = clicks - homelessguyCost;                          //removes the cookies spent
        document.getElementById('homelessguys').innerHTML = homelessguys;  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.2,homelessguys));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	addClick(cursors);
	
}, 1000);
