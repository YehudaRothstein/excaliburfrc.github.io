const detailElements = Array.from(document.getElementsByTagName("details"));


for (let i = 0; i < detailElements.length; i++) {
    // alert(detailElements[i].id);
    replaceElement(detailElements[i]);
}

function replaceElement(element) {
    const innerHtml = element.innerHTML;
    const parent = element.parentElement;
    const newElement = document.createElement("div");
    newElement.className = "tabcontent";
    newElement.id = element.id;
    newElement.innerHTML = innerHtml;
    // alert(newElement.id); // debug
    element.replaceWith(newElement);
}

function switchTo(evt, option) {
    // Declare all variables
    let i, tabcontent, tablinks;
    const key = getKey(option);

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if (getKey(tabcontent[i].id) === key) {
            tabcontent[i].style.display = "none";
        }
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        // alert("key = " + key + tablinks[i].id + "i= " + i);
        // if (getKey(tablinks[i].id).normalize() === key.normalize()) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        // }
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(option).style.display = "block";
    // opt.color = "#012265 !important";
    evt.currentTarget.className += " active";
    evt.currentTarget.fontcolor = "#012265 !important;"
}

let regex = /(\w+)-(\w+)/;

function getKey(id) {
    // alert("tried to get key for " + id);
    const match = regex.exec(id);
    // alert('id= ' + id + ' match= ' + match); // debug
    const key = match[2];
    // const platform = match[1];
    return key;
}

function getPlatform(id) {
    const match = regex.exec(id);
    // alert('id= ' + id + ' match= ' + match); // debug
    let key = match[2];
    let platform = match[1];
    return platform;
}