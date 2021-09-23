var images = ["bro n sis.jpg","dad.jpg", "me.png" , "mummy.jpg", "nani.jpg"];
var names = ["Pihu And Saatvik","Saurabh","Rahini","Anamica","Indra"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }

      //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];

    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
