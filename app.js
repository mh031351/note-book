

        // notes_box
var tileInput = document.getElementById("tile-input");
var descInput = document.getElementById("Desc-input");
var notes_box = document.getElementById("notes-box");

function addItem() {
    if (tileInput.value != "" && descInput.value!=""){

        var section = document.createElement("section");
        section.classList = "col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeInDown"
        notes_box.appendChild(section);

        var h4 = document.createElement("h4");
        h4.innerHTML = tileInput.value;
        section.appendChild(h4);

        var p = document.createElement("p");
        p.innerHTML = descInput.value;
        section.appendChild(p);

        var div = document.createElement("div");
        div.setAttribute("class", "user-div");

        var del = document.createElement("i");
        del.setAttribute("onclick", "deleteBox(this)");
        del.classList = "fas fa-minus-circle";
        
        var edit = document.createElement("i");
        edit.setAttribute("onclick", "editBox(this)")
        edit.classList = "far fa-edit";
        del.style.cursor="pointer";
        edit.style.cursor="pointer";
        div.appendChild(del);
        div.appendChild(edit);
        section.appendChild(div);
        
        var div = document.createElement("div");
        div.className="box-line";
        section.insertBefore(div,p);
        tileInput.value = " ";
        descInput.value = " ";
    }
    else{
        alert("Fill This Fields");
    }
}

function deleteAll() {
    tileInput.value = "";
    descInput.value = "";
    notes_box.innerHTML = "";
}

function deleteBox(e) {
    e.parentNode.parentNode.remove();
}

function editBox(e) {
    var title = prompt("Enter any things", e.parentNode.parentNode.childNodes[0].innerHTML);
    var desc = prompt("Enter Description", e.parentNode.parentNode.childNodes[1].innerHTML);
    e.parentNode.parentNode.childNodes[0].innerHTML=title;
    e.parentNode.parentNode.childNodes[1].innerHTML=desc;
}