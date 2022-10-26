function convertCurrency() {
    var defaultPrice = 599.99;
    
    var dropdown = document.getElementById("currency-option");
    
    var price = document.getElementById("price");
    price.innerHTML = (defaultPrice*dropdown.value).toFixed(2);
}

// get main feature image element
var bigPicture = document.getElementById('big-picture-img');

// get all image elements in an array
var thumbnails = document.getElementById('pic-column').children;

// loop through them and set on click events listeners which is a function we make that passes its src attribute
Array.from(thumbnails).forEach(element => {
   
    element.onclick = function(){
        // takes value image src and sets it equal to target image source
        bigPicture.src = element.src;
    }
});