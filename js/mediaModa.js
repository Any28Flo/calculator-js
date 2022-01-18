
const addItem = () =>{
    let container= document.getElementById('containerInput');

    let newItem = `
         <div class="field">
                        <label for="price" class="label">Price</label>
                        <div class="control">
                            <input id="price" class="input" type="number" placeholder="0"/>
                        </div>
          </div>
    `;
    //container.appendChild(newItem);
    container.insertAdjacentHTML("beforeend", newItem) ;
}//addItem
window.onload = () =>{
    let addItemButton = document.getElementById("addItem");
    addItemButton.addEventListener('click', addItem);



}