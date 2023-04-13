const button=document.getElementById('btn-switch');
const price1=document.getElementById('price1');
const price2=document.getElementById('price2');
const price3=document.getElementById('price3');

let showAnnually=false;

button.addEventListener('click',()=>{
    if(showAnnually===true){
        price1.textContent="19.99";
        price2.textContent="24.99";
        price3.textContent="39.99";
        showAnnually=false;
        button.style.justifyContent="right";
    }else{
        price1.textContent="199.99";
        price2.textContent="249.99";
        price3.textContent="399.99";
        showAnnually=true;
        button.style.justifyContent="left";
    }
});