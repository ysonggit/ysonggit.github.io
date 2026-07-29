// Shared data for all pages to eliminate code duplication
window.SharedData = {
  // Common translations used across all pages
  translations: {
    en: {
      // Navigation
      'nav-work': 'Work',
      'nav-info': 'Info',
      'nav-connect': 'Connect',
      
      // Info section (for index page)
      'info-title': 'Info',
      'info-description': 'Solutions Architect specializing in enterprise GenAI — helping organizations design, evaluate, and safely deploy large language models into production. I architect end-to-end LLM solutions in Python: RAG pipelines, model evaluation frameworks, and responsible AI guardrails that translate frontier model capabilities into measurable business value. Currently at Alibaba Cloud (EU), driving GenAI adoption across automotive OEMs and AI-native startups through pre-sales engineering, technical discovery, and hands-on POC delivery. Previously built the cloud and data platform at Lotus Tech that directly enabled UN R171.01 certification — the world\'s first harmonized Level 2 ADAS regulation. 10+ years spanning LLM/GenAI, autonomous systems, cloud architecture (AWS, Kubernetes, Terraform), and data engineering. Ph.D. in Computer Science. Speaker at TechAD Europe 2025. Y Combinator alumni.',
      
      // Experience section
      'experience-title': 'Experience',
      'experience-lotustech-title': 'Senior Algorithm Engineer',
      'experience-lotustech-description': 'Built and managed the cloud and data platform infrastructure that directly supported Lotus Tech in becoming the 2nd automaker globally to achieve UN R171.01 (DCAS) certification—the world\'s first harmonized regulation for Level 2 ADAS. Architected cloud-native SaaS platforms on AWS for the ADAS data-closed-loop: multi-modal sensor data ingestion (LiDAR, camera, radar), automated ML model training, RAG-based scenario extraction for edge case prioritization, and compliance with E-NCAP and GDPR. Led cross-cloud SaaS platform migration (Alibaba Cloud → AWS), re-architecting Kubernetes microservices, IoT telemetry pipelines, and real-time analytics. Built data platforms processing 10M+ daily sensor data points. Drove business development with OEM clients (Alpine, Momenta, Wayve). Speaker at TechAD Europe 2025; exhibitor at ADAS Expo 2025 and IAA 2023.',
      'experience-aptiv-title': 'Senior Algorithm Engineer',
      'experience-aptiv-description': 'Led radar perception for Motional\'s Robotaxi, enhancing sensor fusion with Python, C++, and cloud-based toolchains. Delivered ADAS feature POCs for BMW and Stellantis, translating customer requirements into technical solutions. Developed ASPICE-compliant error-handling APIs for safety-critical systems.',
      'experience-groupon-title': 'Software Engineer',
      'experience-groupon-description': 'Built REST APIs in Java and Scala, enabling 6M+ daily customer notifications and GDPR compliance for EMEA. Migrated Hive to Spark, boosting performance 10x and cutting data pipeline runtime by 50%+. Designed and implemented scalable data processing architectures using Apache Spark, Kafka, and cloud-based data warehouses for real-time analytics and customer insights.',
      'experience-auro-title': 'Robotics Engineer Intern',
      'experience-auro-description': 'Engineered a self-driving shuttle at Auro Robotics, implementing ROS-based path planners with GPS and LiDAR. Developed cloud-based simulation and testing infrastructure for autonomous navigation algorithms. Optimized navigation through simulations, earning YC Demo Day spotlight and $2.1M investment. Built scalable data collection and processing pipelines for sensor fusion and path planning optimization.',
      
      // Partners section
      'partners-title': 'Project Partners',
      
      // Work section
      'work-title': 'All Work',
      'work-autonomous': 'Autonomous Driving',
      'work-startup': 'Startup Experience',
      'work-robotic': 'Robotics Research',
      'work-bigdata': 'Data Engineering & Platforms',
      'work-ai': 'AI Solutions & Cloud',

      // Experience (Alibaba Cloud)
      'experience-alibaba-title': 'Senior Solutions Architect',
      'experience-alibaba-description': 'Pre-sales Solutions Architect driving GenAI adoption across European automotive OEMs and AI-native startups. Lead end-to-end customer engagements across 10+ enterprise accounts — from technical discovery and architecture design through POC delivery and competitive displacement. Design and evaluate GenAI solutions leveraging Qwen/WAN model families, Model Studio, and PAI: RAG architectures, LLM evaluation frameworks, responsible AI guardrails, and Model-as-a-Service offerings. Build technical partner ecosystem through integration cookbooks and joint go-to-market motions. Represented Alibaba Cloud at Hannover Messe 2025 with live partner AI showcases.',

      // Connect section
      'connect-title': "Let's Connect",
      'connect-mail-label': 'Mail:',
      'connect-location-label': 'Location:',
      'connect-location': 'Frankfurt, Germany',
      'claude-credit': 'Website developed with Claude Code'
    },
    de: {
      // Navigation
      'nav-work': 'Arbeit',
      'nav-info': 'Info',
      'nav-connect': 'Kontakt',
      
      // Info section (for index page)
      'info-title': 'Info',
      'info-description': 'Solutions Architect mit Spezialisierung auf Enterprise GenAI — ich helfe Organisationen dabei, Large Language Models sicher in die Produktion zu überführen. Ich entwerfe End-to-End LLM-Lösungen in Python: RAG-Pipelines, Modell-Evaluierungs-Frameworks und verantwortungsvolle KI-Leitplanken, die modernste Modell-Fähigkeiten in messbaren Geschäftswert übersetzen. Derzeit bei Alibaba Cloud (EU), wo ich GenAI-Adoption bei Automotive-OEMs und KI-nativen Startups vorantreibe. Zuvor baute ich die Cloud- und Datenplattform bei Lotus Tech auf, die die UN R171.01-Zertifizierung — die weltweit erste Level-2-ADAS-Regulierung — direkt ermöglichte. 10+ Jahre Erfahrung in LLM/GenAI, autonomen Systemen, Cloud-Architektur (AWS, Kubernetes, Terraform) und Daten-Engineering. Dr. der Informatik. Speaker auf der TechAD Europe 2025. Y Combinator Alumni.',
      
      // Experience section
      'experience-title': 'Erfahrung',
      'experience-lotustech-title': 'Senior Algorithm Engineer',
      'experience-lotustech-description': 'Architektiert und verwaltet eine cloud-native SaaS-Plattform auf AWS zur Unterstützung der ADAS-Datenverarbeitung und datenschließender Kreisläufe für autonome Automobilsysteme. Überwachte Compliance, Datenlebenszyklus, Infrastrukturzuverlässigkeit und Leistungsoptimierung für ADAS-Workloads in hybriden Cloud-Architekturen. Baute Kubernetes-basierte Datenplattformen auf, die 10M+ tägliche Sensordatenpunkte mit MSK, Lambda, S3 und Redshift verarbeiten und automatisierte ML-Workflows für ADAS-Modelltraining implementieren. Führt Geschäftsentwicklungsinitiativen mit externen Automobilkunden durch—Sammlung von Anforderungen, Gestaltung technischer Vorschläge und Lieferung von POCs zur Projektgewinnung und Partnerschaftserweiterung.',
      'experience-aptiv-title': 'Senior Algorithm Engineer',
      'experience-aptiv-description': 'Leitete Radarverarbeitungsalgorithmen für Motional\'s Robotaxi, Verbesserung von Sensorfusions-Bibliotheken mit Python, C++ und internen cloud-basierten Toolchains. Leitete POC-Entwicklung von Spurwechselvorhersage und ADAS-Features für BMW- und Stellantis-Kunden. Bereitstellung von Fehlerbehandlungs-APIs mit ROS, die ASPICE-konforme Lösungen gewährleisten.',
      'experience-groupon-title': 'Software Engineer',
      'experience-groupon-description': 'Entwicklung von REST-APIs in Java und Scala, die 6M+ tägliche Kundenbenachrichtigungen und GDPR-Konformität für EMEA ermöglichten. Migration von Hive zu Spark, was die Leistung um das 10-fache steigerte und die Laufzeit der Datenpipeline um über 50% reduzierte.',
      'experience-auro-title': 'Robotics Engineer Intern',
      'experience-auro-description': 'Entwicklung eines selbstfahrenden Shuttles bei Auro Robotics, Implementierung von ROS-basierten Pfadplanern mit GPS und LiDAR. Optimierung der Navigation durch Simulationen, was Anerkennung am YC Demo Day und eine Investition von $2,1M einbrachte.',
      
      // Partners section
      'partners-title': 'Partner',
      
      // Work section
      'work-title': 'Alle Arbeiten',
      'work-autonomous': 'Autonomes Fahren',
      'work-startup': 'Startup-Erfahrung',
      'work-robotic': 'Robotikforschung',
      'work-bigdata': 'Data Engineering & Platforms',
      'work-ai': 'KI-Lösungen & Cloud',

      // Experience (Alibaba Cloud)
      'experience-alibaba-title': 'Senior Solutions Architect',
      'experience-alibaba-description': 'Entwurf und Lieferung von KI- und Cloud-Lösungen für Automotive-, IoT- und Enterprise-Kunden in Europa. Leitung von GenAI-Architektur-Engagements—RAG-Pipelines, Modell-Evaluierungs-Frameworks und Model-as-a-Service-Deployments auf Alibaba Cloud. Steuerung von Pre-Sales-Zyklen von Anfang bis Ende: Lösungsfindung, technische Angebote, POC-Lieferung und Entwicklung des Partner-Ökosystems.',

      // Connect section
      'connect-title': 'Lass Uns Verbinden',
      'connect-mail-label': 'E-Mail:',
      'connect-location-label': 'Standort:',
      'connect-location': 'Frankfurt, Deutschland',
      'claude-credit': 'Website entwickelt mit Claude Code'
    }
  },

  // Work gallery items
  workGallery: [
    {
      href: '/works/ai-solutions.html',
      img: '/assets/img/alibaba.jpg',
      hoverImg: null,
      alt: 'AI Solutions & Enterprise Cloud',
      titleKey: 'work-ai'
    },
    {
      href: '/works/autonomous-driving.html',
      img: '/assets/img/techAD.jpg',
      hoverImg: '/assets/img/iaa_aws.jpg',
      alt: 'Autonomous Driving',
      titleKey: 'work-autonomous'
    },
    {
      href: '/works/startup-experience.html',
      img: '/assets/img/yc2015.jpg',
      hoverImg: '/assets/img/auro.jpg',
      alt: 'Startup Experience',
      titleKey: 'work-startup'
    },
    {
      href: '/works/robotic-research.html',
      img: '/assets/img/robotic_research.jpg',
      hoverImg: '/assets/img/hexagon.gif',
      alt: 'Robotics Research',
      titleKey: 'work-robotic'
    },
    {
      href: '/works/big-data.html',
      img: '/assets/img/big_data.jpg',
      hoverImg: null,
      alt: 'Big Data!',
      titleKey: 'work-bigdata'
    }
  ],

  // Experience data
  experience: [
    {
      titleKey: 'experience-alibaba-title',
      years: '2026 Feb – 2026 Jul',
      company: 'Alibaba Cloud',
      descriptionKey: 'experience-alibaba-description'
    },
    {
      titleKey: 'experience-lotustech-title',
      years: '2022 Apr – 2026 Jan',
      company: 'Lotus Tech',
      descriptionKey: 'experience-lotustech-description'
    },
    {
      titleKey: 'experience-aptiv-title',
      years: '2019 Aug – 2022 Mar',
      company: 'Aptiv',
      descriptionKey: 'experience-aptiv-description'
    },
    {
      titleKey: 'experience-groupon-title',
      years: '2016 Feb – 2019 May',
      company: 'Groupon',
      descriptionKey: 'experience-groupon-description'
    },
    {
      titleKey: 'experience-auro-title',
      years: '2015',
      company: 'Auro Robotics (YC S15)',
      descriptionKey: 'experience-auro-description'
    }
  ],

  // Social links
  socialLinks: [
    {
      href: 'https://www.linkedin.com/in/song24/',
      ariaLabel: 'LinkedIn',
      svg: '<path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 11.028 15.396 10.204 14.094 10.204C12.792 10.204 11 11.028 11 13.396V19H8V8H11V9.765C12.396 7.179 15.604 7.056 16.894 9.411C17.604 10.716 17 12.525 17 13.396V19H20Z" fill="#333"/>'
    },
    {
      href: 'https://github.com/ysonggit',
      ariaLabel: 'GitHub',
      svg: '<path d="M12 0C5.373 0 0 5.373 0 12C0 17.627 3.432 22.346 8.206 23.981C8.806 24.094 9.026 23.73 9.026 23.416C9.026 23.137 9.015 22.338 9.009 21.297C5.672 22.045 4.968 19.614 4.968 19.614C4.422 18.217 3.633 17.853 3.633 17.853C2.546 17.083 3.714 17.097 3.714 17.097C4.914 17.182 5.548 18.342 5.548 18.342C6.602 20.149 8.287 19.672 9.051 19.37C9.168 18.567 9.489 17.998 9.843 17.657C7.128 17.316 4.263 16.249 4.263 11.621C4.263 10.291 4.722 9.174 5.463 8.287C5.334 7.943 4.923 6.676 5.559 4.986C5.559 4.986 6.601 4.621 9.001 6.146C9.937 5.879 10.961 5.745 11.985 5.74C13.009 5.745 14.033 5.879 14.969 6.146C17.369 4.621 18.411 4.986 18.411 4.986C19.047 6.676 18.636 7.943 18.507 8.287C19.248 9.174 19.707 10.291 19.707 11.621C19.707 16.259 16.837 17.311 14.117 17.647C14.552 18.057 14.952 18.867 14.952 20.092C14.952 21.791 14.937 22.996 14.937 23.416C14.937 23.733 15.157 24.101 15.762 23.981C20.568 22.346 24 17.627 24 12C24 5.373 18.627 0 12 0Z" fill="#333"/>'
    },
    {
      href: 'https://x.com/ysongtwitt',
      ariaLabel: 'X (Twitter)',
      svg: '<path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.171L10.956 14.933L4.991 21.75H1.681L9.41 12.92L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H19.025L6.953 4.126H4.911L17.083 19.77Z" fill="#333"/>'
    }
  ]
};