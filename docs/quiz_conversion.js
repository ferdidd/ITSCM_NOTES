// Code JavaScript pour les quiz de conversion binaire

// Données pour les solutions et explications
const solutions = {
  // Binaire → Décimal
  'dec': {
    'f': { // Facile
      '1': '5',
      '2': '9',
      '3': '10',
      '4': '12',
      '5': '17'
    },
    'i': { // Intermédiaire
      '1': '22',
      '2': '27',
      '3': '42',
      '4': '56',
      '5': '37'
    },
    'd': { // Difficile
      '1': '89',
      '2': '245',
      '3': '170',
      '4': '255',
      '5': '128'
    }
  },
  // ... autres conversions
};

const explanations = {
  // Binaire → Décimal
  'dec': {
    'f': { // Facile
      '1': "Pour convertir 101 en décimal:<br>1 × 2² + 0 × 2¹ + 1 × 2⁰ = 4 + 0 + 1 = 5",
      '2': "Pour convertir 1001 en décimal:<br>1 × 2³ + 0 × 2² + 0 × 2¹ + 1 × 2⁰ = 8 + 0 + 0 + 1 = 9",
      '3': "Pour convertir 1010 en décimal:<br>1 × 2³ + 0 × 2² + 1 × 2¹ + 0 × 2⁰ = 8 + 0 + 2 + 0 = 10",
      '4': "Pour convertir 1100 en décimal:<br>1 × 2³ + 1 × 2² + 0 × 2¹ + 0 × 2⁰ = 8 + 4 + 0 + 0 = 12",
      '5': "Pour convertir 10001 en décimal:<br>1 × 2⁴ + 0 × 2³ + 0 × 2² + 0 × 2¹ + 1 × 2⁰ = 16 + 0 + 0 + 0 + 1 = 17"
    },
    'i': { // Intermédiaire
      '1': "Pour convertir 10110 en décimal:<br>1 × 2⁴ + 0 × 2³ + 1 × 2² + 1 × 2¹ + 0 × 2⁰ = 16 + 0 + 4 + 2 + 0 = 22",
      '2': "Pour convertir 11011 en décimal:<br>1 × 2⁴ + 1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰ = 16 + 8 + 0 + 2 + 1 = 27",
      '3': "Pour convertir 101010 en décimal:<br>1 × 2⁵ + 0 × 2⁴ + 1 × 2³ + 0 × 2² + 1 × 2¹ + 0 × 2⁰ = 32 + 0 + 8 + 0 + 2 + 0 = 42",
      '4': "Pour convertir 111000 en décimal:<br>1 × 2⁵ + 1 × 2⁴ + 1 × 2³ + 0 × 2² + 0 × 2¹ + 0 × 2⁰ = 32 + 16 + 8 + 0 + 0 + 0 = 56",
      '5': "Pour convertir 100101 en décimal:<br>1 × 2⁵ + 0 × 2⁴ + 0 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = 32 + 0 + 0 + 4 + 0 + 1 = 37"
    },
    'd': { // Difficile
      '1': "Pour convertir 1011001 en décimal:<br>1 × 2⁶ + 0 × 2⁵ + 1 × 2⁴ + 1 × 2³ + 0 × 2² + 0 × 2¹ + 1 × 2⁰ = 64 + 0 + 16 + 8 + 0 + 0 + 1 = 89",
      '2': "Pour convertir 11110101 en décimal:<br>1 × 2⁷ + 1 × 2⁶ + 1 × 2⁵ + 1 × 2⁴ + 0 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = 128 + 64 + 32 + 16 + 0 + 4 + 0 + 1 = 245",
      '3': "Pour convertir 10101010 en décimal:<br>1 × 2⁷ + 0 × 2⁶ + 1 × 2⁵ + 0 × 2⁴ + 1 × 2³ + 0 × 2² + 1 × 2¹ + 0 × 2⁰ = 128 + 0 + 32 + 0 + 8 + 0 + 2 + 0 = 170",
      '4': "Pour convertir 11111111 en décimal:<br>1 × 2⁷ + 1 × 2⁶ + 1 × 2⁵ + 1 × 2⁴ + 1 × 2³ + 1 × 2² + 1 × 2¹ + 1 × 2⁰ = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255",
      '5': "Pour convertir 10000000 en décimal:<br>1 × 2⁷ + 0 × 2⁶ + 0 × 2⁵ + 0 × 2⁴ + 0 × 2³ + 0 × 2² + 0 × 2¹ + 0 × 2⁰ = 128 + 0 + 0 + 0 + 0 + 0 + 0 + 0 = 128"
    }
  },
  // ... autres explications
};

// Fonctions pour la gestion du quiz
document.addEventListener('DOMContentLoaded', function() {
  // Afficher par défaut la section de conversion Binaire → Décimal
  selectConversion('decimal');
  selectLevel('decimal', 'facile');
});

// Sélectionner une section de conversion
function selectConversion(conversion) {
  // Masquer toutes les sections
  document.querySelectorAll('.conversion-section').forEach(section => {
    section.classList.remove('hidden');
    section.style.display = 'none';
  });
  
  // Afficher la section demandée
  document.getElementById(conversion + '-section').style.display = 'block';
  
  // Mettre à jour l'état des boutons
  document.querySelectorAll('.conversion-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`button[onclick="selectConversion('${conversion}')"]`).classList.add('active');
}

// Sélectionner un niveau de difficulté
function selectLevel(conversion, level) {
  // Masquer tous les niveaux pour cette conversion
  document.querySelectorAll(`#${conversion}-section .level-content`).forEach(section => {
    section.classList.add('hidden');
  });
  
  // Afficher le niveau demandé
  document.getElementById(`${conversion}-${level}`).classList.remove('hidden');
  
  // Mettre à jour l'état des boutons
  document.querySelectorAll(`#${conversion}-section .level-btn`).forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`#${conversion}-section button[onclick="selectLevel('${conversion}', '${level}')"]`).classList.add('active');
}

// Vérifier les réponses
function checkAnswers(conversion, level) {
  let score = 0;
  let total = 5;
  let allAnswered = true;
  
  // Pour chaque question
  for (let i = 1; i <= total; i++) {
    const input = document.getElementById(`${conversion}-${level}-${i}`);
    if (!input) continue;
    
    const answer = input.value.trim().toLowerCase();
    const result = document.getElementById(`result-${conversion}-${level}-${i}`);
    
    if (!result) continue;
    
    // Si pas de réponse
    if (answer === '') {
      allAnswered = false;
      result.innerHTML = '<i class="fas fa-exclamation-circle warning"></i>';
      result.className = 'result warning';
      continue;
    }
    
    // Vérifier la réponse
    if (solutions[conversion] && solutions[conversion][level] && solutions[conversion][level][i]) {
      const correctAnswer = solutions[conversion][level][i].toLowerCase();
      
      if (answer === correctAnswer) {
        result.innerHTML = '<i class="fas fa-check-circle correct"></i>';
        result.className = 'result correct';
        score++;
      } else {
        result.innerHTML = '<i class="fas fa-times-circle incorrect"></i>';
        result.className = 'result incorrect';
      }
    }
  }
  
  // Afficher le score
  alert(`Score: ${score}/${total}`);
  
  // Avertissement si toutes les questions n'ont pas été répondues
  if (!allAnswered) {
    alert("Attention: certaines questions n'ont pas été répondues!");
  }
}

// Afficher les explications
function showExplanations(conversion, level) {
  for (let i = 1; i <= 5; i++) {
    const explanation = document.getElementById(`explanation-${conversion}-${level}-${i}`);
    if (explanation && explanations[conversion] && explanations[conversion][level] && explanations[conversion][level][i]) {
      explanation.innerHTML = explanations[conversion][level][i];
      explanation.classList.remove('hidden');
    }
  }
}
