function addDocument() {
    const newDocument = document.createElement('div');
    newDocument.className = 'row';
    newDocument.innerHTML = `
        <input type="text" class="text">
        <input type="text" class="value">
        <button class="Up" onclick="Up(this)">↑</button>
        <button class="Down" onclick="Down(this)">↓</button>
        <button class="Remove" onclick="removeDoc(this)">x</button>
    `;

    documentsList = document.getElementById("bigContainer");
    documentsList.appendChild(newDocument);
};

function saveDocument() {
    jsonSummary = document.querySelector(".jsonResult");
    keyDocument = document.querySelectorAll(".text");
    valueDoc = document.querySelectorAll(".value");
   
    JsonArray = [];
    kov = "&quot";

    for (var i = 0; i < keyDocument.length; i++) {
        JsonArray.push(keyDocument[i].value + kov + ":" + kov + valueDoc[i].value);
    }
    result ='{'+  JSON.stringify(JsonArray).slice(1, -1)+ '}';
    jsonSummary.innerHTML = result;
};

function Up(document) {
    previous = document.parentElement.previousElementSibling;
    if(previous != null) {
        document.parentElement.after(previous);
    }
};

function Down(document) {
    next = document.parentElement.nextElementSibling;
    if(next != null) {
        document.parentElement.before(next);
    }
};

function removeDoc(document) {
    document.parentElement.remove()
}