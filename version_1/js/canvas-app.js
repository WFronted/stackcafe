//canvas options
particlesJS('particles-js', {
    particles: {
        color: '#ecf0f1',
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity:.8,
        size: 3,//圆点的大小
        size_random: true,
        nb: 160,//粒子的数量
        line_linked: {
            enable_auto: true,
            distance: 110,//直线的长度
            color: '#ecf0f1',
            opacity:.8,
            width: 1,//直线的宽度
            condensed_mode: {
                enable: true,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: .8 //旋转的速度
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 200
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove"
                nb: 4
            }
        }
    },
    /* Retina Display Support */
    retina_detect: true
});