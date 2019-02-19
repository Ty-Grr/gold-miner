var gold = 0;
var gps = 0;
var miner = 0;
var coalmine = 0;
var pickaxe = 0;
var gpc = 1;

function goldClick(){
    gold += gpc;
    document.getElementById("gold").innerHTML = gold;
};

function gpsClick(){
  gold += gps;
  document.getElementById("gold").innerHTML = gold;
  document.getElementById("gpc").innerHTML = gpc;
}



function tab(tab) {
  document.getElementById("mineGoldMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
tab("mineGoldMenu")

window.setInterval(function(){
  gpsClick(gps)
  document.getElementById("gps").innerHTML = gps;
}, 1000);

function buyPickaxe(){
  var pickaxecost = Math.floor(50 * Math.pow(2,pickaxe));
  if(gold >= pickaxecost){
    gpc *= 2;
    pickaxe = pickaxe + 1;
    gold = gold - pickaxecost
    document.getElementById("pickaxe").innerHTML = pickaxe;
    document.getElementById("gold").innerHTML = gold;
  };
  var nextPickaxeCost = Math.floor(50 * Math.pow(2, pickaxe));
  document.getElementById("pickaxecost").innerHTML = nextPickaxeCost;

}

function buyMiner(){
    var minercost = Math.floor(10 * Math.pow(1.1,miner));
    if(gold >= minercost){
        gps = gps + 1;
        miner = miner + 1;
    	  gold = gold - minercost;
        document.getElementById("miner").innerHTML = miner;
        document.getElementById("gold").innerHTML = gold;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,miner));
    document.getElementById('minercost').innerHTML = nextCost;
};

function buyCoalMine(){
    var coalminecost = Math.floor(150 * Math.pow(1.1,coalmine));
    if(gold >= coalminecost){
        gps = gps + 10
        coalmine = coalmine + 1;
    	  gold = gold - coalminecost;
        document.getElementById('coalmine').innerHTML = coalmine;
        document.getElementById('gold').innerHTML = gold;
    };
    var nextCoalMineCost = Math.floor(150 * Math.pow(1.1,coalmine));
    document.getElementById('coalminecost').innerHTML = nextCoalMineCost;
};
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 10000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame
}


if (typeof savegame.dwarves !== "undefined") gameData.dwarves = savegame.dwarves;
