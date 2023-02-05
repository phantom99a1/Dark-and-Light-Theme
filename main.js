feather.replace();

const html=document.getElementsByTagName('html');
const radios=document.getElementsByName('themes');
for(let i=0;i<radios.length;i++){
    radios[i].addEventListener('change', function(){
        html[0].classList.remove(html[0].classList.item(0));
        html[0].classList.add(this.id);
    });
}