import "./SASS/style.scss";

let finalValue = {
    x0:"",
    x1:"",
    x2:"",
    y0:"",
    y1:"",
    y2:"",
    searchValue:""
}

class LagrangeInputs{
    constructor(){
    const inputsElement = document.querySelectorAll("input");

    inputsElement.forEach((input)=>{
        input.addEventListener("keyup", (e)=> this.onChangeHandler(e))
    })
    }

    onChangeHandler = (e) =>{
        const tName = e.target.name;
        const tValue = e.target.value;
        if(tName === "x0") finalValue.x0 = tValue;
        if(tName === "x1") finalValue.x1 = tValue;
        if(tName === "x2") finalValue.x2 = tValue;

        if(tName === "y0") finalValue.y0 = tValue;
        if(tName === "y1") finalValue.y1 = tValue;
        if(tName === "y2") finalValue.y2 = tValue;

        if(tName === "searchValue") finalValue.searchValue = tValue;
    }
}


class ButtonsHandler{
    constructor(){
        const countBtn = document.querySelector(".btnSection__calculate");
        const clearBtn = document.querySelector(".btnSection__clear");  
        countBtn.addEventListener("click", ()=> this.countItFunc());
        clearBtn.addEventListener("click", ()=> this.clearItFunc());
    }

    countItFunc = () => {
        if(finalValue.x0 === "" || finalValue.x1 === "" || finalValue.x2 === "" || finalValue.y0 === ""|| finalValue.y1 === ""|| finalValue.y2 === "" || finalValue.searchValue === "" ){
            document.querySelector(".result__value").textContent = "You have to complete every input";
            const inputsElement = document.querySelectorAll("input");
            inputsElement.forEach((input)=>{
                if(input.value === ""){
                    input.style.border = "1px solid #d00";
                }else{
                    input.style.border = "1px solid #aaa";
                }
            }) 
        }else{
        const node1 = ((finalValue.searchValue - finalValue.x1)/(finalValue.x0 - finalValue.x1)) * ((finalValue.searchValue - finalValue.x2)/(finalValue.x0 - finalValue.x2));   
        const node2 = ((finalValue.searchValue - finalValue.x0)/(finalValue.x1 - finalValue.x0)) * ((finalValue.searchValue - finalValue.x2)/(finalValue.x1 - finalValue.x2));   
        const node3 = ((finalValue.searchValue - finalValue.x0)/(finalValue.x2 - finalValue.x0)) * ((finalValue.searchValue - finalValue.x1)/(finalValue.x2 - finalValue.x1)); 
   
        const result =  (finalValue.y0 * node1 + finalValue.y1 * node2 + finalValue.y2 * node3);
        document.querySelector(".result__value").textContent = result.toFixed(2)
        }
       }

    clearItFunc = () => {
        const inputsElement = document.querySelectorAll("input");
        inputsElement.forEach((input)=>{
            input.value = "";
            input.style.border = "1px solid #aaa"
        }); 
        document.querySelector(".result__value").textContent = "- - -";
        finalValue = {
            x0:"",
            x1:"",
            x2:"",
            y0:"",
            y1:"",
            y2:"",
            searchValue:""
        }
    }
}


const lagrangeInputs = new LagrangeInputs();
const lagrangeButtons = new ButtonsHandler();