function setClasses(el,c) {
el.setAttribute("class",c.join(" "));
}

function getClassOf(element) {
  var classesofelement;
  for (var i=0; i<element.attributes.length; i++) {
    if (element.attributes[i].name === "class") {
      classesofelement = element.attributes[i].value;
    }
  }
  if (classesofelement != undefined) {
  return classesofelement.split(" ");
  }
}
var classlist = [];

function newClass(name, info) {
  classlist.push(name);
  classlist.push(JSON.parse(info));
}
// use the following variable set to set the node of the style tag to use for CSS edits.
var stylenode = 0;
function applyClass(el,c) {
  el.setAttribute("style",el.getAttribute("style")+c.innerCSS);
  if (c.classnames.length > 0) {
  el.setAttribute("class",c.classnames.join(" "));
  }
}

function applyClasses() {
  var elementlist = document.querySelectorAll("*");
  var elementclasslist;
  for (var z=0; z<elementlist.length; z++) {
    elementclasslist = getClassOf(elementlist[z]);
    if (elementclasslist != undefined) {
    for (var l=0; l<elementclasslist.length; l++) {
      if (classlist.indexOf(elementclasslist[l])!==-1) {
        applyClass(elementlist[z],classlist[classlist.indexOf(elementclasslist[l])+1]);
      }
    }}
  }
}
