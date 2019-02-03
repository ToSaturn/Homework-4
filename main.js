function draw(el){
  el.style.border ='3px solid #FFFF00';
}

function drawTwo(el){
  el.style.border='5px solid green';
}

var t=document.getElementById('Deep');
function getParent(el){
  if ( !el || typeof el !== "object" ){ alert("Nope"); return}
  draw(el);
	if ( el.id === "Start" ){return}
  if ( el.parentElement ){console.log(1);
	document.getElementById("Deep").innerText += ' '+el.tagName;
      setTimeout( ()=>{ getParent(el.parentElement) }, 300 );
  }
}
getParent(t);
