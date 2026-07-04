const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function(){

    if(themeToggle.checked){

        document.body.classList.remove("light-mode");

    }else{

        document.body.classList.add("light-mode");

    }

});