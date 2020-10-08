function isPrototypeOf(prototypeObj, obj) {
  var findProto = Object.getPrototypeOf(obj);
  
  if (findProto === null || findProto === undefined) {
    return false;
  }
  
  if(prototypeObj === findProto) {
    return true;
  } else {
      return isPrototypeOf(prototypeObj, findProto); 
  }
};