//declare timer vars and arrays here so all functions can refer to them
var spawnTimer;
var moveTimer;
var dropArray = new Array();
var user_bucket= new Bucket(25,250);

window.onload=init;

function init() {
	var anotherDrop = new Drop();
	anotherDrop.create();
	//store our drop into an array
	dropArray.push(anotherDrop);
	spawnTimer = setInterval( spawn, 500);
	moveTimer = setInterval( moveAllDrops, 100)
	user_bucket.create();
	document.onkeydown = function(e){checkKey(e);}
}//end init

function spawn(){
	//make one object that's an instance of the Drop Class:
	var anotherDrop = new Drop();
	anotherDrop.create();
	//store our drop into an array
	dropArray.push(anotherDrop);


}//end spawn

function moveAllDrops(){
	//iterate through the array of drops and do what's in {} to each one
	for(i=0; i<dropArray.length; i++){
		var currentDrop = dropArray[i];
		currentDrop.y +=5;
		
		//move the drops a few pixels
		currentDrop.item_on_page.style.top= currentDrop.y + "px"
		//if drop get to bottom of screen, destroy the drop
		if(currentDrop.y > 500){
			currentDrop.destroy();
			
		}//end if statement
		//if the currentdrop is hitting the bucket
		if(collisionCheck(user_bucket, currentDrop)){
		//do various things like add to score and get rid of drop.
			currentDrop.destroy();
			}//end if statement
		}//end of for loop
}//end moveAllDrops
function checkKey(e){
	//equalize the understanding of the event in all browsers
	e = e || window.event;
	//if its the left arrow
	if(e.keyCode == '39'){
		//add to buckets x,. which will move it right
		user_bucket.x += 15;
		user_bucket.setPosition();
	}else if(e.keyCode == '37'){
		//subtract from the buckets x
		user_bucket.x -= 15;
		user_bucket.setPosition();
	}
}

function collisionCheck(big_object, small_object){
var big_object_left_x = big_object.x;
var big_object_right_x = big_object.x+big_object.width;
var big_object_top_y = big_object.y;
var big_object_bottom_y = big_object.y + big_object.height;

var small_object_left_x = small_object.x;
var small_object_right_x = small_object.x+small_object.width;
var small_object_top_y = small_object.y;
var small_object_bottom_y = small_object.y + small_object.height;
//console.log(small_object_left_x +"/"+ big_object_left_x +"/"+ small_object_right_x  +"/"+  big_object_right_x)
console.log(small_object_top_y +"/"+big_object_top_y+"/"+small_object_bottom_y +"/"+big_object_bottom_y)
	//if the coordinates of the two objects indicate they're touching in their left to right positions
	if((small_object_left_x > big_object_left_x)&&(small_object_right_x < big_object_right_x)){
	console.log("x");
		if((small_object_top_y > big_object_top_y)&&(small_object_bottom_y < big_object_bottom_y)){		console.log("y");
//send back, yes they're colliding
			return true;
			}//end inner if statement
		}//end outer if statement
		//otherwise, return false
		return false;

}//end collision function