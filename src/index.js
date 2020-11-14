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

class LagrangeMethod{
    constructor(){
    const x0 = document.getElementById("x0");
    const x1 = document.getElementById("x1");
    const x2 = document.getElementById("x2");

    const y0 = document.getElementById("y0");
    const y1 = document.getElementById("y1");
    const y2 = document.getElementById("y2");

    const countBtn = document.querySelector(".mainSection__count");

    const inputsElement = document.querySelectorAll("input");
    inputsElement.forEach((input)=>{
        input.addEventListener("keyup", (e)=> this.onChangeHandler(e))
    })

    countBtn.addEventListener("click", ()=> this.countItFunc());
    }

    onChangeHandler = (e) =>{
        const tName = e.target.name;
        const tValue = e.target.value;
        if(tName === "x0"){
            finalValue.x0 = tValue;
        }

        if(tName === "x1"){
            finalValue.x1 = tValue;
        }

        if(tName === "x2"){
            finalValue.x2 = tValue;
        }

        

        if(tName === "y0"){
            finalValue.y0 = tValue;
        }

        if(tName === "y1"){
            finalValue.y1 = tValue;
        }

        if(tName === "y2"){
            finalValue.y2 = tValue;
        }

        if(tName === "searchValue"){
            finalValue.searchValue = tValue;
        }
    }

    countItFunc = () => {
     const node1 = ((finalValue.searchValue - finalValue.x1)/(finalValue.x0 - finalValue.x1)) * ((finalValue.searchValue - finalValue.x2)/(finalValue.x0 - finalValue.x2));   

     const node2 = ((finalValue.searchValue - finalValue.x0)/(finalValue.x1 - finalValue.x0)) * ((finalValue.searchValue - finalValue.x2)/(finalValue.x1 - finalValue.x2));   

     const node3 = ((finalValue.searchValue - finalValue.x0)/(finalValue.x2 - finalValue.x0)) * ((finalValue.searchValue - finalValue.x1)/(finalValue.x2 - finalValue.x1)); 

     const resultValue = document.querySelector(".result__value");

     resultValue.textContent = (finalValue.y0 * node1 + finalValue.y1 * node2 + finalValue.y2 * node3);
    }
}


const lagrange = new LagrangeMethod();