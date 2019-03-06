// Variables
var gold = 300000;
var gps = 0;
var gpc = 1;
var multiplier = 1.07
var pickaxe = 0;
var miner = 0;
var coalmine = 0;
var silvermine = 0;
var ironmine = 0;
var updateGUITimer = setInterval("updateGUI()", 10);

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

// Updates to show new Items
function updateGUI(){
  if(gold >= 10){
    document.getElementById("minerID").style.visibility = "visible"
  }
  if(gold >= 100){
    document.getElementById("coalmineID").style.visibility = "visible"
  }
  if(gold >= 200){
    document.getElementById("pickaxeID").style.visibility = "visible"
  }
  if(gold >= 500){
    document.getElementById("silvermineID").style.visibility = "visible"
  }
  if(gold >= 2000){
    document.getElementById("ironmineID").style.visibility = "visible"
  }
}



// Shop item functions
function buyPickaxe(){
  var pickaxecost = Math.floor(200 * Math.pow(2,pickaxe));
  if(gold >= pickaxecost){
    gpc *= 2;
    pickaxe = pickaxe + 1;
    gold = gold - pickaxecost
    document.getElementById("pickaxe").innerHTML = pickaxe;
    document.getElementById("gold").innerHTML = round(gold);
  };
  var nextPickaxeCost = Math.floor(200 * Math.pow(2, pickaxe));
  document.getElementById("pickaxecost").innerHTML = nextPickaxeCost;
};

function buyMiner(){
    var minercost = Math.floor(10 * Math.pow(multiplier,miner));
    if(gold >= minercost){
        gps = gps + 0.1;
        miner = miner + 1;
    	  gold = gold - minercost;
        document.getElementById("miner").innerHTML = miner;
        document.getElementById("gold").innerHTML = round(gold);
    };
    var nextCost = Math.floor(10 * Math.pow(multiplier,miner));
    document.getElementById('minercost').innerHTML = nextCost;
};

function buyCoalMine(){
    var coalminecost = Math.floor(200 * Math.pow(multiplier,coalmine));
    if(gold >= coalminecost){
        gps = gps + 1;
        coalmine = coalmine + 1;
    	  gold = gold - coalminecost;
        document.getElementById('coalmine').innerHTML = coalmine;
        document.getElementById("gold").innerHTML = round(gold);
    };
    var nextCoalMineCost = Math.floor(200 * Math.pow(multiplier,coalmine));
    document.getElementById('coalminecost').innerHTML = nextCoalMineCost;
};

function buySilverMine(){
    var silverminecost = Math.floor(1000 * Math.pow(multiplier,silvermine));
    if(gold >= silverminecost){
        gps = gps + 10;
        silvermine = silvermine + 1;
    	  gold = gold - silverminecost;
        document.getElementById('silvermine').innerHTML = silvermine;
        document.getElementById("gold").innerHTML = round(gold);
    };
    var nextSilverMineCost = Math.floor(1000 * Math.pow(multiplier,silvermine));
    document.getElementById('silverminecost').innerHTML = nextSilverMineCost;
};

function buyIronMine(){
    var ironminecost = Math.floor(5000 * Math.pow(multiplier,ironmine));
    if(gold >= ironminecost){
        gps = gps + 40;
        ironmine = ironmine + 1;
    	  gold = gold - ironminecost;
        document.getElementById('ironmine').innerHTML = ironmine;
        document.getElementById("gold").innerHTML = round(gold);
    };
    var nextIronMineCost = Math.floor(5000 * Math.pow(multiplier,ironmine));
    document.getElementById('ironminecost').innerHTML = nextIronMineCost;
};



// Per Second Interval
window.setInterval(function(){
  gpsClick(gps)
  document.getElementById("gps").innerHTML = round(gps);
  document.getElementById('gold').innerHTML = round(gold);
}, 1000);
