# Website Integrity Test Suite

This test suite was created based on recurring debugging issues and is designed to prevent common website problems.

## 🔍 Issues These Tests Prevent

### 1. File Synchronization Issues
- **Problem**: Root and public directories getting out of sync
- **Symptoms**: Features work locally but break in deployment
- **Tests**: `file-sync.test.js`, `website-integrity.test.js`

### 2. Template Loading Failures  
- **Problem**: Missing or outdated shared components
- **Symptoms**: Connect banner disappearing, broken layouts
- **Tests**: `template-system.test.js`

### 3. Image Reference Inconsistencies
- **Problem**: Old image paths breaking layouts
- **Symptoms**: Broken images, wrong thumbnails
- **Tests**: Image reference tests in `website-integrity.test.js`

### 4. CSS Animation Issues
- **Problem**: Using `display: none` preventing smooth transitions
- **Symptoms**: Jerky animations, stuck experience toggles
- **Tests**: CSS animation tests

## 🚀 Running the Tests

```bash
# Install dependencies
cd tests
npm install

# Run all tests
npm test

# Run specific test suites
npm run sync-check      # File synchronization
npm run image-check     # Image references  
npm run component-check # Shared components

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📋 Test Categories

### File Synchronization Tests
- ✅ Identical shared JS files across directories
- ✅ Synchronized work pages between root/public
- ✅ CSS file consistency
- ✅ No orphaned files in public directory
- ✅ Asset path consistency

### Template System Tests
- ✅ Template loader availability
- ✅ Required template functions exist
- ✅ Connect section template integrity
- ✅ Proper data attributes in HTML
- ✅ Consistent template approach
- ✅ Correct script loading order

### Image Reference Tests
- ✅ No deprecated image references (IMG_2829.jpg, old iaa.jpg)
- ✅ Correct connect banner image (lotusfactory.jpg)
- ✅ Proper autonomous driving thumbnails
- ✅ Image path consistency

### CSS Animation Tests
- ✅ Smooth experience section animations
- ✅ Proper transition properties
- ✅ No `display: none` in animated elements

### Contact Information Tests
- ✅ Correct email addresses
- ✅ Consistent contact details

## 🔧 Continuous Integration

Add to your CI/CD pipeline:

```yaml
# .github/workflows/test.yml
name: Website Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: cd tests && npm ci
      - run: cd tests && npm test
```

## 🐛 Debugging Based on Test Results

### If File Sync Tests Fail:
```bash
# Re-sync files
cp -r js/* public/js/
cp -r works/* public/works/
cp css/styles.css public/css/
```

### If Image Reference Tests Fail:
```bash
# Find and replace deprecated images
find . -name "*.html" -o -name "*.js" | xargs sed -i 's/IMG_2829.jpg/lotusfactory.jpg/g'
find . -name "*.html" -o -name "*.js" | xargs sed -i 's/old-image.jpg/new-image.jpg/g'
```

### If Template Tests Fail:
- Check that `shared-components.js` has all required functions
- Verify template loading script order
- Ensure data-template attributes are correct

## 📈 Adding New Tests

When you encounter a new bug:

1. **Identify the root cause**
2. **Create a test that would have caught it**
3. **Add to appropriate test file**
4. **Update this README**

Example:
```javascript
test('should prevent new bug X', () => {
  // Test that prevents the bug you just fixed
});
```

## 🎯 Test Philosophy

These tests follow the principle of "test what breaks":
- **Focus on real issues** encountered during debugging
- **Prevent regressions** of fixed bugs  
- **Catch integration problems** early
- **Maintain system integrity** across deployments