document.addEventListener('DOMContentLoaded', function() {
  const navbarHTML = `
    <div class="navbar">
      <ul>
        <li><a href="index.html">Accueil</a></li>
        <li class="dropdown">
          <a href="#">Quiz Basiques</a>
          <div class="dropdown-content">
            <a href="quizz_00.html">Quiz Logique Numérique</a>
            <a href="quizz_01.html">TP Logique Numérique – Interactif</a>
            <a href="quizz_02.html">TP Conversions (4 niveaux)</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#">Codes Binaires</a>
          <div class="dropdown-content">
            <a href="quizz_03_1.html">Binaire Naturel (1/6)</a>
            <a href="quizz_03_2.html">Transcription Base 2 ↔ Base 10 (2/6)</a>
            <a href="quizz_03_3.html">Exercices Base 10 → Base 2 (3/6)</a>
            <a href="quizz_03_4.html">Code Gray Explication (4/6)</a>
            <a href="quizz_03_5.html">Code Gray Table (5/6)</a>
            <a href="quizz_03_6.html">Code DCB (6/6)</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#">Simplifications</a>
          <div class="dropdown-content">
            <a href="quizz_04_1.html">Simplifications Karnaugh (1/3)</a>
            <a href="quizz_04_2.html">Simplifications Avancées - S3 (2/3)</a>
            <a href="quizz_04_3.html">Exercices de Karnaugh Interactifs (3/3)</a>
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