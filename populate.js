function make_event(event) {
    /* 
    <button class="collapsible">
        <p>event_name - level</p>
        <p><em>start_time - end_time</em></p>
    </button>
    <div class="event">
        <p>discription</p>
    <\div>
    */
    var events = document.getElementById("events");
    var button = document.createElement("button");
    button.setAttribute("class", "collapsible");
    var nameField = document.createElement("p");
    var names = document.createTextNode(event.name + " - " + event.ability);
    nameField.appendChild(names);
    var timeField = document.createElement("p");
    var timeItal = document.createElement("em");
    var time = document.createTextNode(event.start + " - " + event.end);
    timeItal.appendChild(time);
    timeField.appendChild(timeItal);
    button.appendChild(nameField);
    button.appendChild(timeField);
    var info = document.createElement("div");
    info.setAttribute("class", "event");
    var textField = document.createElement("p");
    var text = document.createTextNode(event.description);
    textField.appendChild(text);
    info.appendChild(textField);
    events.appendChild(button);
    events.appendChild(info);


    button.addEventListener("click", function() {
        if (info.style.maxHeight){
            info.style.maxHeight = null;
        } else {
            info.style.maxHeight = info.scrollHeight + "px";
        } 
    });
}

const events = [    
    {
        "name": "Zouk Social",
        "ability": "All",
        "start": "7:00pm",
        "end": "7:30pm",
        "company": "Cloud 9 Zouk",
        "description": "Come join us for a fun evening of social dancing! Open to those of all ages and abilities."
    },
    {
        "name": "Salsa Class",
        "ability": "Intermediate",
        "start": "6:00pm",
        "end": "7:00pm",
        "company": "50/50",
        "description": "Come try our exciting block of classes."
    }
];

for (var i = 0; i < events.length; i++) {
    make_event(events[i]);
}
    