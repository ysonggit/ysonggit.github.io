// Shared template system for subpages
window.SubpageTemplate = {
  // Generate complete subpage HTML structure
  generateSubpage: function(config) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.title} - Yang Song</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@400;700&display=swap">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Yang Song, Ph.D.</h1>
      <div class="nav">
        <a href="#work" data-i18n="nav-work">Work</a>
        <a href="/" data-i18n="nav-info">Info</a>
        <a href="#connect" data-i18n="nav-connect">Connect</a>
        ${SharedComponents.generateLanguageSelector()}
      </div>
    </div>

    <div class="intro-section" id="info">
      <div class="intro-text">
        <h2 data-i18n="${config.titleKey}">${config.titleText}</h2>
        <p data-i18n="${config.descriptionKey}">
          ${config.description}
        </p>
        ${config.additionalContent || ''}
      </div>
      <div class="intro-image">
        ${this.generateIntroImages(config.images)}
      </div>
    </div>

    ${SharedComponents.generateExperienceSection()}
    ${SharedComponents.generateWorkSection()}
    ${SharedComponents.generateConnectSection()}
  </div>

  <!-- Shared JavaScript files -->
  <script src="/js/shared-data.js"></script>
  <script src="/js/shared-components.js"></script>
  <script src="/js/shared-init.js"></script>
  <script src="/js/scripts.js"></script>
  <script>
    // Add page-specific translations if any
    if (typeof pageTranslations !== 'undefined') {
      Object.keys(pageTranslations).forEach(lang => {
        Object.assign(SharedData.translations[lang], pageTranslations[lang]);
      });
    }
    
    // Initialize all shared functionality
    SharedInit.initializeAll();
  </script>
</body>
</html>`;
  },

  // Generate stacked images for intro section
  generateIntroImages: function(images) {
    if (!images || images.length === 0) return '';
    
    if (images.length === 1) {
      return `<img src="${images[0].src}" alt="${images[0].alt}">`;
    } else {
      return images.map(img => 
        `<img src="${img.src}" alt="${img.alt}" class="stacked-image">`
      ).join('\\n        ');
    }
  },

  // Predefined page configurations
  pageConfigs: {
    'autonomous-driving': {
      title: 'Autonomous Driving',
      titleKey: 'info-title',
      titleText: 'AUTONOMOUS DRIVING',
      descriptionKey: 'info-description',
      description: 'Led the development of advanced driver-assistance systems (ADAS) at Lotus Tech Innovation Centre, architecting comprehensive cloud infrastructure and data pipeline solutions that address critical bottlenecks in autonomous driving development. Built the Lotus Robotics Toolchain featuring RoboLogger data collection devices and RoboGalaxy SAAS platform, creating transparent "whitebox" solutions for global automotive partners. Specialized in cloud-native AWS architectures (ECS, Lambda, S3, MSK, Redshift), Kubernetes orchestration, real-time data processing pipelines, and scalable ML training infrastructure that have been validated in global production vehicles.',
      images: [
        { src: '/assets/img/iaa_aws.jpg', alt: 'Autonomous Driving' },
        { src: '/assets/img/techAD.jpg', alt: 'TechAD Conference' }
      ],
      additionalContent: `
        <div class="speaking-highlight">
          <h3>Featured Speaker</h3>
          <p><strong>TechAD Europe 2025</strong> - Presenting "Lotus Robotics Toolchain: Bridging the Gap Between Simulation and Real-World ADAS Development"</p>
          <p>Showcasing our end-to-end solution for automotive partners globally, from data collection to deployment-ready ADAS features.</p>
        </div>`
    },
    'startup-experience': {
      title: 'Startup Experience',
      titleKey: 'info-title', 
      titleText: 'STARTUP EXPERIENCE',
      descriptionKey: 'info-description',
      description: 'In the summer of 2015, I joined Auro Robotics as a Motion Planning Engineer during their Y Combinator batch, when Sam Altman was CEO...',
      images: [
        { src: '/assets/img/samaltman.jpg', alt: 'Startup Experience' },
        { src: '/assets/img/auro.jpg', alt: 'Auro Robotics' }
      ]
    },
    'robotic-research': {
      title: 'Robotic Research',
      titleKey: 'info-title',
      titleText: 'ROBOTIC RESEARCH',
      descriptionKey: 'info-description', 
      description: 'Academic and industry research focused on robotics, autonomous systems, and human-robot interaction...',
      images: [
        { src: '/assets/img/robotic_research.jpg', alt: 'Robotic Research' },
        { src: '/assets/img/nao_robot.jpg', alt: 'NAO Robot' }
      ]
    },
    'big-data': {
      title: 'Big Data',
      titleKey: 'info-title',
      titleText: 'BIG DATA!',
      descriptionKey: 'info-description',
      description: 'Extensive experience in cloud infrastructure, big data processing, and analytics across multiple domains...',
      images: [
        { src: '/assets/img/big_data.jpg', alt: 'Big Data' }
      ]
    }
  }
};