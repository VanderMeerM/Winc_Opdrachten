
const button = document.querySelectorAll('.big-five-button').
    forEach(item => {
        item.addEventListener("click", function () {
            let newLi = document.createElement("li");
            newLi.innerHTML = item.textContent; 
            let menu = document.getElementById("spotted-animals-list");
            menu.appendChild(newLi);
           
        }
        );
    })

const Remove = document.getElementById("remove-first-item-button");
Remove.addEventListener("click", function () {
    firstItem = document.getElementById("spotted-animals-list").getElementsByTagName("li")[0];
    firstItem.remove();

})

const RemoveAll = document.getElementById("remove-all-button");
RemoveAll.addEventListener("click", function () {
    allItems = document.getElementById("spotted-animals-list");
    let removeItems = allItems.lastElementChild;
        while (removeItems) {
            allItems.removeChild(removeItems);
            removeItems = allItems.lastElementChild; }
         
})

