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
    return side * side * side * side
}//perimeterSquare
const perimeterTriangle = (side) =>{
    return 3 * side
}//perimeterTriangle
const perimeterCircle = (radius) =>{
    return 2 * Math.PI * radius
}//perimeterCircle

