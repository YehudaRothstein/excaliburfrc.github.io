const json = JSON.parse(`
{{ content }}
`)

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

function setTitle(currentPermalink) {
    let header = document.getElementById("title");

    let currentfile = json["articles"].filter(article => article["file"] === currentPermalink)[0];
    header.id = currentfile["name"].replace(" ", "-").replace("/", "").toLowerCase();
    header.innerText = currentfile["name"];
}
