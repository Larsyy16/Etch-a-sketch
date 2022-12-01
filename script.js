/*Create grid*/

const container = document.querySelector('#container');

function createGrid(numPerBox) {
    for (let i=0; i <numPerBox; i++){
        const row = container.appendChild(document.createElement('div'));

        for (let j=0; j<numPerBox; j++) {
            const square = document.createElement('div');
            square.className = 'box';
            row.appendChild(square);

            /*if (numPerBox > 100) {
                alert('Please choose lower number');

            }*/

            
            
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
    /*if (nums > 100) {
        
        throw new Error('Number too high');
    }*/
    
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


    var numElement = document.querySelector('input[type="number"]')
    numElement.addEventListener('change', assignMax);
    numElement.addEventListener('input', assignMax);
    numElement.addEventListener('keyup', assignMax);
    numElement.addEventListener('paste', assignMax);



function assignMax() {
        if (this.max) this.value = Math.min(parseInt(this.max), parseInt(this.value) || 0);
        if (this.min) this.value = Math.min(parseInt(this.max), parseInt(this.value)|| 0);
    }



function shader() {
    const eachBox = document.querySelectorAll('.box');


    eachBox.forEach(box => {
        const cellCh=box;
        cellCh.count = 0;
    box.addEventListener("mouseover",(event) => {
        event.target.count += 1;
        event.target.style.opacity = 0.01* event.target.count;
    }, false);
            });
    }
 /*make 10% blacker each time through array
 -can't be random*/