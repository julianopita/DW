document.addEventListener('DOMContentLoaded', (event) => {
    let temaArmazenado = localStorage.getItem('tema');
    
    if (temaArmazenado) {
        if (temaArmazenado === 'dark') {
            mudarParaModoDark();            
        } else {
            mudarParaModoLight();            
        }
    } else {
        mudarParaModoLight();
    }
});

function mudarTema(){
    let computedStyle = window.getComputedStyle(document.body);
    let backgroundColor = computedStyle.backgroundColor;

    if (backgroundColor === 'rgb(255, 249, 234)') {
        mudarParaModoDark();
        localStorage.setItem('tema', 'dark');
    } else {
        mudarParaModoLight();
        localStorage.setItem('tema', 'light');
    }
}

function mudarParaModoDark() {
    document.documentElement.style.setProperty('--cor-principal-fundo', '#1A1A1A');
    document.documentElement.style.setProperty('--cor-neutra-preta', '#F5F5F5');
    document.documentElement.style.setProperty('--cor-neutra-branca', '#333333');
    document.documentElement.style.setProperty('--cor-neutra-cards', '#F5F5F5');
    document.documentElement.style.setProperty('--cor-itens-header', '#F5F5F5');
    document.documentElement.style.setProperty('--cor-midia-social-footer-fundo', '#F5F5F5');
    document.documentElement.style.setProperty('--cor-midia-social-footer', '#000000');
    document.documentElement.style.setProperty('--cor-quadrado-onda-fundo', '#333333');
    document.documentElement.style.setProperty('--cor-neutra-cinza-escuro', '#F5F5F5');
    document.getElementById('wave').src = "./images/wave_dark.svg";
    
    if (document.getElementById("sobrenos-container") != undefined) {
    document.getElementById("sobrenos-container").style.backgroundImage = "url('../images/wave_invertida_dark.svg')";
    }
}

function mudarParaModoLight() {
    document.documentElement.style.setProperty('--cor-principal-fundo', '#fff9ea');
    document.documentElement.style.setProperty('--cor-neutra-preta', '#000000');
    document.documentElement.style.setProperty('--cor-neutra-branca', '#ffffff');
    document.documentElement.style.setProperty('--cor-neutra-cards', '#434343');
    document.documentElement.style.setProperty('--cor-itens-header', '#000000');
    document.documentElement.style.setProperty('--cor-midia-social-footer-fundo', '#F5F5F5');
    document.documentElement.style.setProperty('--cor-midia-social-footer', '#e8eef2');
    document.documentElement.style.setProperty('--cor-quadrado-onda-fundo', '#e9a209');
    document.documentElement.style.setProperty('--cor-neutra-cinza-escuro', '#1d1d1d');
    document.getElementById('wave').src = "./images/wave.svg";

    if (document.getElementById("sobrenos-container") != undefined) {
    document.getElementById("sobrenos-container").style.backgroundImage = "url('../images/wave_invertida_light.svg')";
    }
}



