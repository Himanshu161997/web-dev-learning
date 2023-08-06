let alien = {
    name : 'honey',
    class : '9th',
    laptop : {
        brand : 'asus',
        colour : 'silver',
        ram : '8gb'
    }
}
delete alien.laptop.ram;
console.log(alien.laptop)