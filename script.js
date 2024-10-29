// --------------------------------------------------------MENU BURGER---------------------------------------------------------
const burgerContainer = document.getElementById('burgerContainer');
const menu = document.getElementById('menu');

burgerContainer.addEventListener('click', function() {
    burgerMenu.classList.toggle('change');
    menu.classList.toggle('show');
});

// -----------------------------------------------------BOUTON PROJET/CV--------------------------------------------------------

const btnprojet = document.getElementById('btnAccueil1');
const btnCv = document.getElementById('btnAccueil2')

btnprojet.addEventListener('mouseenter', () =>{
    btnprojet.style.backgroundColor = '#87D8F5';
    btnprojet.style.color = 'black';
    btnCv.style.backgroundColor ='transparent';
    btnCv.style.color = 'white';
})

btnprojet.addEventListener( "mouseleave", () =>{
    btnprojet.style.backgroundColor = 'transparent';
    btnprojet.style.color = 'white';
    btnCv.style.backgroundColor = '#87D8F5';
    btnCv.style.color = "black";
})

// ---------------------------------------------------------ANIMATION BARRE NAV-------------------------------------------------------

const barre = document.getElementById('barre');


function positionBarre(element) {
    const rect = element.getBoundingClientRect();
    const barreWidth = rect.width;
    const barreLeft = rect.left + (rect.width / 2); 
    barre.style.width = `${barreWidth}px`;
    barre.style.left = `${barreLeft}px`; 
}


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        positionBarre(link);
        barre.classList.add('active'); 
    });
});

document.querySelector('nav').addEventListener('mouseleave', () => {
    barre.style.width = '0';
    barre.classList.remove('active'); 
});

// --------------------------------------------------------------DETAILS PHOTO PROJET-----------------------------------------
const imgProjet1 = document.getElementById('imgprojet1');
const textphoto1 =document.getElementById('textphoto1')

imgProjet1.addEventListener('mouseenter', () => {
    imgProjet1.style.opacity = 0.2;
    textphoto1.style.display = 'block'; 
});

imgProjet1.addEventListener('mouseleave', () => {
    imgProjet1.style.opacity = 1;
    textphoto1.style.display = 'none'
});

const imgProjet2 = document.getElementById('imgprojet2');
const textphoto2 =document.getElementById('textphoto2')

imgProjet2.addEventListener('mouseenter', () => {
    imgProjet2.style.opacity = 0.2;
    textphoto2.style.display = 'block'; 
});

imgProjet2.addEventListener('mouseleave', () => {
    imgProjet2.style.opacity = 1;
    textphoto2.style.display = 'none'
});

const imgProjet3 = document.getElementById('imgprojet3');
const textphoto3 =document.getElementById('textphoto3')

imgProjet3.addEventListener('mouseenter', () => {
    imgProjet3.style.opacity = 0.2;
    textphoto3.style.display = 'block'; 
});

imgProjet3.addEventListener('mouseleave', () => {
    imgProjet3.style.opacity = 1;
    textphoto3.style.display = 'none'
});

const imgProjet4 = document.getElementById('imgprojet4');
const textphoto4 =document.getElementById('textphoto4')

imgProjet4.addEventListener('mouseenter', () => {
    imgProjet4.style.opacity = 0.2;
    textphoto4.style.display = 'block'; 
});

imgProjet4.addEventListener('mouseleave', () => {
    imgProjet4.style.opacity = 1;
    textphoto4.style.display = 'none'
});


// --------------------------------------------------------MODAL IMAGE PROJET 1--------------------------------------------------------
document.querySelector('#imgprojet1').addEventListener('click', function() {
    
    var modal = document.createElement('div');
    modal.classList.add('modal');

    
    modal.innerHTML = `
        <h1>Mon portfolio</h1>
        <span>Vous y étes actuellement !</span>
        <p>J'ai codé mon portfolio entièrement en HTML-CSS et JavaScript.<br>Entièrement Responsive, mon portfolio est fait en flexbox. <br> Comme vous pouvez le constatez, vous pouvez y retrouver toutes les informations nécessaire à mon sujet et tout ce que j'ai pus réaliser !</p>
        <button class="closeBtn">Fermer</button>
    `;

    
    document.body.appendChild(modal);

    
    modal.querySelector('.closeBtn').addEventListener('click', function() {
        document.body.removeChild(modal); 
    });
});

// ----------------------------------------------------------MODAL IMAGE PROJET 2----------------------------------------------------

document.querySelector('#imgprojet2').addEventListener('click', function() {
    
    var modal = document.createElement('div');
    modal.classList.add('modal2');

    
    modal.innerHTML = `
        <h1>JULITH</h1>
        <span>Un jeux tour par tour</span>
        <p>J'ai crée un jeux tour par tour entièrment en JavaScript dans l'univers de DOFUS.<br> Les joueurs ont le choix entre plusieurs classes, ils peuvent mettre leur pseudo et que le combat commence !<br>En combat chaque classe à des caractéristique différente, ils peuvent ce soigner et attaquer mais à tour de rôle !<br> Une fois qu'un personnage tombe à 0 points de vie, le combat s'arrête et le gagnant est designé victorieux. </p>
        <button class="closeBtn">Fermer</button>
    `;

    
    document.body.appendChild(modal);

    
    modal.querySelector('.closeBtn').addEventListener('click', function() {
        document.body.removeChild(modal); 
    });
});

// ----------------------------------------------------------MODAL IMAGE PROJET 3----------------------------------------------------

document.querySelector('#imgprojet3').addEventListener('click', function() {
    
    var modal = document.createElement('div');
    modal.classList.add('modal3');

    
    modal.innerHTML = `
        <h1>API musique</h1>
        <span>Retrouvez vos artistes, albums et titres préférés</span>
        <p>Avec l'API de Deezer j'ai pus crée ce site qui permet de retrouver n'importe quel artiste, album et/ou titre recensé sur Deezer. Vous pouvez retrouver jusqu'à 10 artistes, album et titre maximum. Si vous ne trouvez pas votre bonheur, affinez votre recherche !</p>
        <button class="closeBtn">Fermer</button>
    `;

    
    document.body.appendChild(modal);

    
    modal.querySelector('.closeBtn').addEventListener('click', function() {
        document.body.removeChild(modal); 
    });
});

// ----------------------------------------------------------MODAL IMAGE PROJET 4----------------------------------------------------

document.querySelector('#imgprojet4').addEventListener('click', function() {
    
    var modal = document.createElement('div');
    modal.classList.add('modal4');

    
    modal.innerHTML = `
        <h1>Site Handball Jeux Olympique</h1>
        <span>Retrouvez tout les infos des jeux olympique d'handball</span>
        <p>Un site complet ou vous pouvez voir les infos sur le handball, les dates des matchs, une (fausse) billeterie, une page ou vous pouvez rechercher des matchs, des équipes ou des joueurs. Vous pouvez vous inscrire, vous connectez et acceder à votre profil. Un CRUD est disponible pour les compte admin. Vous pouvez le consulter de vous même sur ce lien :</p>
      <a href="https://dkdwwm.fr/ethan-delannoy/Projet-JO/index.php" target="_blank">https://dkdwwm.fr/ethan-delannoy/Projet-JO/index.php</a>
        <button class="closeBtn">Fermer</button>
    `;

    
    document.body.appendChild(modal);

    
    modal.querySelector('.closeBtn').addEventListener('click', function() {
        document.body.removeChild(modal); 
    });
});


