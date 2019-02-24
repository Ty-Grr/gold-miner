// Variables
var gold = 0;
var gps = 0;
var gpc = 1;
var pickaxe = 0;
var miner = 0;
var coalmine = 0;
var silvermine = 0;


// Rounding Function
function round(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

// Clicking function
function goldClick(){
    gold += gpc;
    document.getElementById("gold").innerHTML = round(gold);
};

// Auto Click function
function gpsClick(){
  gold += gps;
  document.getElementById("gold").innerHTML = round(gold);
  document.getElementById("gpc").innerHTML = gpc;
}

// Menu function
function tab(tab) {
  document.getElementById("mineGoldMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
tab("mineGoldMenu")


// Shop item functions
function buyPickaxe(){
  var pickaxecost = Math.floor(200 * Math.pow(3,pickaxe));
  if(gold >= pickaxecost){
    gpc *= 2;
    pickaxe = pickaxe + 1;
    gold = gold - pickaxecost
    document.getElementById("pickaxe").innerHTML = pickaxe;
    document.getElementById("gold").innerHTML = round(gold);
  };
  var nextPickaxeCost = Math.floor(200 * Math.pow(3, pickaxe));
  document.getElementById("pickaxecost").innerHTML = nextPickaxeCost;
};

function buyMiner(){
    var minercost = Math.floor(10 * Math.pow(1.25,miner));
    if(gold >= minercost){
        gps = gps + 0.1;
        miner = miner + 1;
    	  gold = gold - minercost;
        document.getElementById("miner").innerHTML = miner;
        document.getElementById("gold").innerHTML = round(gold);
    };
    var nextCost = Math.floor(10 * Math.pow(1.25,miner));
    document.getElementById('minercost').innerHTML = nextCost;
};

function buyCoalMine(){
    var coalminecost = Math.floor(150 * Math.pow(1.25,coalmine));
    if(gold >= coalminecost){
        gps = gps + 1;
        coalmine = coalmine + 1;
    	  gold = gold - coalminecost;
        document.getElementById('coalmine').innerHTML = coalmine;
        document.getElementById("gold").innerHTML = round(gold);
    };
    var nextCoalMineCost = Math.floor(150 * Math.pow(1.25,coalmine));
    document.getElementById('coalminecost').innerHTML = nextCoalMineCost;
};

function buySilverMine(){
    var silverminecost = Math.floor(1000 * Math.pow(1.25,silvermine));
    if(gold >= silverminecost){
        gps = gps + 10;
        silvermine = silvermine + 1;
    	  gold = gold - silverminecost;
        document.getElementById('silvermine').innerHTML = silvermine;
        document.getElementById("gold").innerHTML = round(gold);
    };
    var nextSilverMineCost = Math.floor(1000 * Math.pow(1.25,silvermine));
    document.getElementById('silverminecost').innerHTML = nextSilverMineCost;
};



// Per Second Interval
window.setInterval(function(){
  gpsClick(gps)
  document.getElementById("gps").innerHTML = round(gps);
  document.getElementById('gold').innerHTML = round(gold);
}, 1000);
