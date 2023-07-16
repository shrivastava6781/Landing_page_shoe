var tl = gsap.timeline()
tl.from("#main",{
    // y:"100",
    scale:0,
    // rotate:360,
    duration:1,
})
tl.from("#nav i, #nav h2, #nav h1",{
    opacity:0,
    x:"-20",
    stagger:1,
    duration:0.4,
})
tl.from("#heading",{
    opacity:0,
    y:"50",
    scale:1,
    duration:0.5,
})
tl.from("#main_img h1",{
    opacity:0,
    y:"90",
    scale:1.3,
    delay:0.4,
    duration:0.5,
})
tl.from("#main_img img",{
    opacity:0,
    y:"-90",
    duration:0.5,
})
tl.from("#footer #arrow, #footer #butt button,#footer #pera ",{
    opacity:0,
    y:"90",
    duration:0.3,
    stagger:1,
})
tl.from("#footer #arrow img",{
    y:"20",
    repeat:-1,
    yoyo:true,
})