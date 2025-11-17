/**
 * Fonction pour déployer/rétracter les blocs de code.
 * Elle est appelée via l'attribut onclick dans le HTML.
 * @param {HTMLElement} button - Le bouton cliqué (l'objet 'this' dans le HTML).
 */
function toggleCode(button) {
  // 1. Sélectionne l'élément juste après le bouton (le div.code-content)
  const content = button.nextElementSibling;

  // 2. Bascule la classe CSS qui gère la hauteur max (déploiement/rétraction)
  content.classList.toggle("is-expanded");

  // 3. Mise à jour du texte du bouton [+] ou [-]
  if (content.classList.contains("is-expanded")) {
    // Le contenu est déployé
    button.textContent = "[ - ] Masquer le code";
  } else {
    // Le contenu est rétracté
    // Récupère la partie du titre après le '[ + ] ' pour la restaurer
    const originalText = button.textContent.substring(
      button.textContent.indexOf("Afficher")
    );
    button.textContent = "[ + ] " + originalText;
  }
}
