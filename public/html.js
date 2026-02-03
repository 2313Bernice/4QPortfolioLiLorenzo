
function inStyle(ele){
    console.log(ele);
    ele.style.backgroundColor = "rgb(97, 97, 182)";
     ele.style.color="white";
}

function outStyle(ele){
    console.log(ele);
    ele.style.backgroundColor = "rgb(252, 239, 182)";
    ele.style.color="black";
}

const LIST = "signUp";

function loadNotes(){
    const students = localStorage.getItem(LIST);

    if(students){
        return JSON.parse(students);
    }

    else {
        return [];
    }
}

infoList = loadNotes();
const form = document.getElementById("forms");

form.addEventListener("submit", function (e){
    e.preventDefault();

if(confirm("Do you wish to save your work?")){
    const info = new FormData(form);

    const obj = Object.fromEntries(info.entries());

    infoList[obj.name]= {};

      for(let key in obj)
            {
            if (key != "name"){
                infoList[obj.name][key] = obj[key];
            }
        } 
    
    console.log(infoList);
    stringList = localStorage.setItem(LIST, JSON.stringify(infoList));
    form.submit();
}
    });

   form.addEventListener("reset", function(e) { // 
  // Ask for confirmation before clearing
  if (!confirm("Sure you want to clear your data?")) {
    e.preventDefault(); // cancel the reset if user clicks "Cancel"
  }
});