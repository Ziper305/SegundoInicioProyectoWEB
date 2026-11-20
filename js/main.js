/**
 * ============================================================================
 * JAVASCRIPT - MANIPULACIÓN DEL DOM (DOCUMENT OBJECT MODEL)
 * Proyecto: Perfil Profesional e Investigación de DOM
 * ============================================================================
 * Este archivo implementa y demuestra las 6 operaciones fundamentales del DOM:
 * 1. Cambiar el contenido (textContent, innerHTML)
 * 2. Modificar los estilos CSS (elemento.style.propiedad)
 * 3. Agregar o quitar clases (classList: add, remove, toggle, contains)
 * 4. Consultar y modificar atributos (getAttribute, setAttribute, removeAttribute)
 * 5. Escuchar eventos (Atributo HTML, Propiedad DOM, addEventListener)
 * 6. Crear, insertar y eliminar elementos (createElement, appendChild, remove)
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Sistema cargado: DOM listo para manipulación dinámica.");

    // ========================================================================
    // 1. CAMBIAR EL CONTENIDO DESDE EL DOM
    // ========================================================================
    // Se utiliza para actualizar textos, etiquetas o estructuras HTML dinámicamente.
    // - textContent: Modifica únicamente el texto plano (seguro contra inyecciones XSS).
    // - innerHTML: Interpreta y renderiza etiquetas HTML dentro del elemento.
    
    const btnCambiarEstado = document.getElementById("btn-cambiar-estado");
    const badgeEstado = document.getElementById("badge-estado-laboral");
    const infoActualizada = document.getElementById("info-actualizacion");

    if (btnCambiarEstado && badgeEstado) {
        btnCambiarEstado.addEventListener("click", function () {
            // Evaluamos el contenido actual y lo alternamos
            if (badgeEstado.textContent.trim() === "Disponible para Contratación") {
                // Modificación con textContent
                badgeEstado.textContent = "Actualmente en Consultoría Activa";
                badgeEstado.className = "badge bg-warning text-dark fs-6";
                
                // Modificación con innerHTML insertando etiquetas y formato
                if (infoActualizada) {
                    infoActualizada.innerHTML = '<strong>Estado actualizado:</strong> Disponible para proyectos <em>part-time</em> o asesorías técnicas.';
                }
            } else {
                badgeEstado.textContent = "Disponible para Contratación";
                badgeEstado.className = "badge bg-success fs-6";
                if (infoActualizada) {
                    infoActualizada.innerHTML = '<strong>Estado actualizado:</strong> Búsqueda activa de oportunidades laborales <em>full-time</em>.';
                }
            }
        });
    }

    // ========================================================================
    // 2. MODIFICAR ESTILOS CSS DESDE EL DOM
    // ========================================================================
    // Se accede a la propiedad 'style' del elemento. Los nombres de propiedades en
    // CSS en kebab-case (font-size) se convierten a camelCase (fontSize) en JS.

    const textoPerfil = document.getElementById("texto-perfil-extracto");
    const btnAumentarFuente = document.getElementById("btn-aumentar-fuente");
    const btnDisminuirFuente = document.getElementById("btn-disminuir-fuente");
    const btnColorTema = document.getElementById("btn-color-tema");

    let tamanoFuenteActual = 16; // tamaño base en px

    if (textoPerfil && btnAumentarFuente && btnDisminuirFuente) {
        // Aumentar tamaño de fuente con style.fontSize
        btnAumentarFuente.addEventListener("click", function () {
            if (tamanoFuenteActual < 24) {
                tamanoFuenteActual += 2;
                textoPerfil.style.fontSize = tamanoFuenteActual + "px";
                textoPerfil.style.transition = "font-size 0.2s ease";
            }
        });

        // Disminuir tamaño de fuente con style.fontSize
        btnDisminuirFuente.addEventListener("click", function () {
            if (tamanoFuenteActual > 12) {
                tamanoFuenteActual -= 2;
                textoPerfil.style.fontSize = tamanoFuenteActual + "px";
            }
        });
    }

    if (textoPerfil && btnColorTema) {
        // Modificación de múltiples propiedades de estilo: color, backgroundColor, border
        btnColorTema.addEventListener("click", function () {
            if (textoPerfil.style.backgroundColor === "rgb(241, 245, 249)" || textoPerfil.style.backgroundColor === "#f1f5f9") {
                textoPerfil.style.backgroundColor = "transparent";
                textoPerfil.style.color = "#334155";
                textoPerfil.style.borderLeft = "4px solid #2563eb";
                textoPerfil.style.padding = "0.75rem";
            } else {
                textoPerfil.style.backgroundColor = "#f1f5f9";
                textoPerfil.style.color = "#0f172a";
                textoPerfil.style.borderLeft = "4px solid #10b981";
                textoPerfil.style.padding = "1rem";
                textoPerfil.style.borderRadius = "8px";
            }
        });
    }

    // ========================================================================
    // 3. AGREGAR O QUITAR CLASES (classList)
    // ========================================================================
    // classList ofrece una API moderna y limpia:
    // - add(): Agrega una o varias clases.
    // - remove(): Elimina una o varias clases.
    // - toggle(): Alterna la clase (la agrega si no existe, la quita si existe).
    // - contains(): Devuelve true/false según la existencia de la clase.

    const contenedorPerfil = document.getElementById("contenedor-tarjeta-perfil");
    const btnModoLectura = document.getElementById("btn-modo-lectura");
    const btnResaltarHabilidades = document.getElementById("btn-resaltar-habilidades");
    const listaHabilidades = document.getElementById("seccion-habilidades");

    if (contenedorPerfil && btnModoLectura) {
        btnModoLectura.addEventListener("click", function () {
            // Uso de toggle()
            contenedorPerfil.classList.toggle("modo-lectura");
            
            // Verificamos con contains() para actualizar el texto del botón
            if (contenedorPerfil.classList.contains("modo-lectura")) {
                btnModoLectura.textContent = "Desactivar Modo Lectura";
                btnModoLectura.classList.remove("btn-outline-primary");
                btnModoLectura.classList.add("btn-warning");
            } else {
                btnModoLectura.textContent = "Activar Modo Lectura";
                btnModoLectura.classList.remove("btn-warning");
                btnModoLectura.classList.add("btn-outline-primary");
            }
        });
    }

    if (listaHabilidades && btnResaltarHabilidades) {
        btnResaltarHabilidades.addEventListener("click", function () {
            // Demostración de classList.add() y classList.remove() condicional
            if (listaHabilidades.classList.contains("resaltado-activo")) {
                listaHabilidades.classList.remove("resaltado-activo");
                btnResaltarHabilidades.textContent = "Resaltar Habilidades Clave";
            } else {
                listaHabilidades.classList.add("resaltado-activo");
                btnResaltarHabilidades.textContent = "Quitar Resaltado";
            }
        });
    }

    // ========================================================================
    // 4. CONSULTAR Y MODIFICAR ATRIBUTOS
    // ========================================================================
    // - getAttribute(nombre): Obtiene el valor actual de un atributo HTML.
    // - setAttribute(nombre, valor): Establece o modifica el valor del atributo.
    // - hasAttribute(nombre): Verifica si el elemento posee dicho atributo.
    // - removeAttribute(nombre): Remueve el atributo por completo.

    const fotoPerfil = document.getElementById("foto-perfil-img");
    const btnAlternarFoto = document.getElementById("btn-alternar-foto");
    const badgeAtributoInfo = document.getElementById("badge-atributo-info");

    if (fotoPerfil && btnAlternarFoto) {
        btnAlternarFoto.addEventListener("click", function () {
            // Consultamos el atributo 'src' actual mediante getAttribute
            const srcActual = fotoPerfil.getAttribute("src");

            if (srcActual.includes("perfil1.svg")) {
                // Modificamos atributos src, alt y title con setAttribute
                fotoPerfil.setAttribute("src", "img/perfil2.svg");
                fotoPerfil.setAttribute("alt", "Fotografía Profesional - Especialista Tech");
                fotoPerfil.setAttribute("title", "Perfil Modo Tecnológico");
                if (badgeAtributoInfo) {
                    badgeAtributoInfo.textContent = "Atributo src actual: img/perfil2.svg";
                }
            } else {
                fotoPerfil.setAttribute("src", "img/perfil1.svg");
                fotoPerfil.setAttribute("alt", "Fotografía Profesional Principal");
                fotoPerfil.setAttribute("title", "Perfil Ejecutivo");
                if (badgeAtributoInfo) {
                    badgeAtributoInfo.textContent = "Atributo src actual: img/perfil1.svg";
                }
            }
        });
    }

    // ========================================================================
    // 5. ESCUCHAR EVENTOS (AL MENOS 3 FORMAS DISTINTAS)
    // ========================================================================
    // Existen 3 formas principales para registrar eventos en JavaScript:
    //
    // FORMA 1: Mediante atributo en línea en HTML (Inline handler).
    //          Ejemplo definido en HTML: onclick="mostrarDetalleInline('Senior Full Stack')"
    //          (La función global está definida más abajo fuera de DOMContentLoaded).
    //
    // FORMA 2: Mediante asignación de propiedad del objeto DOM (DOM Level 0).
    //          Ejemplo: elemento.onclick = function() { ... }
    //
    // FORMA 3: Mediante el método moderno estándar addEventListener (DOM Level 2).
    //          Ejemplo: elemento.addEventListener('evento', manejador)

    // Implementación Forma 2: Propiedad del objeto DOM
    const btnFormaPropiedad = document.getElementById("btn-evento-propiedad");
    const cajaRespuestaEvento = document.getElementById("caja-respuesta-evento");

    if (btnFormaPropiedad && cajaRespuestaEvento) {
        btnFormaPropiedad.onclick = function () {
            cajaRespuestaEvento.className = "alert alert-info mt-3 texto-animado";
            cajaRespuestaEvento.innerHTML = '<strong>Forma 2 ejecutada (Propiedad DOM):</strong> Se ejecutó el evento asignado mediante <code>elemento.onclick = function() { ... }</code>.';
        };
    }

    // Implementación Forma 3: addEventListener estándar
    const btnFormaListener = document.getElementById("btn-evento-listener");
    if (btnFormaListener && cajaRespuestaEvento) {
        btnFormaListener.addEventListener("click", function (evento) {
            cajaRespuestaEvento.className = "alert alert-success mt-3 texto-animado";
            cajaRespuestaEvento.innerHTML = `<strong>Forma 3 ejecutada (addEventListener):</strong> Evento tipo <code>${evento.type}</code> registrado con el estándar moderno <code>addEventListener('click', ...)</code>.`;
        });
    }

    // Eventos adicionales demostrativos (mouseover / mouseout)
    const tarjetaHover = document.getElementById("tarjeta-experiencia-destacada");
    if (tarjetaHover) {
        tarjetaHover.addEventListener("mouseenter", function () {
            this.style.borderColor = "#2563eb";
            this.style.backgroundColor = "#f8fafc";
        });
        tarjetaHover.addEventListener("mouseleave", function () {
            this.style.borderColor = "#e2e8f0";
            this.style.backgroundColor = "#ffffff";
        });
    }

    // ========================================================================
    // 6. CREAR, INSERTAR Y ELIMINAR ELEMENTOS
    // ========================================================================
    // - document.createElement(tag): Crea un nuevo nodo de elemento en memoria.
    // - padre.appendChild(nodo) o padre.prepend(nodo): Inserta el nodo en el árbol DOM.
    // - elemento.remove() o padre.removeChild(nodo): Remueve el nodo del DOM.

    const btnAgregarCert = document.getElementById("btn-agregar-certificacion");
    const contenedorCursos = document.getElementById("lista-certificaciones");
    const inputNombreCert = document.getElementById("input-nombre-cert");
    const inputInstitucionCert = document.getElementById("input-institucion-cert");
    const inputAnioCert = document.getElementById("input-anio-cert");

    if (btnAgregarCert && contenedorCursos && inputNombreCert) {
        btnAgregarCert.addEventListener("click", function () {
            const nombre = inputNombreCert.value.trim();
            const institucion = inputInstitucionCert.value.trim() || "Institución Acreditada";
            const anio = inputAnioCert.value.trim() || new Date().getFullYear();

            if (!nombre) {
                alert("Por favor ingrese el nombre del curso o certificación.");
                return;
            }

            // PASO 1: Crear el elemento contenedor (li)
            const nuevoItem = document.createElement("li");
            nuevoItem.className = "list-group-item d-flex justify-content-between align-items-center p-3 elemento-destacado texto-animado";

            // PASO 2: Construir el contenido interno del elemento
            const bloqueInfo = document.createElement("div");
            bloqueInfo.innerHTML = `
                <h6 class="mb-1 text-primary"><i class="bi bi-award-fill me-2"></i>${nombre}</h6>
                <p class="mb-0 text-muted small">${institucion} &bull; <strong>Año:</strong> ${anio}</p>
            `;

            // PASO 3: Crear el botón interactivo para eliminar el elemento
            const btnEliminar = document.createElement("button");
            btnEliminar.className = "btn btn-outline-danger btn-sm";
            btnEliminar.innerHTML = '<i class="bi bi-trash"></i> Eliminar';
            btnEliminar.setAttribute("title", "Eliminar este elemento del DOM");

            // Programamos el evento de eliminación utilizando elemento.remove()
            btnEliminar.addEventListener("click", function () {
                // Efecto visual antes de eliminar del DOM
                nuevoItem.style.opacity = "0";
                nuevoItem.style.transform = "translateX(20px)";
                nuevoItem.style.transition = "all 0.3s ease";
                setTimeout(function () {
                    nuevoItem.remove(); // Eliminación física del nodo en el DOM
                }, 300);
            });

            // PASO 4: Ensamblar los elementos hijos en el elemento principal
            nuevoItem.appendChild(bloqueInfo);
            nuevoItem.appendChild(btnEliminar);

            // PASO 5: Insertar en el DOM usando prepend (para que aparezca de primero)
            contenedorCursos.prepend(nuevoItem);

            // Limpiar inputs
            inputNombreCert.value = "";
            inputInstitucionCert.value = "";
            inputAnioCert.value = "";
        });
    }

    // Inicialización de botones de eliminación ya existentes en la página
    document.querySelectorAll(".btn-eliminar-item").forEach(function (boton) {
        boton.addEventListener("click", function () {
            const itemPadre = this.closest(".list-group-item") || this.closest("tr");
            if (itemPadre) {
                itemPadre.remove();
            }
        });
    });
});

/**
 * ============================================================================
 * IMPLEMENTACIÓN FORMA 1: EVENTO EN LÍNEA (INLINE HANDLER)
 * ============================================================================
 * Función expuesta en el ámbito global (window) para ser invocada desde el
 * atributo HTML onclick="mostrarDetalleInline('...')".
 */
function mostrarDetalleInline(cargo) {
    const cajaRespuesta = document.getElementById("caja-respuesta-evento");
    if (cajaRespuesta) {
        cajaRespuesta.className = "alert alert-warning mt-3 texto-animado";
        cajaRespuesta.innerHTML = `<strong>Forma 1 ejecutada (Atributo HTML Inline):</strong> Función llamada directamente desde el atributo <code>onclick="mostrarDetalleInline('${cargo}')"</code> del botón en HTML.`;
    } else {
        alert("Forma 1 (Inline): Cargo seleccionado -> " + cargo);
    }
}
