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
      'info-description': 'Senior Algorithm Engineer @LotusTech specializing in AWS cloud infrastructure, data closed-loop engineering, and ADAS development for autonomous driving systems. I build scalable cloud-native architectures with deep experience in AWS services, Kubernetes orchestration, and real-time V2X data processing pipelines. My expertise spans distributed systems, AI infrastructure, data engineering toolchains, compliance frameworks (data governance, GDPR), and agile project management—all crucial for scalable AI and autonomous driving applications. Passionate about bridging business needs with technical innovations, I deliver tailored cloud architecture solutions that drive efficiency and scalability. Proficient in Python, Java, C++ (ROS), and cloud DevOps practices. Led development of enterprise-grade data platforms that process millions of sensor data points daily, enabling rapid ADAS iteration cycles through data-driven workflows and automated ML pipelines.',
      
      // Experience section
      'experience-title': 'Experience',
      'experience-lotustech-title': 'Senior Algorithm Engineer',
      'experience-lotustech-description': 'Architected and manage a cloud-native SaaS platform on AWS supporting ADAS data processing and data-closed loops for autonomous automotive systems. Oversaw compliance, data lifecycle, infrastructure reliability, and performance optimization for ADAS workloads across hybrid cloud architectures. Built Kubernetes-based data platforms that process 10M+ daily sensor data points using MSK, Lambda, S3, and Redshift, implementing automated ML workflows for ADAS model training. Drive business development initiatives with external automotive clients—gathering requirements, shaping technical proposals, and delivering POCs to win projects and expand partnerships.',
      'experience-aptiv-title': 'Senior Algorithm Engineer',
      'experience-aptiv-description': 'Led radar processing algorithms for Motional\'s Robotaxi, enhancing sensor fusion libraries with Python, C++, and in-house cloud-based toolchains. Led POC development of lane change prediction and ADAS features for BMW and Stellantis clients. Delivered error-handling APIs with ROS, ensuring ASPICE-compliant solutions.',
      'experience-groupon-title': 'Software Engineer',
      'experience-groupon-description': 'Built REST APIs in Java and Scala, enabling 6M+ daily customer notifications and GDPR compliance for EMEA. Migrated Hive to Spark, boosting performance 10x and cutting data pipeline runtime by 50%+. Designed and implemented scalable data processing architectures using Apache Spark, Kafka, and cloud-based data warehouses for real-time analytics and customer insights.',
      'experience-auro-title': 'Robotics Engineer Intern',
      'experience-auro-description': 'Engineered a self-driving shuttle at Auro Robotics, implementing ROS-based path planners with GPS and LiDAR. Developed cloud-based simulation and testing infrastructure for autonomous navigation algorithms. Optimized navigation through simulations, earning YC Demo Day spotlight and $2.1M investment. Built scalable data collection and processing pipelines for sensor fusion and path planning optimization.',
      
      // Partners section
      'partners-title': 'Partners',
      
      // Work section
      'work-title': 'All Work',
      'work-autonomous': 'Autonomous Driving',
      'work-startup': 'Startup Experience',
      'work-robotic': 'Robotic Research',
      'work-bigdata': 'Big Data!',
      
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
      'info-description': 'Senior Algorithm Engineer @LotusTech, spezialisiert auf AWS Cloud-Infrastruktur, geschlossene Datenschleifen-Engineering und ADAS-Entwicklung für autonome Fahrsysteme. Ich baue skalierbare cloud-native Architekturen mit umfassender Erfahrung in AWS-Services, Kubernetes-Orchestrierung und Echtzeit-V2X-Datenverarbeitungspipelines. Meine Expertise umfasst verteilte Systeme, KI-Infrastruktur, Daten-Engineering-Toolchains, Compliance-Frameworks (Data Governance, GDPR) und agiles Projektmanagement—alles entscheidend für skalierbare KI- und autonome Fahranwendungen. Leidenschaftlich darin, Geschäftsanforderungen mit technischen Innovationen zu verbinden, liefere ich maßgeschneiderte Cloud-Architekturlösungen, die Effizienz und Skalierbarkeit vorantreiben. Versiert in Python, Java, C++ (ROS) und Cloud-DevOps-Praktiken. Leitete Entwicklung unternehmensweiter Datenplattformen, die täglich Millionen von Sensordatenpunkten verarbeiten und schnelle ADAS-Iterationszyklen durch datengetriebene Workflows und automatisierte ML-Pipelines ermöglichen.',
      
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
      'work-bigdata': 'Big Data!',
      
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
      hoverImg: '/assets/img/nao_robot.jpg',
      alt: 'Robotic Research',
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
      titleKey: 'experience-lotustech-title',
      years: '2022 – Current',
      company: 'Lotus Tech',
      descriptionKey: 'experience-lotustech-description'
    },
    {
      titleKey: 'experience-aptiv-title',
      years: '2019 – 2022',
      company: 'Aptiv',
      descriptionKey: 'experience-aptiv-description'
    },
    {
      titleKey: 'experience-groupon-title',
      years: '2016 – 2019',
      company: 'Groupon',
      descriptionKey: 'experience-groupon-description'
    },
    {
      titleKey: 'experience-auro-title',
      years: '2015 – 2015',
      company: 'Auro Robotics',
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