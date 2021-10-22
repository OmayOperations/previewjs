function Preview(frame){
  const inst = document.getElementById(frame);
}
Preview.prototype.preview = function(compiled){
  this.inst.srcdoc = compiled;
}
