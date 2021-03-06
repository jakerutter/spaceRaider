//play menu confirm sound
function menuConfirm(){
    document.getElementById("menuConfirm").play();
}

//click sound function
function clickSound(){
    document.addEventListener("click", function(){
    document.getElementById("clickSound").play();
    });
}

//canvas that is drawn on body.onload and sits in the background during menu selections
function background() {
   drawing();
}

//Canvas functions for background
function drawing() {
	var c = document.getElementById('firstCanvas');
    var ctx = c.getContext('2d');
	var xMax = c.width = window.screen.availWidth;
	var yMax = c.height = window.screen.availHeight;
    var rotateBy = 0;
    var hmTimes = Math.round(xMax + yMax);
    
    //uncomment this timer to make the background grow more densly starred
    // var id = setInterval(frame, 500);
    function frame(){
        if (rotateBy > 10){
            clearInterval(id);
        } else {
	        for(var i=0; i<=hmTimes; i++) {
	            var randomX = Math.floor((Math.random()*xMax)+1);
                var randomY = Math.floor((Math.random()*yMax)+1);
                var randomSize = Math.floor((Math.random()*2)+1);
                var randomOpacityOne = Math.floor((Math.random()*9)+1);
                var randomOpacityTwo = Math.floor((Math.random()*9)+1);
                var randomHue = Math.floor((Math.random()*360)+1);
                if(randomSize>1) {
                ctx.shadowBlur = Math.floor((Math.random()*15)+5);
                ctx.shadowColor = "white";
                }
                ctx.fillStyle = "hsla("+randomHue+", 30%, 80%, ."+randomOpacityOne+randomOpacityTwo+")";
                ctx.fillRect(randomX, randomY, randomSize, randomSize);
            }
                ctx.save();
                ctx.restore();
                ctx.translate(c.width/50, c.height/50);
                ctx.rotate(rotateBy);
                rotateBy += .01;
        }
    }
//remove this function call if you decide to turn the timer back on
    frame();    
}

// //First menu that appears when start button selected
function welcomeModal() {
   
    document.getElementById('startButton').classList.add('hidden');
    document.getElementById('welcomeModal').classList.remove('hidden');
    $("#welcomeModal").modal();

    var size = "";
    loop();
    
    function loop(){
        if ($("input[name='gameSize']:checked").length > 0) {
            size = $("input[name='gameSize']:checked").val();
        }
        else{
            setTimeout(loop, 500);   
        }
      currentSize.innerHTML = size;
    }
}

//hide the first menu and display second if a selection had been made
//if not display the first menu again with an alert
function hideWelcomeModal() {
    if (currentSize.innerHTML != ""){
    document.getElementById('welcomeModal').classList.add('hidden');
    document.getElementById('welcomeModal').classList.add('behind');
    document.getElementById('simplemodal-overlay').classList.add('behind');
    document.getElementById('simplemodal-container').classList.add('behind');
    document.getElementById('menuModal').classList.remove('hidden');
    menuConfirm();
    $("#menuModal").modal();
    }else {
        welcomeModalAlert.innerHTML = "You must make a selection before proceeding.";
        welcomeModal();
    }
}

//second menu that the user will see
//this is where they will select the units that they have to start the game with
function menuModal() {
    document.getElementById('menuModal').classList.remove('hidden');
    $("#menuModal").modal();

    var troops = [];

}

//check the troops selection and checkboxes to verify that the correct selections have been made
function checkTroopSelection() {
    troops = $('input:checkbox:checked.checkboxes').map(function () {
        return this.value;
      }).get();
      if (troops.length > 0){
        troopSelection.innerHTML = troops;
    }

    if (troopSelection.innerHTML != ""){
        hideMenuModal();
    }else{
        menuModalAlert.innerHTML = "You must make a selection before proceeding.";
        menuModal();
    }
}

function hideMenuModal() {
    if (troopSelection.innerHTML != ""){
    document.getElementById('menuModal').classList.add('hidden');
    document.getElementById('menuModal').classList.add('behind');
    document.getElementById('simplemodal-overlay').classList.add('behind');
    document.getElementById('simplemodal-overlay').classList.add('behind');
    document.getElementById('simplemodal-container').classList.add('hidden');
    document.getElementById('simplemodal-overlay').classList.add('hidden');   
    menuConfirm();
    move();
    } else {
        menuModal();
    }
}

//Triggers the loading bars
function move() {
    document.getElementById("myBar1").classList.remove("hidden");
    document.getElementById("myProgress1").classList.remove("hidden");
    load1();
    setTimeout(load2, 2500);
    setTimeout(load3, 6000);
    setTimeout(load4, 9000);
    setTimeout(load5, 12000);
  }

//first loading bar
  function load1(){
    var elem = document.getElementById("myBar1");  
    elem.innerHTML = "initating the Big Bang...";
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
    }

//second loading bar
  function load2(){
    document.getElementById("myBar1").classList.add("hidden");
    document.getElementById("myBar1").classList.remove("center");
    document.getElementById("myProgress1").classList.add("hidden");
    document.getElementById("myProgress1").classList.remove("center");
    document.getElementById("myProgress2").classList.remove("hidden");
    var elem = document.getElementById("myBar2");
    elem.classList.remove("hidden");
    elem.classList.add("center");
    elem.innerHTML = "...generating the cosmos...";
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
    }

  //third loading bar
function load3(){
    document.getElementById("myBar2").classList.add("hidden");
    document.getElementById("myBar2").classList.remove("center");
    document.getElementById("myProgress2").classList.add("hidden");
    document.getElementById("myProgress2").classList.remove("center");
    document.getElementById("myProgress3").classList.remove("hidden");
    var elem = document.getElementById("myBar3");
    elem.classList.remove("hidden");
    elem.classList.add("center");
    elem.innerHTML = "...calculating galactic distances...";
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
        if (width >= 100) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

//fourth loading bar
function load4(){
    document.getElementById("myBar3").classList.add("hidden");
    document.getElementById("myBar3").classList.remove("center");
    document.getElementById("myProgress3").classList.add("hidden");
    document.getElementById("myProgress3").classList.remove("center");
    document.getElementById("myProgress4").classList.remove("hidden");
    var elem = document.getElementById("myBar4");
    elem.classList.remove("hidden");
    elem.classList.add("center");
    elem.innerHTML = "...booting SkyNet...";
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
        if (width >= 100) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

//fifth loading bar
function load5(){
    document.getElementById("myBar4").classList.add("hidden");
    document.getElementById("myBar4").classList.remove("center");
    document.getElementById("myProgress4").classList.add("hidden");
    document.getElementById("myProgress4").classList.remove("center");
    document.getElementById("myProgress5").classList.remove("hidden");
    var elem = document.getElementById("myBar5");
    elem.classList.remove("hidden");
    elem.classList.add("center");
    elem.innerHTML = "...beaming up Scotty...";
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
        if (width >= 100) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

//Define Units
function Unit(id,playerID,name,image,sound,moves,travelDistance,targetType,viewDistance,fixedTargetOrPatrol,currentLocation, activated){
    this.id = id;
    this.playerID = playerID;
    this.name = name;
    this.image = image;
    this.sound = sound;
    this.moves = moveType(unitName);   //thinking I'll have a function that registers all unit moves and returns them when called with unitName as parameter.
    this.travelDistance = travelDistance;
    this.targetType = targetType;  //when you are using this unit does your click register at the system or planetary level.
    this.viewDistance = viewDistance;
    this.fixedTargetOrPatrol = fixedTargetOrPatrol;
    this.currentLocation = currentLocation;
    this.activated = activated;

  };

  //Define solar systems
function System(id,name,location,numberOfPlanets,occupied,nameOfOccupants,isSelected,isTargeted,isSearched,isDestroyed, childrenPlanets){
    this.id = id;
    this.name = name;
    this.location = location;
    this.numberOfPlanets = planetList.length;
    this.occupied = occupied;   //bool
    this.nameOfOccupants = nameOfOccupants;
    this.isSelected = isSelected;  
    this.isTargeted = isTargeted;
    this.isSearched = isSearched;
    this.isDestroyed = isDestroyed;
    this.childrenPlanets = createPlanets(childrenPlanets);

  };



//Old Maze Functions and Variables Below this comment
//Global Variables
var upAndDown = "";  
var wallNodes = [];
var nodeArray = [];
var nodesForEntryAndExit = [];
var entryNode;
var exitNode;
var colordepth;
var tID;
var timerId;
var allTiles = [];
var maxRow;
var maxColumn;
var isComplete;
var mazesWatchedCounter = 0;
var mazeStepsCounter = 0;
var mazeHasBegun = false;

// Colors the Node gray when it is hovered over.
$('.mazehole').hover(function() {
($('#htmlloc').html(this.id))},
function(){
    $('#htmlloc').html("");
});

//Run the Program based on User Selected Size
var rowsAndColumns = $("#numOfRows");
function startMaze() {
    if ($("#numOfRows").val() === "Select"){
        return;}
    if (mazeHasBegun){
        reInitMaze();
        mazeHasBegun = false;
    }

    mazeHasBegun = true;
    if ($("#numOfRows").val() != "Select") {
     mazesWatchedCounter += 1;
    TrackMazesWatched(mazesWatchedCounter);
    }
else{ return;}
    if (isComplete) { 
        reInitMaze();
        mazeStepsCounter = 0;
        TrackMazeStepsToEntry(mazeStepsCounter);
    }
    var userChoice = $("#numOfRows").val();
   
    maxRow = Number(userChoice);
    maxColumn = Number(userChoice);
    Maze.gradient.setMaxDepth(maxRow + maxColumn);
    
    createDivs(maxRow);
    var htmlString = ".";
    $(".mazehole").each(function(){
    var isTileHtml = $(this).attr('id');
    $("#"+isTileHtml).html(htmlString);
    });
    prepMaze(nodeArray);
    runMazePhase1(nodeArray);
    runMazePhase2(nodeArray);
};


//FUNCTIONS BELOW

//Delete the divs from the previous maze and reset values
function reInitMaze() {
    document.getElementsByClassName("mazehole").remove();
    upAndDown = undefined;
    wallNodes.length = 0;
    nodeArray.length = 0;
    nodesForEntryAndExit.length = 0;
    entryNode = undefined;
    exitNode = undefined;
    colordepth = undefined;
    tID = undefined;
    clearInterval(timerId);
    clearInterval(timerId2);
    timerId = undefined;
    timerId2 = undefined;
    allTiles.length = 0;
    maxRow = undefined;
    maxColumn = undefined;
    isComplete = undefined;
    userChoice = undefined;
    rowsAndColumns = undefined;
    i = undefined;
    index = undefined;
    x = undefined;
    isTile = undefined;
    Orientation = undefined;
    myNode = undefined;
    mazeStepsCounter = 0;
}

//Helper function for deleting elements by class name -- used by reInitMaze()
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

//Creates the divs based on maxRow and maxColumn
function createDivs(maxRow) {
  var wrapperDiv = document.getElementById("mazeWrapper");
  var rowDiv;
	for (var i=0; i < maxRow; i++) {
		var thisDiv = document.createElement("div");
    thisDiv.id = "mazeRow-" + i;
    thisDiv.className = "row";
  	wrapperDiv.appendChild(thisDiv);
  	for (var j=0; j < maxColumn; j++) {
    	rowDiv = document.getElementById("mazeRow-" + i);
			var thisColumnDiv = document.createElement("div");
      thisColumnDiv.id = (i*maxRow)+j;
      thisColumnDiv.className = "mazehole";
      rowDiv.appendChild(thisColumnDiv);
    }
  }
}

//Set up the maze Orientation and Walls
function prepMaze(nodeArray){

  assignAllNodeIdsToAllTilesArray();
  determineMazeOrientation(upAndDown);
  assignNodeProperties(allTiles,nodeArray);
  generateWallTiles(upAndDown,nodeArray,wallNodes);
  populateWallTiles(nodeArray);

  return nodeArray;
}

//Set up Entry and Exit and Populate them
function runMazePhase1(nodeArray) {

    createEntryAndExitNodes(upAndDown);
    entryNode = nodesForEntryAndExit[0];
    exitNode = nodesForEntryAndExit[1];
    populateEntryTile(entryNode, nodeArray);
    populateExitTile(exitNode, nodeArray);

    return nodeArray;
};

//BFS Search and Populate Maze
function runMazePhase2(nodeArray) {

    identifyNodesNextToEntry(entryNode, nodeArray);
    tID = setTimeout(populateNodesNextToEntry, 50, nodeArray);
    identifyValidTiles(nodeArray, exitNode);
    colordepth = 2;
    //Timer that delays the populating of nodes for the search
    timerId = setInterval(function () {
        populateValidTiles2(nodeArray, exitNode)
    }, 50);

    return nodeArray;
};

// //assignes each mazehole id to var isTile and pushes them into allTile
function assignAllNodeIdsToAllTilesArray(){

  $(".mazehole").each(function() {
    var isTile = $(this).attr('id');
     allTiles.push(isTile);

    return allTiles;    
});
};

//Function determines the orientation of the maze (Vertical or Horizontal)
function determineMazeOrientation(x){
    
    var Orientation = Math.floor(Math.random()*2);
    if (Orientation >= 1)
    { upAndDown = true;
    return upAndDown;}
    else
    { upAndDown = false;
    return upAndDown;}
};

//Function to Create the Location for Entry & Exit nodes
function createEntryAndExitNodes(x){
     entryNode = 0;
   if (x)
    {
        entryNode = Math.floor((Math.random() *((maxRow*maxRow-1)-(maxRow*maxRow-maxRow))) + (maxRow*maxRow-maxRow));
        exitNode = Math.floor(Math.random()*(maxRow-0));  
    }
  else {
    while (entryNode <= 0 || entryNode == maxRow-1){
        entryNode = (Math.floor(Math.random()*((maxRow-1)-0)))*maxRow-1;}
        exitNode = (Math.floor(Math.random()*((maxRow-2)-0)))*maxRow;
};
  nodesForEntryAndExit.push(entryNode);
  nodesForEntryAndExit.push(exitNode);
  return (nodesForEntryAndExit);
};

//Function to generate Wall Tiles
function generateWallTiles(upAndDown,nodeArray,wallNodes){
    while (wallNodes.length<(maxRow*maxRow/3.4)){
    if (!upAndDown){
        isWall  = (Math.floor(Math.random()*((maxRow*maxRow-1)-0+1))+0);
        while ((isWall % maxRow == 0) || ((isWall-(maxRow-1))%maxRow == 0) || (isWall == maxRow-1)){
            isWall  = (Math.floor(Math.random()*((maxRow*maxRow-1)-0+1))+0);}
            for (i=0; i<nodeArray.length; i++){
                if (nodeArray[i].id == isWall){
                nodeArray[i].isAWall = true;
                nodeArray[i].backgroundcolor = "black";
                wallNodes.push(isWall);
            }
                }}
    else{
        isWall = (Math.floor(Math.random()*((maxRow*maxRow-(maxRow+1))-maxRow+1)) + maxRow);
        for (i=0; i<nodeArray.length; i++){
                if (nodeArray[i].id == isWall){
                nodeArray[i].isAWall = true;
                nodeArray[i].backgroundcolor = "black";
                wallNodes.push(isWall);
            }
        }}
    }
    return nodeArray
};

//Function to populate Wall Tiles
function populateWallTiles(nodeArray){ 
    for (i=0; i<nodeArray.length; i++){
       if (nodeArray[i].isAWall == true){
            document.getElementById(i).style.backgroundColor = nodeArray[i].backgroundcolor;}
        }
            return nodeArray;
};

//Function to populate Entry Tile
function populateEntryTile(entryNode,nodeArray){
    for (i=0; i<nodeArray.length; i++){
        if (nodeArray[i].id == entryNode){
            nodeArray[i].distance = 0;
            nodeArray[i].visited = true;
            nodeArray[i].backgroundcolor = nodeArray[i].backgroundcolor[nodeArray[i].distance];
            document.getElementById(entryNode).style.backgroundColor = nodeArray[i].backgroundcolor;
        }
    }
    return nodeArray; 
};

//Function to populate Exit Tile
function populateExitTile(exitNode,nodeArray){
    for(i=0; i<nodeArray.length; i++){
     if (nodeArray[i].id == exitNode){
            nodeArray[i].distance = 0;
            nodeArray[i].visited = false;
            document.getElementById(exitNode).style.backgroundColor = "firebrick";
     }
    }
    return nodeArray;
};

//find nodes next to entry tile and set their Visited to True & distance to 1
function identifyNodesNextToEntry(entryNode, nodeArray) {
    var i = entryNode;
    // i.pointer = -2;
    if (upAndDown) {
        if (entryNode < (maxRow*maxRow-1) && nodeArray[i + 1].visited == false) {
            progressMazeFirstMove(nodeArray,nodeArray[i].id, nodeArray[i+1].id);
        }
        if (entryNode != (maxRow*maxRow-maxRow) && nodeArray[i - 1].visited == false) {
            progressMazeFirstMove(nodeArray,nodeArray[i].id, nodeArray[i-1].id);
        }
        if (nodeArray[i - maxRow].isAWall == false) {
            progressMazeFirstMove(nodeArray,nodeArray[i].id, nodeArray[i-maxRow].id);
        }
    }
    else {
        if (nodeArray[i + maxRow].visited == false) {
            progressMazeFirstMove(nodeArray,nodeArray[i].id, nodeArray[i+maxRow].id);
        }
        if (nodeArray[i - maxRow].visited == false) {
            progressMazeFirstMove(nodeArray,nodeArray[i].id, nodeArray[i-maxRow].id);
        }
        if (nodeArray[i - 1].isAWall == false) {
            progressMazeFirstMove(nodeArray,nodeArray[i].id, nodeArray[i-1].id);
        }
    }
    return nodeArray;
};

//Popuate the nodes next to entry
function populateNodesNextToEntry(nodeArray){
    for (var i=0; i<nodeArray.length; i++){
        if (nodeArray[i].visited == true){       
            if (nodeArray[i].distance == 1){    
            nodeArray[i].backgroundcolor = nodeArray[i].backgroundcolor[nodeArray[i].distance];
            document.getElementById(nodeArray[i].id).style.backgroundColor = nodeArray[i].backgroundcolor;
            }
        }
    }
    return nodeArray;  
};

       
// Function will identify and Queue the nodes for searching and stops when depth exceeds variable below.
function identifyValidTiles(nodeArray,exitNode){
        var depth = 0;
        index = exitNode;
        while(nodeArray[index].visited == false){
            depth +=1;
        for (i=0; i<nodeArray.length; i++){
        if (nodeArray[i].visited == true && nodeArray[i].distance == depth){
            if (nodeArray[i].id == exitNode){
                nodeArray[i].visited = true;
            }
            if (nodeArray[i].id == 0){
                if (nodeArray[i+1].isAWall == false && nodeArray[i+1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+1].id);      
                }
                if (nodeArray[i+maxRow].isAWall == false && nodeArray[i+maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+maxRow].id);     
                }
            }
            if (nodeArray[i].id > 0 && nodeArray[i].id < maxRow-1){
                if (nodeArray[i+1].isAWall == false && nodeArray[i+1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+1].id); 
                }
                  if (nodeArray[i+maxRow].isAWall == false && nodeArray[i+maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+maxRow].id);  
                }
                  if (nodeArray[i-1].isAWall == false && nodeArray[i-1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-1].id);
                }
            }
            if (nodeArray[i].id == maxRow-1){
                 if (nodeArray[i+maxRow].isAWall == false && nodeArray[i+maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+maxRow].id);      
                }
                  if (nodeArray[i-1].isAWall == false && nodeArray[i-1].visited == false){
                       progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-1].id);                   
                }
            }
            if (nodeArray[i].id > 0 && nodeArray[i].id < (maxRow*maxRow-maxRow) && nodeArray[i].id %maxRow == 0){
                 if (nodeArray[i+1].isAWall == false && nodeArray[i+1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+1].id);  
                 }
                 if (nodeArray[i+maxRow].isAWall == false && nodeArray[i+maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+maxRow].id);                     
                 }
                 if (nodeArray[i-maxRow].isAWall == false && nodeArray[i-maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-maxRow].id);              
                 }
            }
            if (nodeArray[i].id > maxRow-1 && nodeArray[i].id < (maxRow*maxRow-1) && (nodeArray[i].id+1) %maxRow == 0){
                 if (nodeArray[i+maxRow].isAWall == false && nodeArray[i+maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+maxRow].id);
                 }
                 if (nodeArray[i-1].isAWall == false && nodeArray[i-1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-1].id); 
                 }
                 if (nodeArray[i-maxRow].isAWall == false && nodeArray[i-maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-maxRow].id); 
                 }
            }
            if (nodeArray[i].id == maxRow*maxRow-maxRow){
                 if (nodeArray[i+1].isAWall == false && nodeArray[i+1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+1].id);
                 }
                 if (nodeArray[i-maxRow].isAWall == false && nodeArray[i-maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-maxRow].id);  
                 } 
            }
            if (nodeArray[i].id > maxRow*maxRow-maxRow && nodeArray[i].id < maxRow*maxRow-1){
                if (nodeArray[i+1].isAWall == false && nodeArray[i+1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+1].id);
                }
                  if (nodeArray[i-1].isAWall == false && nodeArray[i-1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-1].id);
                }
                if (nodeArray[i-maxRow].isAWall == false && nodeArray[i-maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-maxRow].id);
                }
            }
            if (nodeArray[i].id == maxRow*maxRow-1){
                 if (nodeArray[i-1].isAWall == false && nodeArray[i-1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-1].id);
                 }
                 if (nodeArray[i-maxRow].isAWall == false && nodeArray[i-maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-maxRow].id);
                 } 
            }
                if (nodeArray[i].id >maxRow-1 && nodeArray[i].id <maxRow*maxRow-maxRow && nodeArray[i].id %maxRow != 0 && (nodeArray[i].id+1)%maxRow != 0){
                    if (nodeArray[i+1].isAWall == false && nodeArray[i+1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+1].id);
                }
                    if (nodeArray[i+maxRow].isAWall == false && nodeArray[i+maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i+maxRow].id);
                 }
                    if (nodeArray[i-1].isAWall == false && nodeArray[i-1].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-1].id);              
                }
                    if (nodeArray[i-maxRow].isAWall == false && nodeArray[i-maxRow].visited == false){
                    progressMaze(nodeArray,nodeArray[i].id,nodeArray[i-maxRow].id);
                    } 
                }
        } 
    }
} 
    return nodeArray;
};

//Progress maze
function progressMazeFirstMove(nodeArray,oldNode,newNode){
    nodeArray[newNode].visited = true;
    nodeArray[newNode].distance = 1;
    nodeArray[newNode].pointer = nodeArray[oldNode].id;
    return nodeArray;
}

function progressMaze(nodeArray,oldNode,newNode){
    nodeArray[newNode].visited = true;
    nodeArray[newNode].distance = nodeArray[oldNode].distance +1;
    // nodeArray[newNode].backgroundcolor = nodeArray[newNode].backgroundcolor[nodeArray[newNode].distance];
    nodeArray[newNode].backgroundcolor = Maze.getBackgroundColor(nodeArray[newNode].distance);
    nodeArray[newNode].pointer = nodeArray[oldNode].id;
        return nodeArray;
}

//Populate valid tiles beyond the first set of tiles
function populateValidTiles2(nodeArray, exitNode) {
    for (i = 0; i < nodeArray.length; i++) {
        if (nodeArray[i].visited == true) {
            if (nodeArray[i].distance == colordepth && nodeArray[i].id != exitNode) {
                document.getElementById(nodeArray[i].id).style.backgroundColor = nodeArray[i].backgroundcolor;
            }
        }
    }
    colordepth += 1;
    if (colordepth == maxRow*3) {
        clearInterval(timerId);
        theOptimalPath();
    }
    return nodeArray;
};

//retrieve optimal node that reaches the exit and color that path, show distance
function theOptimalPath() {
    var optimalPathArray = [];
    optimalPathArray.length = 0;
    var index = exitNode; 
    while (index != entryNode) {
         timerId2 = setInterval(function () { 
    populateTheOptimalPath(optimalPathArray) 
}, 100); 
    mazeStepsCounter = nodeArray[index].distance;
    TrackMazeStepsToEntry(mazeStepsCounter);
    mazeHasBegun = false;
    isComplete = true;
    return index;
    }
clearInterval(timerId2);
}

//Populate optimal path
function populateTheOptimalPath(optimalPathArray) {
        if (index == entryNode){
        }
        else {
        optimalPathArray.push(nodeArray[index].pointer);
        nodeArray[index].backgroundcolor = "#FFFFFF";
        document.getElementById(nodeArray[index].id).style.backgroundColor = nodeArray[index].backgroundcolor;
        $('#'+nodeArray[index].id).html(nodeArray[index].distance);
        index = nodeArray[nodeArray[index].pointer].id;
        return index;
        }
   }

//Define Nodes
  function Node(id,backgroundcolor,distance,visited,isAWall,pointer){
  this.id = id;
  this.backgroundcolor = backgroundcolor;
  this.distance = distance;
  this.visited = visited;
  this.isAWall = isAWall;
  this.pointer = pointer;
};

//Set all nodes with their initial values  
function assignNodeProperties(allTiles,nodeArray){
    var myNode = {};
    var backgroundcolor = {
        "0": "green", "1": "#1e12bc"
        // "2": "#1218bc", "3": "#1229bc", "4": "#123abc",
        // "5": "#124ebc", "6": "#1262bc", "7":"#1275bc", "8": "#1286bc", "9":"#129abc", "10":"#12aebc",
        // "11":"#12bcb7", "12":"#12bca3", "13":"#12bc8f", "14":"#12bc7b", "15":"#12bc6a",
        // "16":"#12bc56", "17":"#12bc42", "18":"#12bc12", "19": "#12bc1b", "20": "#1ebc12", "21": "#32bc12", 
        // "22":"#45bc12", "23": "#51bc12", "24": "#64bc12", "25":"#78bc12", "26":"#8fbc12", 
        // "27":"#a0bc12", "28":"#b7bc12", "29":"#bcae12", "30":"#bc9a12", "31":"#bc8612", "32":"#bc7312", 
        // "33":"#bc5f12", "34": "#bc5112", "35":"#bc4212", "36":"#bc3412", "37": "#c90c0c", "38":"#ea0404",
        // "39":"#fc0505", "40": "#ef0000", "41":"#f90000", "42":"#ff0000", "43":"#e20b38", "44":"#e20b6f",
        // "45":"#e20ba9", "46":"#d70b32", "47":"#a50be2", "48":"#850be2", "49":"#410be2", "50":"#1e12bc",
        // "51":"#1218bc", "52":"#1229bc", "53":"#123abc", "54":"#124ebc", "55":"#1262bc", "56":"#1275bc",
        // "57": "#1286bc", "58":"#129abc", "59":"#12aebc", "60":"#12bcb7", "61":"#12bca3", "62":"#12bc8f", 
        // "63":"#12bc7b", "64":"#12bc6a",  "65":"#12bc56", "66":"#12bc42", "67":"#12bc12", "68": "#12bc1b", 
        // "69": "#1ebc12", "70": "#32bc12", "71":"#45bc12", "72": "#51bc12", "73": "#64bc12", "74":"#78bc12",
        // "75":"#8fbc12", "76":"#a0bc12", "77":"#b7bc12", "78":"#bcae12", "79":"#bc9a12", "80":"#bc8612", "81":"#bc7312",
        // "82":"#bc5f12", "83": "#bc5112", "84":"#bc4212", "85":"#bc3412", "86": "#c90c0c", "87":"#ea0404",
        // "88":"#fc0505", "89": "#ef0000", "90":"#f90000", "91":"#ff0000", "92":"#e20b38", "93":"#e20b6f",
        // "94":"#e20ba9", "95":"#d70b32", "96":"#a50be2", "97":"#850be2", "98":"#410be2", "99":"#1e12bc",
    };
  
    for(i=0; i<allTiles.length; i++){
        myNode = new Node(i,backgroundcolor,0,false,false,-1);
            nodeArray.push(myNode);
        };
return nodeArray;
};


//Adding Stat Tracking Functionality below// 

//How many times the Maze is ran
function TrackMazesWatched(mazesWatchedCounter){
var span = document.getElementById('mazesWatched');
while(span.firstChild) {
    span.removeChild(span.firstChild);
}
span.appendChild(document.createTextNode(mazesWatchedCounter.toString()) );

}

//How many steps it took the maze to reach Entry Node
function TrackMazeStepsToEntry(mazeStepsCounter){
var span = document.getElementById('stepsToEntry');
while(span.firstChild) {
    span.removeChild(span.firstChild);
}
span.appendChild(document.createTextNode(mazeStepsCounter.toString()) );

}