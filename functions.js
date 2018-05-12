function eat(food) {
    if (typeof food != "string") {
        console.log("Please enter a string");
        return;
    }
    return food + ' tasted really good.';
}

console.log(eat("bananas"));