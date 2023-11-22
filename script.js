function save(){
    var fieldValue = document.getElementById('textfield').value;
    localStorage.setItem('text',fieldValue);
}

function load(){
    var storedValue = localStorage.getItem('text');
    if(storedValue){
        document.getElementById('textfield').value = storedValue;
}
    alert("Stored value is = " + storedValue)
}

function remove(){
    document.getElementById('textfield').value = '';
    localStorage.removeItem('text');
}