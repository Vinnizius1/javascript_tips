// Nope
const isRGBColor1 = color => {
  if (color === "red" || color === "green") {
    return true;
  }

  return false;
};

// Yep
const rgbColors = ["red", "green", "blue"];
const isRGBColor2 = color => {
  return rgbColors.includes(color);
};
console.log(isRGBColor2("red"));
console.log(isRGBColor2("yellow"));

/* The includes() method determines whether an array includes a certain value
among its entries. It returns true if a value exists, otherwise, it returns
false */
