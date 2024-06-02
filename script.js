document.querySelectorAll('.select-click-page').forEach(function(element) {
    element.addEventListener('click', function() {

        const select = document.querySelectorAll('.select-click-page')
        select.forEach(element => {
            element.style.background = 'var(--bg-white)';
            element.style.border = '1.5px solid var(--bg-black)'
            element.style.color = 'var(--bg-black)';
        });


        const targetUp = this.getAttribute('id');
        document.querySelectorAll(`.${targetUp}`).forEach(element => {
            element.style.background = 'var(--bg-black)';
            element.style.border = '1.5px solid var(--bg-white-young)'
            element.style.color = 'var(--bg-white)';
        })

        const skill = document.querySelectorAll('.all')
        skill.forEach(element => {
            element.style.display = 'none';
            setTimeout(() => {
                element.style.opacity = '0';
            }, 50);
        });
        const targetClass = this.getAttribute('data-target');
        document.querySelector(`.${targetClass}`).style.display = 'block';

        setTimeout(() => {
            document.querySelector(`.${targetClass}`).style.opacity = '1';
        }, 50);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const hiasan_1 = document.querySelectorAll('.about-img-hiasan-1')
    const border = document.querySelectorAll('.about-text-img-img')

    hiasan_1.forEach(element => {
        setInterval(() => {
            element.style.transform = 'translate(-5%, -97%)'
            element.style.width = '19rem'
            element.style.height = '19rem'
        }, 850)

        setInterval(() => {
            element.style.transform = 'translate(1%, -103%)'
            element.style.width = '16rem'
            element.style.height = '16rem'
        }, 1700)
    })

    border.forEach(element => {
        setInterval(() => {
            element.style.border = '3px solid transparent'
        }, 850)

        setInterval(() => {
            element.style.border = '3px solid var(--font-color-oranye)'
        }, 1700)
    })

})



document.addEventListener('DOMContentLoaded', () => {
    const hiasan_1 = document.querySelectorAll('.home-img-hiasan-1')
    const hiasan_2 = document.querySelectorAll('.home-img-hiasan-2')
    const border = document.querySelectorAll('.home-text-img-img')

    hiasan_1.forEach(element => {
        setInterval(() => {
            element.style.transform = 'translate(-9%, -111%)'
        }, 2250)

        setInterval(() => {
            element.style.transform = 'translate(1%, -103%)'
        }, 4500)
    })


    hiasan_2.forEach(element => {
        setInterval(() => {
            element.style.transform = 'translate(13%, -95%)'
        }, 2250)

        setInterval(() => {
            element.style.transform = 'translate(1%, -103%)'
        }, 4500)
    })

    border.forEach(element => {
        setInterval(() => {
            element.style.border = '3px solid transparent'
        }, 2250)

        setInterval(() => {
            element.style.border = '3px solid var(--font-color-oranye)'
        }, 4500)
    })
})





document.querySelectorAll('.skill-select-select').forEach(function(element) {
    element.addEventListener('click', function() {

        const select = document.querySelectorAll('.skill-select-select')
        select.forEach(element => {
            element.style.transform = 'translateY(0%)';
            element.style.border = '2px solid var(--bg-black)'
        });
        const targetUp = this.getAttribute('id');
        document.querySelectorAll(`.${targetUp}`).forEach(element => {
            element.style.transform = 'translateY(-25%)';
            element.style.border = '2px solid var(--font-color-oranye)'
        })

        const skill = document.querySelectorAll('.skill-language')
        skill.forEach(element => {
            element.style.display = 'none';
            setTimeout(() => {
                element.style.opacity = '0';
            }, 50);
        });
        const targetClass = this.getAttribute('data-target');
        document.querySelector(`.${targetClass}`).style.display = 'flex';

        setTimeout(() => {
            document.querySelector(`.${targetClass}`).style.opacity = '1';
        }, 50);
    });
});


document.querySelector('.mode-sun').addEventListener('click', () => {
    const sun = document.querySelectorAll('.mode-sun')
    const moon = document.querySelectorAll('.mode-moon')
    sun.forEach(element => {
        element.style.display = 'none'
    })
    moon.forEach(element => {
        element.style.display = 'block'
    })

})


document.querySelector('.mode-moon').addEventListener('click', () => {
    const sun = document.querySelectorAll('.mode-sun')
    const moon = document.querySelectorAll('.mode-moon')
    sun.forEach(element => {
        element.style.display = 'block'
    })
    moon.forEach(element => {
        element.style.display = 'none'
    })

})











const toggleDarkModeBtn = document.querySelectorAll('.replace-mode');
const htmlElement = document.documentElement;
let DarkMode = false;

toggleDarkModeBtn.forEach(element => {
    element.addEventListener('click', function() {
        DarkMode = !DarkMode;
        if (DarkMode) {
            htmlElement.classList.add('dark-mode');
        } else {
            htmlElement.classList.remove('dark-mode');
        }
    });
})



const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Programer', 'Fron-End'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});