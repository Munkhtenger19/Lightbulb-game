function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if(eventHandler.contains(closestChild)){
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}

function EasyMap() {
    let table = document.createElement('table')
    for (let row = 0; row < 7; row++) {
      const newTR = document.createElement('tr')
      for (let col = 0; col < 7; col++) {
        const newTD = document.createElement('td')
        newTD.dataset.rowNum = row
        newTD.dataset.colNum = col
        newTD.dataset.lightable = 0
        newTD.dataset.bulbPlaced = 0
        if (row == 0 && col == 3) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 1 }
        if (row == 1 && col == 1) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 0; newTD.classList.add('textGreen')}
        if (row == 1 && col == 5) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 2 }
        if (row == 3 && col == 0) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
        if (row == 3 && col == 3) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*'}
        if (row == 3 && col == 6) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*'}
        if (row == 5 && col == 1) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*'}
        if (row == 5 && col == 5) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 2 }
        if (row == 6 && col == 3) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 3 }
        if (newTD.dataset.bNum >= 0) {
            newTD.innerText = newTD.dataset.bNum
        }
        if (newTD.dataset.lightable >= 0) {
            newTD.classList.add('white')
        } else {
            newTD.classList.add('black')
        }
        newTR.appendChild(newTD)
      }
      table.appendChild(newTR)
    }
    return table
}

function AdvancedMap() {
    let table = document.createElement('table')
    for (let row = 0; row < 7; row++) {
        const newTR = document.createElement('tr')
        for (let col = 0; col < 7; col++) {
            const newTD = document.createElement('td')
            newTD.dataset.rowNum = row
            newTD.dataset.colNum = col
            newTD.dataset.lightable = 0
            newTD.dataset.bulbPlaced = 0
            if (row == 0 && col == 2) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 0; newTD.classList.add('textGreen')}
            if (row == 0 && col == 4) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 2 && col == 0) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 2 && col == 2) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 2 && col == 4) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 3 }
            if (row == 2 && col == 6) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 3 && col == 3) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 1}
            if (row == 4 && col == 0) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 2 }
            if (row == 4 && col == 2) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 4 && col == 4) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 4 && col == 6) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 6 && col == 2) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 6 && col == 4) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 2 }
            if (newTD.dataset.bNum >= 0) {
                newTD.innerText = newTD.dataset.bNum
            }
            if (newTD.dataset.lightable >= 0) {
                newTD.classList.add('white')
            } else {
                newTD.classList.add('black')
            }
            newTR.appendChild(newTD)
        }
        table.appendChild(newTR)
    }
    return table
}

function ExtremeMap() {
    let table = document.createElement('table')
    for (let row = 0; row < 10; row++) {
        const newTR = document.createElement('tr')
        for (let col = 0; col < 10; col++) {
            const newTD = document.createElement('td')
            newTD.dataset.rowNum = row
            newTD.dataset.colNum = col
            newTD.dataset.lightable = 0
            newTD.dataset.bulbPlaced = 0
            if (row == 0 && col == 1) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 1 && col == 5) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 3 }
            if (row == 1 && col == 7) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 2 }
            if (row == 1 && col == 9) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 2 && col == 1) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 0; newTD.classList.add('textGreen')}
            if (row == 2 && col == 2) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 2 && col == 7) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 3 && col == 4) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 4 && col == 1) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 1 }
            if (row == 4 && col == 4) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 4 && col == 5) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 1 }
            if (row == 4 && col == 6) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 5 && col == 3) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 5 && col == 4) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 5 && col == 5) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 5 && col == 8) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 3 }
            if (row == 6 && col == 5) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 7 && col == 2) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 1 }
            if (row == 7 && col == 7) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 0; newTD.classList.add('textGreen')}
            if (row == 7 && col == 8) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 8 && col == 0) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 3 }
            if (row == 8 && col == 2) { newTD.dataset.lightable = -1; newTD.dataset.bNum = '*' }
            if (row == 8 && col == 4) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 0; newTD.classList.add('textGreen')}
            if (row == 9 && col == 8) { newTD.dataset.lightable = -1; newTD.dataset.bNum = 0; newTD.classList.add('textGreen')}
            if (newTD.dataset.bNum >= 0) {
                newTD.innerText = newTD.dataset.bNum
            }
            if (newTD.dataset.lightable >= 0) {
                newTD.classList.add('white')
            } else {
                newTD.classList.add('black')
            }
            newTR.appendChild(newTD)
        }
        table.appendChild(newTR)
    }
    return table
}

let table
table=EasyMap(table)

const tableAppear = document.querySelector('#AppearTable')
const dropdown = document.querySelector("#dropdown")
const label=document.querySelector("#label")
const submit=document.querySelector("#submit")
const title=document.querySelector("#title")
const description=document.querySelector("#description")
const reload=document.querySelector("#reload")
reload.style.display="none"
const playerDiv=document.querySelector("#player_div")
const timeDiv=document.querySelector("#time_div")
playerDiv.style.display="none"
timeDiv.style.display="none"
const gameResult = document.querySelector("#result")
gameResult.style.display="none"
const playerName = document.querySelector("#playerName")
const userInput = document.querySelector("#userInput")
const typeName = document.querySelector("#typeName")
const img=document.querySelector("#img")


function getMap(diff) {
    if (diff == "easy") {
        table=EasyMap(table);
        return table
    } else if (diff == "advanced") {
        table=AdvancedMap(table)
        return table
    } else if (diff == "extreme") {
        table=ExtremeMap(table)
        return table
    }
}
submit.addEventListener("click", (event) => {

    label.style.display='none'
    typeName.style.display='none'
    img.style.display='none'
    submit.style.display='none'
    reload.style.display='block'
    tableAppear.innerHTML=''
    playerDiv.style.display="block"
    timeDiv.style.display="block"

    if(dropdown.value==="invalid"){
        alert("Please choose a level")
        window.location.reload()
    }
    if(userInput.value===""){
        alert("Please give a username")
        window.location.reload()
    }
    let b=getMap(dropdown.value)
    tableAppear.appendChild(b)
    delegate(b,'td','click',lightToggling)
    clearAllInterval()
    setSec()

});

function createTable(size){
    return Array.from({
        length: size
    }, () => new Array(size).fill(-1));
}

function illuminate(i, j, size) {
    BlackTileSurroundingHandler(i,j,size,true)
    function foo1(rn, cn){
        // console.log("going up: "+rn+" "+cn)
        if(rn >= 0) {
            if (table.rows[rn].cells[cn].dataset.lightable >= 0) {
                table.rows[rn].cells[cn].classList.remove('white')
                if(table.rows[rn].cells[cn].dataset.bulbPlaced==1){
                    //   table.rows[rn].cells[cn].classList.remove('lighted')
                    table.rows[rn].cells[cn].classList.add('red')
                    table.rows[rn].cells[cn].dataset.lightable++
                    //      console.log(table.rows[rn].cells[cn])
                }
                else {
                    table.rows[rn].cells[cn].classList.add('lighted')
                    table.rows[rn].cells[cn].dataset.lightable++
                    //    console.log(table.rows[rn].cells[cn])
                }
            } else {
                rn = 0
            }
        //    BlackTileSurroundingHandler(i,j,size,true)
            winCheck()
            setTimeout(function () {foo1(parseInt(rn)-1, cn)},100)
        }
    }

    foo1(i-1, j)

    function foo2(rn, cn){
     //   console.log("going down: "+rn+cn)
        if(rn < size) {
            if (table.rows[rn].cells[cn].dataset.lightable >= 0) {
                table.rows[rn].cells[cn].classList.remove('white')
                if (table.rows[rn].cells[cn].dataset.bulbPlaced == 1) {
                    table.rows[rn].cells[cn].classList.add('red')
                    table.rows[rn].cells[cn].dataset.lightable++
                } else {
                    table.rows[rn].cells[cn].classList.add('lighted')
                    table.rows[rn].cells[cn].dataset.lightable++
                }
            }
            else {
                rn = size
            }
      //      BlackTileSurroundingHandler(i,j,size,true)
            winCheck()

            setTimeout(function () {foo2(parseInt(rn)+1, cn)},100)
        }
    }

    foo2(parseInt(i)+1, j)

    function foo3(rn, cn){
       // console.log("going right: "+rn+cn)
        if(cn<size) {
            // while (cn < size) {//going right
            if (table.rows[rn].cells[cn].dataset.lightable >= 0) {
                table.rows[rn].cells[cn].classList.remove('white')
                if (table.rows[rn].cells[cn].dataset.bulbPlaced == 1) {
                    // console.log(table.rows[rn].cells[cn])
                    table.rows[rn].cells[cn].classList.add('red')
                    table.rows[rn].cells[cn].dataset.lightable++
                } else {
                    // console.log(table.rows[rn].cells[cn])
                    table.rows[rn].cells[cn].classList.add('lighted')
                    table.rows[rn].cells[cn].dataset.lightable++
                }
            }
            else {
                cn = size
            }
            // BlackTileSurroundingHandler(i,j,size,true)
            winCheck()
            setTimeout(function () {foo3(parseInt(rn), parseInt(cn)+1)},100)
        }
    }

    foo3(i,parseInt(j)+1)

    function foo4(rn, cn){
      //  console.log("going left: "+rn+cn)
        if(cn>=0) {
            //  while (cn >= 0) {//going left
            if (table.rows[rn].cells[cn].dataset.lightable >= 0) {
                table.rows[rn].cells[cn].classList.remove('white')
                if (table.rows[rn].cells[cn].dataset.bulbPlaced == 1) {
                    //table.rows[rn].cells[cn].classList.remove('lighted')

                    table.rows[rn].cells[cn].classList.add('red')
                    table.rows[rn].cells[cn].dataset.lightable++
                    //      console.log(table.rows[rn].cells[cn])
                } else {
                    // console.log(table.rows[rn].cells[cn])
                    table.rows[rn].cells[cn].classList.add('lighted')
                    table.rows[rn].cells[cn].dataset.lightable++
                    //       console.log(table.rows[rn].cells[cn])
                }
            } else {
                cn = 0
            }
            // BlackTileSurroundingHandler(i,j,size,true)
            winCheck()
            setTimeout(function () {foo4(rn, parseInt(cn)-1)},100)
        }
    }

    foo4(i,j-1)

    if(table.rows[i].cells[j].dataset.bulbPlaced==0){
        table.rows[i].cells[j].dataset.bulbPlaced++
    }
    if(table.rows[i].cells[j].dataset.lightable>1){
        table.rows[i].cells[j].classList.remove('lighted')
        table.rows[i].cells[j].classList.add('red')
    }
}

function Unilluminate(i, j, size) {
    BlackTileSurroundingHandler(i,j,size,false)

    function foo1(rn, cn){
        // console.log("going up: "+rn+" "+cn)
        if(rn >= 0) {
            if (table.rows[rn].cells[cn].dataset.lightable > 0) {
                table.rows[rn].cells[cn].dataset.lightable--
                if (table.rows[rn].cells[cn].dataset.lightable == 0) {
                    table.rows[rn].cells[cn].classList.remove('lighted')
                    table.rows[rn].cells[cn].classList.add('white')
                }
                else {
                    if(!(table.rows[rn].cells[cn].dataset.lightable > 1))
                    {
                        if(table.rows[rn].cells[cn].classList.contains("red"))
                            table.rows[rn].cells[cn].classList.remove("red")
                    }
                }
            } else {
                rn = 0
            }
            winCheck()
            setTimeout(function () {foo1(parseInt(rn)-1, cn)},100)
        }
    }
    foo1(parseInt(i)-1, j)
    function foo2(rn, cn){
       // console.log("going down: "+rn+cn)
        if(rn < size) {
            if (table.rows[rn].cells[cn].dataset.lightable > 0) {
                table.rows[rn].cells[cn].dataset.lightable--
                if (table.rows[rn].cells[cn].dataset.lightable == 0) {
                    table.rows[rn].cells[cn].classList.remove('lighted')
                    table.rows[rn].cells[cn].classList.add('white')
                }
                else {
                    if(!(table.rows[rn].cells[cn].dataset.lightable > 1))
                    {
                        if(table.rows[rn].cells[cn].classList.contains("red"))
                            table.rows[rn].cells[cn].classList.remove("red")
                    }
                }
            } else {
                rn = size
            }
            winCheck()
            setTimeout(function () {foo2(parseInt(rn)+1, cn)},100)
        }
    }
    foo2(parseInt(i)+1, j)


    function foo3(rn, cn){
        // console.log("going right: "+rn+cn)
        if(cn<size) {
            if (table.rows[rn].cells[cn].dataset.lightable > 0) {
                table.rows[rn].cells[cn].dataset.lightable--
                if (table.rows[rn].cells[cn].dataset.lightable == 0) {
                    table.rows[rn].cells[cn].classList.remove('lighted')
                    table.rows[rn].cells[cn].classList.add('white')
                }
                else {
                    if(!(table.rows[rn].cells[cn].dataset.lightable > 1))
                    {
                        if(table.rows[rn].cells[cn].classList.contains("red"))
                            table.rows[rn].cells[cn].classList.remove("red");
                    }
                }
            } else {
                cn = size
            }
            winCheck()
            setTimeout(function () {foo3(parseInt(rn), parseInt(cn)+1)},100)
        }
    }
    foo3(i,parseInt(j)+1)
    function foo4(rn, cn){
        // console.log("going left: "+rn+cn)
        if(cn>=0) {
            if (table.rows[rn].cells[cn].dataset.lightable > 0) {
                table.rows[rn].cells[cn].dataset.lightable--
                if (table.rows[rn].cells[cn].dataset.lightable == 0) {
                    // if(table.rows[rn].cells[cn].classList.contains('red')){
                    //     table.rows[rn].cells[cn].classList.remove('red')
                    // }
                table.rows[rn].cells[cn].classList.remove('lighted')
                table.rows[rn].cells[cn].classList.add('white')
                }
                else {
                    if(!(table.rows[rn].cells[cn].dataset.lightable > 1))
                    {
                        if(table.rows[rn].cells[cn].classList.contains("red"))
                            table.rows[rn].cells[cn].classList.remove("red");
                    }
                }
            } else {
                cn = 0
            }
            winCheck()
            setTimeout(function () {foo4(rn, parseInt(cn)-1)},100)
        }
    }
    
    foo4(i,j-1)
    
    if(table.rows[i].cells[j].dataset.bulbPlaced==1)
        table.rows[i].cells[j].dataset.bulbPlaced--
    if(table.rows[i].cells[j].dataset.lightable>=1){
        if(table.rows[i].cells[j].classList.contains('red')){
            table.rows[i].cells[j].classList.remove('red')
            table.rows[i].cells[j].classList.add('lighted')
        }
    }
    else{
        if(table.rows[i].cells[j].classList.contains('red')){
            table.rows[i].cells[j].classList.remove('red')
            table.rows[i].cells[j].classList.add('white')
        }
    }

    winCheck()
    // if(winCheck(size)) console.log("You won");
}

function lightToggling(event, element) {
    if(winCheck()===false) {
        if (element.dataset.lightable >= 0) {
            if (element.classList.contains('yellow')) {
                element.classList.remove('yellow')
                element.classList.add('white')
                element.innerText = ''
                element.dataset.lightable--
                Unilluminate(element.dataset.rowNum, element.dataset.colNum, table.rows.length)
            } else {
                element.classList.remove('white')
                element.classList.add('yellow')
                element.innerText = '💡'
                element.dataset.lightable++
                illuminate(element.dataset.rowNum, element.dataset.colNum, table.rows.length)
            }
        }
    }
    
    console.log(element)
  }
delegate(table,'td','click',lightToggling)

function BlackTileSurroundingHandler(i,j,size,placed){
    //check up
    // console.log(size)
    let up=parseInt(i)-1
    if(up>=0 && table.rows[up].cells[j].dataset.lightable==-1){
        let init_cnt=table.rows[up].cells[j].dataset.bNum
        if(placed)
            table.rows[up].cells[j].dataset.bNum--
        else
            table.rows[up].cells[j].dataset.bNum++
        if(table.rows[up].cells[j].dataset.bNum==0){
            table.rows[up].cells[j].classList.add('textGreen')
            if(table.rows[up].cells[j].classList.contains('textRed'))
            {
                table.rows[up].cells[j].classList.remove('textRed')
            }
        }
        else if(table.rows[up].cells[j].dataset.bNum < 0 /*&& table.rows[up].cells[j].dataset.bNum!=init_cnt*/){
            table.rows[up].cells[j].classList.add('textRed')
            table.rows[up].cells[j].classList.remove('textGreen')
        }
        else if(table.rows[up].cells[j].dataset.bNum > 0 /*&& table.rows[i].cells[j].dataset.bNum!=init_cnt*/){
            table.rows[up].cells[j].classList.remove('textGreen')
            //    table.rows[i].cells[j].classList.remove('textGreen')
        }
    }
    //check down
    let down=parseInt(i)+1
    if(down<size && table.rows[down].cells[j].dataset.lightable==-1){
        let init_cnt=table.rows[down].cells[j].dataset.bNum
        if(placed)
            table.rows[down].cells[j].dataset.bNum--
        else
            table.rows[down].cells[j].dataset.bNum++
        if(table.rows[down].cells[j].dataset.bNum==0){
            table.rows[down].cells[j].classList.add('textGreen')
            if(table.rows[down].cells[j].classList.contains('textRed'))
            {
                table.rows[down].cells[j].classList.remove('textRed')
            }
        }
        else if(table.rows[down].cells[j].dataset.bNum < 0 /*&& table.rows[down].cells[j].dataset.bNum!=init_cnt*/){
            table.rows[down].cells[j].classList.add('textRed')
            table.rows[down].cells[j].classList.remove('textGreen')
        }
        else if(table.rows[down].cells[j].dataset.bNum > 0 /*&& table.rows[i].cells[j].dataset.bNum!=init_cnt*/){
            table.rows[down].cells[j].classList.remove('textGreen')
            //    table.rows[i].cells[right].classList.remove('textGreen')
        }
    }
    //check right
    let right=parseInt(j)+1
    if(right<size && table.rows[i].cells[right].dataset.lightable==-1){
        let init_cnt=table.rows[i].cells[right].dataset.bNum
        if(placed)
            table.rows[i].cells[right].dataset.bNum--
        else
            table.rows[i].cells[right].dataset.bNum++
        if(table.rows[i].cells[right].dataset.bNum==0){
            table.rows[i].cells[right].classList.add('textGreen')
            if(table.rows[i].cells[right].classList.contains('textRed'))
            {
                table.rows[i].cells[right].classList.remove('textRed')
            }
        }
        else if(table.rows[i].cells[right].dataset.bNum < 0 /*&& table.rows[i].cells[j].dataset.bNum!=init_cnt*/){
            table.rows[i].cells[right].classList.add('textRed')
            table.rows[i].cells[right].classList.remove('textGreen')
        }
        else if(table.rows[i].cells[right].dataset.bNum > 0 /*&& table.rows[i].cells[j].dataset.bNum!=init_cnt*/){
            table.rows[i].cells[right].classList.remove('textGreen')
        //    table.rows[i].cells[right].classList.remove('textGreen')
        }
    }
    //check left
    let left=parseInt(j)-1
    if(left>=0 && table.rows[i].cells[left].dataset.lightable==-1){
        let init_cnt=table.rows[i].cells[left].dataset.bNum
        if(placed)
            table.rows[i].cells[left].dataset.bNum--
        else
            table.rows[i].cells[left].dataset.bNum++
        if(table.rows[i].cells[left].dataset.bNum==0){
            table.rows[i].cells[left].classList.add('textGreen')
            if(table.rows[i].cells[left].classList.contains('textRed'))
            {
                table.rows[i].cells[left].classList.remove('textRed')
            }
        }
        else if(table.rows[i].cells[left].dataset.bNum < 0 /*&& table.rows[i].cells[j].dataset.bNum!=init_cnt*/){
            table.rows[i].cells[left].classList.add('textRed')
            table.rows[i].cells[left].classList.remove('textGreen')
        }
        else if(table.rows[i].cells[left].dataset.bNum > 0 /*&& table.rows[i].cells[j].dataset.bNum!=init_cnt*/){
            table.rows[i].cells[left].classList.remove('textGreen')
            //    table.rows[i].cells[right].classList.remove('textGreen')
        }
    }
}

function winCheck(){
    let won=true
    for(let i=0;i<table.rows.length;i++){
        for(let j=0;j<table.rows.length;j++){
            if(table.rows[i].cells[j].dataset.lightable>-1) {
                if (table.rows[i].cells[j].classList.contains('white')) won= false
                if (table.rows[i].cells[j].classList.contains('red')) won= false
            }
            if(table.rows[i].cells[j].dataset.lightable==-1){
                if(!table.rows[i].cells[j].classList.contains('textGreen') && !isNaN(parseInt(table.rows[i].cells[j].dataset.bNum))) won= false
            }
        }
    }
    if (won) {
        gameResult.style.display="block"
        gameResult.innerHTML = "You Win! Click HERE to play again"
        reload.style.display='none'
        stopTimer()
    //    tableAppear.style.display='none'
    }
   return won
}

reload.addEventListener('click', function (e) {
    let s=userInput.value
    window.location.reload()
    // let w=
    localStorage.setItem("userInput", s)
    // userInput.value=s
})

gameResult.addEventListener('click', function (e) {
    window.location.reload()
})

userInput.addEventListener('input', function (e) {
    playerName.innerHTML = userInput.value
})


let Interval

// function timer() {
//     clearInterval(secVar)
//     Interval = setInterval(startTimer, 10)
// }
//
// function stopTimer() {
//     clearInterval(Interval)
// }

let sec = 0
let min = 1
let hour=1

let secVar
let minVar
let hourVar

function setSec() {
    if (sec >= 60) {
        setMin()
        sec = 0
    }
    if (sec < 10) {
        document.getElementById("sec").innerHTML = "0" + sec
    } else {
        document.getElementById("sec").innerHTML = sec
    }
    sec = sec + 1
    secVar = setTimeout(setSec, 1000)
}

function setMin() {
    if (min >= 60) {
        setHour()
        min = 0
    }
    if (min < 10) {
        document.getElementById("min").innerHTML = "0" + min
    } else {
        document.getElementById("min").innerHTML = min
    }
    min = min + 1
}

function setHour() {
    if (hour < 10) {
        document.getElementById("hour").innerHTML = "0" + hour
    } else {
        document.getElementById("hour").innerHTML = hour
    }
    hour = hour + 1
}

function clearAllInterval(){
    clearInterval(secVar)
    clearInterval(minVar)
    clearInterval(hourVar)
}

// function startTimer() {
//     ms++
//     if (ms <= 9) {
//         millisec.innerHTML = "0" + ms
//     }
//     if (ms > 9) {
//         millisec.innerHTML = ms
//     }
//     if (ms > 99) {
//         s++
//         sec.innerHTML = "0" + s
//         ms = 0
//         millisec.innerHTML = "0" + 0
//     }
//     if (s > 9) {
//         sec.innerHTML = s
//     }
// }