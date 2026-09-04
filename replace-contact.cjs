const fs = require('fs');

let file = 'src/components/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/className="w-full bg-surface border/g, 'className="w-full bg-bg-secondary border');
content = content.replace(/className="w-full bg-accent hover:bg-accent-soft text-white/g, 'className="w-full bg-accent hover:bg-accent-secondary text-bg-primary');

fs.writeFileSync(file, content);

let footer = 'src/components/Footer.tsx';
let footerContent = fs.readFileSync(footer, 'utf8');
footerContent = footerContent.replace(/text-white/g, 'text-text-primary');
footerContent = footerContent.replace(/bg-surface\/10/g, 'bg-bg-secondary');
fs.writeFileSync(footer, footerContent);

let services = 'src/components/Services.tsx';
let servicesContent = fs.readFileSync(services, 'utf8');
servicesContent = servicesContent.replace(/group-hover:text-white/g, 'group-hover:text-text-primary');
fs.writeFileSync(services, servicesContent);

let docs = 'src/components/Doctors.tsx';
let docsContent = fs.readFileSync(docs, 'utf8');
docsContent = docsContent.replace(/text-white/g, 'text-text-primary');
fs.writeFileSync(docs, docsContent);
