function toggleUser(id){
    var divs = document.getElementsByClassName("hideable");
    for(var i=0;i<divs.length; i++) {
        divs[i].style.display = "none";
    }
    var userID = document.getElementById(id);
    userID.style.display = userID.style.display == "none" ? "block" : "none";
}