const myname = document.getElementById('name');
const btn  =    document.getElementById('button');


function textsizer(size){

    function changesize(){
        myname.style.fontSize = `${size}px`;
    }
    return changesize;
}

const size5 = textsizer(5);
const size200= textsizer(200);
const size39 = textsizer(39);
const size100 = textsizer(100);

btn.addEventListener('click',size100)