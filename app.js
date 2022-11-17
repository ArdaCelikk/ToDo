let TextBox =document.getElementById("txtYazi")
// let list = document.getElementById("liste")
let main= document.getElementById("main")

let itemList = []


const setQuery=(e)=>{
    if(e.keyCode =='13')
    basla()
}



function basla(){
    itemList.push(TextBox.value)
    main.innerHTML=""
    TextBox.value=""
    for(let i=0;i<itemList.length;i++)
    {

        let row = document.createElement("div")
        row.className="rows"
        main.appendChild(row)

        //yazılanları ekrana çıkarma
        let toDo = document.createElement("span")
        toDo.className="listItems"
        toDo.value = TextBox.value
        // console.log("TODO :"+toDo.value)
        row.appendChild(toDo)
        toDo.innerHTML = itemList[i]

        

        //çarpıları koyma
        let span=document.createElement("span")
        let txt = document.createTextNode("\u00D7")
        span.className="close"
        span.appendChild(txt)
        row.appendChild(span)


        //arraydan ve ekrandan silme
        let closed = document.getElementsByClassName("close")
        var j;
        for(j=0; j< closed.length;j++)
        {
            closed[j].onclick = function(){
                let indexi =itemList.indexOf(this.parentElement.firstChild.innerHTML)
                this.parentElement.remove();
	            itemList.splice(indexi, 1)
            }
        }
    }

}

TextBox.addEventListener('keypress',setQuery)