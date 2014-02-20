/**
 * The Bucket class is a blueprint for each rainbucket we generate
 * @author  John Doe
 * @version 1.0, May 2014
 */
function Bucket(x, y){
	this.x=x; //starts empty, will keep track of each bucket's left-right position as a #
	this.y=y; //starts empty, will keep track of each bucket's up-down position as a #
	this.width = 100;//keep track of bucket width
	this.height = 70;//keep track of bucket height
	this.item_on_page; //represents bucket's physical presence on the screen
	/** 
	*	The create method does lots of things when a bucket gets created on the page
	*/
	this.create = function(){
		//make a section tag in the HTML, store it into the item-on-page we set up above.
		this.item_on_page = document.createElement("section");
		//give it a class which styles it in CSS to resemble a bucket
		this.item_on_page.className = "bucket";
		this.item_on_page.style.width = this.width+"px";
		this.item_on_page.style.height = this.height+"px"
		this.item_on_page.style.backgroundColor="rgba(51,52,153, .5)" 
		this.item_on_page.style.position = "absolute"; 
		this.item_on_page.style.borderBottomLeftRadius = "25px";
		this.item_on_page.style.borderBottomRightRadius = "25px";
		//use those x and y coordinates in the CSS to position the bucket:
		this.setPosition();
		//attach the item to our HTML hierarchy, as a child of the body:
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	/** 
	*   The destroy function does lots of cleaning up when a bucket is removed from the page
	*/
	this.destroy = function(){
	//clear all splashing images first
	
	for(var j=0; j<document.getElementsByClassName("splash").length; j++){
		var thatSplash = document.getElementsByClassName("splash")[j];
		document.getElementsByTagName("body")[0].removeChild(thatSplash)
	}
	//create an image
	var newSplash = document.createElement("img");
	//set its src and other styling
	
	newSplash.src="img/splash-anim.gif?"+Math.random();
	newSplash.className="splash"
	newSplash.style.position = "absolute";
	newSplash.style.left = this.x + "px";
	newSplash.style.top = this.y + "px";
	//attach the splashing animation to our HTML hierarchy
	document.getElementsByTagName("body")[0].appendChild(newSplash);
	
	//remove bucket from the array
	var bucketIndex = bucketArray.indexOf(this);
	//remove one bucket from the array using its index number
	bucketArray.splice( bucketIndex, 1);
	document.getElementsByTagName("body")[0].removeChild(this.item_on_page)
	}
	//the setpos functions takes the x, y, properties stored with the object and applies them to the CSS styling left and top properties
	this.setPosition = function(){
	//apply the current x and y properties to the item's CSS to position the item.
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
	}
	
} //close the Bucket class