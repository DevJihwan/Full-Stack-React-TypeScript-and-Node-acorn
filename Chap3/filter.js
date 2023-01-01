var filterItems = [
    { name: "jon", age: 20 },
    { name: "linda", age: 22 },
    { name: "jon", age: 40 },
];
var resutls = filterItems.filter(function (item, index) {
    console.log(index);
    console.log(item);
    return item.name === "jon";
});
console.log(resutls);
