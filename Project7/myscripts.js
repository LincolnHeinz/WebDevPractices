var PrintButton1 = new Image();
var PrintButton2 = new Image();
var logo1 = new Image();
var logo2 = new Image();

if (document.images) {
    PrintButton1.src = "Images/Photoshop/PrintPage1.jpg";
    PrintButton2.src = "Images/Photoshop/PrintPage2.jpg";
    logo1.src = "Images/Photoshop/RentAPet Logo1.jpg";
    logo2.src = "Images/Photoshop/RentAPet Logo2.jpg";
}

var imgArray = [
    'Image1Lg.png',
    'Image2Lg.png',
    'Image3Lg.png',
    'Image4Lg.png'
];


var titleArray = [
    'Woman and German Shephard',
    'German Shephard',
    'Girl Riding Horse',
    'Boy Riding Pig'
];

var imgPath = "Images/Photos/";

function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');

    var newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;

    var textTitle = titleArray[imgID];
    textDiv.innerHTML = textTitle;
}

function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}
window.onload = function() {
    logo1.src = "Images/Photoshop/RentAPet Logo1.jpg"; 
    logo2.src = "Images/Photoshop/RentAPet Logo2.jpg";

    var logoElement = document.getElementById('logo');
    logoElement.onmouseover = function() {
        logoElement.src = logo2.src;
    };
    logoElement.onmouseout = function() {
        logoElement.src = logo1.src;
    };
}
