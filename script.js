/*Create grid*/

const container = document.querySelector('#container');

function createGrid(numPerBox) {
    for (let i=0; i <numPerBox; i++){
        const row = container.appendChild(document.createElement('div'));

        for (let j=0; j<numPerBox; j++) {
            const square = document.createElement('div');
            square.className = 'box';
            row.appendChild(square);

            
            
        }
    }

}
let grid= createGrid(8);


/*Create hover*/



const eachBox = document.querySelectorAll('.box');


eachBox.forEach(box => {
    box.addEventListener("mouseover",(event) => {
        event.target.style.backgroundColor="yellow";
    }, false);
            });
/*generate multiple divs*/


function assign() {
while (container.firstChild) {
  container.removeChild(container.firstChild);
}
nums = parseInt(document.querySelector('#numInput').value);
grid= createGrid(nums);

const eachBox = document.querySelectorAll('.box');

eachBox.forEach(box => {
    box.addEventListener("mouseover",(event) => {
        event.target.style.backgroundColor="yellow";
        }, false);
    });
}
