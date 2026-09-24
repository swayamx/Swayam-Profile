/**
 * ENHANCED CENTRAL DATA REPOSITORY — SWAYAM JYOTI ROUTRAY PORTFOLIO
 * Complete structured content for Projects, Experiences, Skills, Research, Certifications, Events, and AI Demos.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Swayam Jyoti Routray",
    titles: ["Software Engineer", "AI/ML Enthusiast", "UI/UX Designer", "Tech Innovator"],
    tagline: "Building intelligent software systems, computer vision tools, and generative AI pipelines that bridge raw data with human experience.",
    about: "I am a Software Engineer and AI Researcher focused on scalable backend architectures, machine learning models, and modern user-centric interfaces. My expertise spans full-stack engineering, retrieval-augmented generation (RAG) pipelines, data science, and C++ game engines.",
    location: "Bhubaneswar / Remote",
    email: "swayam.routray.dev@gmail.com",
    github: "https://github.com/SwayamJyotiRoutray",
    linkedin: "https://linkedin.com/in/swayam-jyoti-routray",
    resumeUrl: "#resume-modal",
    stats: [
      { number: "15+", label: "Projects Built" },
      { number: "12+", label: "Tech Stack Tools" },
      { number: "06+", label: "Certifications" },
      { number: "04+", label: "Competitions & Contests" }
    ]
  },

  experiences: [
    {
      id: "exp-1",
      company: "DesignerByJob",
      role: "Full-Stack Developer & UI/UX Designer",
      period: "2023 – Present",
      type: "Professional / Freelance",
      location: "Remote",
      badge: "Present",
      description: "Leading frontend visual architecture, interactive web design, and full-stack solutions for enterprise clients and digital products.",
      highlights: [
        "Engineered responsive high-performance web applications using modern Javascript, modular CSS3 design systems, and glassmorphic UI.",
        "Architected client design assets, design tokens, and user journeys resulting in a 35% increase in user retention.",
        "Integrated custom REST APIs, database schemas, and micro-interactions for seamless web applications."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "Express", "UI/UX Design", "Figma"]
    },
    {
      id: "exp-2",
      company: "Celebal Technologies",
      role: "Power BI & Business Intelligence Intern",
      period: "2025",
      type: "Internship",
      location: "India",
      badge: "2025",
      description: "Designed multi-fact data models and executive dashboard suites for complex enterprise datasets.",
      highlights: [
        "Developed automated Power BI reports utilizing DAX measures, star schema modeling, and interactive visual drill-downs.",
        "Optimized ETL data transformation queries using Power Query (M) to process high-volume sales and operational datasets.",
        "Created real-time executive summaries with custom theme palettes and KPI cards."
      ],
      technologies: ["Power BI", "DAX", "Power Query", "SQL", "Data Modeling", "Excel"]
    },
    {
      id: "exp-3",
      company: "Edunet Foundation",
      role: "AI & Green Skills Intern",
      period: "2025",
      type: "AI Internship",
      location: "India",
      badge: "2025",
      description: "Developed AI-driven agricultural sustainability tools for optimal crop yield and precision fertilizer recommendation.",
      highlights: [
        "Built an ML-Based Crop & Fertilizer Recommendation System analyzing soil NPK levels, pH, rainfall, and temperature metrics.",
        "Trained Scikit-learn Decision Tree, Random Forest, and SVM models reaching 96.4% cross-validated recommendation accuracy.",
        "Generated exploratory data analysis (EDA) charts using Seaborn and Matplotlib for feature importance visualization."
      ],
      technologies: ["Python", "Scikit-learn", "Decision Trees", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
    }
  ],

  technologyCategories: [
    {
      name: "Programming Languages",
      icon: "code",
      items: ["C", "C++", "Java", "Python", "JavaScript"]
    },
    {
      name: "Frontend Development",
      icon: "layout",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "React"]
    },
    {
      name: "Backend Development",
      icon: "server",
      items: ["Node.js", "Express.js", "REST APIs", "System Architecture"]
    },
    {
      name: "Databases & Storage",
      icon: "database",
      items: ["MongoDB", "SQL", "Oracle Database", "FAISS Vector DB"]
    },
    {
      name: "AI / Machine Learning",
      icon: "cpu",
      items: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "RAG"]
    },
    {
      name: "Data Visualization & BI",
      icon: "bar-chart-2",
      items: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "DAX"]
    },
    {
      name: "Cloud & DevOps",
      icon: "cloud",
      items: ["AWS", "Docker", "Jenkins", "Terraform", "Git", "GitHub", "Ansible", "ELK Stack", "Grafana"]
    },
    {
      name: "AI Tools & Frameworks",
      icon: "zap",
      items: ["OpenAI API", "Hugging Face", "LangChain", "LlamaIndex", "Google Gemini API"]
    }
  ],

  skillsCategories: [
    {
      title: "Software Engineering",
      icon: "terminal",
      description: "Full-stack development, object-oriented design, modular REST architectures, and clean code practices.",
      skills: ["Full-Stack Engineering", "Backend Microservices", "Responsive UI Architecture", "API Integration", "State Management"]
    },
    {
      title: "Artificial Intelligence & ML",
      icon: "brain",
      description: "End-to-end machine learning pipelines, Retrieval-Augmented Generation (RAG), and computer vision.",
      skills: ["RAG Systems", "Vector Embeddings & FAISS", "Scikit-learn / Classification", "LLM Prompting & Gemini API", "OCR Data Extraction"]
    },
    {
      title: "Data Analytics & Insights",
      icon: "trending-up",
      description: "Data modeling, statistical analysis, interactive executive dashboards, and ETL pipelines.",
      skills: ["Power BI Dashboarding", "DAX Analytics", "Exploratory Data Analysis", "SQL Data Transformation", "Statistical Modeling"]
    },
    {
      title: "DevOps & Engineering Practices",
      icon: "git-branch",
      description: "Version control workflows, containerization, cloud infrastructure deployment, and monitoring.",
      skills: ["Git & GitHub Workflows", "Docker Containerization", "CI/CD Concepts", "Cloud Infrastructure (AWS)", "System Design"]
    },
    {
      title: "Creative & Design",
      icon: "feather",
      description: "User experience design, graphic visual aesthetics, responsive UI tokens, and digital creativity.",
      skills: ["UI/UX Prototyping", "Design Token Systems", "Editorial Layouts", "Typography Hierarchy", "Glassmorphic UX"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "AI Textbook Lecture Notes & Lab Synthesizer",
      category: "research",
      categoryLabel: "AI / ML & Research",
      shortDesc: "End-to-end RAG AI engine that ingests textbook PDFs, extracts text via OCR, performs semantic vector retrieval, and synthesizes structured lecture notes and lab manuals.",
      problem: "Students and professors spend hours manually summarizing multi-chapter textbooks and synthesizing practical lab experiments into coherent study materials.",
      solution: "Built a hybrid RAG pipeline leveraging OCR extraction, FAISS vector indexing, and Gemini 1.5 Pro to synthesize comprehensive chapter summaries, quiz flashcards, and step-by-step lab procedure manuals formatted cleanly into downloadable PDFs.",
      technologies: ["Python", "Google Gemini API", "FAISS", "LangChain", "EasyOCR", "PyMuPDF", "ReportLab PDF"],
      features: [
        "Multi-book semantic retrieval across thousands of textbook pages",
        "High-accuracy OCR for mathematical formulas, diagrams, and scanned texts",
        "Vector embeddings indexing with FAISS for sub-second query retrieval",
        "Autonomous RAG routing selecting targeted context windows for Gemini 1.5",
        "Professional PDF note generation with auto-generated tables of contents"
      ],
      architecture: [
        "Input Tier: Multi-Format Document Ingestion (PDF, Scanned Images, EPUB)",
        "Pre-processing: EasyOCR + PyMuPDF semantic text chunking (500-token windows)",
        "Vector Indexing: SentenceTransformers embeddings stored in FAISS GPU index",
        "RAG Orchestration: Contextual similarity search + Top-K re-ranking",
        "Synthesis & Export: Gemini 1.5 Pro generation mapped into ReportLab PDF builder"
      ],
      codeSnippet: `def synthesize_lecture_notes(query_topic, vector_index, top_k=5):
    # 1. Generate query embedding
    query_vector = encoder_model.encode([query_topic])
    
    # 2. Search FAISS GPU index
    distances, indices = vector_index.search(query_vector, top_k)
    retrieved_chunks = [documents_db[idx] for idx in indices[0]]
    
    # 3. Construct Gemini RAG prompt
    rag_prompt = f"""
    You are an expert academic professor. Synthesize structured lecture notes based ONLY on the following textbook passages:
    {retrieved_chunks}
    
    Topic: {query_topic}
    Output format: Executive Summary, Core Formulas, Lab Procedure, Quiz Flashcards.
    """
    
    # 4. Invoke Gemini Model
    response = gemini_client.generate_content(rag_prompt)
    return build_pdf_document(response.text)`,
      github: "https://github.com/SwayamJyotiRoutray",
      demo: "#research",
      badge: "Featured Research",
      icon: "file-text"
    },
    {
      id: "proj-2",
      title: "AI Smart Attendance System",
      category: "ai",
      categoryLabel: "AI / Machine Learning",
      shortDesc: "Automated real-time attendance verification application using OpenCV facial recognition, anti-spoofing detection, and database logging.",
      problem: "Traditional roll-call or card-swipe systems are prone to proxy attendance, slow queues, and manual human errors.",
      solution: "Created an intelligent computer vision solution that captures live camera feeds, detects facial landmarks, verifies identity against database embeddings, and marks attendance instantly with timestamped logs.",
      technologies: ["Python", "OpenCV", "Face Recognition", "Dlib", "SQLite", "Tkinter / Web UI"],
      features: [
        "Real-time multi-face landmark tracking and 128-d vector distance matching",
        "Anti-spoofing eye-blink & motion verification to prevent photograph spoofing",
        "Automated attendance report generation in CSV and PDF formats",
        "Admin control dashboard for student enrollment and attendance history"
      ],
      architecture: [
        "Haar Cascade / HOG face detection pipeline",
        "Deep Metric Learning for face embedding generation",
        "Euclidean distance matching with dynamic confidence thresholds",
        "Transactional SQLite database insertion with audit trail"
      ],
      codeSnippet: `# Real-time facial encoding & distance matching loop
def process_video_frame(frame, known_encodings, known_names):
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    face_locations = face_recognition.face_locations(rgb_frame)
    face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
    
    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        matches = face_recognition.compare_faces(known_encodings, face_encoding, tolerance=0.45)
        name = "Unknown"
        
        if True in matches:
            first_match_index = matches.index(True)
            name = known_names[first_match_index]
            log_attendance_db(name, timestamp=datetime.now())
            
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
        cv2.putText(frame, name, (left, top - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
    return frame`,
      github: "https://github.com/SwayamJyotiRoutray",
      demo: "#",
      badge: "Computer Vision",
      icon: "camera"
    },
    {
      id: "proj-3",
      title: "Infraspecs — Bridge Scanner 3D Model",
      category: "software",
      categoryLabel: "Software & 3D Engineering",
      shortDesc: "Structural inspection software tool integrating 3D bridge visualization, point cloud anomaly detection, and defect mapping.",
      problem: "Civil infrastructure inspection lacks intuitive visual tools to map concrete cracks and structural fatigue onto 3D digital twins.",
      solution: "Developed an interactive inspection portal rendering 3D bridge structures, allowing inspectors to click specific structural elements and view crack depth telemetry, stress metrics, and maintenance schedules.",
      technologies: ["C++", "OpenGL / Three.js", "Python", "Open3D", "WebGL"],
      features: [
        "Interactive 3D mesh rendering with orbit controls and section clipping",
        "Color-coded stress mapping based on point cloud sensor readings",
        "Defect annotation pin system linked to inspector diagnostic logs",
        "Exportable PDF inspection report generator"
      ],
      architecture: [
        "3D Mesh parser for OBJ/PLY point cloud datasets",
        "Custom shaders for heat-map stress visualization",
        "Interactive raycasting event bus for pinpoint selection"
      ],
      codeSnippet: `// OpenGL Vertex Shader for Point Cloud Stress Mapping
#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in float aStressValue;

out vec3 stressColor;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

vec3 getHeatmapColor(float val) {
    // Interpolate between Blue (low stress), Yellow (med), Red (high stress)
    return mix(vec3(0.0, 0.4, 1.0), vec3(1.0, 0.2, 0.0), clamp(val, 0.0, 1.0));
}

void main() {
    gl_Position = projection * view * model * vec4(aPos, 1.0);
    stressColor = getHeatmapColor(aStressValue);
}`,
      github: "https://github.com/SwayamJyotiRoutray",
      demo: "#",
      badge: "3D Engineering",
      icon: "box"
    },
    {
      id: "proj-4",
      title: "Power BI Sales Analytics Executive Dashboard",
      category: "data",
      categoryLabel: "Data & Business Intelligence",
      shortDesc: "Enterprise sales performance dashboard with star-schema data modeling, dynamic DAX KPIs, quarterly forecasting, and regional insights.",
      problem: "Business executives struggled to analyze multi-country retail transactions scattered across disparate SQL tables.",
      solution: "Built a unified Power BI analytics suite featuring interactive slicers, profit margin breakdown, customer cohort segmentation, and automated growth metrics.",
      technologies: ["Power BI", "DAX", "Power Query", "SQL Server", "Excel"],
      features: [
        "Dynamic MoM & YoY revenue growth indicators powered by advanced DAX",
        "Interactive regional heatmaps and product hierarchy decomposition trees",
        "Customer lifetime value (CLV) RFM segmentation charts",
        "Automated scheduled refresh pipeline via Power BI Service"
      ],
      architecture: [
        "Star schema data modeling connecting FactSales with DimProduct, DimCustomer, and DimDate",
        "Custom DAX time-intelligence measures for rolling 12-month analytics",
        "Custom theme styling adhering to executive accessibility standards"
      ],
      codeSnippet: `// DAX Measure for YoY Sales Growth %
Sales YoY Growth % = 
VAR CurrentSales = [Total Revenue]
VAR PreviousYearSales = 
    CALCULATE(
        [Total Revenue],
        SAMEPERIODLASTYEAR('DimDate'[Date])
    )
RETURN
    DIVIDE(CurrentSales - PreviousYearSales, PreviousYearSales, 0)`,
      github: "https://github.com/SwayamJyotiRoutray",
      demo: "#",
      badge: "Business Intelligence",
      icon: "pie-chart"
    },
    {
      id: "proj-5",
      title: "Timber Man — C++ SFML Arcade Game",
      category: "games",
      categoryLabel: "Games & C++",
      shortDesc: "Fast-paced arcade game built in C++ using the Simple and Fast Multimedia Library (SFML) featuring custom sprite animations, collision detection, and score tracking.",
      problem: "Exploring real-time game loop optimization, frame-rate independence, and low-level asset rendering in C++.",
      solution: "Implemented an engaging arcade game with smooth 60 FPS animation loops, dynamic difficulty scaling, sound effect management, and high-score persistence.",
      technologies: ["C++", "SFML Library", "OOP Architecture", "Game Loop Design"],
      features: [
        "60 FPS frame-independent game engine loop",
        "Sprite sheet animation management and branch collision detection logic",
        "Real-time countdown timer with speed multipliers",
        "Local high score leaderboard file I/O handling"
      ],
      architecture: [
        "Entity-Component system pattern in C++",
        "SFML RenderWindow event polling loop",
        "Audio buffer pooling and texture caching system"
      ],
      codeSnippet: `// Core C++ Game Engine Event Polling Loop
#include <SFML/Graphics.hpp>

void GameEngine::run() {
    sf::Clock clock;
    while (m_window.isOpen()) {
        sf::Time dt = clock.restart();
        float dtAsSeconds = dt.asSeconds();
        
        handleInput();
        update(dtAsSeconds);
        draw();
    }
}

void GameEngine::update(float dt) {
    if (m_playing) {
        m_timeRemaining -= dt;
        if (m_timeRemaining <= 0) {
            m_playing = false;
            m_gameOverText.setString("GAME OVER!");
        }
    }
}`,
      github: "https://github.com/SwayamJyotiRoutray",
      demo: "#",
      badge: "C++ Game Engine",
      icon: "gamepad"
    },
    {
      id: "proj-6",
      title: "Car Game — C++ SFML Racing Simulation",
      category: "games",
      categoryLabel: "Games & C++",
      shortDesc: "Retro 2D endless racing game developed in C++ featuring dynamic obstacle generation, physics collision bounds, and continuous road scrolling.",
      problem: "Designing an object-oriented game state machine and procedural obstacle spawning mechanism without garbage collection lag.",
      solution: "Created a crisp 2D car racer with responsive keyboard controls, parallax background scrolling, score multipliers, and audio effects.",
      technologies: ["C++", "SFML", "C++ STL", "Object-Oriented Design"],
      features: [
        "Procedural enemy vehicle spawner with randomized speeds and lane switching",
        "Bounding box collision detection algorithm",
        "State machine architecture (Menu State, Play State, Game Over State)",
        "Sound effect trigger system for acceleration, crash, and level-up events"
      ],
      architecture: [
        "C++ Polymorphic Base State class pattern",
        "Double buffering graphics pipeline via SFML window context",
        "Efficient memory management with std::unique_ptr vectors"
      ],
      codeSnippet: `// Enemy Vehicle Spawner Logic
void Spawner::update(float dt) {
    m_spawnTimer += dt;
    if (m_spawnTimer >= m_nextSpawnInterval) {
        int randomLane = std::rand() % 3;
        m_enemies.push_back(std::make_unique<EnemyCar>(randomLane));
        m_spawnTimer = 0.0f;
    }
    
    // Check collisions
    for (auto& enemy : m_enemies) {
        if (player.getBounds().intersects(enemy->getBounds())) {
            triggerCrashState();
        }
    }
}`,
      github: "https://github.com/SwayamJyotiRoutray",
      demo: "#",
      badge: "C++ SFML",
      icon: "activity"
    }
  ],

  researchPipeline: [
    {
      step: 1,
      name: "Source Document Ingestion",
      icon: "book-open",
      tagline: "Multi-Book PDF & EPUB Processing",
      desc: "Ingests raw textbook PDFs, scanned lecture notes, and lab documents into a standardized document processing queue.",
      tech: ["PyMuPDF", "EPUB Parser", "Python I/O"],
      detail: "Handles raw multi-gigabyte textbook files, splitting large documents into chapter-specific streams while preserving page metadata and structural headers."
    },
    {
      step: 2,
      name: "OCR & Text Normalization",
      icon: "eye",
      tagline: "Formula & Diagram Text Extraction",
      desc: "Applies EasyOCR to extract text from scanned diagrams, handwritten lab formulas, and embedded image tables.",
      tech: ["EasyOCR", "OpenCV", "Regex Cleaners"],
      detail: "Cleanly parses non-searchable scanned images into UTF-8 text streams, repairing hyphenated breaks and retaining mathematical symbols."
    },
    {
      step: 3,
      name: "Semantic Chunking",
      icon: "scissors",
      tagline: "500-Token Overlapping Windowing",
      desc: "Divides normalized document text into semantically cohesive 500-token chunks with 50-token overlap to maintain context.",
      tech: ["LangChain Splitters", "Tiktoken Encoder"],
      detail: "Prevents loss of sentence context across split boundaries, ensuring definitions and formulas remain intact within individual retrieval blocks."
    },
    {
      step: 4,
      name: "Vector Embedding Generation",
      icon: "cpu",
      tagline: "768-Dimension Dense Embeddings",
      desc: "Converts text chunks into high-dimensional dense vector embeddings using domain-tuned Hugging Face transformer models.",
      tech: ["SentenceTransformers", "Hugging Face", "PyTorch"],
      detail: "Maps abstract technical concepts, textbook terminology, and lab instructions into a continuous 768-dimensional latent semantic space."
    },
    {
      step: 5,
      name: "FAISS Vector Indexing",
      icon: "database",
      tagline: "Sub-Second Similarity Search",
      desc: "Indexes generated vectors into a GPU-accelerated FAISS vector database for ultra-fast L2 distance & Cosine retrieval.",
      tech: ["FAISS IndexFlatIP", "GPU Acceleration"],
      detail: "Allows immediate semantic similarity matching across tens of thousands of book passages in less than 15 milliseconds."
    },
    {
      step: 6,
      name: "Contextual RAG Retrieval",
      icon: "filter",
      tagline: "Hybrid Top-K Context Routing",
      desc: "Retrieves Top-K relevant textbook chunks based on user study queries or chapter topics, ranking candidates by semantic similarity.",
      tech: ["Hybrid Dense Retrieval", "Re-Ranker Model"],
      detail: "Filters out irrelevant text noise, injecting only high-confidence textbook passages directly into the generative AI prompt context."
    },
    {
      step: 7,
      name: "Gemini AI Synthesis",
      icon: "sparkles",
      tagline: "Google Gemini 1.5 Pro Generation",
      desc: "Feeds retrieved context windows into Gemini 1.5 Pro to synthesize comprehensive lecture notes, key formulas, and lab steps.",
      tech: ["Google Gemini API", "Prompt Engineering"],
      detail: "Transforms raw textbook paragraphs into structured markdown containing core definitions, bulleted summaries, practice quiz questions, and lab safety procedures."
    },
    {
      step: 8,
      name: "Professional PDF Export",
      icon: "download",
      tagline: "Publication-Quality Document Engine",
      desc: "Renders synthesized study guides and lab manuals into beautifully formatted, ready-to-print PDFs with automatic pagination.",
      tech: ["ReportLab PDF Engine", "Custom Typography"],
      detail: "Applies crisp fonts, section dividers, code callouts, and header numbering for instant distribution to students and academic peers."
    }
  ],

  // Interactive AI Sandbox Preset Data
  aiSandboxPresets: [
    {
      id: "ch-1",
      topic: "Deep Neural Networks & Vector Embeddings",
      book: "Deep Learning Foundations (Vol. 2)",
      pages: "Pages 142 - 189",
      chunks: 34,
      faissDistance: 0.942,
      summary: "Deep neural networks represent inputs as continuous dense vector embeddings in high-dimensional space. Activation functions such as ReLU and Softmax introduce non-linear mapping enabling hierarchical feature extraction across multi-layer perceptrons.",
      formulas: [
        "Embedding Vector: E(x) = W_e · x + b_e",
        "ReLU Activation: f(z) = max(0, z)",
        "Cosine Similarity: sim(A, B) = (A · B) / (||A|| ||B||)"
      ],
      labProcedure: [
        "1. Initialize PyTorch Tensor dataset with batch size = 64.",
        "2. Define 3-layer MLP architecture using nn.Linear and nn.ReLU.",
        "3. Compute CrossEntropyLoss and backpropagate using Adam Optimizer (lr=0.001)."
      ],
      quiz: [
        { q: "What is the primary benefit of dense vector embeddings over one-hot vectors?", a: "Embeddings capture semantic similarity and geometric distance between concepts." },
        { q: "Why is non-linearity required in deep neural network layers?", a: "Without non-linear activations, stacking multiple linear layers collapses mathematically into a single linear transformation." }
      ]
    },
    {
      id: "ch-2",
      topic: "Decision Trees & Crop Sustainability ML",
      book: "Sustainable Precision Agriculture ML",
      pages: "Pages 88 - 124",
      chunks: 28,
      faissDistance: 0.968,
      summary: "Decision tree classifiers recursively partition agricultural soil features (Nitrogen, Phosphorus, Potassium, pH, Rainfall) by calculating Information Gain and Gini Impurity to recommend optimal crop rotation strategies.",
      formulas: [
        "Gini Impurity: Gini(D) = 1 - ∑ (p_i)^2",
        "Entropy: H(S) = - ∑ p_i log_2(p_i)",
        "Information Gain: IG(S, A) = H(S) - ∑ (|S_v|/|S|) H(S_v)"
      ],
      labProcedure: [
        "1. Load Soil NPK dataset into Pandas Dataframe and scale metrics using StandardScaler.",
        "2. Train DecisionTreeClassifier with max_depth=6 to prevent overfitting.",
        "3. Plot confusion matrix and feature importance scores using Seaborn barplot."
      ],
      quiz: [
        { q: "How does Gini Impurity differ from Entropy in decision tree splits?", a: "Gini Impurity is computationally faster as it avoids logarithmic calculations while yielding nearly identical split boundaries." },
        { q: "What technique prevents decision tree overfitting on noisy soil sensor data?", a: "Cost-complexity pruning (ccp_alpha) or limiting maximum tree depth (max_depth)." }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Green Skills using AI Technologies",
      issuer: "Edunet Foundation / IBM",
      date: "2025",
      category: "AI & Sustainability",
      icon: "award",
      description: "Comprehensive certification covering machine learning applications in environmental sustainability, data preprocessing, and predictive decision systems.",
      credentialId: "EDUNET-AI-2025-889"
    },
    {
      id: "cert-2",
      title: "Power BI & Business Intelligence Certification",
      issuer: "Celebal Technologies",
      date: "2025",
      category: "Data & BI",
      icon: "bar-chart",
      description: "Advanced data modeling, DAX query construction, star-schema architecture, and interactive dashboard publishing.",
      credentialId: "CELEBAL-PBI-2025-412"
    },
    {
      id: "cert-3",
      title: "Python Data Science & Machine Learning Masterclass",
      issuer: "Online Learning Academy",
      date: "2024",
      category: "AI & ML",
      icon: "code",
      description: "End-to-end training in NumPy, Pandas, Scikit-learn, statistical data analysis, and predictive model evaluation.",
      credentialId: "PY-ML-2024-901"
    },
    {
      id: "cert-4",
      title: "C++ Game Engine Development & SFML",
      issuer: "Tech Developer Institute",
      date: "2024",
      category: "Game Programming",
      icon: "gamepad",
      description: "Object-oriented software design, memory management, 2D rendering graphics pipeline, and SFML game loop architecture.",
      credentialId: "CPP-SFML-2024-334"
    },
    {
      id: "cert-5",
      title: "Full-Stack Web Development Foundations",
      issuer: "DesignerByJob / Tech Skills",
      date: "2023",
      category: "Web Engineering",
      icon: "layout",
      description: "Modern JavaScript (ES6+), HTML5 semantic structure, modular CSS3 styling, and REST API integration.",
      credentialId: "WEB-DEV-2023-112"
    },
    {
      id: "cert-6",
      title: "Cloud & DevOps Essentials",
      issuer: "Cloud Tech Forum",
      date: "2024",
      category: "Cloud / DevOps",
      icon: "cloud",
      description: "Containerization fundamentals with Docker, CI/CD pipeline concepts, version control workflows, and AWS infrastructure.",
      credentialId: "CLOUD-DEV-2024-551"
    }
  ],

  events: [
    {
      title: "National AI & Green Tech Hackathon",
      organization: "Edunet AI Initiative",
      date: "2025",
      role: "Lead Developer",
      achievement: "Top Finalist & Award Winner for ML Crop & Fertilizer System",
      desc: "Built and presented an end-to-end machine learning recommendation system for agricultural sustainability in front of industry judges."
    },
    {
      title: "Celebal Business Intelligence Challenge",
      organization: "Celebal Technologies",
      date: "2025",
      role: "Participant & Intern Competitor",
      achievement: "Excellence Certificate in Power BI Dashboard Design",
      desc: "Created dynamic executive dashboard suites analyzing complex retail sales datasets within strict 48-hour deadline."
    },
    {
      title: "C++ Game Developer Showcase",
      organization: "Regional Developer Group",
      date: "2024",
      role: "Game Engine Developer",
      achievement: "Featured Project — Timber Man C++ SFML Engine",
      desc: "Demonstrated real-time rendering, 60 FPS frame-independent game loops, and custom C++ physics bounding boxes."
    },
    {
      title: "Generative AI & RAG Systems Webinar",
      organization: "Tech Innovators Community",
      date: "2024",
      role: "Attendee & Speaker Contributor",
      achievement: "Active Technical Contributor",
      desc: "Participated in deep-dive technical sessions covering vector indexing with FAISS, LangChain orchestration, and LLM prompt optimization."
    }
  ]
};

// Freeze data to prevent accidental modification
Object.freeze(PORTFOLIO_DATA);
