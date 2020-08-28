function search() { 
    let input = document.getElementById('searchbar').value 
        input=input.toLowerCase(); 
    let x = document.getElementsByTagName("h6"); 
    let y = document.getElementsByClassName('s'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            y[i].style.display="none"; 
        } 
        else { 
        y[i].style.display="list-item";
        } 
    }
}
