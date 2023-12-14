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
    gsap.registerPlugin(ScrollTrigger);

    

    const duneSection = document.querySelector('#dune-section');

    // Setting transform origin for HERO
    function updateTransformOrigin() {
        const bannerSection = document.querySelector('#banner-section');
    
        if (duneSection && bannerSection) {
            const duneRect = duneSection.getBoundingClientRect();
            const bannerRect = bannerSection.getBoundingClientRect();
    
            // Calculate the center of the dune-section
            const originX = (duneRect.left + (duneRect.width / 2)) - bannerRect.left;
            const originY = (duneRect.top + (duneRect.height / 2)) - bannerRect.top;
    
            // Set the transform origin for banner-section
            bannerSection.style.transformOrigin = `${originX}px ${originY}px`;
        }
    }
    
    // Call this function on load and on resize
    window.addEventListener('load', updateTransformOrigin);
  

    // Retrieve margin values from #dune-section
    const duneStyle = getComputedStyle(duneSection);
    const duneMarginLeft = parseInt(duneStyle.marginLeft, 10);
    const duneMarginTop = parseInt(duneStyle.marginTop, 10);
   
    const introVideo = document.querySelector('#intro-section video');
  
    // Animations
    let mainTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#main",
            start: "top top",
            end: smWidth ? "+=10000px" : "+=30000px",
            scrub: 1,
            pin: true,
        }
    });

    if (smWidth) {
        mainTL.to("#banner-section .block", {
            ease: "none",
            duration: 0.5, 
            marginLeft: 25,
            marginTop: 25,
            left : 0,
            top : 0,
            transform: 'translate(0, 0)',
            scale: 0.42,
            transformOrigin: "top left",
        })
        .to("#banner-section .banner-text", {
            ease: "none",
            autoAlpha: 0,
            duration: 0.2, 
        }, "<")
        .to("#banner-section span", {
            ease: "none",
            autoAlpha: 0,
            duration: 0.5, 
        }, "<")
        .to("#banner-section .thumb", {
            ease: "none",
            autoAlpha: 0,
            duration: 0.5, 
        }, "<")
        .to("#dune-section", {
            ease: "none",
            autoAlpha: 1,
            duration: 0.2,  
        })
        .to("#scroll-section", {
            ease: "none",
            opacity: 0,
            duration: 0.5,  
        }, "<")
        .to("#logo-section", {
            ease: "none",
            autoAlpha: 1,
            duration: 0.2,  
       }, "<")
       .to("#book-block", {
        ease: "none",
        autoAlpha: 1,
        duration: 0.1, 
    }, "<");

    }
    else {
        mainTL
        .to("#banner-section", {
            ease: "none",
            scale: 10,
            duration: 2, 
            marginLeft: -duneMarginLeft,
            marginTop: -duneMarginTop,
        })
        .to("#banner-section .banner-text", {
            ease: "none",
            autoAlpha: 0,
            duration: 0.03, 
        }, "<")
        .to("#scroll-section", {
            ease: "none",
            opacity: 0,
            duration: 0.03,  
        }, "<")
        .to("#banner-section  .dune-thumb", {
            ease: "none",
            autoAlpha: 0,
            duration: 0.01, 
        }, "<")
        .to("#dune-section", {
            ease: "none",
            autoAlpha: 1,
            duration: 0.01, 
        }, "<")
        .to("#dune-section", {
                ease: "none",
                scale: 1,
                duration: 2,  
                height: '100vh',
                margin: 0,
        }, "<")
        .to("#logo-section", {
            ease: "none",
            autoAlpha: 1,
            duration: 1,  
        })
        .to("#book-block", {
            ease: "none",
            autoAlpha: 1,
            duration: 0.1, 
        }, "<");

        ScrollTrigger.create({
            trigger: "#intro-section",
            start: "top top",  
            end: "+=1000", 
            pin: true,
            onEnter: () => introVideo.play(),
            onLeave: () => introVideo.pause(),
            onEnterBack: () => introVideo.play(),
            onLeaveBack: () => introVideo.pause()
        });
    }

        
    mainTL.to("#dune-section .car", {
            scale: 2,
            transformOrigin: "top right",
            ease: "none",
            duration: 5
        }, "<")
        .to("#dune-section .bg", {
            scale: 1.1,
            transformOrigin: "top center",
            ease: "none",
            duration: 5
        }, "<")
        .to("#dune-section", {
            ease: "none",
            width: '100vw',  
            duration: 1
        }, "+1")
        .to("#dune-section .text", {
            x: () => -(document.querySelector('#dune-section .text').offsetWidth + window.innerWidth),
            ease: "none",
            duration: 5  
        }, "+2")
        .to("#dune-section .car", {
            yoyo: true,
            repeat: 2,
            y: "-=10",
            ease: "none",
            duration: 1
        }, "+2")  
        .to("#dune-section .driver", {
            yoyo: true,
            repeat: 2,
            y: "+=20",
            ease: "none",
            duration: 1
        }, "+2")  
        .to("#banner-section", {
            autoAlpha: 0,
            ease: "none",
            duration: 0.4,
        })
        .to("#dune-section", {
            autoAlpha: 0,
            ease: "none",
            duration: 0.4,
        }, "<")
        .to("#heritage-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4 
        }, "<")
        .to("#canbana-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4  
        }, "+=0.5")
        .to("#logo", {
            color: '#fff',
            ease: "none",
            duration: 0.4  
        }, "<")
        .to("#canbana-section .cabana-video", {
            scale: 1,
            ease: "none",
            duration: 4 
        })
        .to("#canbana-section .cabana-sit", {
            scale: 1,
            ease: "none",
            duration: 4,  
        }, "<")
        .to("#canbana-section .text", {
            x: () => -(document.querySelector('#canbana-section .text').offsetWidth + window.innerWidth),
            ease: "none",
            duration: 4  
        }, "<")
        .to("#heritage-section", {
            autoAlpha: 0,
            ease: "none",
            duration: 0.4  
        }, "<")
        .to("#canbana-section", {
            autoAlpha: 0,
            ease: "none",
            duration: 0.4  
        })
        .to("#logo", {
            color: '#303030',
            ease: "none",
            duration: 0.4  
        }, "<")
        .to("#luxury-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4 
        }, "<")
        .to("#balloon-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4  
        }, "+=0.5")
        .to("#balloon-section .people", {
            scale: 2.3,
            ease: "none",
            transformOrigin: "center right",
            duration: 4,
            // filter: 'blur(3px)',
        })
        .to("#balloon-section .bg", {
            scale: 1.3,
            filter: 'blur(0px)',
            ease: "none",
            duration: 4,  
        }, "<")
        .to("#balloon-section .balloon-lg", {
            scale: 1.3,
            filter: 'blur(0px)',
            ease: "none",
            duration: 4,  
        }, "<")
        .to("#balloon-section .balloon-sm", {
            scale: 1.3,
            filter: 'blur(0px)',
            ease: "none",
            duration: 4,  
        }, "<")
        .to("#balloon-section .text", {
            x: () => -(document.querySelector('#balloon-section .text').offsetWidth + window.innerWidth),
            ease: "none",
            duration: 4  
        }, "<")
        .to("#balloon-section", {
            autoAlpha: 0,
            ease: "none",
            duration: 0.4 
        })
        .to("#luxury-section", {
            autoAlpha: 0,
            ease: "none",
            duration: 0.4 
        }, "<")
        .to("#soar-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4 
        }, "<")
        .to("#dubai-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4  
        }, "+=0.5")
        .to("#dubai-section .people", {
            scale: 2.3,
            ease: "none",
            transformOrigin: "center right",
            duration: 4,
        })
        .to("#dubai-section .bg", {
            scale: 1.3,
            filter: 'blur(0px)',
            ease: "none",
            duration: 4,  
        }, "<")
        .to("#dubai-section .text", {
            x: () => -(document.querySelector('#dubai-section .text').offsetWidth + window.innerWidth),
            ease: "none",
            duration: 4  
        }, "<")
        .to("#dubai-section .people", {
            opacity: 0,
            ease: "none",
            duration: 0.4,
        }, "-=0.4")
        .to("#soar-section", {
            autoAlpha: 0,
            ease: "none",
            duration: 0.4 
        })
        .to("#rise-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4 
        })
        .to("#boat-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4  
        }, "+=0.5")
        .to("#boat-section .boat", {
            transformOrigin: "top right",
            right: '100%',
            transform: 'translateX(0)',
            y: 0,
            scale: 1.3,
            ease: "Power1.easeInOut",
            duration: 4, 
        }, "<")
        .to("#boat-section .boat", {
            y: '+=20', 
            ease: "Power1.easeInOut",
            duration: 1,
            yoyo: true,
            repeat: 3
        }, "<")
        .to("#boat-section .wave-left", {
            x: 100,
            y: 20,
            scale: 1.3,
            ease: "none",
            duration: 4  
        }, "<")
        .to("#boat-section .wave-middle", {
            x: 100,
            y: -100,
            scale: 0.9,
            ease: "none",
            duration: 4  
        }, "<")
        .to("#boat-section .wave-right", {
            x: 100,
            y: 50,
            // scale: 0.9,
            ease: "none",
            duration: 4  
        }, "<")
        .to("#boat-section .text", {
            x: () => -(document.querySelector('#boat-section .text').offsetWidth + window.innerWidth),
            ease: "none",
            duration: 4  
        }, "<")
        .to("#rise-section", {
            autoAlpha: 0,
            ease: "none",
            duration: 0.4 
        })
        .to("#ride-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4 
        }, "<")
        .to("#intro-section", {
            autoAlpha: 1,
            ease: "none",
            duration: 0.4 
        }, "+=0.5");
        


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