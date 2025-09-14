const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const fse = require('fs-extra');

// Set up Nunjucks to use src/templates
nunjucks.configure('src/templates', { autoescape: true });

// Create dist folder if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Pages to generate
const pages = [
  { template: 'index.njk', filename: 'index.html', page_class: 'index', page: 'index', title: 'CleanSite' },
  { template: 'about.njk', filename: 'about.html', page_class: 'about', page: 'about', title: 'About | CleanSite' },
  { template: 'contact.njk', filename: 'contact.html', page_class: 'contact', page: 'contact', title: 'Contact | CleanSite' },
];

// Render each page
pages.forEach(page => {
  const rendered = nunjucks.render(page.template, {
    page_class: page.page_class,
    page: page.page,
    title: page.title
  });
  fs.writeFileSync(path.join('dist', page.filename), rendered);
  console.log(`${page.filename} generated`);
});

// Copy assets folder to dist
fse.copySync('src/assets', 'dist/assets');
console.log('Assets copied to dist/assets');
