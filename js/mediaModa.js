
const addItem = () =>{
    let container= document.getElementById('containerInput');

    let newItem = `
         <div class="field">
                        <label for="price" class="label">Price</label>
                        <div class="control">
                            <input id="price" class="input inputMedia" type="number" placeholder="0"/>
                        </div>
          </div>
    `;
    container.insertAdjacentHTML("beforeend", newItem) ;

}//addItem

const calculateMedia = (array)=>{
    let total = 0;
    for (let item of array) {
        total += parseFloat(item.value);
    }
    return total/ array.length
}//calculateMedia

const isEven = array =>{

    return array.length % 2 === 0 ?  true :  false;

}//isEven
const calculateModa = array => {
    let counter = {};
    const arrayOrder_1 =  arrayOrder(array);
    arrayOrder_1.map(element =>{
        if(counter[element]){
            counter[element] += 1
        }else{
             counter[element] = 1
        }
    } )
    const lista1Array = Object.entries(counter).sort((elementA,elementB) => elementA[1] - elementB[1]);
//    return lista1Array[lista1Array.length - 1]
  return  `El elemento que mas se repite es ${lista1Array[lista1Array.length - 1]} `
}//calculateModa

const arrayOrder = array =>{
    let orderArray = [];
    for(let i = 0 ; i< array.length ; i++){
        orderArray = [...orderArray , parseFloat(array[i].value)] ;
        orderArray = [...orderArray , parseFloat(array[i].value)] ;
    }
    return orderArray.sort((a,b) => a - b)


}
const attachResultsMediana = (array) =>{
    const medianaInput = document.getElementById('medianaResult');
    const arrayOrder_1 =  arrayOrder(array);
    let half = halfArray(arrayOrder_1);

    if( isEven(array)){
        let mitad1 = arrayOrder_1[half -1 ].value;
        let mitad2 = arrayOrder_1[half ].value;

        medianaInput.value =  (`${mitad1} y ${mitad2}`).toString();

    }else{
        medianaInput.value = arrayOrder_1[half]

    }//if-isEven
}//attachResultsMediana
const attachResultsModa = array =>{
    const modaInput = document.getElementById('modaResult');
    modaInput.value = calculateModa(array);
}

const halfArray = array =>{
    return parseInt(array.length / 2);
}

const doCalculate = (array) => {
    const inputsValues = document.getElementsByClassName('inputMedia');
    const mediaInput = document.getElementById('mediaResult');

    mediaInput.value = calculateMedia(array).toString();

}//doCalculate

window.onload = () =>{
    let addItemButton = document.getElementById("addItem");
    addItemButton.addEventListener('click', addItem);

    let formCalculateMedia = document.getElementById('formMedia');

    formCalculateMedia.addEventListener("submit", e =>{
        e.preventDefault();

        const arrayValues = document.getElementsByClassName('inputMedia');

        doCalculate(arrayValues);
        attachResultsMediana(arrayValues);
        attachResultsModa(arrayValues);
    });


}