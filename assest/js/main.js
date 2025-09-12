// slider start
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Small devices
    },
    745: {
      slidesPerView: 2, // Medium devices
    },
    1024: {
      slidesPerView: 3, // Large devices
    }
  }
});


// bottom to top button 

   window.onscroll = function() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };


    // Scroll to top smoothly
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }



// Fade-in on scroll using IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: only animate once
    }
  });
}, {
  threshold: 0.3 // element should be 30% visible
});

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});

// show message

 function sendMessage() {
    const email = document.getElementById('floatingInput').value.trim();
    const subject = document.getElementById('floatingtext').value.trim();
    const message = document.getElementById('floatingTextarea').value.trim();

    if (!email || !subject || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

    const phoneNumber = '923333983684'; // WhatsApp number without '+'
    const text = `Email: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, '_blank');
  }


