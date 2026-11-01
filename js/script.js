let jap = 0;
let usa = 0;
let uk = 0;

function cambio(){
    let num = document.getElementById("Valuta").value;
    num = parseFloat(num);
    if(!isNaN(num) && num >= 0){
        uk = num * 0.87;
        usa = num * 1.16;
        jap = num * 178.16; 
        document.getElementById("UK").textContent = uk.toFixed(2); 
        document.getElementById("USA").textContent = usa.toFixed(2); 
        document.getElementById("Japan").textContent = jap.toFixed(2); 
    }
}

const button = document.getElementById('cambiaColore');
        const icon = document.getElementById('toggleIcon');

        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if (icon.classList.contains('bi-toggle2-off')) {
                icon.classList.remove('bi-toggle2-off');
                icon.classList.add('bi-toggle2-on');
            } else {
                icon.classList.remove('bi-toggle2-on');
                icon.classList.add('bi-toggle2-off');
            }
        });