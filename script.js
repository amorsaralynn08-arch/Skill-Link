
function scrollleft() {
    document.querySelector('.FAQS_Inner_Container').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollright() {
    document.querySelector('.FAQS_Inner_Container').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}