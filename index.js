document.addEventListener("DOMContentLoaded", function() 
    {replaceText()}
);

function replaceText() {
    document.getElementById("text").innerHTML = "This is really cool!";
    console.log("The DOM has loaded")
};
  
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
  