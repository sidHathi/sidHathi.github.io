function openExposeGraphics() {
    const exposeGraphicsCard = document.getElementById('exposeGraphicsCard');
    const exposeGraphicsContent = document.getElementById('exposeGraphicsContent');

    var tl = gsap.timeline();

    tl.to('.exposeGraphicsElemTemp', {duration: 0.3, opacity:0})
    .to(exposeGraphicsCard, {duration: 0.3, height:'240px'})
        .to(exposeGraphicsContent, {duration: 0.3, opacity:1, 'height':'max-content', 'padding-top':'40px', 'padding-bottom': '40px'}, "-=0.3");
}

function closeExposeGraphics() {
    const exposeGraphicsCard = document.getElementById('exposeGraphicsCard');
    const exposeGraphicsContent = document.getElementById('exposeGraphicsContent');

    var tl = gsap.timeline();

    tl.to(exposeGraphicsCard, {duration: 0.3, height:'500px'})
        .to(exposeGraphicsContent, {duration: 0.3, opacity:0, 'height':'0', 'padding-top':'0', 'padding-bottom': '0'})
        .to('.exposeGraphicsElemTemp', {duration: 0.3, opacity:1});
}

function openExposeApp() {
    const exposeAppCard = document.getElementById('exposeAppCard');
    const exposeAppContent = document.getElementById('exposeAppContent');

    var tl = gsap.timeline();
    if (screen.width > 800) {
        tl.to('.exposeAppTemp', {duration: 0.3, height: 0, opacity: 0})
        .to(exposeAppCard, {duration: 0.3, height:'1000px'})
        .to(exposeAppContent, {duration: 0.3, 'margin-top':'20px', opacity: 1, height: 'auto', padding: '40px'})
    } else {
        tl.to('.exposeAppTemp', {duration: 0.3, height: 0, opacity: 0})
        .to(exposeAppCard, {duration: 0.3, height:'1000px'})
        .to(exposeAppContent, {duration: 0.3, 'margin-top':'20px', opacity: 1, height: 'auto', padding: '40px'})
        .to('.exposeCardWeb', {duration: 0.3, 'background-position-y':'500px'}, "-=0.3")
    }
}

function closeExposeApp() {
    const exposeAppCard = document.getElementById('exposeAppCard');
    const exposeAppContent = document.getElementById('exposeAppContent');

    if (screen.width > 800) {
        var tl = gsap.timeline();
        tl.to(exposeAppContent, {duration: 0.3, 'margin-top':'0', opacity: 0, height: '0', padding: '0'})
        .to(exposeAppCard, {duration: 0.3, height:'800px'})
        .to('.exposeCardWeb', {duration: 0.3, 'background-position-y':'300px'}, "-=0.3")
        .to('.exposeAppTemp', {duration: 0.3, height: 'auto', opacity: 1})
    } else {
        var tl = gsap.timeline();
        tl.to(exposeAppContent, {duration: 0.3, 'margin-top':'0', opacity: 0, height: '0', padding: '0'})
        .to(exposeAppCard, {duration: 0.3, height:'auto'})
        .to('.exposeCardWeb', {duration: 0.3, 'background-position-y':'300px'}, "-=0.3")
        .to('.exposeAppTemp', {duration: 0.3, height: 'auto', opacity: 1})
    }
}

function openExposeWeb() {
    const exposeWebCard = document.getElementById('exposeWebCard');
    const exposeWebContent = document.getElementById('exposeWebContent');

    var tl = gsap.timeline();
    tl.to('.exposeWebTemp', {duration: 0.3, height: 0, opacity: 0})
    .to(exposeWebCard, {duration: 0.3, height:'1000px'})
    .to(exposeWebContent, {duration: 0.3, 'margin-top':'20px', opacity: 1, height: 'max-content', padding: '40px'})
    .to('.exposeCardWeb', {duration: 0.3, 'background-position-y':'750px'}, "-=0.3")
}

function closeExposeWeb() {
    const exposeWebCard = document.getElementById('exposeWebCard');
    const exposeWebContent = document.getElementById('exposeWebContent');

    var tl = gsap.timeline();
    if (screen.width > 800) {
        tl.to(exposeWebContent, {duration: 0.3, 'margin-top':'0', opacity: 0, height: '0', padding: '0'})
        .to(exposeWebCard, {duration: 0.3, height:'800px'})
        .to('.exposeCardWeb', {duration: 0.3, 'background-position-y':'340px'}, "-=0.3")
        .to('.exposeWebTemp', {duration: 0.3, height: 'auto', opacity: 1})
    } else {
        tl.to(exposeWebContent, {duration: 0.3, 'margin-top':'0', opacity: 0, height: '0', padding: '0'})
        .to(exposeWebCard, {duration: 0.3, height:'auto'})
        .to('.exposeCardWeb', {duration: 0.3, 'background-position-y':'300px'}, "-=0.3")
        .to('.exposeWebTemp', {duration: 0.3, height: 'auto', opacity: 1})
    }
}

document.getElementById('exposeGraphicsCardOpen').onclick = openExposeGraphics;
document.getElementById('exposeGraphicsCardClose').onclick = closeExposeGraphics;

document.getElementById('exposeAppCardOpen').onclick = openExposeApp;
document.getElementById('exposeAppCardClose').onclick = closeExposeApp;

document.getElementById('exposeWebCardOpen').onclick = openExposeWeb;
document.getElementById('exposeWebCardClose').onclick = closeExposeWeb;
