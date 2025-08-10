document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handling (simple client-side)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if(!name || !email || !message){
      alert('Please fill all fields before sending.');
      return;
    }

    // Show success (replace with real form handling / API if needed)
    alert('Thanks, ' + name + '! Your message was sent (demo).');
    contactForm.reset();
  });
}

// Copy email button
const copyBtn = document.getElementById('copyEmail');
if(copyBtn){
  copyBtn.addEventListener('click', () => {
    const email = document.getElementById('myEmail').textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
      copyBtn.textContent = 'Copied';
      setTimeout(()=> copyBtn.textContent = 'Copy', 1400);
    }).catch(()=> alert('Copy not supported'));
  });
}

// Keyboard shortcut: press "/" to go to top, Ctrl/Cmd+K -> projects
document.addEventListener('keydown', (e) => {
  if(e.key === '/'){
    e.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
  }
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({behavior:'smooth'});
  }
});

// Small accessible focus outline for keyboard users
document.body.addEventListener('keydown', function(e){
  if(e.key === 'Tab'){
    document.documentElement.classList.add('show-focus');
  }
});
