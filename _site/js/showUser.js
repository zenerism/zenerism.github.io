function showUser() {

    document.getElementById("myDropdown").classList.toggle("show");

    window.onclick = function(event) {
        var admin = document.getElementById("adminBlock")
        if (!event.target.matches('admin')) {
          if(admin.style.display === "none"){
            admin.style.display = "block";
          } else {
            admin.style.display = "none"
            }
        }
    }
  }