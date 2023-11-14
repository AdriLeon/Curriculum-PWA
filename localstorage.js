// localstorage.js
const userData = {
  name: 'Adrian Leon Ortega',
  address: '43700, Tulancingo, Hidalgo',
  profile: 'Soy un estudiante de Desarrollo y Gestión de Software con un fuerte entusiasmo por la tecnología y la creación de soluciones que impulsan mejoras. Mi objetivo es aprovechar mis conocimientos y mi pasión por el aprendizaje para demostrar que el desarrollo de sistemas, aplicaciones y videojuegos es una poderosa herramienta para el éxito profesional y la mejora de proyectos. ',
};

// Guardar los datos en localStorage
localStorage.setItem('userData', JSON.stringify(userData));

// Recuperar los datos almacenados
const storedData = JSON.parse(localStorage.getItem('userData'));
