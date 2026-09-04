const fs = require('fs');

const files = [
  'src/App.tsx',
  'src/components/About.tsx',
  'src/components/Blog.tsx',
  'src/components/Contact.tsx',
  'src/components/Doctors.tsx',
  'src/components/Footer.tsx',
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/PatientJourney.tsx',
  'src/components/Services.tsx',
  'src/components/Testimonials.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/text-denvia-navy/g, 'text-text-primary');
  content = content.replace(/text-denvia-text-secondary/g, 'text-text-secondary');
  content = content.replace(/text-denvia-text-muted/g, 'text-text-muted');
  
  content = content.replace(/bg-denvia-teal-light/g, 'bg-accent-soft');
  content = content.replace(/bg-denvia-teal/g, 'bg-accent');
  content = content.replace(/text-denvia-teal/g, 'text-accent');
  content = content.replace(/border-denvia-teal/g, 'border-accent');
  content = content.replace(/ring-denvia-teal/g, 'ring-accent');
  content = content.replace(/shadow-denvia-teal/g, 'shadow-accent');
  
  content = content.replace(/border-denvia-border/g, 'border-border');
  content = content.replace(/bg-denvia-border/g, 'bg-border');
  content = content.replace(/hover:bg-denvia-navy/g, 'hover:bg-accent-soft');
  
  content = content.replace(/bg-denvia-card-hover/g, 'bg-surface-hover');
  content = content.replace(/hover:bg-denvia-card-hover/g, 'hover:bg-surface-hover');
  
  content = content.replace(/text-denvia-text-footer-secondary/g, 'text-text-muted');
  
  content = content.replace(/bg-white/g, 'bg-surface');
  content = content.replace(/bg-denvia-blue-light/g, 'bg-bg-secondary');
  
  fs.writeFileSync(file, content);
});
