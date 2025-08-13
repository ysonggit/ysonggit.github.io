/**
 * Website Integrity Test Suite
 * 
 * Based on debugging experiences, these tests prevent common issues:
 * - File synchronization between root and public directories
 * - Template loading system integrity
 * - Image reference consistency
 * - Shared component version conflicts
 * - CSS animation functionality
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Website Integrity Tests', () => {
  
  // Test 1: File Synchronization Between Root and Public
  describe('File Synchronization', () => {
    
    test('should have identical shared JS files in root and public', () => {
      const sharedFiles = ['shared-data.js', 'shared-components.js', 'shared-init.js'];
      
      sharedFiles.forEach(file => {
        const rootPath = path.join(__dirname, '..', 'js', file);
        const publicPath = path.join(__dirname, '..', 'public', 'js', file);
        
        expect(fs.existsSync(rootPath)).toBe(true);
        expect(fs.existsSync(publicPath)).toBe(true);
        
        const rootContent = fs.readFileSync(rootPath, 'utf8');
        const publicContent = fs.readFileSync(publicPath, 'utf8');
        
        expect(rootContent).toBe(publicContent);
      });
    });
    
    test('should have identical work pages in root and public', () => {
      const workPages = [
        'autonomous-driving.html',
        'robotic-research.html', 
        'startup-experience.html',
        'big-data.html'
      ];
      
      workPages.forEach(page => {
        const rootPath = path.join(__dirname, '..', 'works', page);
        const publicPath = path.join(__dirname, '..', 'public', 'works', page);
        
        if (fs.existsSync(rootPath)) {
          expect(fs.existsSync(publicPath)).toBe(true);
          
          const rootContent = fs.readFileSync(rootPath, 'utf8');
          const publicContent = fs.readFileSync(publicPath, 'utf8');
          
          expect(rootContent).toBe(publicContent);
        }
      });
    });
    
    test('should have identical CSS files', () => {
      const rootCSS = path.join(__dirname, '..', 'css', 'styles.css');
      const publicCSS = path.join(__dirname, '..', 'public', 'css', 'styles.css');
      
      expect(fs.existsSync(rootCSS)).toBe(true);
      expect(fs.existsSync(publicCSS)).toBe(true);
      
      const rootContent = fs.readFileSync(rootCSS, 'utf8');
      const publicContent = fs.readFileSync(publicCSS, 'utf8');
      
      expect(rootContent).toBe(publicContent);
    });
  });

  // Test 2: Image Reference Consistency
  describe('Image References', () => {
    
    test('should not contain old image references', () => {
      const deprecatedImages = ['IMG_2829.jpg', 'iaa.jpg'];
      const filesToCheck = [
        ...getHTMLFiles(),
        ...getJSFiles()
      ];
      
      filesToCheck.forEach(filePath => {
        const content = fs.readFileSync(filePath, 'utf8');
        
        deprecatedImages.forEach(deprecatedImage => {
          expect(content).not.toContain(deprecatedImage);
        });
      });
    });
    
    test('should use correct connect banner image', () => {
      const filesToCheck = getJSFiles();
      
      filesToCheck.forEach(filePath => {
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('connect-banner')) {
          expect(content).toContain('lotusfactory.jpg');
          expect(content).not.toContain('IMG_2829.jpg');
        }
      });
    });
    
    test('should use correct autonomous driving thumbnails', () => {
      const filesToCheck = getJSFiles();
      
      filesToCheck.forEach(filePath => {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Should use techAD.jpg as default, iaa_aws.jpg as hover
        if (content.includes('autonomous-driving.html')) {
          expect(content).toContain('techAD.jpg');
          expect(content).toContain('iaa_aws.jpg');
        }
      });
    });
  });

  // Test 3: Shared Component Integrity
  describe('Shared Components', () => {
    
    test('should have all required shared component functions', () => {
      const sharedComponentsPath = path.join(__dirname, '..', 'js', 'shared-components.js');
      const content = fs.readFileSync(sharedComponentsPath, 'utf8');
      
      const requiredFunctions = [
        'getHeader',
        'getWorkGallery', 
        'getConnectSection',
        'getExperienceSection',
        'getScriptsSection'
      ];
      
      requiredFunctions.forEach(func => {
        expect(content).toContain(`${func}:`);
      });
    });
    
    test('should have consistent function signatures across files', () => {
      const rootFile = path.join(__dirname, '..', 'js', 'shared-components.js');
      const publicFile = path.join(__dirname, '..', 'public', 'js', 'shared-components.js');
      
      if (fs.existsSync(publicFile)) {
        const rootContent = fs.readFileSync(rootFile, 'utf8');
        const publicContent = fs.readFileSync(publicFile, 'utf8');
        
        // Extract function names
        const rootFunctions = extractFunctionNames(rootContent);
        const publicFunctions = extractFunctionNames(publicContent);
        
        expect(rootFunctions).toEqual(publicFunctions);
      }
    });
  });

  // Test 4: Template Loading System
  describe('Template Loading', () => {
    
    test('should have template-loader.js in both directories', () => {
      const rootLoader = path.join(__dirname, '..', 'js', 'template-loader.js');
      const publicLoader = path.join(__dirname, '..', 'public', 'js', 'template-loader.js');
      
      expect(fs.existsSync(rootLoader)).toBe(true);
      expect(fs.existsSync(publicLoader)).toBe(true);
    });
    
    test('should have correct template data-attributes in work pages', () => {
      const workPages = getHTMLFiles().filter(file => file.includes('/works/'));
      
      workPages.forEach(filePath => {
        const content = fs.readFileSync(filePath, 'utf8');
        const dom = new JSDOM(content);
        
        // Check for required template attributes
        const headerTemplate = dom.window.document.querySelector('[data-template="header"]');
        const connectTemplate = dom.window.document.querySelector('[data-template="connect-section"]');
        
        if (content.includes('data-template')) {
          expect(headerTemplate || content.includes('class="header"')).toBeTruthy();
          expect(connectTemplate || content.includes('class="connect-section"')).toBeTruthy();
        }
      });
    });
  });

  // Test 5: CSS Animation System
  describe('CSS Animations', () => {
    
    test('should have smooth experience section animations', () => {
      const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
      const content = fs.readFileSync(cssPath, 'utf8');
      
      // Check for proper animation properties
      expect(content).toContain('.experience-details');
      
      // Should NOT use display: none for animations (causes jerky transitions)
      const experienceDetailsMatch = content.match(/\.experience-details\s*\{[^}]+\}/);
      if (experienceDetailsMatch) {
        const experienceDetailsRule = experienceDetailsMatch[0];
        // Should use max-height and opacity instead of display for smooth animations
        expect(experienceDetailsRule).not.toContain('display: none');
      }
    });
    
    test('should have proper transition properties', () => {
      const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
      const content = fs.readFileSync(cssPath, 'utf8');
      
      // Check for transition properties on animated elements
      if (content.includes('.experience-details')) {
        expect(content).toMatch(/transition.*max-height|max-height.*transition/);
      }
    });
  });

  // Test 6: Email and Contact Information
  describe('Contact Information', () => {
    
    test('should use correct email address', () => {
      const filesToCheck = [...getHTMLFiles(), ...getJSFiles()];
      
      filesToCheck.forEach(filePath => {
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('@')) {
          // Should use info@ysong.dev, not old emails
          if (content.includes('ysong.sc@gmail.com')) {
            expect(content).toContain('info@ysong.dev');
          }
        }
      });
    });
  });
});

// Helper functions
function getHTMLFiles() {
  const htmlFiles = [];
  const searchDirs = [
    path.join(__dirname, '..'),
    path.join(__dirname, '..', 'works'),
    path.join(__dirname, '..', 'public'),
    path.join(__dirname, '..', 'public', 'works')
  ];
  
  searchDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir)
        .filter(file => file.endsWith('.html'))
        .map(file => path.join(dir, file));
      htmlFiles.push(...files);
    }
  });
  
  return htmlFiles;
}

function getJSFiles() {
  const jsFiles = [];
  const searchDirs = [
    path.join(__dirname, '..', 'js'),
    path.join(__dirname, '..', 'public', 'js'),
    path.join(__dirname, '..')
  ];
  
  searchDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir)
        .filter(file => file.endsWith('.js'))
        .map(file => path.join(dir, file));
      jsFiles.push(...files);
    }
  });
  
  return jsFiles;
}

function extractFunctionNames(jsContent) {
  const functionRegex = /(\w+):\s*function\s*\(/g;
  const matches = [];
  let match;
  
  while ((match = functionRegex.exec(jsContent)) !== null) {
    matches.push(match[1]);
  }
  
  return matches.sort();
}