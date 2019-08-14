var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

function upcoming_row(evt, divid) {
    var next1 = document.getElementById(divid);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var row = next1.insertRow();
    var cell = row.insertCell();
    var text = document.createTextNode(evt.date.toLocaleDateString("en-GB", options));
    cell.appendChild(text);
    cell = row.insertCell();
    text = document.createTextNode(evt.name);
    cell.appendChild(text);
}

function next_event(events, now) {
    return events.find(function(evt) {
        return evt.date >= now;
    });
}

function days_string(days) {
    if (days == 0) {
        return 'today';
    } else if (days == 1) {
        return 'tomorrow';
    } else {
        return 'in ' + days + ' days';
    }
}

function display(events) {
    var now = new Date();
    var next_evt = next_event(events, now);
    var next_time = next_evt.date - now;
    var days = Math.ceil(next_time / day);

    var daysDiv = document.getElementById('days');
    daysDiv.innerHTML = 'The next bank holiday is ' + days_string(days);
    var date = document.getElementById('date');
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.innerHTML = next_evt.date.toLocaleDateString("en-GB", options); 
    var name = document.getElementById('name');
    name.innerHTML = next_evt.name;
    var upcoming = document.getElementById('upcoming');
    upcoming.innerHTML = '';
    for (var evt of events) {
        if (evt.date > next_evt.date) {
            upcoming_row(evt, 'upcoming');
        }
    }

}

function englandwales() {
    var events = [
        {name: "New Year's Day", date: new Date("2019-01-01T00:00:00")},
        {name: "Good Friday", date: new Date("2019-04-19T00:00:00")},
        {name: "Easter Monday", date: new Date("2019-04-22T00:00:00")},
        {name: "Early May bank holiday", date: new Date("2019-05-06T00:00:00")},
        {name: "Spring bank holiday", date: new Date("2019-05-27T00:00:00")},
        {name: "Summer bank holiday", date: new Date("2019-08-26T00:00:00")},
        {name: "Christmas Day", date: new Date("2019-12-25T00:00:00")},
        {name: "Boxing Day", date: new Date("2019-12-26T00:00:00")},
        {name: "New Year's Day", date: new Date("2020-01-01T00:00:00")},
        {name: "Good Friday", date: new Date("2020-04-10T00:00:00")},
        {name: "Easter Monday", date: new Date("2020-04-13T00:00:00")},
        {name: "Early May bank holiday (VE day)", date: new Date("2020-05-08T00:00:00")},
        {name: "Spring bank holiday", date: new Date("2020-05-25T00:00:00")},
        {name: "Summer bank holiday", date: new Date("2020-08-31T00:00:00")},
        {name: "Christmas Day", date: new Date("2020-12-25T00:00:00")},
        {name: "Boxing Day (substitute day)", date: new Date("2020-12-28T00:00:00")}
    ];
    //document.querySelector("button").style.border = 'none';
    //document.querySelector("#englandwales").style.border = '4px solid black';
    display(events);
}

function scotland() {
    var events = [
        {name: "New Year's Day", date: new Date("2019-01-01T00:00:00")},
        {name: "2nd January", date: new Date("2019-01-02T00:00:00")},
        {name: "Good Friday", date: new Date("2019-04-19T00:00:00")},
        {name: "Early May bank holiday", date: new Date("2019-05-06T00:00:00")},
        {name: "Spring bank holiday", date: new Date("2019-05-27T00:00:00")},
        {name: "Summer bank holiday", date: new Date("2019-08-05T00:00:00")},
        {name: "St Andrew's Day", date: new Date("2019-12-02T00:00:00")},
        {name: "Christmas Day", date: new Date("2019-12-25T00:00:00")},
        {name: "Boxing Day", date: new Date("2019-12-26T00:00:00")},
        {name: "New Year's Day", date: new Date("2020-01-01T00:00:00")},
        {name: "2nd January", date: new Date("2020-01-02T00:00:00")},
        {name: "Good Friday", date: new Date("2020-04-10T00:00:00")},
        {name: "Early May bank holiday (VE day)", date: new Date("2020-05-08T00:00:00")},
        {name: "Spring bank holiday", date: new Date("2020-05-25T00:00:00")},
        {name: "Summer bank holiday", date: new Date("2020-08-03T00:00:00")},
        {name: "St Andrew's Day", date: new Date("2020-11-30T00:00:00")},
        {name: "Christmas Day", date: new Date("2020-12-25T00:00:00")},
        {name: "Boxing Day (substitute day)", date: new Date("2020-12-28T00:00:00")}
    ];
    //document.querySelector("button").style.border = 'none';
    //document.querySelector("#scotland").style.border = '4px solid black';
    display(events);
}

function northernireland() {
    var events = [
        {name: "New Year's Day", date: new Date("2019-01-01T00:00:00")},
        {name: "St Patrick's Day (substitute day)", date: new Date("2019-03-18T00:00:00")},
        {name: "Good Friday", date: new Date("2019-04-19T00:00:00")},
        {name: "Easter Monday", date: new Date("2019-04-22T00:00:00")},
        {name: "Early May bank holiday", date: new Date("2019-05-06T00:00:00")},
        {name: "Spring bank holiday", date: new Date("2019-05-27T00:00:00")},
        {name: "Battle of the Boyne (Orangemen's Day)", date: new Date("2019-07-12T00:00:00")},
        {name: "Summer bank holiday", date: new Date("2019-08-26T00:00:00")},
        {name: "Christmas Day", date: new Date("2019-12-25T00:00:00")},
        {name: "Boxing Day", date: new Date("2019-12-26T00:00:00")},
        {name: "New Year's Day", date: new Date("2020-01-01T00:00:00")},
        {name: "St Patrick's Day", date: new Date("2020-03-17T00:00:00")},
        {name: "Good Friday", date: new Date("2020-04-10T00:00:00")},
        {name: "Easter Monday", date: new Date("2020-04-13T00:00:00")},
        {name: "Early May bank holiday (VE day)", date: new Date("2020-05-08T00:00:00")},
        {name: "Spring bank holiday", date: new Date("2020-05-25T00:00:00")},
        {name: "Battle of the Boyne (Orangemen's Day) (substitute day)", date: new Date("2020-07-13T00:00:00")},
        {name: "Summer bank holiday", date: new Date("2020-08-31T00:00:00")},
        {name: "Christmas Day", date: new Date("2020-12-25T00:00:00")},
        {name: "Boxing Day (substitute day)", date: new Date("2020-12-28T00:00:00")}
    ];
    //document.querySelector("button").style.border = 'none';
    //document.querySelector("#northernireland").style.border = '4px solid black';
    display(events);
}

window.onload = function () {
    englandwales();
};
