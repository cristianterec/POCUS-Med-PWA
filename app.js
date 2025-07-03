// Application Data
const appData = {
  modules: [
    {
      id: "cardiac",
      title: "Échographie Cardiaque POCUS",
      description: "Apprentissage de l'échographie cardiaque au point de service pour la médecine d'urgence",
      duration: "45 min",
      difficulty: "Intermédiaire",
      objectives: [
        "Maîtriser les fenêtres échographiques cardiaques principales",
        "Évaluer la fonction ventriculaire gauche",
        "Détecter un épanchement péricardique",
        "Intégrer l'échographie cardiaque dans la prise en charge du choc"
      ],
      theory: {
        sections: [
          {
            title: "Introduction à l'échographie cardiaque POCUS",
            content: "L'échographie cardiaque POCUS est un outil diagnostique essentiel en médecine d'urgence. Elle permet une évaluation rapide de la fonction cardiaque au lit du patient, guidant les décisions thérapeutiques urgentes. Cette technique non invasive offre des informations précieuses sur la contractilité myocardique, la volémie et la présence d'épanchements péricardiques."
          },
          {
            title: "Fenêtres échographiques principales",
            content: "Les fenêtres principales incluent la fenêtre sous-xiphoïdienne, parasternale longitudinale, parasternale transversale, et apicale 4 cavités. Chaque fenêtre offre une perspective unique du cœur et permet d'évaluer différents aspects de la fonction cardiaque. La fenêtre sous-xiphoïdienne est particulièrement utile chez les patients ventilés."
          },
          {
            title: "Évaluation de la fonction ventriculaire",
            content: "L'évaluation de la fonction ventriculaire gauche se fait principalement par l'estimation visuelle de la fraction d'éjection. On recherche une contraction normale (>55%), modérément altérée (30-55%) ou sévèrement altérée (<30%). Cette évaluation guide les décisions thérapeutiques en urgence."
          }
        ]
      },
      images: [
        {
          title: "Fenêtre sous-xiphoïdienne normale",
          description: "Vue échographique normale montrant les 4 cavités cardiaques avec une contractilité normale du ventricule gauche"
        },
        {
          title: "Épanchement péricardique",
          description: "Présence de liquide anéchogène autour du cœur, visible dans toutes les fenêtres échographiques"
        },
        {
          title: "Fenêtre parasternale longitudinale",
          description: "Coupe longitudinale du cœur montrant le ventricule gauche, l'aorte et l'oreillette gauche"
        }
      ],
      videos: [
        {
          title: "Technique de la fenêtre sous-xiphoïdienne",
          duration: "5:30",
          description: "Démonstration pratique du placement de la sonde et de l'optimisation de l'image"
        },
        {
          title: "Évaluation de la fonction VG",
          duration: "8:15",
          description: "Méthodes d'évaluation de la contractilité ventriculaire gauche"
        },
        {
          title: "Diagnostic d'épanchement péricardique",
          duration: "6:45",
          description: "Reconnaissance et quantification des épanchements péricardiques"
        }
      ],
      quiz: [
        {
          question: "Quelle est la fenêtre échographique la plus utilisée chez le patient en détresse respiratoire?",
          options: [
            "Parasternale longitudinale",
            "Sous-xiphoïdienne",
            "Apicale 4 cavités",
            "Parasternale transversale"
          ],
          correct: 1,
          explanation: "La fenêtre sous-xiphoïdienne est privilégiée car elle évite les poumons et permet une visualisation même en cas de ventilation mécanique."
        },
        {
          question: "Quelle fraction d'éjection est considérée comme normale?",
          options: [
            "< 30%",
            "30-45%",
            "45-55%",
            "> 55%"
          ],
          correct: 3,
          explanation: "Une fraction d'éjection supérieure à 55% est considérée comme normale. Entre 30-55% elle est modérément altérée, et <30% sévèrement altérée."
        },
        {
          question: "Dans quelle situation l'échographie cardiaque POCUS est-elle particulièrement utile?",
          options: [
            "Douleur thoracique atypique",
            "Choc indifférencié",
            "Palpitations",
            "Hypertension artérielle"
          ],
          correct: 1,
          explanation: "L'échographie cardiaque POCUS est particulièrement utile dans le choc indifférencié pour déterminer l'étiologie cardiaque ou exclure une cause cardiaque."
        }
      ]
    },
    {
      id: "pulmonary",
      title: "Échographie Pleuro-pulmonaire",
      description: "Diagnostic échographique des pathologies pleuro-pulmonaires en urgence",
      duration: "40 min",
      difficulty: "Intermédiaire",
      objectives: [
        "Identifier un pneumothorax par échographie",
        "Diagnostiquer un épanchement pleural",
        "Reconnaître les lignes B et leur signification",
        "Utiliser l'échographie dans la dyspnée aiguë"
      ],
      theory: {
        sections: [
          {
            title: "Bases de l'échographie pulmonaire",
            content: "L'échographie pulmonaire exploite les artefacts pour diagnostiquer les pathologies. Le glissement pleural, les lignes A et B sont les éléments clés à identifier. Cette technique révolutionnaire permet un diagnostic rapide des pathologies pleuro-pulmonaires au lit du patient."
          },
          {
            title: "Technique d'examen",
            content: "L'examen se fait avec une sonde linéaire ou convexe, en balayage intercostal. On examine de manière systématique les zones antérieures, latérales et postérieures. La recherche du glissement pleural et des artefacts est primordiale."
          }
        ]
      },
      images: [
        {
          title: "Glissement pleural normal",
          description: "Mouvement normal de la plèvre viscérale sur la plèvre pariétale, visible en mode TM"
        },
        {
          title: "Lignes B confluentes",
          description: "Artefacts verticaux en queue de comète, indicateurs d'œdème pulmonaire interstitiel"
        }
      ],
      videos: [
        {
          title: "Technique de balayage pulmonaire",
          duration: "6:45",
          description: "Méthode systématique d'examen échographique pulmonaire"
        },
        {
          title: "Diagnostic du pneumothorax",
          duration: "7:20",
          description: "Identification de l'absence de glissement pleural et du lung point"
        }
      ],
      quiz: [
        {
          question: "L'absence de glissement pleural indique:",
          options: [
            "Un pneumothorax possible",
            "Un épanchement pleural",
            "Une pneumonie",
            "Un œdème pulmonaire"
          ],
          correct: 0,
          explanation: "L'absence de glissement pleural peut indiquer un pneumothorax, mais doit être corrélée avec d'autres signes cliniques et échographiques."
        },
        {
          question: "Les lignes B correspondent à:",
          options: [
            "Des artefacts horizontaux",
            "Des artefacts verticaux",
            "La plèvre pariétale",
            "Les côtes"
          ],
          correct: 1,
          explanation: "Les lignes B sont des artefacts verticaux en queue de comète qui partent de la ligne pleurale et vont jusqu'au fond de l'écran."
        }
      ]
    },
    {
      id: "abdominal",
      title: "Échographie Abdominale d'Urgence",
      description: "Évaluation échographique de l'abdomen aigu en médecine d'urgence",
      duration: "50 min",
      difficulty: "Avancé",
      objectives: [
        "Réaliser un examen FAST abdominal",
        "Détecter un anévrisme de l'aorte abdominale",
        "Identifier une cholécystite",
        "Évaluer une douleur abdominale par échographie"
      ],
      theory: {
        sections: [
          {
            title: "Protocole FAST abdominal",
            content: "Le protocole FAST (Focused Assessment with Sonography for Trauma) permet une évaluation rapide de la présence de liquide libre intra-abdominal. Il comprend 4 fenêtres principales : péricardique, pelvis, flanc droit et flanc gauche."
          }
        ]
      },
      images: [
        {
          title: "Fenêtre de Morrison",
          description: "Interface hépatique-rénale droite, site de recherche de liquide libre"
        }
      ],
      videos: [
        {
          title: "Technique FAST complète",
          duration: "12:30",
          description: "Démonstration du protocole FAST abdominal complet"
        }
      ],
      quiz: [
        {
          question: "Combien de fenêtres comprend le protocole FAST abdominal?",
          options: ["3", "4", "5", "6"],
          correct: 1,
          explanation: "Le protocole FAST comprend 4 fenêtres : péricardique, pelvis, flanc droit (Morrison) et flanc gauche (spléno-rénal)."
        }
      ]
    },
    {
      id: "trauma",
      title: "eFAST pour Traumatismes",
      description: "Protocole eFAST pour l'évaluation du patient traumatisé",
      duration: "35 min",
      difficulty: "Intermédiaire",
      objectives: [
        "Maîtriser le protocole eFAST complet",
        "Détecter un hémopéritoine",
        "Identifier un hémothorax",
        "Intégrer l'eFAST dans la prise en charge du traumatisé"
      ],
      theory: {
        sections: [
          {
            title: "Protocole eFAST",
            content: "Le protocole eFAST (extended FAST) ajoute l'examen pulmonaire au FAST traditionnel. Il permet une évaluation complète du patient traumatisé en recherchant un pneumothorax, un hémothorax et un hémopéritoine."
          }
        ]
      },
      images: [
        {
          title: "Hémothorax en échographie",
          description: "Collection liquidienne anéchogène à la base pulmonaire"
        }
      ],
      videos: [
        {
          title: "eFAST complet",
          duration: "10:15",
          description: "Protocole eFAST étape par étape"
        }
      ],
      quiz: [
        {
          question: "Quelle est la différence entre FAST et eFAST?",
          options: [
            "Le nombre de fenêtres",
            "L'ajout de l'examen pulmonaire",
            "La durée d'examen",
            "Le type de sonde utilisée"
          ],
          correct: 1,
          explanation: "L'eFAST ajoute l'examen pulmonaire au FAST traditionnel pour rechercher un pneumothorax et un hémothorax."
        }
      ]
    },
    {
      id: "vascular",
      title: "Échographie Vasculaire POCUS",
      description: "Évaluation vasculaire par échographie au point de service",
      duration: "45 min",
      difficulty: "Avancé",
      objectives: [
        "Diagnostiquer une thrombose veineuse profonde",
        "Évaluer la volémie par échographie",
        "Mesurer l'index de collapsibilité de la VCI",
        "Guider l'expansion volémique"
      ],
      theory: {
        sections: [
          {
            title: "Échographie vasculaire d'urgence",
            content: "L'échographie vasculaire permet l'évaluation rapide du système vasculaire. Elle comprend l'examen des veines pour rechercher une thrombose et l'évaluation de la volémie par la mesure de la veine cave inférieure."
          }
        ]
      },
      images: [
        {
          title: "Thrombose veineuse profonde",
          description: "Veine non compressible avec matériel échogène intraluminal"
        }
      ],
      videos: [
        {
          title: "Technique de compression veineuse",
          duration: "8:45",
          description: "Méthode de recherche de thrombose veineuse profonde"
        }
      ],
      quiz: [
        {
          question: "Quel est le signe principal de thrombose veineuse profonde?",
          options: [
            "Veine dilatée",
            "Veine non compressible",
            "Flux absent",
            "Écho-structure anormale"
          ],
          correct: 1,
          explanation: "Le signe principal est la non-compressibilité de la veine lors de la compression avec la sonde."
        }
      ]
    },
    {
      id: "procedures",
      title: "Échoguidage des Gestes",
      description: "Guidage échographique des procédures invasives",
      duration: "55 min",
      difficulty: "Avancé",
      objectives: [
        "Réaliser un abord veineux échoguidé",
        "Guider une ponction pleurale",
        "Techniques de ponction échoguidée",
        "Sécuriser les gestes invasifs par échographie"
      ],
      theory: {
        sections: [
          {
            title: "Principes de l'échoguidage",
            content: "L'échoguidage permet de sécuriser les gestes invasifs en visualisant en temps réel les structures anatomiques et la progression de l'aiguille. Cette technique améliore significativement la sécurité et le taux de réussite des procédures."
          }
        ]
      },
      images: [
        {
          title: "Abord veineux échoguidé",
          description: "Visualisation de l'aiguille dans la veine jugulaire interne"
        }
      ],
      videos: [
        {
          title: "Technique d'abord veineux central",
          duration: "13:20",
          description: "Cathétérisme veineux central échoguidé"
        }
      ],
      quiz: [
        {
          question: "Quel est l'avantage principal de l'échoguidage?",
          options: [
            "Rapidité d'exécution",
            "Sécurité accrue",
            "Coût réduit",
            "Facilité d'apprentissage"
          ],
          correct: 1,
          explanation: "L'échoguidage améliore significativement la sécurité des gestes invasifs en permettant la visualisation en temps réel des structures."
        }
      ]
    }
  ],
  userProgress: {
    completedModules: ["cardiac"],
    inProgress: ["pulmonary"],
    totalTime: "2h 15min",
    quizScores: {
      cardiac: 85,
      pulmonary: 0
    }
  }
};

// Application State
let currentView = 'dashboard';
let currentModule = null;
let currentTab = 'theory';
let currentQuizQuestion = 0;
let quizAnswers = [];
let quizCompleted = false;

// DOM Elements
const views = {
  dashboard: document.getElementById('dashboard-view'),
  modules: document.getElementById('modules-view'),
  progress: document.getElementById('progress-view'),
  moduleDetail: document.getElementById('module-detail-view')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  registerServiceWorker();
});

function initializeApp() {
  setupNavigation();
  renderModules();
  renderProgress();
  setupModuleDetail();
  showView('dashboard');
}

// Navigation
function setupNavigation() {
  // Desktop navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const view = e.currentTarget.getAttribute('data-view');
      showView(view);
      updateActiveNavLink(navLinks, e.currentTarget);
    });
  });

  // Mobile navigation
  const bottomNavLinks = document.querySelectorAll('.bottom-nav-link');
  bottomNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const view = e.currentTarget.getAttribute('data-view');
      showView(view);
      updateActiveNavLink(bottomNavLinks, e.currentTarget);
    });
  });
}

function updateActiveNavLink(links, activeLink) {
  links.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

function showView(viewName) {
  // Hide all views
  Object.values(views).forEach(view => view.classList.remove('active'));
  
  // Show requested view
  if (views[viewName]) {
    views[viewName].classList.add('active');
    currentView = viewName;
  }
}

// Modules
function renderModules() {
  const modulesGrid = document.getElementById('modules-grid');
  if (!modulesGrid) return;

  modulesGrid.innerHTML = appData.modules.map(module => {
    const isCompleted = appData.userProgress.completedModules.includes(module.id);
    const isInProgress = appData.userProgress.inProgress.includes(module.id);
    const progress = isCompleted ? 100 : (isInProgress ? 30 : 0);
    
    let statusClass = 'not-started';
    let statusText = 'Non commencé';
    
    if (isCompleted) {
      statusClass = 'completed';
      statusText = 'Terminé';
    } else if (isInProgress) {
      statusClass = 'in-progress';
      statusText = 'En cours';
    }

    return `
      <div class="module-card" data-module-id="${module.id}">
        <div class="module-header">
          <div class="module-status ${statusClass}">${statusText}</div>
        </div>
        <h3 class="module-title">${module.title}</h3>
        <p class="module-description">${module.description}</p>
        <div class="module-meta">
          <div class="module-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            ${module.duration}
          </div>
          <div class="module-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            ${module.difficulty}
          </div>
        </div>
        <div class="module-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
          <div class="progress-text">Progression : ${progress}%</div>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers
  const moduleCards = document.querySelectorAll('.module-card');
  moduleCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const moduleId = e.currentTarget.getAttribute('data-module-id');
      showModuleDetail(moduleId);
    });
  });
}

// Progress
function renderProgress() {
  const modulesProgress = document.getElementById('modules-progress');
  if (!modulesProgress) return;

  modulesProgress.innerHTML = appData.modules.map(module => {
    const isCompleted = appData.userProgress.completedModules.includes(module.id);
    const isInProgress = appData.userProgress.inProgress.includes(module.id);
    const score = appData.userProgress.quizScores[module.id] || 0;
    
    let statusText = 'Non commencé';
    let statusClass = 'not-started';
    
    if (isCompleted) {
      statusText = `Terminé - Score: ${score}%`;
      statusClass = 'completed';
    } else if (isInProgress) {
      statusText = 'En cours';
      statusClass = 'in-progress';
    }

    return `
      <div class="module-progress-item">
        <div class="module-progress-info">
          <h4>${module.title}</h4>
          <div class="module-progress-meta">
            <span class="module-status ${statusClass}">${statusText}</span>
            <span> • ${module.duration}</span>
          </div>
        </div>
        <div class="module-progress-actions">
          <button class="btn btn--secondary" onclick="showModuleDetail('${module.id}')">
            ${isCompleted ? 'Réviser' : 'Commencer'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Module Detail
function setupModuleDetail() {
  const backButton = document.getElementById('back-to-modules');
  if (backButton) {
    backButton.addEventListener('click', () => {
      showView('modules');
    });
  }

  // Tab navigation
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-tab');
      showTab(tab);
      updateActiveTab(tabButtons, e.currentTarget);
    });
  });
}

function showModuleDetail(moduleId) {
  const module = appData.modules.find(m => m.id === moduleId);
  if (!module) return;

  currentModule = module;
  renderModuleInfo(module);
  showTab('theory');
  showView('moduleDetail');
}

function renderModuleInfo(module) {
  const moduleInfo = document.getElementById('module-info');
  if (!moduleInfo) return;

  const isCompleted = appData.userProgress.completedModules.includes(module.id);
  const score = appData.userProgress.quizScores[module.id] || 0;

  moduleInfo.innerHTML = `
    <h1>${module.title}</h1>
    <p>${module.description}</p>
    <div class="module-meta">
      <div class="module-meta-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
        ${module.duration}
      </div>
      <div class="module-meta-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        ${module.difficulty}
      </div>
      ${isCompleted ? `<div class="module-meta-item">Score: ${score}%</div>` : ''}
    </div>
    <div class="module-objectives">
      <h3>Objectifs d'apprentissage</h3>
      <ul class="objectives-list">
        ${module.objectives.map(objective => `<li>${objective}</li>`).join('')}
      </ul>
    </div>
  `;
}

function updateActiveTab(tabs, activeTab) {
  tabs.forEach(tab => tab.classList.remove('active'));
  activeTab.classList.add('active');
}

function showTab(tabName) {
  // Hide all tab panes
  const tabPanes = document.querySelectorAll('.tab-pane');
  tabPanes.forEach(pane => pane.classList.remove('active'));

  // Show requested tab
  const targetPane = document.getElementById(`${tabName}-tab`);
  if (targetPane) {
    targetPane.classList.add('active');
    currentTab = tabName;
    
    // Render tab content
    switch(tabName) {
      case 'theory':
        renderTheoryContent();
        break;
      case 'images':
        renderImagesContent();
        break;
      case 'videos':
        renderVideosContent();
        break;
      case 'quiz':
        renderQuizContent();
        break;
    }
  }
}

function renderTheoryContent() {
  const theoryContent = document.getElementById('theory-content');
  if (!theoryContent || !currentModule) return;

  theoryContent.innerHTML = currentModule.theory.sections.map(section => `
    <div class="content-section">
      <h3>${section.title}</h3>
      <p>${section.content}</p>
    </div>
  `).join('');
}

function renderImagesContent() {
  const imagesContent = document.getElementById('images-content');
  if (!imagesContent || !currentModule) return;

  imagesContent.innerHTML = `
    <div class="images-grid">
      ${currentModule.images.map(image => `
        <div class="image-card">
          <div class="image-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
          </div>
          <div class="image-info">
            <div class="image-title">${image.title}</div>
            <div class="image-description">${image.description}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderVideosContent() {
  const videosContent = document.getElementById('videos-content');
  if (!videosContent || !currentModule) return;

  videosContent.innerHTML = `
    <div class="videos-grid">
      ${currentModule.videos.map(video => `
        <div class="video-card">
          <div class="video-placeholder">
            <div class="play-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </div>
          </div>
          <div class="video-info">
            <div class="video-title">${video.title}</div>
            <div class="video-duration">${video.duration}</div>
            ${video.description ? `<div class="video-description">${video.description}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Add click handlers for play buttons
  const playButtons = document.querySelectorAll('.play-icon');
  playButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Simulate video play
      const videoCard = e.target.closest('.video-card');
      const videoTitle = videoCard.querySelector('.video-title').textContent;
      showNotification(`Lecture de: ${videoTitle}`, 'info');
    });
  });
}

function renderQuizContent() {
  const quizContent = document.getElementById('quiz-content');
  if (!quizContent || !currentModule) return;

  // Reset quiz state
  currentQuizQuestion = 0;
  quizAnswers = [];
  quizCompleted = false;

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quizContent = document.getElementById('quiz-content');
  if (!quizContent || !currentModule) return;

  const questions = currentModule.quiz;
  const question = questions[currentQuizQuestion];
  const isLastQuestion = currentQuizQuestion === questions.length - 1;
  const hasAnswered = quizAnswers[currentQuizQuestion] !== undefined;

  quizContent.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-question">
        <div class="question-text">
          Question ${currentQuizQuestion + 1} sur ${questions.length}: ${question.question}
        </div>
        <div class="quiz-options">
          ${question.options.map((option, index) => {
            let optionClass = 'quiz-option';
            if (hasAnswered) {
              if (index === question.correct) {
                optionClass += ' correct';
              } else if (index === quizAnswers[currentQuizQuestion] && index !== question.correct) {
                optionClass += ' incorrect';
              }
            } else if (quizAnswers[currentQuizQuestion] === index) {
              optionClass += ' selected';
            }
            
            return `
              <div class="${optionClass}" data-option="${index}">
                ${option}
              </div>
            `;
          }).join('')}
        </div>
        ${hasAnswered ? `
          <div class="quiz-explanation">
            <strong>Explication:</strong> ${question.explanation}
          </div>
        ` : ''}
      </div>
      <div class="quiz-actions">
        <button class="btn btn--secondary" onclick="previousQuestion()" ${currentQuizQuestion === 0 ? 'disabled' : ''}>
          Précédent
        </button>
        <div>
          ${!hasAnswered ? `
            <button class="btn btn--primary" onclick="submitAnswer()" ${quizAnswers[currentQuizQuestion] === undefined ? 'disabled' : ''}>
              Valider
            </button>
          ` : `
            ${!isLastQuestion ? `
              <button class="btn btn--primary" onclick="nextQuestion()">
                Suivant
              </button>
            ` : `
              <button class="btn btn--primary" onclick="completeQuiz()">
                Terminer le quiz
              </button>
            `}
          `}
        </div>
      </div>
    </div>
  `;

  // Add option click handlers
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(option => {
    option.addEventListener('click', (e) => {
      if (hasAnswered) return;
      
      const optionIndex = parseInt(e.currentTarget.getAttribute('data-option'));
      quizAnswers[currentQuizQuestion] = optionIndex;
      
      // Update UI
      options.forEach(opt => opt.classList.remove('selected'));
      e.currentTarget.classList.add('selected');
      
      // Enable submit button
      const submitBtn = document.querySelector('.btn--primary');
      if (submitBtn) submitBtn.disabled = false;
    });
  });
}

function submitAnswer() {
  renderQuizQuestion();
}

function nextQuestion() {
  currentQuizQuestion++;
  renderQuizQuestion();
}

function previousQuestion() {
  currentQuizQuestion--;
  renderQuizQuestion();
}

function completeQuiz() {
  const questions = currentModule.quiz;
  const correctAnswers = quizAnswers.filter((answer, index) => answer === questions[index].correct).length;
  const score = Math.round((correctAnswers / questions.length) * 100);
  
  // Update user progress
  appData.userProgress.quizScores[currentModule.id] = score;
  if (!appData.userProgress.completedModules.includes(currentModule.id)) {
    appData.userProgress.completedModules.push(currentModule.id);
  }
  
  // Remove from in-progress
  const inProgressIndex = appData.userProgress.inProgress.indexOf(currentModule.id);
  if (inProgressIndex > -1) {
    appData.userProgress.inProgress.splice(inProgressIndex, 1);
  }
  
  // Show completion message
  showCompletionModal(score);
  
  // Re-render modules and progress
  renderModules();
  renderProgress();
}

function showCompletionModal(score) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Module terminé !</h2>
      <p>Félicitations ! Vous avez terminé le module "${currentModule.title}".</p>
      <p>Votre score : <strong>${score}%</strong></p>
      <div class="modal-actions">
        <button class="btn btn--primary" onclick="closeModal()">Continuer</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Style the modal
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  `;
  
  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.cssText = `
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    padding: var(--space-32);
    max-width: 400px;
    text-align: center;
    color: var(--color-text);
  `;
  
  // Store modal reference for cleanup
  window.currentModal = modal;
}

function closeModal() {
  if (window.currentModal) {
    document.body.removeChild(window.currentModal);
    window.currentModal = null;
  }
}

// Utility Functions
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-base);
    padding: var(--space-16);
    color: var(--color-text);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Service Worker Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully');
      })
      .catch(error => {
        console.log('Service Worker registration failed');
      });
  }
}

// PWA Installation
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPrompt();
});

function showInstallPrompt() {
  const installBtn = document.createElement('button');
  installBtn.textContent = 'Installer l\'application';
  installBtn.className = 'btn btn--primary install-btn';
  installBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  `;
  
  installBtn.addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('PWA installed');
        }
        deferredPrompt = null;
        document.body.removeChild(installBtn);
      });
    }
  });
  
  document.body.appendChild(installBtn);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .modal-overlay {
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style);
