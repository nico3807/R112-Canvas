//Partie 2 : Préparation de l'Environnement
const monCanevas = document.getElementById("echoCanvas");
const ctx = monCanevas.getContext("2d");

//Défi Partie 6
const centre_X = monCanevas.width / 2;
const centre_Y = monCanevas.height / 2;
const NOMBRE_CERCLES = 8;

//Partie 3 : Fonction de Dessin
function dessinerCercle(x, y, rayon, couleur) {
  // Le code de dessin sera ici
  ctx.beginPath();
  ctx.arc(x, y, rayon, 0, 2 * Math.PI);
  ctx.fillStyle = couleur;
  ctx.lineWidth = 2;
  ctx.fill();
}

//dessinerCercle(250, 250, 100, "#00CCFF");

//Partie 4 : Effet d'Écho
function dessinerEcho(x, y, maxRayon, nbCercles) {
  let ecart = maxRayon / nbCercles;
  for (let i = 0; i < nbCercles; i++) {
    let rayonActuel = maxRayon - i * ecart;
    ctx.globalAlpha = 0 + i / nbCercles; // Opacité de 0.0 à 1.0
    dessinerCercle(x, y, rayonActuel, "#00CCFF");
  }
  ctx.globalAlpha = 1;
}
//dessinerEcho(250, 250, 200, 10);

//Partie 5 : Intéractivité et animation
function lancerAnimation() {
  ctx.clearRect(0, 0, monCanevas.width, monCanevas.height);
  const intensite = document.getElementById("vibrationSelector").value;
  const nouveauMaxRayon = 50 + intensite * 1.5; // Le rayon varie entre 50 et 200
  dessinerEcho(centre_X, centre_Y, intensite, NOMBRE_CERCLES);
}
lancerAnimation();
