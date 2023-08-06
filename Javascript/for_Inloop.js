let alien = {
    name : 'honey',
    class : '9th',
    laptop : {
        brand : 'asus',
        colour : 'silver',
        ram : '8gb'
    }
}
for(let key in alien.laptop){
    console.log(key,alien.laptop[key]);
}