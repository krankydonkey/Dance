function make_event(event_name, level, start_time, end_time, discription) {
    var button = document.createElement("button");
    button.setAttribute("class", "collapsible");
    var nameField = document.createElement("p");
    var title = event_name + " - " + level;
    var names = document.createTextNode(title);
    nameField.appendChild(names);
    var timeField = document.createElement("p");
    var timeItal = document.createElement("em");
    timeRange = start_time + " - " + end_time;
    var time = document.createTextNode(timeRange);
    timeItal.appendChild(time);
    timeField.appendChild(timeItal);

    button.appendChild(nameField);
    button.appendChild(timeField);

    var info = document.createElement("div");
    info.setAttribute("class", "event");
    var textField = document.createElement("p");
    var text = document.createTextNode(discription);
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

make_event("Zouk Social", "All", "7:00pm", "7:30pm", "Come join us for a fun \
        evening of social dancing! Open to those of all ages and abilities.");

make_event("Salsa Class", "Intermediate", "6:00pm", "7:00pm", "Come try our \
        exciting block of classes.");
    