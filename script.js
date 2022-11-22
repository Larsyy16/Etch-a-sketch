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
const eachBox = document.querySelectorAll('.box');


eachBox.forEach(box => {
    box.addEventListener("mouseover",(event) => {
        event.target.style.backgroundColor="black";
    }, false);
            });

}
let grid= createGrid(8);


/*Create hover*/




/*generate multiple divs*/


function assign() {
while (container.firstChild) {
  container.removeChild(container.firstChild);
}
nums = parseInt(document.querySelector('#numInput').value);
grid= createGrid(nums);

/*const eachBox = document.querySelectorAll('.box');

eachBox.forEach(box => {
    box.addEventListener("mouseover",(event) => {
        event.target.style.backgroundColor="black";
        }, false);
    });*/
}

function rainbow() {
    const eachBox = document.querySelectorAll('.box');

    const colors = ["#3d207f","#6399e7","#adce37","#fdcd38","#e87452"]
    let currentColor = 0;
    eachBox.forEach(box => {
        box.addEventListener("mouseover",(event) => {
            event.target.style.backgroundColor= colors[currentColor]
            currentColor >= colors.length ? currentColor =0 : currentColor++
            }, false);
        });
}

function btnClear() {
    let elements = document.getElementsByClassName('box');
    for (let i=0; i <elements.length; i++) {
        elements[i].style.backgroundColor = "lightgray";
    }

    }
