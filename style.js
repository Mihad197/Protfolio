// ... (অন্যান্য কোড অপরিবর্তিত) ...


document.addEventListener('DOMContentLoaded', function() {
    const navList = document.getElementById('nav-list');
    const mobileBtn = document.getElementById('mobile-menu-btn');

    mobileBtn.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Optional: hide menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navList.classList.remove('show');
        }
    });
});






// nav


    function animateCounters() {
        const metricItems = document.querySelectorAll('.metric-item');
        
        metricItems.forEach(item => {
            const counter = item.querySelector('.metric-number');
            const circle = item.querySelector('.metric-circle');
            
            if (counter.innerText === '0' || counter.innerText === '0%') {
                const target = +counter.getAttribute('data-target');
                const max = +circle.getAttribute('data-max'); // <--- নতুন: data-max ব্যবহার করা হলো
                
                let count = 0;
                const duration = 2000;
                const step = target / (duration / 10); 

                const updateCount = () => {
                    count += step;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        
                        // 🎯 বৃত্তাকার প্রোগ্রেস আপডেট: target এর ভিত্তিতে progress % গণনা করা হচ্ছে
                        const progress = (count / max) * 100;
                        circle.style.setProperty('--progress', `${progress}%`);
                        
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target;
                        if (target === 62) { // 62% SEO ট্রাফিকের জন্য % চিহ্ন যোগ করা হলো
                            counter.innerText += '%';
                        }
                        // অ্যানিমেশন শেষে progress এর আসল মান
                        circle.style.setProperty('--progress', `${(target / max) * 100}%`); 
                    }
                };
                updateCount();
            }
        });
    }

    const text1 = "I build digital experiences";
const text2 = "using modern technologies";
const text3 = "to make ideas come alive.";







// ... (অন্যান্য কোড অপরিবর্তিত) ...


// const target = document.querySelector("#aboutText");
// const fullText = target.textContent;
// let typingTimeout;

// // Typing function
// function startTyping() {
//   clearTimeout(typingTimeout);
//   target.textContent = "";
//   let i = 0;

//   function typeChar() {
//     if (i < fullText.length) {
//       target.textContent += fullText[i];
//       i++;
//       typingTimeout = setTimeout(typeChar, 30); // typing speed
//     }
//   }
//   typeChar();
// }

// // IntersectionObserver to trigger typing on scroll
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       startTyping(); // reset + retype every time
//     }
//   });
// }, { threshold: 0.5 });

// observer.observe(target);

// // Optional: trigger typing on every scroll while in viewport
// window.addEventListener("scroll", () => {
//   const rect = target.getBoundingClientRect();
//   if (rect.top < window.innerHeight && rect.bottom >= 0) {
//     startTyping();
//   }
// });



const target = document.querySelector("#aboutText");
const fullText = target.textContent;
let typingTimeout;

function startTyping() {
  clearTimeout(typingTimeout);
  target.textContent = "";
  target.classList.add("typing"); // cursor দেখাবে
  let i = 0;

  function typeChar() {
    if (i < fullText.length) {
      target.textContent += fullText[i];
      i++;
      typingTimeout = setTimeout(typeChar, 30); // typing speed
    } else {
      target.classList.remove("typing"); // typing শেষ হলে cursor remove
    }
  }
  typeChar();
}

// IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startTyping(); // reset + retype
    }
  });
}, { threshold: 0.5 });

observer.observe(target);

// Optional scroll trigger
window.addEventListener("scroll", () => {
  const rect = target.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    startTyping();
  }
});



    AOS.init({
            duration: 1000, 
            once: false,    // অ্যানিমেশন একবার দেখাবে
        });




        // nav


         const activePermanentClass = 'active-btn-style'; 
    
    // সমস্ত নেভিগেশন লিংক নির্বাচন করা হলো
    const allNavLinks = document.querySelectorAll('.main-nav a'); 

    // প্রতিটি লিংকে ক্লিক ইভেন্ট লিসেনার যোগ করা
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            // 1. সমস্ত লিংক থেকে স্থায়ী বাটন স্টাইল (.active-btn-style) মুছে ফেলা
            allNavLinks.forEach(nav => {
                nav.classList.remove(activePermanentClass);
                nav.classList.remove('active'); // যদি আপনার আন্ডারলাইনের জন্য 'active' লাগে
            });

            // 2. ক্লিক করা লিংকটিতে স্থায়ী বাটন স্টাইল যোগ করা
            // এটিই সেই লিংকটিকে Contact বাটনের মতো করে তুলবে
            this.classList.add(activePermanentClass);
        });
    });

    // পেজ লোড হওয়ার সময় 'HOME' লিংকটি স্বয়ংক্রিয়ভাবে Active করে রাখা
    window.addEventListener('load', () => {
        // প্রথমে সমস্ত লিংক থেকে active ক্লাস সরানো হয় যাতে কেবল HOME সক্রিয় থাকে
        allNavLinks.forEach(nav => {
            nav.classList.remove(activePermanentClass);
            nav.classList.remove('active'); 
        });

        // HOME লিংক খুঁজে এটিকে Active করা
        const homeLink = document.querySelector('.main-nav a[href="#home"]');
        if (homeLink) {
            homeLink.classList.add(activePermanentClass);
        }
        
        // যদি আপনি AOS ব্যবহার করেন, তবে এখানে ইনিশিয়ালাইজ করুন
        AOS.init(); 
    });



    // project


    // Modal element-কে সিলেক্ট করা
var modal = document.getElementById('aboutModal'); 

// Modal খোলার ফাংশন
function openAboutModal() {
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable body scroll
    }
}

// Modal বন্ধ করার ফাংশন
function closeAboutModal() {
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable body scroll
    }
}

// Esc Key চাপলে Modal বন্ধ করা
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeAboutModal();
    }
});

// Modal-এর বাইরে ক্লিক করলে বন্ধ করা
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeAboutModal();
    }
}); 



function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
