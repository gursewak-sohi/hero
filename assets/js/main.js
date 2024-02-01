(function () {

    // JS loaded
    let body = document.body;
    body.classList.add('js-loaded');

    let lastWindowWidth = window.innerWidth;

    // Reload window on page width resize
    window.addEventListener('resize', function() {
        let currentWindowWidth = window.innerWidth;
        if (currentWindowWidth !== lastWindowWidth) {
            // Update the last known width
            lastWindowWidth = currentWindowWidth;

            // Reload the page
            window.location.reload();
            window.scrollTo(0, 0);
        }
    });

    // Viewport Height
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    });


    let smWidth;
    screen.width < 768
        ? smWidth = true
        : smWidth = false;

    let smHeight;
    screen.height < 768
        ? smHeight = true
        : smHeight = false;
        

    // Init GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (!smWidth) {
        ScrollSmoother.create({
            smooth: 0.5, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true, // looks for data-speed and data-lag attributes on elements
        });
    }
  
    // Animations
    let duneTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#dune-section",
            start: "top center",
            end: "bottom center",
            scrub: 1,
            pin: false,
            markers: false,
        }
    });
    
    // Scroll-triggered animation for #book-block
    gsap.to("#book-block", {
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
            trigger: "#book-block",
            start: "top bottom", 
            end: "bottom top",
            scrub: true,
        }
    });

    // duneTL
    duneTL.to("#dune-section .car", {
            scale: 2,
            transformOrigin: "top right",
            ease: "none",
        })
        .to("#dune-section .bg", {
            scale: 1.1,
            transformOrigin: "top center",
            ease: "none",
        }, "<")
        .to("#dune-section .text-section", {
            x: () => -(document.querySelector('#dune-section .text-section').offsetWidth + window.innerWidth),
            ease: "none",
            
        }, "<")
        .to("#dune-section .car", {
            // yoyo: true,
            // repeat: 2,
            y: "-=10",
            ease: "none",
        }, "<")
        .to("#dune-section .driver", {
            // yoyo: true,
            // repeat: 2,
            y: "+=20",
            ease: "none",
        }, "<")
        

        let cabanaTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#canbana-section",
                start: "top center",
                end: "bottom center",
                scrub: 1,
                pin: false,
                // markers: true,
            }
        });

        
        cabanaTL.to("#canbana-section .cabana-video", {
            scale: 1,
            ease: "none",
        })
        .to("#canbana-section .cabana-sit", {
            scale: 1,
            ease: "none",
        }, "<")
        .to("#canbana-section .text-section", {
            x: () => -(document.querySelector('#canbana-section .text-section').offsetWidth + window.innerWidth),
            ease: "none",
        }, "<")

        let baloonTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#balloon-section",
                start: "top center",
                end: "bottom center",
                scrub: 1,
                pin: false,
                // markers: true,
            }
        });

        
        baloonTL.to("#balloon-section .people", {
            scale: 2.3,
            ease: "none",
            transformOrigin: "center right",
        })
        .to("#balloon-section .bg", {
            scale: 1.3,
            filter: 'blur(0px)',
            ease: "none",
            
        }, "<")
        .to("#balloon-section .balloon-lg", {
            scale: 1.3,
            filter: 'blur(0px)',
            ease: "none",
        }, "<")
        .to("#balloon-section .balloon-sm", {
            scale: 1.3,
            filter: 'blur(0px)',
            ease: "none",
        }, "<")
        .to("#balloon-section .text-section", {
            x: () => -(document.querySelector('#balloon-section .text-section').offsetWidth + window.innerWidth),
            ease: "none",
        }, "<")

        let dubaiTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#dubai-section",
                start: "top center",
                end: "bottom center",
                scrub: 1,
                pin: false,
                // markers: true,
            }
        });

        dubaiTL.to("#dubai-section .people", {
            scale: 2.3,
            ease: "none",
            transformOrigin: "center right",
        })
        .to("#dubai-section .bg", {
            scale: 1.3,
            filter: 'blur(0px)',
            ease: "none",
        }, "<")
        .to("#dubai-section .text-section", {
            x: () => -(document.querySelector('#dubai-section .text-section').offsetWidth + window.innerWidth),
            ease: "none",
        }, "<")
        .to("#dubai-section .people", {
            opacity: 0,
            ease: "none",
        }, "-=0.4");

        let boatTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#boat-section",
                start: "top center",
                end: "bottom center",
                scrub: 1,
                pin: false,
                // markers: true,
            }
        });
      
       
        boatTL.to("#boat-section .boat", {
            transformOrigin: "top right",
            right: '100%',
            transform: 'translateX(0)',
            y: 0,
            scale: 1.3,
            ease: "Power1.easeInOut",
           
        })
        .to("#boat-section .boat", {
            y: '+=20', 
            ease: "Power1.easeInOut",
            // duration: 1,
            // yoyo: true,
            // repeat: 3
        }, "<")
        .to("#boat-section .wave-left", {
            x: 100,
            y: 20,
            scale: 1.3,
            ease: "none",
            
        }, "<")
        .to("#boat-section .wave-middle", {
            x: 100,
            y: -100,
            scale: 0.9,
            ease: "none",
          
        }, "<")
        .to("#boat-section .wave-right", {
            x: 100,
            y: 50,
            ease: "none",
           
        }, "<")
        .to("#boat-section .text-section", {
            x: () => -(document.querySelector('#boat-section .text-section').offsetWidth + window.innerWidth),
            ease: "none",
           
        }, "<")
        
        


        let footerTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#footer-section",
                start: "top top",
                end: "bottom bottom",
            }
        });


        footerTL.set("#footer-section .car", { right: -document.querySelector('#footer-section .car').offsetWidth });

        footerTL.to("#footer-section .car", {
            x: () => -(window.innerWidth + document.querySelector('#footer-section .car').offsetWidth),
            duration: 6,
            repeat: -1,
            ease: "none",
        })
        .set("#footer-section .car", {
            x: window.innerWidth + document.querySelector('#footer-section .car').offsetWidth,  
            right: -document.querySelector('#footer-section .car').offsetWidth
        });

        window.addEventListener('load', () => {        
            // Animate the loader away
            const loaderWrapper = document.getElementById('loader-wrapper');
            gsap.to(loaderWrapper, { autoAlpha: 0, duration: 1 });
        });
        
        // Open Modal Fucntion
        const bookBtn = document.querySelector("#btn-book");
        const closeBtn = document.querySelector("#btn-close");
        const bookModal = document.querySelector("#book-modal");
        if (bookBtn && closeBtn) {
            bookBtn.addEventListener("click", event => {
                gsap.to(bookModal, {
                    scale: 1,
                    autoAlpha: 1, 
                    duration: 1,
                    ease: "Expo.easeInOut"
                });
            });
            closeBtn.addEventListener("click", event => {
                gsap.to(bookModal, {
                    scale: 1.5,
                    autoAlpha: 0, 
                    duration: 1,
                    ease: "Expo.easeInOut"
                });
            });
        }

        // Scroll To function
        const navLinks = document.querySelectorAll("[data-scroll]");
        if (navLinks.length > 0) {
            navLinks.forEach(navLink => {
                navLink.addEventListener("click", event => {
                    event.preventDefault();
                    const scrollToId = event.currentTarget.dataset.scroll;
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: `#${scrollToId}`,
                        ease: "Expo.easeInOut"
                    });
                });
            });
        }

   
 
})();