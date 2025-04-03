document.addEventListener('DOMContentLoaded', function() {
  // Création du disclaimer
  const disclaimerHTML = `
    <div class="disclaimer">
      <div class="disclaimer-content">
        <i class="fas fa-exclamation-triangle"></i>
        <p><strong>Attention :</strong> Ce site est encore en cours de construction. Certaines fonctionnalités peuvent ne pas être complètes ou présenter des problèmes. N'hésitez pas à soumettre vos suggestions via <a href="https://github.com/ferdidd/ITSCM_NOTES/issues" target="_blank">GitHub Issues</a>, sur WhatsApp ou directement en cours.</p>
        <button class="disclaimer-close" aria-label="Fermer"><i class="fas fa-times"></i></button>
      </div>
    </div>
  `;

  // Création de la barre de navigation
  const navbarHTML = `
    <div class="navbar">
      <ul>
        <li><a href="index.html"><i class="fas fa-home"></i> Accueil</a></li>
        <li class="dropdown">
          <a href="#"><i class="fas fa-puzzle-piece"></i> Quiz</a>
          <div class="dropdown-content">
            <a href="quizz_00.html"><i class="fas fa-cogs"></i> Logique</a>
            <a href="quizz_01.html"><i class="fas fa-sitemap"></i> TPs interactifs</a>
            <a href="quizz_02.html"><i class="fas fa-exchange-alt"></i> Conversions</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#"><i class="fas fa-binary"></i> Binaire</a>
          <div class="dropdown-content">
            <a href="quizz_03_1.html"><i class="fas fa-stream"></i> Binaire naturel</a>
            <a href="quizz_03_2.html"><i class="fas fa-sync-alt"></i> Transcription</a>
            <a href="quizz_03_3.html"><i class="fas fa-calculator"></i> Exercices</a>
            <a href="quizz_03_4.html"><i class="fas fa-code-branch"></i> Code Gray</a>
            <a href="quizz_03_5.html"><i class="fas fa-table"></i> Table Gray</a>
            <a href="quizz_03_6.html"><i class="fas fa-digital-tachograph"></i> DCB</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#"><i class="fas fa-project-diagram"></i> Karnaugh</a>
          <div class="dropdown-content">
            <a href="quizz_04_1.html"><i class="fas fa-th"></i> Simplifications</a>
            <a href="quizz_04_2.html"><i class="fas fa-bezier-curve"></i> S3 avancé</a>
            <a href="quizz_04_3.html"><i class="fas fa-cubes"></i> Exercices</a>
          </div>
        </li>
      </ul>
    </div>
  `;

  // Insérer le disclaimer et la navbar au début du body
  const bodyElement = document.body;
  const tempDiv = document.createElement('div');
  
  // Ajouter d'abord le disclaimer
  tempDiv.innerHTML = disclaimerHTML;
  bodyElement.insertBefore(tempDiv.firstElementChild, bodyElement.firstChild);
  
  // Ensuite ajouter la navbar
  tempDiv.innerHTML = navbarHTML;
  bodyElement.insertBefore(tempDiv.firstElementChild, bodyElement.childNodes[1]);
  
  // Ajouter l'événement pour fermer le disclaimer
  document.querySelector('.disclaimer-close').addEventListener('click', function() {
    document.querySelector('.disclaimer').style.display = 'none';
    
    // Stocker dans localStorage pour ne pas réafficher pendant 24h
    localStorage.setItem('disclaimerClosed', Date.now().toString());
  });
  
  // Vérifier si le disclaimer a été fermé récemment (moins de 24h)
  const disclaimerClosedTime = localStorage.getItem('disclaimerClosed');
  if (disclaimerClosedTime) {
    const now = Date.now();
    const dayInMs = 24 * 60 * 60 * 1000; // 24 heures en millisecondes
    
    if (now - parseInt(disclaimerClosedTime) < dayInMs) {
      document.querySelector('.disclaimer').style.display = 'none';
    } else {
      // Plus de 24h, on supprime l'entrée
      localStorage.removeItem('disclaimerClosed');
    }
  }
}); 