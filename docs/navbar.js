document.addEventListener('DOMContentLoaded', function() {
  const navbarHtml = `
    <nav class="navbar">
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
            <a href="quizz_03_1.html">Lab2 - Binaire Naturel (1/6)</a>
            <a href="quizz_03_2.html">Lab2 - Transcription (2/6)</a>
            <a href="quizz_03_3.html">Lab2 - Exercices Base 10 → 2 (3/6)</a>
            <a href="quizz_03_4.html">Lab2 - Code Gray Explication (4/6)</a>
            <a href="quizz_03_5.html">Lab2 - Code Gray Table (5/6)</a>
            <a href="quizz_03_6.html">Lab2 - Code DCB (6/6)</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#">Simplifications</a>
          <div class="dropdown-content">
            <a href="quizz_04_1.html">Simplifications Logiques (1/3)</a>
            <a href="quizz_04_2.html">Simplifications Logiques - S3 (2/3)</a>
            <a href="quizz_04_3.html">Exercices de Karnaugh (3/3)</a>
          </div>
        </li>
      </ul>
    </nav>
  `;

  // Insert navbar at the beginning of the body
  document.body.insertAdjacentHTML('afterbegin', navbarHtml);
}); 