let marks = {
    honey : '4',
    money : '3',
    pooja : '5'
}
for(let i = 0; i<Object.keys(marks).length;i++){
    console.log("the marks of " + Object.keys(marks)[i] + "are" +  marks[Object.keys(marks)[i]]);
}
//print marks of student in object using foor loop