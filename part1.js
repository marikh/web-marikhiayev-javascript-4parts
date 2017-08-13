var monthsNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
};

var now = new Date();

function addZeroIfTimeUnitIsLessThan10(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var getDateString = function (dateTime) {
    return addZeroIfTimeUnitIsLessThan10(dateTime.getDate()) + "/" +  monthsNames[dateTime.getMonth()] + "/" + dateTime.getFullYear() + " " + 

    addZeroIfTimeUnitIsLessThan10(dateTime.getHours()) + ":" + addZeroIfTimeUnitIsLessThan10(dateTime.getMinutes());
};

var dateDiv = document.getElementById("currentDate");
dateDiv.innerHTML = getDateString(now) + "<br> 36.5 Hours from now: " + getDateString(now.addHours(36.5));