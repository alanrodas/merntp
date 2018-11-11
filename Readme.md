Trabajo Práctico - Desarrollo de Software CIU 2018
==================================================

Consigna General
----------------

El presente es un trabajo práctico evaluativo, a realizarse de
forma individual.
Se puede usar cualquier recurso online (video, tutorial, etc.) para
cumplir la consigna. No vale consultar con compañeros, pero si con el docente.
La entrega se realiza el Martes 13/11 al finalizar la clase (21hs) a más tardar.

Forma de trabajo y entrega
--------------------------

El trabajo consiste en realizar una serie de tareas sobre este repositorio, cada uno en un branch distinto. Por lo tanto, cada uno debe:
* Clonar el presente repositorio
* Crear un branch en el repositorio con su nombre
* Modificar el README, y colocar un título (previo al principal) con su nombre y apellido.
* Realizar un commit inicial al repositorio en dicho branch (previo a haber realizado cualquier otro cambio)
* Bajarse las dependencias necesarias del server y el cliente
* Levantar un servidor de mongodb
* Realizar las tareas solicitadas, y ir realizando commits a medida que le resulte necesario.
* Cuando todas las tareas estén terminadas, realizar un push final y generar un tag "ENTREGA-NOMBRE" donde NOMBRE es su nombre

Requisitos mínimos para aprobación
----------------------------------

#### En Server
El server ya se encuentra creado con algunas cosas básicas.
En particular parte del controlador principal ya está creada,
y el modelo principal ya definido.

Las tareas a realizar son las siguientes:

* Agregar un nuevo campo al modelo "Car", "numDoors". Un número que indica la cantidad de puertas del vehículo.
* Los métodos del controlador "getCar" y "createCar" están completos, pero cambiarlos apropiadamente si lo cree conveniente.
* Completar las operaciones faltantes en el controlador.

#### En Cliente
El cliente es una aplicación creada con create-react-app que
tiene creados dos controladores mínimos como para estructurar la aplicación. Se incluyeron algunas librerías útiles por defecto como reactstrap o axios.

Las tareas a realizar son las siguientes:

* Editar el componente CarBrowse para que efectivamente muestre los autos guardados en la base de datos.
* Realizar los componentes necesarios para generar un ABM del modelo.
* Al presionar el botón "Delete Car" se debe mostrar un popup pidiendo confirmación de la operación, y en caso de aceptar, borrarlo efectivamente de la BBDD.
* Al presionar el botón "Add Car" se debería dirigir al usuario a una pantalla en donde se le permita cargar los datos de un vehiculo, y salvar o cancelar la operación. Si salva la operación, se guarda el dato en la BBDD, y se redirige a la página de listado de autos. Si cancela, se redirige a la pagina de listado sin haber guardado nada.
* Al presionar el botón "Edit Car" se debería dirigir al usuario a una pantalla en donde se le permita cargar los datos de un vehículo, y salvar o cancelar la operación. Los campos deben aparecer precargados con la información del vehículo a editar. Si salva la operación, se guarda el dato en la BBDD, y se redirige a la página de listado de autos. Si cancela, se redirige a la pagina de listado sin haber guardado nada.

Bonus Points
------------

* Agregar validaciones en la API para los siguientes casos:
* Car.category puede contener solo uno de los siguientes valores [A, B, C, D, E]
* Ninguno de los campos, salvo el precio, pueden estar vacíos.
* Agregar restricciones en el ingreso de datos en las pantallas del cliente.
* Agregar en el cliente la opción de ordenar los datos según marca, categoría o precio (orden alfabético y numérico) al dar clic sobre el título del mismo en la tabla.