function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function openTime(tme, globe) {
    // Declare all variables
    var t, timec, timelink;

    // Get all elements with class="timec" and hide them
    timec = document.getElementsByClassName("timec");
    for (t = 0; t < timec.length; t++) {
        timec[t].style.display = "none";

   
    }

    // Get all elements with class="timelink" and remove the class "active"
    timelink = document.getElementsByClassName("timelink");
    for (t = 0; t< timelink.length; t++) {
        timelink[t].className = timelink[t].className.replace(" active", "");

    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(globe).style.display = "block";
    tme.currentTarget.className += " active";
}

/*
function openTime(id){

  alert('hi ' + id)
  console.log('hi ' + id)
  
	if(document.getElementById(id).style.display == "block"){
  	document.getElementById(id).style.display = "none";
  }else{
		document.getElementById(id).style.display = "block";
  }
}
*/

function initialize() {
                var earth = new WE.map('earth_div');
                WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
                  attribution: '© OpenStreetMap contributors'
                }).addTo(earth);
              }


