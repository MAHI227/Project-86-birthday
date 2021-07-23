var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.new_image('BirthdayImage.jpg',function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeigth(510);
        block_image_object.set({
            top:0,
            left:0
        });
    }
    )

	
}

function playSound(){
	x.play();
}
