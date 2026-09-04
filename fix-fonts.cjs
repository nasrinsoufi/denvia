const fs = require('fs');

const files = [
  'src/components/About.tsx',
  'src/components/Blog.tsx',
  'src/components/Contact.tsx',
  'src/components/Doctors.tsx',
  'src/components/Services.tsx',
  'src/components/Testimonials.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the specific class string to add font-sans and remove uppercase/tracking-widest which might cause issues in Persian
  content = content.replace(/text-accent text-sm font-semibold uppercase tracking-widest/g, 'text-accent text-sm font-semibold font-sans');
  
  fs.writeFileSync(file, content);
});
