//Q1 ---- hide and show content using boolean
function Toggle(){
    let element = document.getElementById("para");
    (element.style.display == "block" || element.style.display == "")?
    (element.style.display="none"): (element.style.display="block");
};
// Q2 -- Check married not 

function checkMarried(user) {
    return user.personalInfo.yearsSinceMarried == 3 && user.personalInfo.yearsSinceMarried != null;
}
var testUser = {
    personalInfo: { yearsSinceMarried: 3}
}
console.log(checkMarried(testUser));

//Q3--- Move Div in directions
  function moveDiv(){
    let pixels = Math.floor(Math.random() * (150 - 30 + 1)) + 30;
    let direction = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    let element = document.getElementById("div1")
    if(direction == 1){
        element.style.marginTop = pixels+ "px";
    }else if(direction == 2){
        element.style.marginBottom = pixels + "px";
    }else if(direction == 3){
        element.style.marginLeft = pixels + "px";
    }else if(direction == 4){
        element.style.marginRight = pixels + "px";
    }  console.log(pixels,direction);
  }


  