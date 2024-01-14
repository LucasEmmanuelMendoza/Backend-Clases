/*Códigos de estado HTTP
Cuando el servidor responde con un código de estado,
esto permite saber qué ocurrió con la consulta que estábamos haciendo, y 
da información al cliente sobre qué ha ocurrido
2xx: success
4xx: Client error
5xx: Server error

Importante: Si no configuramos nuestro servidor para devolver
múltiples status, entonces será mucho más difícil rastrear los problemas

-APIS-
Esto es lo que vamos a crear nosotros en el backend. Es un conjunto de definiciones
y reglas que permiten que dos equipos puedan integrarse para trabajar juntos. Una API
"genera" un contrato entre el front y el back.
La api permite responder:
-¿A qué endpoint debo apuntar para la tarea que necesito?
-¿Qué método debo utilizar para ese recurso?
-¿Qué infromación debo enviar para realizar correctamente mi petición?

REST: Ya tenemos las reglas para comunicarse, ¿Pero qué tal la estructura del
mensaje? Cuando hacemos una petición, esta debe tener un formato. REST(Representational
State Transfer) permite definir la estructura que deben tener los datos para 
poder transferirse.
-API responde pregs sobre cómo comunicarse correctamente.
-REST define cómo debe ser el cuerpo del mensaje a transmitir
Los dos formatos más importantes: JSON y XML. Utilizaremos JSON.
ENTONCES, una API REST es un modelo completo para tener perfectamente estipulados
los protocolos, las reglas e incluso la estructura de la información, con el fin de poder
hacer un sistema de comunicación completo entre las computadoras.
*/