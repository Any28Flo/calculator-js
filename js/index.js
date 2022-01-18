// Create your functions
const areaSquare= (side) =>{
    return side * side
}//areaSquare
const areaTriangle = (base, height) =>{
    return (base * height) / 2
}//areaTriangle
const areaCircle = (radius) =>{
    return Math.PI *  (Math.pow(radius,2))
}//areaCircle

const perimeterSquare= (side) =>{
    return side + side + side + side
}//perimeterSquare
const perimeterTriangle = (side) =>{
    return 3 * side
}//perimeterTriangle
const perimeterCircle = (radius) =>{
    return 2 * Math.PI * radius
}//perimeterCircle

const squareOperations =() =>{
    let sideInput =   parseInt(document.getElementById("side").value);
    let radioButtons = document.getElementsByName("squareOperation");
    let resultSquare = document.getElementById("resultSquare");
    //TODO
    //Create a function to only return area or perimeter
    for(let i = 0 ; i< radioButtons.length ; i++){
        if(radioButtons[i].checked){
            switch (radioButtons[i].value){
                case "area":
                    let result = areaSquare(sideInput)
                    resultSquare.value = result;
                    //resultSquare.innerText(result);
                    return
                case "perimeter":
                    resultSquare.value= perimeterSquare(sideInput);
                    return
            }//swich
        }//if
    }//for
}//squareOperations
const triangleOperations =() =>{
    let base =   parseInt(document.getElementById("base").value);
    let height =   parseInt(document.getElementById("height").value);
    let sideTriangle =   parseInt(document.getElementById("sideTriangle").value);

    let radioButtons = document.getElementsByName("triangleOperation");
    let resultTriangle = document.getElementById("resultTriangle");

    for(let i = 0 ; i< radioButtons.length ; i++){
        if(radioButtons[i].checked){
            switch (radioButtons[i].value){
                case "area":
                    resultTriangle.value = areaTriangle(base, height);
                    //resultSquare.innerText(result);
                    return
                case "perimeter":
                    resultTriangle.value= perimeterTriangle(sideTriangle);
                    return
            }//switch
        }//if
    }//for
}//triangleOperations
const circleOperations = () =>{
    let radiusValue =   parseInt(document.getElementById("radius").value);

    let radioButtons = document.getElementsByName("circleOperation");
    let resultCircle = document.getElementById("resultCircle");

    for(let i = 0 ; i< radioButtons.length ; i++){
        if(radioButtons[i].checked){
            switch (radioButtons[i].value){
                case "area":
                    resultCircle.value = areaCircle(radiusValue);
                    return
                case "perimeter":
                    resultCircle.value = perimeterCircle(radiusValue);
                    return
            }//switch
        }//if
    }//for
}


let squareForm = document.getElementById("formSquare");
let triangleForm = document.getElementById("formTriangle");
let circleForm = document.getElementById("formCircle");

squareForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    squareOperations();
})//squareForm.eventListener

triangleForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    triangleOperations();
});//triangleForm.eventListener

circleForm.addEventListener("submit" , e =>{
    e.preventDefault();
    circleOperations();
});//circleForm.addEventListener