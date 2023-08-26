const tablerow=document.getElementById('table-heading-row');
const tablebody=document.getElementById('table-body');
const button=document.getElementById('btn');
const itallicbtn=document.getElementById('itallic-btn');
const underlinebtn=document.getElementById('underline-btn');
const leftbtn=document.getElementById('left-btn');
const centerbtn=document.getElementById('center-btn');
const rightbtn=document.getElementById('right-btn');
const fontdropdown=document.getElementById('font-style-dropdown');
const fontsize=document.getElementById('font-size-dropdown');
const bgcolors=document.getElementById('bgcolor');
const fontcolors=document.getElementById('fontcolor');
const cutbtn=document.getElementById('cut-btn');
const copybtn=document.getElementById('copy-btn');
const pastebtn=document.getElementById('paste-btn');
const rows=100;
const columns=26;
var prevcellid;
let currentcell;
let cutcell;
function colgen(typeofcell,appending,isInnertext,rownumber){
        for(let col=0;col<columns;col++){
            const cell=document.createElement(typeofcell);
        if(isInnertext){
            cell.innerText=String.fromCharCode(col+65); 
            cell.setAttribute('id',String.fromCharCode(col+65))
        }
        else{
            cell.setAttribute('id',`${String.fromCharCode(col+65)}${rownumber}`)
            cell.setAttribute('contenteditable','true');
            cell.addEventListener('focus',event=>focusfunction(event.target));
        }
        appending.append(cell);
        } 
}
function setcellid(cellid,rowid,color){
    const colhead=document.getElementById(cellid);
    const rowhead=document.getElementById(rowid);
    colhead.style.backgroundColor=color;
    rowhead.style.backgroundColor=color;
}
function focusfunction(cell){
    currentcell=cell;
    if(prevcellid){
    // const colhead=document.getElementById(prevcellid[0]);
    // const rowhead=document.getElementById(prevcellid.substring(1));
    // colhead.style.backgroundColor="transparent";
    // rowhead.style.backgroundColor="transparent";
    setcellid(prevcellid[0],prevcellid.substring(1),"transparent");
    }
     if(currentcell.style.fontWeight==='bold'){
    button.style.backgroundColor='#ddddff';
      }
     else{
         button.style.backgroundColor='transparent';  
     }
     if(currentcell.style.fontStyle==='italic'){
        button.style.backgroundColor='#ddddff';
          }
         else{
             button.style.backgroundColor='transparent';  
         }
         if(currentcell.style.textDecoration==='underline'){
            button.style.backgroundColor='#ddddff';
              }
             else{
                 button.style.backgroundColor='transparent';  
             }
    const table=document.getElementById('selected');
    table.innerText=cell.id;
    // const colhead=document.getElementById(cellid[0]);
    // const rowhead=document.getElementById(cellid.substring(1));
    // colhead.style.backgroundColor="#ddddff";
    // rowhead.style.backgroundColor="#ddddff";
    setcellid(cell.id[0],cell.id.substring(1),"#ddddff");
   prevcellid=cell.id;
    }
colgen('th',tablerow,true);
// for(let i=0;i<columns;i++)
// {
//     const th=document.createElement('th');
//     th.innerText=String.fromCharCode(i+65);
//     tablerow.append(th);
// }
for(let row=1;row<=rows;row++){
    const tr=document.createElement('tr');
    const td=document.createElement('th');
    td.innerText=row;
    tr.append(td);
    // for(let col=0;col<columns;col++){
    //     const td1=document.createElement('td');
    //     tr.append(td1);
    // }
    colgen('td',tr,false,row);
    tablebody.append(tr);
}
button.addEventListener('click',()=>{
if(currentcell.style.fontWeight==='bold'){
    currentcell.style.fontWeight='normal';
    button.style.backgroundColor='transparent'; 
}
else{
    currentcell.style.fontWeight='bold';
    button.style.backgroundColor='#ddddff'; 
}
})
itallicbtn.addEventListener('click',()=>{
    if(currentcell.style.fontStyle==='italic'){
        currentcell.style.fontStyle='normal';
        itallicbtn.style.backgroundColor='transparent'; 
    }
    else{
        currentcell.style.fontStyle='italic';
        itallicbtn.style.backgroundColor='#ddddff'; 
    }
    })
    underlinebtn.addEventListener('click',()=>{
        if(currentcell.style.textDecoration==='underline'){
            currentcell.style.textDecoration='none';
            underlinebtn.style.backgroundColor='transparent'; 
        }
        else{
            currentcell.style.textDecoration='underline';
            underlinebtn.style.backgroundColor='#ddddff'; 
        }
        })
        leftbtn.addEventListener("click",()=>{
            currentcell.style.textAlign='left';
        })
        centerbtn.addEventListener("click",()=>{
            currentcell.style.textAlign='center';
        })
        rightbtn.addEventListener("click",()=>{
            currentcell.style.textAlign='right';
        })
        fontdropdown.addEventListener('change',()=>{
            currentcell.style.fontFamily=fontdropdown.value;
        })
        fontsize.addEventListener('change',()=>{
            currentcell.style.fontSize=fontsize.value;
        })
        bgcolors.addEventListener('input',()=>{
            currentcell.style.backgroundColor=bgcolors.value;
        })
        fontcolors.addEventListener('change',()=>{
            currentcell.style.color=fontcolors.value;
        })
        cutbtn.addEventListener('click',()=>{
            cutcell={
                text:currentcell.innerText,
                style:currentcell.style.cssText,
            }
            currentcell.innerText='';
            currentcell.style.cssText='';
        })
        pastebtn.addEventListener('click',()=>{
            currentcell.innerText=cutcell.text;
            currentcell.style=cutcell.style;
        })
        copybtn.addEventListener('click',()=>{
            cutcell={
                text:currentcell.innerText,
                style:currentcell.style.cssText,
            }
        })