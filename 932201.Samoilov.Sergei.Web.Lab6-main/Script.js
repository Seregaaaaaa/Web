const left_img = document.getElementById("catPic");
const right_img = document.getElementById("dogPic");

function resizeImage(buttonId) {
    switch (buttonId) {
        case 'left':
            left_img.style.width = '97%';
            left_img.querySelector('img').style.width = '70%';  
            left_img.querySelector('img').style.height = '70%';
            left_img.querySelector('img').style.visibility = 'visible';

            right_img.style.width = '3%';  
            right_img.querySelector('img').style.visibility = 'collapse';
            break;


        case 'middle':
            left_img.style.width = '50%';  
            left_img.querySelector('img').style.visibility = 'visible';
            left_img.querySelector('img').style.width = '90%';
            left_img.querySelector('img').style.height = '75%';

            right_img.style.width = '50%';
            right_img.querySelector('img').style.visibility = 'visible';  
            right_img.querySelector('img').style.width = '90%';
            right_img.querySelector('img').style.height = '75%';
            break;


        case 'right':
            left_img.style.width = '3%';
            left_img.querySelector('img').style.visibility = 'collapse';

            right_img.style.width = '97%'; 
            right_img.querySelector('img').style.width = '70%';  
            right_img.querySelector('img').style.height = '70%';
            right_img.querySelector('img').style.visibility = 'visible';
            break;
    }
}