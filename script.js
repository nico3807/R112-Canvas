/**
 * ==========================================================
 * ÉLÉMENTS D'INITIALISATION (Question 1.3)
 * ==========================================================
 */
const monCanevas = document.getElementById("echoCanvas");
const ctx = monCanevas.getContext("2d");

// Constantes pour le centre du canvas (Question 5.1)
const CENTRE_X = monCanevas.width / 2;
const CENTRE_Y = monCanevas.height / 2;
const nbCercles = 8; // Nombre d'éléments dans l'écho

/**
 * ==========================================================
 * 1. FONCTIONS DE DESSIN DE BASE (Question 2)
 * ==========================================================
 */

/**
 * Question 2.1 & 2.2 : Dessine un cercle tracé avec style.
 * @param {number} x Coordonnée X du centre.
 * @param {number} y Coordonnée Y du centre.
 * @param {number} rayon Rayon du cercle.
 * @param {string} couleur Couleur du tracé (ex: '#00CCFF').
 */
function dessinerCercle(x, y, rayon, couleur) {
  ctx.beginPath();
  ctx.arc(x, y, rayon, 0, 2 * Math.PI);

  // Application des styles
  ctx.strokeStyle = couleur;
  ctx.lineWidth = 2; // Épaisseur de ligne

  ctx.stroke();
}

/**
 * ==========================================================
 * 2. EFFET D'ÉCHO (Question 3)
 * ==========================================================
 */

/**
 * Question 7 : Dessine tous les cercles concentriques avec opacité progressive.
 * @param {number} maxRayon Le rayon du cercle le plus externe.
 */
function dessinerEcho(maxRayon) {
  const ecart = maxRayon / nbCercles; // Ecart entre les rayons

  // Boucle pour dessiner les 8 cercles (Q7)
  for (let i = 0; i < nbCercles; i++) {
    // Calcul du rayon (commence large et diminue)
    const rayonActuel = maxRayon - i * ecart;

    // Calcul de l'opacité (diminue de 1.0 à 0.0)
    // Question 3.2 : Application de l'opacité progressive
    ctx.globalAlpha = 0 + i / nbCercles;

    // Appel de la fonction de base avec le centre dynamique (Question 5.1)
    dessinerCercle(CENTRE_X, CENTRE_Y, rayonActuel, "#00CCFF");
  }

  // Question 3.3 : Très important : réinitialiser l'opacité à 1 pour les futurs dessins
  ctx.globalAlpha = 1;
}

/**
 * ==========================================================
 * 3. INTERACTIVITÉ (Question 4)
 * ==========================================================
 */

/**
 * Question 4.2 : Fonction appelée par l'input HTML.
 * Gère le nettoyage et le nouveau dessin suite à l'action de l'utilisateur.
 */
function lancerAnimation() {
  // Question 4.3 : Nettoyer le Canvas avant chaque nouveau dessin
  ctx.clearRect(0, 0, monCanevas.width, monCanevas.height);

  // Question 4.2 : Lire la valeur du sélecteur HTML
  const selecteur = document.getElementById("vibrationSelector");
  // Le curseur fournit directement le rayon maximal
  const maxRayonLu = parseInt(selecteur.value);

  // Dessin de l'écho en utilisant la valeur lue
  dessinerEcho(maxRayonLu);
}

/**
 * ==========================================================
 * 4. LANCEMENT INITIAL (Question 5.2)
 * ==========================================================
 */
// Affiche l'état initial du système au chargement de la page.
lancerAnimation();
