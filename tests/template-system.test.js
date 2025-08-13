/**
 * Template System Test Suite
 * 
 * Tests the template loading system that caused connect banner issues
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Template System Tests', () => {
  
  test('should have template-loader.js available', () => {
    const templateLoaderPaths = [
      path.join(__dirname, '..', 'js', 'template-loader.js'),
      path.join(__dirname, '..', 'public', 'js', 'template-loader.js')
    ];
    
    // At least one should exist
    const exists = templateLoaderPaths.some(p => fs.existsSync(p));
    expect(exists).toBe(true);
  });
  
  test('should have all required template functions in shared-components', () => {
    const sharedComponentsPaths = [
      path.join(__dirname, '..', 'js', 'shared-components.js'),
      path.join(__dirname, '..', 'public', 'js', 'shared-components.js')
    ];
    
    sharedComponentsPaths.forEach(filePath => {
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Should have all essential template functions
        expect(content).toContain('getConnectSection');
        expect(content).toContain('getHeader');
        expect(content).toContain('getWorkGallery');
        expect(content).toContain('getExperienceSection');
      }
    });
  });
  
  test('should have correct connect section template with banner', () => {
    const sharedComponentsPaths = [
      path.join(__dirname, '..', 'js', 'shared-components.js'),
      path.join(__dirname, '..', 'public', 'js', 'shared-components.js')
    ];
    
    sharedComponentsPaths.forEach(filePath => {
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('getConnectSection')) {
          expect(content).toContain('connect-banner');
          expect(content).toContain('lotusfactory.jpg');
          expect(content).not.toContain('IMG_2829.jpg');
        }
      }
    });
  });
  
  test('should have proper template data attributes in HTML files', () => {
    const workFiles = [
      'works/autonomous-driving.html',
      'works/robotic-research.html', 
      'works/startup-experience.html',
      'works/big-data.html',
      'public/works/autonomous-driving.html',
      'public/works/robotic-research.html'
    ];
    
    workFiles.forEach(relativePath => {
      const filePath = path.join(__dirname, '..', relativePath);
      
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // If using template system, should have proper attributes
        if (content.includes('data-template')) {
          expect(content).toContain('data-template="connect-section"');
          expect(content).toContain('shared-components.js');
        }
      }
    });
  });
  
  test('should have consistent template loading approach across pages', () => {
    const workFiles = [
      'works/autonomous-driving.html',
      'works/robotic-research.html', 
      'works/startup-experience.html',
      'works/big-data.html'
    ];
    
    const templateApproaches = [];
    
    workFiles.forEach(relativePath => {
      const filePath = path.join(__dirname, '..', relativePath);
      
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        const usesDataTemplate = content.includes('data-template');
        const usesStaticHTML = content.includes('connect-banner') && !usesDataTemplate;
        
        templateApproaches.push({
          file: relativePath,
          approach: usesDataTemplate ? 'template' : usesStaticHTML ? 'static' : 'unknown'
        });
      }
    });
    
    // All pages should use the same approach
    const approaches = templateApproaches.map(t => t.approach);
    const uniqueApproaches = [...new Set(approaches)];
    
    expect(uniqueApproaches.length).toBeLessThanOrEqual(1);
  });
  
  test('should have proper script loading order in template pages', () => {
    const templateBasedFiles = [
      'works/autonomous-driving.html',
      'works/robotic-research.html'
    ];
    
    templateBasedFiles.forEach(relativePath => {
      const filePath = path.join(__dirname, '..', relativePath);
      
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('data-template')) {
          // Should load shared-components.js before template-loader.js
          const sharedComponentsIndex = content.indexOf('shared-components.js');
          const templateLoaderIndex = content.indexOf('template-loader.js');
          
          if (sharedComponentsIndex !== -1 && templateLoaderIndex !== -1) {
            expect(sharedComponentsIndex).toBeLessThan(templateLoaderIndex);
          }
        }
      }
    });
  });
}