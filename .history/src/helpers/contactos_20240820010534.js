import { contactos } from '../data/contactosData';

// Quería agregar contactos a último momento... Si los agregaba directo al array ppal no los tomaba
const nuevosContactos = [ 
    {
            nombre: 'Chewbacca',
            thumbnail: '/imagenes/contactos/Chewbacca.jpg',
            ultima_conexion: 'hoy 08:45 a. m.',
            id_autor: 8,
            mensajes: [
                {
                    autor: 'Yo',
                    contenido: 'Hola Chuy',
                    estado: 'visto',
                    fecha: '05/07/2024',
                    id: 1
                },
                {
                    autor: 'Yo',
                    contenido: 'Han me pasó tu número',
                    estado: 'visto',
                    fecha: '05/07/2024',
                    id: 2
                },
                {
                    autor: 'Yo',
                    contenido: '¿Querés ir a tomar un helado a la estrella de la muerte conmigo? 🙄',
                    estado: 'visto',
                    fecha: '05/07/2024',
                    id: 3
                },
            ],
            informacion:
            {
                telefono: '666-666-6666',
                estado: 'En la peluquería',
                id_info: 8
            },
        },
        {
            nombre: 'C-3PO Citripio',
            thumbnail: '/imagenes/contactos/C3PO.jpg',
            ultima_conexion: 'ayer',
            id_autor: 9,
            mensajes: [
                {
                    autor: 'C-3PO Citripio',
                    contenido: '¡Oh, mis disculpas! Arturito, el noble R2-D2, me ha pedido que traduzca sus mensajes para ti. Como el protocolo lo dicta, estoy aquí para servir y traducir cualquier comunicación que necesites. ¿Cómo puedo asistirte hoy?',
                    estado: 'visto',
                    fecha: 'hoy 05:43 p. m.',
                    id: 1
                },
                {
                    autor: 'Yo',
                    contenido: 'Hola, Citripio. Sí, tenemos problemas de cominicarción',
                    estado: 'visto',
                    fecha: 'hoy 05:43 p. m.',
                    id: 2
                },
            ],
            informacion:
            {
                telefono: '777-777-7777',
                estado: 'En el mecánico',
                id_info: 9
            },
        },
        {
            nombre: 'Luke Skywalker',
            thumbnail: '/imagenes/contactos/Luke.jpg',
            ultima_conexion: '09/07/2024',
            id_autor: 10,
            mensajes: [
                {
                    autor: 'Luke Skywalker',
                    contenido: 'Hola, estás por ahí??',
                    estado: 'visto',
                    fecha: '09/07/2024',
                    id: 1
                },
                {
                    autor: 'Yo',
                    contenido: 'Hola Luke. Sí, qué pasó?',
                    estado: 'visto',
                    fecha: '09/07/2024',
                    id: 2
                },
                {
                    autor: 'Luke Skywalker',
                    contenido: 'Me lo dijo, me dijo: "YO SOY TU PADRE". Cómo puede ser ese tipo mi padre?',
                    estado: 'visto',
                    fecha: '09/07/2024',
                    id: 3
                },
                {
                    autor: 'Yo',
                    contenido: 'Mmm, vas a tener un tiempito de terapia mepa...',
                    estado: 'visto',
                    fecha: '09/07/2024',
                    id: 4
                },
                {
                    autor: 'Luke Skywalker',
                    contenido: 'Estoy en eso. Tengo que ir a ver a Yoda cuando vuelva de sus vacaciones',
                    estado: 'visto',
                    fecha: '09/07/2024',
                    id: 3
                },
            ],
            informacion:
            {
                telefono: '000-000-1111',
                estado: 'En el psicólogo',
                id_info: 10
            },
        },
    
    ]
    
    const guardarContacto = (contactos) => {
        const contactos_JSON = JSON.stringify(contactos)
        localStorage.setItem("contactos", contactos_JSON)
    }

// Actualizo el array de contactos y guardo los cambios
const actualizarContactos = () => {
    // Agrego los nuevos contactos al array principal
    contactos.push(...nuevosContactos);
    console.log('Contactos actualizados:', contactos);

    // Guardo los contactos actualizados en el almacenamiento local
    guardarContacto(contactos);
};

// Llam0 a la función para actualizar los contactos
actualizarContactos();

/**
 * Guarda una lista de contactos en el almacenamiento local.
 *
 * @param {object[]} contactos - La lista de contactos a guardar
 * @return {void}
 */


/**
 * Obtiene la lista de contactos guardados en el almacenamiento local.
 *
 * @return {object[]} La lista de contactos guardados.
 */
export const obtenerContactos = () => {
    const contactos_guardados = localStorage.getItem("contactos")
    
    if(contactos_guardados){
        //si hay contactos guardados, los devuelvo
        return JSON.parse(contactos_guardados)
    }
    else{
        //si no hay contactos guardados, guardo los contactos iniciales
        guardarContacto(contactos)
        return contactos
    }
    
}

/**
 * Obtiene un contacto específico de la lista de contactos guardados en el almacenamiento local.
 *
 * @param {number} id - El ID del contacto a obtener.
 * @return {object} El contacto con el ID especificado, o undefined si no se encuentra.
 */
export const obtenerContactoPorId = (id) => {
    const contactos = obtenerContactos() 
    console.log('Contactos:', contactos)
    const contacto = contactos.find((contacto) => contacto.id_autor === Number(id))
    console.log('Contacto encontrado:', contacto)
    return contacto
}

/*

por las dudas que quiera usar...

const crearContacto = (nuevo_contacto) => {
    const lista_contactos = obtenerContactos()
    lista_contactos.push(nuevo_contacto)
    guardarContacto(lista_contactos)
}

*/






//COSAS NUEVAS PARA MI----------------------------------------------------------------------------------------

//Busqué información para poder generar la hora y fecha del envío de un nuevo mensaje.
//Al principio usé new Date().toLocaleString(), pero queria formatearlo para que sea como en wsp real.
//La funcion usa 12hs (ES) y agrega a. m. o p. m. En el condicional muestro si el mensaje se envio en el dia,
//se muestra hoy, si fue el día anterior, muestra ayer y si el mensaje es mas antiguo, muestra la fecha, y la
//hora se muestra siempre

/**
 * Formatea una fecha dada en una representación de cadena basada en si es hoy, ayer o cualquier otra fecha.
 *
 * @param {Date} fecha - La fecha a formatear.
 * @return {string} La fecha formateada como una cadena. Si la fecha es hoy, devuelve "hoy {hora}:{minuto}".
 * Si la fecha es ayer, devuelve "ayer {hora}:{minuto}".
 * De lo contrario, devuelve "{día}/{mes}/{año} {hora}:{minuto}".
 */

export const formatearFecha = (fecha) => {
    const fechaMensaje = new Date(fecha);
    const fechaActual = new Date();
    
    const esHoy = fechaMensaje.toDateString() === fechaActual.toDateString();
    
    const fechaAyer = new Date(fechaActual);
    fechaAyer.setDate(fechaAyer.getDate() - 1);
    const esAyer = fechaMensaje.toDateString() === fechaAyer.toDateString();

    const opcionesHora = { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    };

    const hora = fechaMensaje.toLocaleTimeString('es-ES', opcionesHora);

    if (esHoy) {
        return `hoy ${hora}`;
    } else if (esAyer) {
        return `ayer ${hora}`;
    } else {
        return fechaMensaje.toLocaleString('es-ES', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
    }
};