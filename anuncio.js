// anuncio.js - Sistema de anuncios para DivisasCU

// Lista de anuncios disponibles
const anuncios = [
  {
    activado: "si",
    titulo: "CiberCuba Noticias",
    descripcion: "La fuente definitiva para estar bien informado sobre la actualidad de Cuba, con una cobertura integral de lo que acontece tanto dentro de la isla como en la comunidad cubana en el exterior.",
    imagen: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/35/fe/cf/35fecf49-188e-1384-2eda-89c9f392dde1/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/1200x630wa.png",
    textoBoton: "VISITAR",
    enlaceBoton: "https://www.cibercuba.com/"
  },
  {
    activado: "no",
    titulo: "El Toque - Periodismo Independiente",
    descripcion: "Medio de comunicación independiente cubano que ofrece análisis, reportajes y noticias sobre la realidad socioeconómica de Cuba.",
    imagen: "https://eltoque.com/assets/logo-et.png",
    textoBoton: "CONOCER MÁS",
    enlaceBoton: "https://eltoque.com/"
  },
  {
    activado: "no",
    titulo: "TransferMovil - Servicios Digitales",
    descripcion: "La aplicación cubana que te permite realizar pagos, recargar tu móvil y gestionar tus finanzas de manera rápida y segura.",
    imagen: "https://www.etecsa.cu/images/transfermovil.png",
    textoBoton: "DESCARGAR",
    enlaceBoton: "https://www.etecsa.cu/transfermovil"
  }
];

// Función para obtener un anuncio activo aleatorio
function obtenerAnuncioAleatorio() {
  // Filtrar solo anuncios activados
  const anunciosActivos = anuncios.filter(anuncio => anuncio.activado === "si");
  
  // Si no hay anuncios activos, retornar null
  if (anunciosActivos.length === 0) {
    return null;
  }
  
  // Seleccionar un anuncio aleatorio de los activos
  const indiceAleatorio = Math.floor(Math.random() * anunciosActivos.length);
  return anunciosActivos[indiceAleatorio];
}
