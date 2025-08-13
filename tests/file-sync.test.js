/**
 * File Synchronization Test Suite
 * 
 * Tests specifically focused on preventing file sync issues between
 * root and public directories - a major source of bugs
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

describe('File Synchronization Tests', () => {
  
  // Critical files that must be identical
  const criticalSyncFiles = {
    'shared-data.js': ['js/shared-data.js', 'public/js/shared-data.js'],
    'shared-components.js': ['js/shared-components.js', 'public/js/shared-components.js', 'public/shared-components.js'],
    'shared-init.js': ['js/shared-init.js', 'public/js/shared-init.js', 'public/shared-init.js'],
    'styles.css': ['css/styles.css', 'public/css/styles.css']
  };
  
  test('should have identical content for critical shared files', () => {
    Object.entries(criticalSyncFiles).forEach(([fileName, paths]) => {
      const absolutePaths = paths.map(p => path.join(__dirname, '..', p));
      const existingPaths = absolutePaths.filter(p => fs.existsSync(p));
      
      if (existingPaths.length > 1) {
        const checksums = existingPaths.map(filePath => {
          const content = fs.readFileSync(filePath, 'utf8');
          return crypto.createHash('md5').update(content).digest('hex');
        });
        
        // All checksums should be identical
        expect(new Set(checksums).size).toBe(1);
      }
    });
  });
  
  test('should have work pages synchronized between root and public', () => {
    const rootWorksDir = path.join(__dirname, '..', 'works');
    const publicWorksDir = path.join(__dirname, '..', 'public', 'works');
    
    if (fs.existsSync(rootWorksDir) && fs.existsSync(publicWorksDir)) {
      const rootFiles = fs.readdirSync(rootWorksDir).filter(f => f.endsWith('.html'));
      
      rootFiles.forEach(file => {
        const rootPath = path.join(rootWorksDir, file);
        const publicPath = path.join(publicWorksDir, file);
        
        if (fs.existsSync(publicPath)) {
          const rootContent = fs.readFileSync(rootPath, 'utf8');
          const publicContent = fs.readFileSync(publicPath, 'utf8');
          
          expect(rootContent).toBe(publicContent);
        }
      });
    }
  });
  
  test('should not have orphaned files in public directory', () => {
    const checkDirs = [
      { root: 'js', public: 'public/js' },
      { root: 'css', public: 'public/css' },
      { root: 'works', public: 'public/works' }
    ];
    
    checkDirs.forEach(({ root, public }) => {
      const rootDir = path.join(__dirname, '..', root);
      const publicDir = path.join(__dirname, '..', public);
      
      if (fs.existsSync(rootDir) && fs.existsSync(publicDir)) {
        const rootFiles = fs.readdirSync(rootDir);
        const publicFiles = fs.readdirSync(publicDir);
        
        // Every file in public should have a corresponding file in root
        // (exception: some generated files might be public-only)
        publicFiles.forEach(file => {
          if (!file.startsWith('.') && !file.includes('generated')) {
            expect(rootFiles.includes(file) || file === 'shared-components.js' || file === 'shared-data.js' || file === 'shared-init.js').toBe(true);
          }
        });
      }
    });
  });
  
  test('should have consistent asset paths', () => {
    const assetDirs = [
      path.join(__dirname, '..', 'assets', 'img'),
      path.join(__dirname, '..', 'public', 'assets', 'img')
    ];
    
    if (assetDirs.every(dir => fs.existsSync(dir))) {
      const rootAssets = fs.readdirSync(assetDirs[0]);
      const publicAssets = fs.readdirSync(assetDirs[1]);
      
      // Assets should be identical
      expect(rootAssets.sort()).toEqual(publicAssets.sort());
    }
  });
}