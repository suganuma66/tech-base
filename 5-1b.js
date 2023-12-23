const week = ["日","月","火","水","木","金","土"];
const today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var calendar = "";

window.onload = function(){
    createCalendar(year, month);
};

function next(){
    month++;
    if(month > 11){
        month -= 12;
        year++;
    }
    createCalendar(year, month);
}

function previous(){
    month--;
    if(month < 0){
        month += 12;
        year--;
    }
    createCalendar(year, month);
}

function createCalendar(year, month){
    calendar = "<table><tr class='calendar'><tr><th colspan='" + week.length + "'>" + year + "年</th></tr><tr><th colspan='" + week.length + "'>" + (month+1) + "月</th></tr>";
    for(var i = 0; i < week.length; i++){
        if(i == 0){
            calendar += "<th style='color: red'>" + week[i] + "</th>";
        }
        else if(i == 6){
            calendar += "<th style='color: blue'>" + week[i] + "</th>";
        }
        else{
            calendar += "<th>" + week[i] + "</th>";
        }
    }
    calendar += "</tr>";

    var count = 0;
    var dayOfFirstDate = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var previousMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((dayOfFirstDate + endDate) / week.length);
    
    for(var i = 0; i < row; i++){
        calendar += "<tr>";
        for(var j = 0; j < week.length; j++){
            if(i == 0 && j < dayOfFirstDate){
                calendar += "<td style = 'color: gray'>" + (previousMonthEndDate - dayOfFirstDate + j + 1) + "</td>";
            }
            else if(count >= endDate){
                count++;
                calendar += "<td style = 'color: gray'>" + (count - endDate) + "</td>";
            }
            else{
                count++;
                if(today.getFullYear() == year && today.getMonth() + 1 == month && today.getDate() == count){
                    calendar += "<td style = 'color: green'>" + count + "</td>";
                }
                else{
                    if(j == 0){
                        calendar += "<td style='color: red'>" + count + "</th>";
                    }
                    else if(j == 6){
                        calendar += "<td style='color: blue'>" + count + "</td>";
                    }
                    else{
                        calendar += "<td>" + count + "</td>";
                    }
                }
            }
        }
        calendar += "</tr>";
    }
    calendar += "</table>";

    var text = document.getElementById("calendar");
    text.innerHTML = calendar;
}