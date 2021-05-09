function cambiarIcono(evento) {
  alert('dentro de asignar Eventos');
}

function asignarEventos(evento) {
  if (document.readyState == 'complete') {
    document
      .getElementById('icon-burger')
      .addEventListener('click', cambiarIcono);
  }
}

document.addEventListener('readystatechange', asignarEventos);
