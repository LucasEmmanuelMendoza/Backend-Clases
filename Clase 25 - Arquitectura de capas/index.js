/*Arquitectura de capas
Es un patrón de diseño donde los módulos contemplaods 
dentro de nuestro aplicativo son separados por "capas"

Capa hace referencia a cada rol que debe cumplirse dentro 
de todo el aplicativo.
Ej: Contamos con ciertos arvhivos que tienen la labor de 
mostrar vistas: ¿Por qué estos archivos tendrían que hacer otrocáuclulo 
más allá de rendereizar una vista?

Cuando trabajamos con capas, entendemos que cada 
archivo debe cumplir una función específica, permitiendo que,
si llegase a ocurrir algún 'error' o a requerirse 
modificación en algún punto, tengamos más claro dónde debemos 
atacar esos cambios

CAPAS BASE
Tres capas:
Capa de modelo/persistencia
Capa de controlador/negocio
Capa de vista/renderización
Sin estas tres capas, el modelo se volvería inconsistente y 
la comunicación entre los módulos sería débil y generaría 
muchos problemas

Capa de persistencia: Tiene por obj principal la conexión
directa con el modelo de persistencia a trabajar, es decir, 
debe saber conectar con la persitencia en memoria, en archivos
o en bases de datos. Todo dependiendo de cómo haya sido pro
gramada la capa.
Esta no debería realizar validaciones ni operaciones más allá 
del CRUD que corresponde a una capa de persistencia

Capa de renderizado: Solo tiene la función de tomar datos
para poder ser renderizados. Puede acceder a Persistencia
sin necesidad de pasar por negocio, siempre y cuando esta
tenga como fin único el de mostrar la información correspondiente

Capa de negocio:Debe realizar todas las operaciones dnecesarias para 
que la operación esté finalizada. Necesiota de las otras capas para
poder resolver la tarea solicitada. No puede accedere ni mod directamente
a los datos, sino que tiene que hacerlo a partir de la utilización de 
persistencia. Suele tener una insstancia de persistencia para
poder utilizarla

Capa de routing
Contendrá todos los archivos de tipo "router" que, como estamos ya 
acostumbrados, es una capa de redireccionamientos hacia puntos espe-
cíficos de nuestra API. Actualmente, con el uso de motores de plantillas, 
nuestra capa de routing está estrechamente conectada con la capa de 
renderización (al utilizar un views router)

Capa de servicio
Capa intermedia entre el controlador y la persitencia. En esencia, un 
servicio tiene la capacidad de servir como tunel de conexion para que 
el contorlador pueda acceder de manera más homologada a la persistencia
Contar con esta, impide que los accesos a persitencia se hagan descon-
troladamente (RUTAS)

*/