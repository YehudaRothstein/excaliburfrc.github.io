const json = JSON.parse(`
{{ content }}
`)
// function loadTutorial(filepermalink) {
//     // const regex = /\/tutorials\/(\w+)\/(\w+-\w+)\.html/
//     // let match = regex.exec(filepermalink);
//     // const tutorialName = match[1];
//     // const currentFile = match[2];
//
//     let navbar = document.getElementById("sidenav");
//     for(let i = 0; i < json["articles"].length; i++) {
//         let element = json["articles"][i];
//         let newElement = document.createElement("a");
//         newElement.href = element["file"];
//         newElement.text = element["name"];
//         if(filepermalink === element["file"]) {
//             newElement.className += " active";
//         }
//         navbar.appendChild(newElement);
//     }
// }

function loadProgressButtons(currentPermalink) {
    let i;
    if (currentPermalink.endsWith("/")) {
        setProgressLinks(null, json["articles"][0]["file"])
        document.getElementById("tutorial-home").hidden = true;
        return;
    }
    // alert(json) // debug
    // alert(json["articles"]); // debug
    for (i = 0; i < json["articles"].length; i++) {
        let element = json["articles"][i];
        if (element["file"] === currentPermalink) {
            setProgressLinks((i === 0)? null : json["articles"][i-1]["file"],
                (i === json["articles"].length - 1)? null : json["articles"][i+1]["file"])
            break;
        }
    }
    function setProgressLinks(prevLink, nextLink) {
        let prev = document.getElementById("previous");
        let next = document.getElementById("next");
        if (prevLink === null) {
            prev.hidden = true;
        } else {
            prev.setAttribute("href", prevLink);
        }
        if (nextLink === null) {
            next.hidden = true;
        } else {
            next.setAttribute("href", nextLink);
        }
    }
}

function loadSidebar(currentPermalink) {
    // alert("loadSidebar() called"); // debug
    let parent = document.getElementById("sidebar");
    json["articles"].forEach(function (current, idx, arr) {
        let element = document.createElement("a");
        element.className = "sidebar-item";
        element.setAttribute("href", current["file"]);
        element.text = current["name"];
        if (current["file"] === currentPermalink) {
            document.getElementById("tutorial-intro").className -= " active";
            element.className += " active";
        }
        parent.appendChild(element);
    });
}