document.addEventListener('DOMContentLoaded', function () {
  showSection('#start');

  // Obtener todos los enlaces del menú
  var menuLinks = document.querySelectorAll('nav ul li a');

  // Agregar eventos onclick a los enlaces del menú
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var sectionId = link.getAttribute('href');
      showSection(sectionId);
    });
  });
});

function showSection(sectionId) {
  let sectionFile = './content/' + sectionId + '.htm';
  sectionFile = sectionFile.replace('#', ''); // Remover el símbolo '#'
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        document.getElementById('sectionContent').innerHTML = this.responseText;
      } else {
        document.getElementById('sectionContent').innerHTML = '<p>Error al cargar la sección.</p>';
      }
    }
  };

  xhttp.open('GET', sectionFile, true);
  xhttp.send();
}