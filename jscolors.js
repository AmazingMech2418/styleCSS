function newColor(name, csscode) {
  newClass(name+"-text", '{"innerCSS":"color:'+csscode+';","classnames":[]}');
  newClass(name+"-back", '{"innerCSS":"background-color:'+csscode+';","classnames":[]}');
}
