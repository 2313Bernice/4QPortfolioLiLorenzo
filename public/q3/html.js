
const accounts = "signups"

function check(){
    const students = localStorage.getItem(accounts)

    if(students){
        return JSON.parse(students);
    }

    else{
        return {};
    }
}

accountList = check();

const form = document.getElementById("form"); 

form.addEventListener("submit", function(e) { 
    e.preventDefault(); 

    if (confirm("Submit your sign up?")) {   
       
        const data = new FormData(form);

        const obj = Object.fromEntries(data.entries()); 
        
        accountList[obj.uname] = {};
        for (let key in obj) { 
            if (key != "uname") { 
                accountList[obj.uname][key] = obj[key];
            }
        }
        
        console.log(accountList) 
        listString = JSON.stringify(accountList) 
        localStorage.setItem("accounts", listString) 
        form.submit();
    }
  });


form.addEventListener("reset", function(e) { 
  
  if (!confirm("Do you wish to clear your data?")) {
    e.preventDefault(); 
  }
});

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