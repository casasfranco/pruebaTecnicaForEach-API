- Creada por 🛠️:
 <br>
👨🏽‍💻 Casas, Franco Agustín.


## ❗ IMPORTANTE ❗
### Se deben cargar los datos manualmente para poder utilizar la prueba tecnica.
 - Cargar personas (consultar modelo de la DB)
 - Cargar medios de transporte
<br>
<br>

# Introducción
Api diseñada para interactuar con la app del repositorio: 
<br>
Click [https://github.com/casasfranco/pruebaTecnicaForEach](https://github.com/casasfranco/pruebaTecnicaForEach) para ver en el navegador. 

## Objetivo
Facilitar la gestion de los datos necesarios para la contabilización de la huella de carbono producida en los traslados de una empresa.


## 1️⃣ Primeros pasos:
Al clonar el repositorio debes ejecutar el siguiente comando en la raiz del proyecto: 
<br>
`npm init` con el cual comenzará a instalar las dependencias necesarias para el correcto funcionamiento.

## Scripts disponibles
En el directorio del proyecto, puedes correr los siguientes scripts:

### `npm run dev`

Corre la aplicación en modo desarrollo.<br />
Se irá compilando a medida que realices cambios.<br />
You will also see any lint errors in the console.


### `npm run start`

Con este script podras utilizar babel para dejar el codigo listo para producción.

<br>
<br>

# EndPoints disponibles

### `/api/forEach` : 
- Get: Nos dará como resultado un arreglo con la lista de viajes guardados.
- Post: Podremos enviar un objeto con los datos del viaje para almacenarlo en la DB.
<br>

### `/api/forEach/person` : 
- Get: Nos dará como resultado un arreglo con la lista de personas en nuestra DB.
- Post: Podremos enviar un objeto con los datos de la persona para almacenarlo en la DB .
<br>

### `/api/forEach/conveyance` : 
- Get: Nos dará como resultado un arreglo con la lista de medios de transporte guardados.
- Post: Podremos enviar un objeto con los datos del medio de transporte para almacenarlo en la DB.
<br>

<br>

#### ❌ Erorrres a solucionar: 

- Renderiza 3 veces el path " / ".
    - El problema está al asignarle valores a los useState. Tenemos 3 useStates distintos para almacenar "Personas", "Medios de transporte" y "Viajes". <br>
    Por falta de tiempo no pude solucionarlo.

- No se puede asignar una fecha al cargar los viajes:
    - Por defecto el viaje tiene fecha igual al momento en el que se creó. Porciones de codigo que solucionaban esta cuestíon mediante librerias para obtener la fecha están comentadas.

- La fecha no está formateada correctamente. 

- CRUD de usuarios, medios de transporte y demas que son necesarios no estan incluidos en esta versión.
