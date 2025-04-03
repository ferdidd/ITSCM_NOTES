document.addEventListener('DOMContentLoaded', function() {
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
          <a href="#"><i class="fas fa-microchip"></i> Binaire</a>
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

  // Insérer la navbar au début du body
  const bodyElement = document.body;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = navbarHTML;
  bodyElement.insertBefore(tempDiv.firstElementChild, bodyElement.firstChild);
}); 