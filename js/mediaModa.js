
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

const arrayOrder = array =>{
    
}
const attachResultsMediana = (array) =>{
    const medianaInput = document.getElementById('medianaResult');

    if( isEven(array)){
        let half = halfArray(array);
        let mitad1 = array[half -1 ].value;
        let mitad2 = array[half ].value;
        console.log((`${mitad1} y ${mitad2}`).toString())
        medianaInput.value =  (`${mitad1} y ${mitad2}`).toString();

    }else{
        //el numero de enmedio
        let mitad = halfArray(array)
        medianaInput.value = array[mitad].value

    }//if-isEven
}//attachResultsMediana


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
    });


}