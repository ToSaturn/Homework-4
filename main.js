// -------------------------Work-1-----------------------------
// function draw(el){
//   el.style.border ='3px solid #FFFF00';
// }
//
// function drawTwo(el){
//   el.style.border='5px solid green';
// }
//
// var t=document.getElementById('Deep');
// function getParent(el){
//   if ( !el || typeof el !== "object" ){ alert("Nope"); return}
//   draw(el);
// 	if ( el.id === "Start" ){return}
//   if ( el.parentElement ){console.log(1);
// 	document.getElementById("Deep").innerText += ' '+el.tagName;
//       setTimeout( ()=>{ getParent(el.parentElement) }, 300 );
//   }
// }
// getParent(t);


// --------------------------Work-2-----------------------------------

function red(el){
  el.style.border='3px solid red';
}
function green(el){
  el.style.border='3px solid #00FF00';
}

t=document.getElementById('Child1');
k=document.getElementById('Child2');
function getChild(el){

    if(el.id!=="Sib1"){
      red(el);
      setTimeout(()=>{getChild(el.parentElement)}, 300);}
    else {
      el=el.nextElementSibling;
      deep(el);
    }

}
getChild(t);

function deep(el){
  if (el.id!=="Sib2"){ green(el);}
  const coll = Array.from(el.childNodes).filter(c=>c.tagName==="DIV");
  coll.forEach( (c)=>{ setTimeout(()=>{deep(c)},300) } )
}
