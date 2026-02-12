window.onload = function (e) {
    console.log('documento cargado');
    document.getElementsByTagName('h2')[1].innerText = 'Titulo';
    console.log(document.getElementById('username'));
    document
        .querySelectorAll('article > .first')
        .forEach((e) => (e.style.color = 'blue'));
    console.log(document.querySelectorAll('li.item'));
    console.log(document.querySelectorAll('.buttons > button'));
    document.getElementsByTagName('p')[0].style.backgroundColor = 'Black';
    document
        .querySelectorAll('.buttons > button')
        .forEach((e) => (e.style.color = 'red'));

    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
};
