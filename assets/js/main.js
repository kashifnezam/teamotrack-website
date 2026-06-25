/*
=========================================
TeamoTrack Website
Main JavaScript
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
      MOBILE MENU
    =====================================*/

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.querySelector(".nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

            });

        });

    }



    /*=====================================
      STICKY HEADER SHADOW
    =====================================*/

    const header = document.querySelector(".header");

    function navbarScroll() {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);



    /*=====================================
      SCROLL TO TOP BUTTON
    =====================================*/

    const topBtn = document.getElementById("topBtn");

    function toggleTopButton() {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    }

    toggleTopButton();

    window.addEventListener("scroll", toggleTopButton);

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /*=====================================
      FAQ ACCORDION
    =====================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const btn = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        btn.addEventListener("click", () => {

            faqItems.forEach(other => {

                if (other !== item) {

                    other.classList.remove("active");

                    other.querySelector(".faq-answer").style.maxHeight = null;

                }

            });

            item.classList.toggle("active");

            if (item.classList.contains("active")) {

                answer.style.maxHeight = answer.scrollHeight + "px";

            } else {

                answer.style.maxHeight = null;

            }

        });

    });



    /*=====================================
      SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



    /*=====================================
      SCROLL REVEAL
    =====================================*/

    const reveals = document.querySelectorAll(".fade-up,.fade-left,.fade-right");

    function revealSections() {

        const trigger = window.innerHeight * 0.85;

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if (top < trigger) {

                section.classList.add("show");

            }

        });

    }

    revealSections();

    window.addEventListener("scroll", revealSections);



    /*=====================================
      COUNTER ANIMATION
    =====================================*/

    const counters = document.querySelectorAll(".counter");

    let counterStarted = false;

    function startCounter() {

        const stats = document.querySelector(".stats");

        if (!stats) return;

        const trigger = stats.getBoundingClientRect().top;

        if (trigger < window.innerHeight && !counterStarted) {

            counterStarted = true;

            counters.forEach(counter => {

                const target = +counter.dataset.target;

                let current = 0;

                const increment = target / 100;

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.innerText = Math.floor(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        if (target >= 100000) {

                            counter.innerText = "500K+";

                        }

                        else if (target >= 10000) {

                            counter.innerText = "10K+";

                        }

                        else if (target === 100) {

                            counter.innerText = "100+";

                        }

                        else if (target === 99) {

                            counter.innerText = "99.9%";

                        }

                        else {

                            counter.innerText = target;

                        }

                    }

                };

                updateCounter();

            });

        }

    }

    startCounter();

    window.addEventListener("scroll", startCounter);



    /*=====================================
      ACTIVE NAVIGATION
    =====================================*/

    const sections = document.querySelectorAll("section[id]");

    function activeMenu() {

        let scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionHeight = section.offsetHeight;

            const sectionTop = section.offsetTop - 120;

            const sectionId = section.getAttribute("id");

            const navLink = document.querySelector('.nav a[href="#' + sectionId + '"]');

            if (!navLink) return;

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

                navLink.style.color = "#2563EB";

            }

            else {

                navLink.style.color = "";

            }

        });

    }

    activeMenu();

    window.addEventListener("scroll", activeMenu);

});