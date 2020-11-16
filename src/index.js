import "./SASS/style.scss";

let finalValue = {
    x0:"",
    y0:"",
    x1:"",
    y1:"",
    searchValue:"",
    nodeList:2
}

// let nodesArray = [{x:finalValue.x0,y:finalValue.y0},{x:finalValue.x1,y:finalValue.y1},{x:finalValue.x2,y:finalValue.y2}];
let nodesArray =[{x:finalValue.x0, y:finalValue.y0},{x:finalValue.x1, y:finalValue.y1}];

class LagrangeInputs{
    constructor(){
    //Initials Inputs
        const initialInputs = document.querySelectorAll(".initialInput");
        initialInputs.forEach((input)=>{
            input.addEventListener("keyup", (e)=> this.onChangeHandler(e))
        })
    }

    onChangeHandler = (e) =>{
        const tName = e.target.name;
        const tValue = e.target.value;

        if(tName === "searchResult"){
            finalValue.searchValue = tValue;
        }else {
            finalValue[tName] = tValue;
        
            const targetNodeName = e.target.id[0];
            const targetId = e.target.id[1];
            nodesArray[targetId][targetNodeName]= tValue;
        }
    }
}


class ButtonsHandler extends LagrangeInputs{
    constructor(){
        super();
        const countBtn = document.querySelector(".btnSection__calculate");
        const clearBtn = document.querySelector(".btnSection__clear");  
        const addNodeBtn= document.querySelector(".btnSection__node");
        addNodeBtn.addEventListener("click", ()=> this.addNewNodeFunc());
        countBtn.addEventListener("click", ()=> this.countItFunc());
        clearBtn.addEventListener("click", ()=> this.clearItFunc());
    }


    addNewNodeFunc = () => {
        const allNodeContainer = document.querySelector(".mainSection__allNodeContainer");

        const mainSectionNode = document.createElement("div");
        mainSectionNode.classList.add("mainSection__node");

        const eleContainerX = document.createElement("div");
        eleContainerX.classList.add("mainSection__eleContainer");

        const eleLabelX = document.createElement("label");
        eleLabelX.classList.add("mainSection__label");
        eleLabelX.setAttribute("for",`x${finalValue.nodeList}`);
        eleLabelX.textContent = `x${finalValue.nodeList}`;

        const eleInputX = document.createElement("input");
        eleInputX.setAttribute("name", `x${finalValue.nodeList}`);
        eleInputX.setAttribute("id", `x${finalValue.nodeList}`);
        eleInputX.setAttribute("typer","number");
        eleInputX.addEventListener("keyup", (e)=> lagrangeInputs.onChangeHandler(e));

        const eleContainerY = document.createElement("div");
        eleContainerY.classList.add("mainSection__eleContainer");

        const eleLabelY = document.createElement("label");
        eleLabelY.classList.add("mainSection__label");
        eleLabelY.setAttribute("for",`y${finalValue.nodeList}`);
        eleLabelY.textContent = `y${finalValue.nodeList}`;

        const eleInputY = document.createElement("input");
        eleInputY.setAttribute("name", `y${finalValue.nodeList}`);
        eleInputY.setAttribute("id", `y${finalValue.nodeList}`);
        eleInputY.setAttribute("typer","number");
        eleInputY.addEventListener("keyup", (e)=> lagrangeInputs.onChangeHandler(e));

        /////

        allNodeContainer.appendChild(mainSectionNode);
        mainSectionNode.appendChild(eleContainerX);
        mainSectionNode.appendChild(eleContainerY);

        eleContainerX.appendChild(eleLabelX);
        eleContainerX.appendChild(eleInputX);

        eleContainerY.appendChild(eleLabelY);
        eleContainerY.appendChild(eleInputY);

        finalValue[`x${finalValue.nodeList}`];
        finalValue[`y${finalValue.nodeList}`];
        nodesArray.push({x:"", y:""});
        finalValue.nodeList++;
        
    }

    countItFunc = () => {
        const inputsElement = document.querySelectorAll("input");
        const isArrayFull = nodesArray.filter(ele => ele.x === "" || ele.y === "" );

        if(isArrayFull.length !== 0 || !finalValue.searchValue){
            document.querySelector(".result__value").textContent = "You have to complete every input";
            inputsElement.forEach((input)=>{
                if(input.value === ""){
                    input.style.border = "1px solid #d00";
                }else{
                    input.style.border = "1px solid #aaa";
                }
            }) 
        }else{

        inputsElement.forEach(input => input.style.border = "1px solid #aaa");
        

        //Step 1
        const firstLoopUpper = [];
        const firstLoopLower = [];
        nodesArray.forEach((ele,index)=>{
            nodesArray.forEach((arrayEle,arrayIndex)=>{
                if(arrayIndex !== index){
                    const upperNode = (finalValue.searchValue - nodesArray[arrayIndex].x);
                    const lowerNode = (nodesArray[index].x - nodesArray[arrayIndex].x);

                    firstLoopUpper.push({id:index, x:upperNode})
                    firstLoopLower.push({id:index, y:lowerNode});
                }    
            })
        })

        //Step 2 Filter by Node element ( id ) and multiply it ( ULEPSZYC BO NIE JEST DRY)
        const secondLoopUpper = [];
        const secondLoopLower = [];
        nodesArray.forEach((ele,index)=>{
            const filterUpperNode = firstLoopUpper.filter(ele => ele.id === index);
            const mapUpperNode = filterUpperNode.map((ele)=>{
                if(ele.id === index){
                    return ele.x
                }
            });
          const multiplyUpperNode = mapUpperNode.reduce(function(a,b){return a * b});


          const filterLowerNode = firstLoopLower.filter(ele => ele.id === index);
          const mapLowerNode = filterLowerNode.map((ele)=>{
              if(ele.id === index){
                  return ele.y
              }
          });
        const multiplyLowerNode = mapLowerNode.reduce(function(a,b){return a * b});
          secondLoopUpper.push(multiplyUpperNode);
          secondLoopLower.push(multiplyLowerNode);

        })
     
        //Step 3 
        const thirdLoopResult = [];
        nodesArray.forEach((ele,index)=>{
            const finalResult = nodesArray[index].y * (secondLoopUpper[index] / secondLoopLower[index]);
            thirdLoopResult.push(finalResult)
        })
        const completeResult = thirdLoopResult.reduce(function(a,b){ return a + b});
        if(completeResult){
            document.querySelector(".result__value").textContent = `${completeResult.toFixed(2)}`;
        }else{
            document.querySelector(".result__value").textContent = `No Result`;
        }
    }
       }

    clearItFunc = () => {
        const inputsElement = document.querySelectorAll("input");
        inputsElement.forEach((input)=>{
            input.value = "";
            input.style.border = "1px solid #aaa"
        }); 
        document.querySelector(".result__value").textContent = "- - -";

        const prevNodeList = finalValue.nodeList;
        finalValue = {
            x0:"",
            y0:"",
            x1:"",
            y1:"",
            searchValue:"",
            nodeList:prevNodeList
        }

        nodesArray.forEach((ele)=>{
            ele.x = "";
            ele.y = "";
        })
    }
}


const lagrangeInputs = new LagrangeInputs();
const lagrangeButtons = new ButtonsHandler();