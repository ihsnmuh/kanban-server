function checkSpace(str) {
  if (str.indexOf(" ") >= 0) {
    console.log("contains spaces");
    return true;
  } else {
    return false;
  }
}

module.exports = checkSpace;
