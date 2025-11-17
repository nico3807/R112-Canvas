/**
 * Fonction pour déployer/rétracter les blocs de code.
 * Elle stocke le texte descriptif initial pour le restaurer correctement.
 * @param {HTMLElement} button - Le bouton cliqué (l'objet 'this' dans le HTML).
 */
function toggleCode(button) {
  // 1. Stocker le texte descriptif initial (ex: "Indice de syntaxe pour la fonction")
  // On le stocke dans une propriété temporaire du bouton si ce n'est pas déjà fait.
  if (!button.originalDescription) {
    // On utilise substring(4) pour enlever le "[ + ] " qui fait 4 caractères,
    // et on stocke le reste du texte descriptif.
    button.originalDescription = button.textContent.substring(4).trim();
  }

  // 2. Sélectionne l'élément content (le bloc de code)
  const content = button.nextElementSibling;

  // 3. Bascule la classe CSS (ouverture/fermeture)
  content.classList.toggle("is-expanded");

  // 4. Mise à jour du texte du bouton [+] ou [-]
  if (content.classList.contains("is-expanded")) {
    // Le contenu est déployé : Texte standard
    button.textContent = "[ - ] Masquer le code";
  } else {
    // Le contenu est rétracté : Rétablir le [+] et la description stockée
    button.textContent = button.originalDescription;
  }
}

// Assurez-vous que le reste de vos fonctions (dessinerCercle, dessinerEcho, lancerAnimation)
// est conservé dans script.js
