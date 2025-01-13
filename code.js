window.addEventListener('load', function() {
    Swal.fire({
        title: 'Información modificada',
        text: 'La información presentada en esta página relacionada con nombres de agentes, entidades y cualquier otro dato sensible, fue modificada para no comprometer la información oficial',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
    const monthSelect = document.getElementById('month');
    const monthNames = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" ];
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const previousMonthIndex = (currentMonthIndex === 0) ? 11 : currentMonthIndex - 1; const previousMonth = monthNames[previousMonthIndex];
    monthSelect.value = previousMonth;
});
document.getElementById('agent').addEventListener('change', actualizarActiveWork);
document.getElementById('active-work').addEventListener('change', actualizarObra);
document.getElementById('month').addEventListener('change', actualizarObra);
document.getElementById('copy-reference').addEventListener('click', showCopyCompleteReference);
document.getElementById('copy-content').addEventListener('click', showCopyCompleteContent);

function actualizarObra() {
    var activeWork = document.getElementById("active-work").value;
    var formLink = document.getElementById("diary-report");
    var reportLink = document.getElementById("weekly-report");
    var referenceParagraph = document.getElementById('reference-paragraph');
    var contentParagraph = document.getElementById('content-paragraph');
    var month = document.getElementById('month').value;
    var copyIcon = document.querySelectorAll('.copy-icon');
    var mapIframe = document.getElementById('map-iframe');

    switch (activeWork) {
        case "Almirante Brown (Asociación Civil La Estación) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas abajo":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1g-iT_84k6LdDe-PWtPXssP8BVdoAQbo&ehbc=2E312F";
            entity = "Asociación Civil La Estación Emprendimeinto Productivo y Cultural";
            resumeEntity = "La Estación";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas abajo"
            resumeWork = "Arroyo San Francisco aguas abajo";
        break;
        case "Almirante Brown (Asociación Civil La Estación) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas arriba":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1WfBheXQy3jyQyv40PA0wn5vykw2ilsc&ehbc=2E312F&noprof=1";
            entity = "Asociación Civil La Estación Emprendimeinto Productivo y Cultural";
            resumeEntity = "La Estación";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas arriba"
            resumeWork = "Arroyo San Francisco aguas arriba";
        break;
        case "La Plata (Cooperativa de Trabajo Renovación Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Garibaldi y afluentes, canales de desagüe del Barrio Garibaldi y paseo del Arroyo El Pescado":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1bQ8bJboNaDi--WrpqUGPrbK9vGHv0NY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Renovación Ltda.";
            resumeEntity = "Renovación";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Garibaldi y afluentes, canales de desagüe del Barrio Garibaldi y paseo del Arroyo El Pescado"
            resumeWork = "Arroyo Garibaldi y otros";
        break;
        case "La Plata (Cooperativa de Trabajo Renovación Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Rodríguez desde 28 hasta 141, Arroyo Don Carlos desde 185 hasta 189 y zanjón paralelo a calle 486":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1SGgekCZ5USp2CjVEBB4ihaj_d0Dwj6Y&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Renovación Ltda.";
            resumeEntity = "Renovación";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Rodríguez desde 28 hasta 141, Arroyo Don Carlos desde 185 hasta 189 y zanjón paralelo a calle 486"
            resumeWork = "Arroyos Don Carlos y Rodríguez";
        break;
        case "La Plata (Cooperativa de Trabajo Renovación Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan y afluentes del Arroyo Carnaval":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1wSN6hA0hQJnVB3vhngjFqR3YjsHRtsE&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Renovación Ltda.";
            resumeEntity = "Renovación";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Juan y afluentes del Arroyo Carnaval"
            resumeWork = "Arroyo San Juan y otros";
        break;
        case "General San Martín (Cooperativa de Trabajo 25 de Mayo) - Saneamiento, limpieza y mantenimiento de los Canales José León Suárez Norte, Esmeralda y afluentes de calle San Martín y paralelo a Au. Camino del Buen Ayre":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1iSnB6RWpqxuxeNjNj4oN7LHYkHG7vcI&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo 25 de Mayo";
            resumeEntity = "25 de Mayo";
            municipality = "General San Martín";
            work = "Saneamiento, limpieza y mantenimiento de los Canales José León Suárez Norte, Esmeralda y afluentes de calle San Martín y paralelo a Au. Camino del Buen Ayre"
            resumeWork = "Canal José León Suárez y otros";
        break;
        case "Lomas de Zamora (Cooperativa de Trabajo La Independencia) - Saneamiento, limpieza y mantenimiento del Cauce Viejo del Arroyo del Rey":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1xOZ1-a9GvWLNc-4xO5bBz4xIuZM50-c&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Independencia";
            resumeEntity = "La Independencia";
            municipality = "Lomas de Zamora";
            work = "Saneamiento, limpieza y mantenimiento del Cauce Viejo del Arroyo del Rey"
            resumeWork = "Cauce viejo del Arroyo del Rey";
        break;
        case "La Plata (Cooperativa de Trabajo Esperanza viva Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en las localidades de Gonnet y Ringuelet":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=194pv0L_akEFi1bUJ31SW8E9N05xuzNs&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Esperanza viva Ltda.";
            resumeEntity = "Esperanza viva";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en las localidades de Gonnet y Ringuelet"
            resumeWork = "Arroyo El Gato (Gonnet)";
        break;
        case "La Plata (Cooperativa de Trabajo Esperanza viva Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en Melchor Romero y Lisandro Olmos":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1v-G9lw8NogCvvk2fxTZhJyKcmiuU1lo&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Esperanza viva Ltda.";
            resumeEntity = "Esperanza viva";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en Melchor Romero y Lisandro Olmos"
            resumeWork = "Arroyo El Gato (M. Romero)";
        break;
        case "La Plata (Cooperativa de Trabajo Esperanza viva Ltda.) - Saneamiento, limpieza y mantenimiento del Tramo inferior del Arroyo El Gato":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=199fEpWR1mdQ3tikXNXX3PCUs1BoY_N4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Esperanza viva Ltda.";
            resumeEntity = "Esperanza viva";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Tramo inferior del Arroyo El Gato"
            resumeWork = "Arroyo El Gato tramo inferior";
        break;
        case "La Plata (Cooperativa de Trabajo Manos Creativa Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Regimiento y su afluente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1xvtCEs1BAwitxyBYD6jYq0GaPqy6drs&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Manos Creativa Ltda.";
            resumeEntity = "Manos Creativa";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Regimiento y su afluente"
            resumeWork = "Arroyo Regimiento";
        break;
        case "La Plata (Cooperativa de Trabajo Fuerza Nacional Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Martín y Carnaval":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=18j-khS5Gq3xGSDmf_MCC5LSUB4XdWPs&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerza Nacional Ltda.";
            resumeEntity = "Fuerza Nacional";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Martín y Carnaval"
            resumeWork = "Arroyos Martín y Carnaval";
        break;
        case "La Plata (Cooperativa de Trabajo Fuerza Nacional Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pérez y afluentes":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1FlG6XP3ANuS1nzgA1IwIrrDKalOHXGQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerza Nacional Ltda.";
            resumeEntity = "Fuerza Nacional";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Pérez y afluentes"
            resumeWork = "Arroyo Pérez";
        break;
        case "Moreno (Cooperativa de Trabajo Milagros Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Villanueva y Los Perros y los Canales 25 de Mayo, Acoyte y Gálvez González":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1oz77jXM-dVvhdThDzasXDE_nZIPjOKY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Milagros Ltda.";
            resumeEntity = "Milagros";
            municipality = "Moreno";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Villanueva y Los Perros y los Canales 25 de Mayo, Acoyte y Gálvez González"
            resumeWork = "Arroyo Villanueva y otros";
        break;
        case "La Matanza (Cooperativa de Trabajo Manos Unidas Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Morales y Las Víboras y los canales de desagüe del Barrio Nicole":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1OWuWbSazSY8MFnlAXj6AsSIFsF3hUBQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Manos Unidas Ltda.";
            resumeEntity = "Manos Unidas";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Morales y Las Víboras y los canales de desagüe del Barrio Nicole"
            resumeWork = "Arroyos Morales y Las Víboras";
        break;
        case "La Matanza (Cooperativa de Trabajo Manos Unidas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Morales y afluentes y el canal Apipé":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1dzTSdqR-niDoaRtMEia1W8ChXZnUrOQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Manos Unidas Ltda.";
            resumeEntity = "Manos Unidas";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Morales y afluentes y el canal Apipé"
            resumeWork = "Arroyos Morales y Apipé";
        break;
        case "Lomas de Zamora (Cooperativa de Trabajo Manos Unidas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo del Rey":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1c6Cpv4DmWZ38vNy_rjpWlGrTsLXgOJ0&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Manos Unidas Ltda.";
            resumeEntity = "Manos Unidas";
            municipality = "Lomas de Zamora";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo del Rey"
            resumeWork = "Arroyo del Rey";
        break;
        case "Merlo (Cooperativa de Trabajo Manos Unidas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Gregorio de Laferrere y Afluente Bustillo":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1VKYn2MCDk-T0mxwhMRgtujvM3vocxMM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Manos Unidas Ltda.";
            resumeEntity = "Manos Unidas";
            municipality = "Merlo";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Gregorio de Laferrere y Afluente Bustillo"
            resumeWork = "Arroyos Laferrere y Bustillo";
        break;
        case "Escobar (Cooperativa de Trabajo Revolución Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Bedoya, Saboya y Los Pinos y el afluente del Arroyo Garín":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1IerT4dg-VAgu3MhyfRiHtRf83vE7ZHE&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Revolución Ltda.";
            resumeEntity = "Revolución";
            municipality = "Escobar";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Bedoya, Saboya y Los Pinos y el afluente del Arroyo Garín"
            resumeWork = "Arroyo Bedoya y otros";
        break;
        case "General San Martín (Cooperativa de Trabajo Revolución Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales de calle 135, José Ingenieros y Eva Perón":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=18KE5HqIDbjEozoiaW_Md8wz9LrWnaoc&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Revolución Ltda.";
            resumeEntity = "Revolución";
            municipality = "General San Martín";
            work = "aneamiento, limpieza y mantenimiento de los Canales de calle 135, José Ingenieros y Eva Perón"
            resumeWork = "Canal José Ingenieros y otros";
        break;
        case "San Miguel (Cooperativa de Trabajo Futuro Brillante Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Manuel Fraga y Bragado y sus afluentes":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=17A_ICRevoHroL87s61g4DdUXq0J2ISQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Futuro Brillante Ltda.";
            resumeEntity = "Futuro Brillante";
            municipality = "San Miguel";
            work = "Saneamiento, limpieza y mantenimiento de los Canales Manuel Fraga y Bragado y sus afluentes"
            resumeWork = "Canal Bragado y otros";
        break;
        case "Pilar (Cooperativa de Trabajo Haciendo Patria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Burgueño y afluentes":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=11Ky_DFrBltNcZOwJCRruvFtBEZST62Y&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Haciendo Patria Ltda.";
            resumeEntity = "Haciendo Patria";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Burgueño y afluentes"
            resumeWork = "Arroyo Burgueño";
        break;
        case "Berisso (Cooperativa de Trabajo El Gorrión Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Saladero y su afluente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1uB0J_3IAgJ-p2buBscNBihiDOMVwva8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Gorrión Ltda.";
            resumeEntity = "El Gorrión";
            municipality = "Berisso";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Saladero y su afluente"
            resumeWork = "Arroyo Saladero";
        break;
        case "Hurlingham (Cooperativa de Trabajo El Gorrión Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Soto":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1P7i2ELJU3A8T_KjBMN40fvZTUoiADE8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Gorrión Ltda.";
            resumeEntity = "El Gorrión";
            municipality = "Hurlingham";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Soto"
            resumeWork = "Arroyo Soto";
        break;
        case "Tandil (Cooperativa de Trabajo La Gloria Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Langueyú, La Cascada y San Gabriel, Ramal H y áreas de regulación":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1SPHaWRw_cA_fl7QhFMnzi21Vm_l7cpI&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Gloria Ltda.";
            resumeEntity = "La Gloria";
            municipality = "Tandil";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Langueyú, La Cascada y San Gabriel, Ramal H y áreas de regulación"
            resumeWork = "Arroyo Langueyú y otros";
        break;
        case "Quilmes (Cooperativa de Trabajo El Ceibo Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Giménez y su aliviador y los canales IMPA y Monteagudo":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Qinff9p-2DX-9ECUBVpPvHunmVCPV7U&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Ceibo Ltda.";
            resumeEntity = "El Ceibo";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Giménez y su aliviador y los canales IMPA y Monteagudo"
            resumeWork = "Arroyo Giménez y otros";
        break;
        case "Florencio Varela (Cooperativa de Trabajo Eva Duarte Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1pk-rjaF9pRs2Xf7Z9QaHv7244gHZAx4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Eva Duarte Ltda.";
            resumeEntity = "Eva Duarte";
            municipality = "Florencio Varela";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas"
            resumeWork = "Arroyo Las Conchitas";
        break;
        case "Florencio Varela (Cooperativa de Trabajo Eva Duarte Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1UTDqF4osx2W48X7CN4DVw7a8LXskziI&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Eva Duarte Ltda.";
            resumeEntity = "Eva Duarte";
            municipality = "Florencio Varela";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Juan"
            resumeWork = "Arroyo San Juan";
        break;
        case "General Rodríguez (Cooperativa de Trabajo Solidaridad Activa Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos El Carpincho, Parque Granadero y los canales de Planta Urbana y Horacio Quiroga":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1akg1fx61sghlDenviDe64gJUBqMblug&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Solidaridad Activa Ltda.";
            resumeEntity = "Solidaridad Activa";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos El Carpincho, Parque Granadero y los canales de Planta Urbana y Horacio Quiroga"
            resumeWork = "Arroyo El Carpincho y otros";
        break;
        case "Quilmes (Cooperativa de Trabajo Solidaridad Activa Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Comandante Franco hasta Rodolfo López":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=17j_mm-VBB53P-Z2RPsl-wunujza8VTo&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Solidaridad Activa Ltda.";
            resumeEntity = "Solidaridad Activa";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Comandante Franco hasta Rodolfo López"
            resumeWork = "Arroyo Las Piedras desde Cte. Franco";
        break;
        case "Quilmes (Cooperativa de Trabajo Solidaridad Activa Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Rodolfo López hasta C.816":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1a_WDbvXocoOE3zcpMHgJZa17VPVpJZQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Solidaridad Activa Ltda.";
            resumeEntity = "Solidaridad Activa";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Rodolfo López hasta C.816"
            resumeWork = "Arroyo Las Piedras desde R. López";
        break;
        case "Quilmes (Cooperativa de Trabajo Solidaridad Activa Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco desde su confluencia con el Arroyo Santo Domingo hasta Av. Zapiola":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1TgvfSACqKfYriVnloZM4K8Cj5lFPcGg&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Solidaridad Activa Ltda.";
            resumeEntity = "Solidaridad Activa";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco desde su confluencia con el Arroyo Santo Domingo hasta Av. Zapiola"
            resumeWork = "Arroyo San Francisco desde Sto. Domingo";
        break;
        case "Berazategui (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas y su Afluente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1ehE6W5zIZrb7piWPCtZf6TgIiGx-ivY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Unión Solidaria Ltda.";
            resumeEntity = "Unión Solidaria";
            municipality = "Berazategui";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas y su Afluente"
            resumeWork = "Arroyo Las Conchitas";
        break;
        case "General Rodríguez (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Catonas":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Pwqtg-Da-L3Wq2kEJKL63Tt1eGGGRXQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Unión Solidaria Ltda.";
            resumeEntity = "Unión Solidaria";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Catonas"
            resumeWork = "Arroyo Las Catonas";
        break;
        case "La Matanza (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Dupi":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1ltjxaLd_iXOBuMr4b8Y6qtf2-jbw1XY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Unión Solidaria Ltda.";
            resumeEntity = "Unión Solidaria";
            municipality = "La Matanza";
            work = ""
            resumeWork = "";
        break;
        case "Quilmes (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento de la Cava y Canal de desagüe en Barrio Itati":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Ih6pllU2X1DmYh4h5eZVTvIw3UsO4M4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Unión Solidaria Ltda.";
            resumeEntity = "Unión Solidaria";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento de la Cava y Canal de desagüe en Barrio Itati"
            resumeWork = "Cava de Itati";
        break;
        case "Quilmes (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Santo Domingo y Las Piedras aguas abajo":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1b11Rc1mDtKXxVldp5B7rsTDEUqlVZ1s&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Unión Solidaria Ltda.";
            resumeEntity = "Unión Solidaria";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Santo Domingo y Las Piedras aguas abajo"
            resumeWork = "Arroyo Santo Domingo";
        break;
        case "Quilmes (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco entre 888 y Tte. Gral. Donato Álvarez":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1xCPCmKfDZQrC8C1epLGBKSLiTThYgSM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Unión Solidaria Ltda.";
            resumeEntity = "Unión Solidaria";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco entre 888 y Tte. Gral. Donato Álvarez"
            resumeWork = "Arroyo San Francisco desde C. 888";
        break;
        case "General Rodríguez (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Corto y Canal Ricardo Balbin":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Ij5U18px3OakN_esHdSez7cbVLcOGH0&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Cóndor Ltda.";
            resumeEntity = "El Cóndor";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Corto y Canal Ricardo Balbin"
            resumeWork = "Cañada San Antonio Brazo Corto";
        break;
        case "General Rodríguez (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Largo":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1NXF7E54gnJ08B4bIc3PJtK0RvlZca0c&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Cóndor Ltda.";
            resumeEntity = "El Cóndor";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Largo"
            resumeWork = "Cañada San Antonio Brazo Largo";
        break;
        case "La Matanza (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Don Mario y sus afluentes":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1u1C0rAcznAxqE_jimnF0-0IEO9Z7U3U&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Cóndor Ltda.";
            resumeEntity = "El Cóndor";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Don Mario y sus afluentes"
            resumeWork = "Arroyos Susana y Don Mario";
        break;
        case "La Matanza (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Dupi y los zanjones García Merou y de la Fuente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1F1cymQLMq6BRSLytE8ZZex3nTWimaik&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Cóndor Ltda.";
            resumeEntity = "El Cóndor";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Dupi y los zanjones García Merou y de la Fuente"
            resumeWork = "Arroyos Susana y Dupi";
        break;
        case "La Matanza (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Dupi y afluente Iguazú":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=14hsyqXO5ZsU9e2SRrlA9cj_8Y9YIhnc&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Cóndor Ltda.";
            resumeEntity = "El Cóndor";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Dupi y afluente Iguazú"
            resumeWork = "Arroyo Dupi y afluente";
        break;
        case "Quilmes (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco, desde Av. Zapiola hasta calle 888":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1hpEhLV4TWNv5AFJ47KLhXUT8nJnODCM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Cóndor Ltda.";
            resumeEntity = "El Cóndor";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco, desde Av. Zapiola hasta calle 888"
            resumeWork = "Arroyo San francisco desde Zapiola";
        break;
        case "Ensenada (Cooperativa de Trabajo La Morena Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Doña Flora y su afluente y los canales Barragán y de Zona Franca":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1QGsrgKSfjJHF0Ia3SKTukMI7ky1OeTE&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Morena Ltda.";
            resumeEntity = "La Morena";
            municipality = "Ensenada";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Doña Flora y su afluente y los canales Barragán y de Zona Franca"
            resumeWork = "Arroyo Doña Flora y otros";
        break;
        case "Esteban Echeverría (Cooperativa de Trabajo La Morena Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Medrano, El Triángulo, Ortega y Santa Catalina":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Z6rEUVcHJJdC1OtLTg_SjNueN7-kZXk&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Morena Ltda.";
            resumeEntity = "La Morena";
            municipality = "Esteban Echeverría";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Medrano, El Triángulo, Ortega y Santa Catalina"
            resumeWork = "Arroyo Medrano y otros";
        break;
        case "Escobar (Cooperativa de Trabajo Fuerza Obrera Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Loma Verde":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=15dzWgd9G41cXrd1QCCWwd8H8lpjjw6M&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerza Obrera Ltda.";
            resumeEntity = "Fuerza Obrera";
            municipality = "Escobar";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Loma Verde"
            resumeWork = "Arroyo Loma Verde";
        break;
        case "Tigre (Cooperativa de Trabajo Fuerza Obrera Ltda.) - Saneamiento, limpieza y mantenimiento del Canal El Dorado, Arroyo Lola y zanjas del Barrio Las Mascotas":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Mqss6nUvfrfV9kKEPEjqr0Zf22KZS_c&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerza Obrera Ltda.";
            resumeEntity = "Fuerza Obrera";
            municipality = "Tigre";
            work = "Saneamiento, limpieza y mantenimiento del Canal El Dorado, Arroyo Lola y zanjas del Barrio Las Mascotas"
            resumeWork = "Canal El Dorado y otros";
        break;
        case "Zárate (Cooperativa de Trabajo Fuerza Obrera Ltda.) - Saneamiento, limpieza y mantenimiento de los Zanjones en la localidad de Zárate":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1AC-HY2vbDC_566Lun95o4bDzPwJy8aw&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerza Obrera Ltda.";
            resumeEntity = "Fuerza Obrera";
            municipality = "Zárate";
            work = "Saneamiento, limpieza y mantenimiento de los Zanjones en la localidad de Zárate"
            resumeWork = "Zanjones en Zárate";
        break;
        case "Ezeiza (Cooperativa de Trabajo Los Montes Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Aguirre y Rossi":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1VMwcQs2Nv0bAHCRAsZay1G_e2xxBd9U&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Los Montes Ltda.";
            resumeEntity = "Los Montes";
            municipality = "Ezeiza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Aguirre y Rossi"
            resumeWork = "Arroyos Aguirre y Rossi";
        break;
        case "Ezeiza (Cooperativa de Trabajo Los Montes Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Cortez y Vista Alegre":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1rX5I4soE6taZY4SaZwvaHzkHLIu01BY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Los Montes Ltda.";
            resumeEntity = "Los Montes";
            municipality = "Ezeiza";
            work = "Saneamiento, limpieza y mantenimiento de los Canales Cortez y Vista Alegre"
            resumeWork = "Canales Cortez y Vista Alegre";
        break;
        case "Malvinas Argentinas (Cooperativa de Trabajo Los Montes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Horquetas":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=18kTtVKsKrd36kOv0H7tcM3Q50QXAVQ8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Los Montes Ltda.";
            resumeEntity = "Los Montes";
            municipality = "Malvinas Argentinas";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Horquetas"
            resumeWork = "Arroyo Las Horquetas";
        break;
        case "Malvinas Argentinas (Cooperativa de Trabajo Los Montes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Tunas":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1buhFaulSPd4t3e6Q_yFwPxI171KlvNU&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Los Montes Ltda.";
            resumeEntity = "Los Montes";
            municipality = "Malvinas Argentinas";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Tunas"
            resumeWork = "Arroyo Las Tunas";
        break;
        case "San Miguel (Cooperativa de Trabajo Sudamericana Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Pascuala Cueto, Luis Viale y afluente del Arroyo los Berros":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1W6t6Pr5qXlAWlI9e9Y67ESq72Qvu3nY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Sudamericana Ltda.";
            resumeEntity = "Sudamericana";
            municipality = "San Miguel";
            work = "Saneamiento, limpieza y mantenimiento de los Canales Pascuala Cueto, Luis Viale y afluente del Arroyo los Berros"
            resumeWork = "Canal Pascuala Cueto y otros";
        break;
        case "San Miguel (Cooperativa de Trabajo Sudamericana Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Los Berros":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=14qM7xPLml1apEIuqjVby_qNaE-zoiYk&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Sudamericana Ltda.";
            resumeEntity = "Sudamericana";
            municipality = "San Miguel";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Los Berros"
            resumeWork = "Arroyo Los Berros";
        break;
        case "San Nicolás (Cooperativa de Trabajo Liderar Ltda.) - Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Ramallo":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1z1Mo-83ogO-SfYoBDRKeIBSvkt_pNvU&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Liderar Ltda.";
            resumeEntity = "Liderar";
            municipality = "San Nicolás";
            work = "Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Ramallo"
            resumeWork = "Afluentes del Arroyo Ramallo";
        break;
        case "San Nicolás (Cooperativa de Trabajo Liderar Ltda.) - Saneamiento, limpieza y mantenimiento de los canales Paraguay, Alberdi y de zona este":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=136CMfukHJuTH-JNsrDZQO-kzhuKms_k&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Liderar Ltda.";
            resumeEntity = "Liderar";
            municipality = "San Nicolás";
            work = "Saneamiento, limpieza y mantenimiento de los canales Paraguay, Alberdi y de zona este"
            resumeWork = "Canal Paraguay y otros";
        break;
        case "General Rodríguez (Cooperativa de Trabajo Las Golondrinas Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada Álvarez":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1LyKd2uRkFObORWnNp8Xubhgfi3t_8Nw&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Las Golondrinas Ltda.";
            resumeEntity = "Las Golondrinas";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de la Cañada Álvarez"
            resumeWork = "Cañada Álvarez";
        break;
        case "General Rodríguez (Cooperativa de Trabajo Las Golondrinas Ltda.) - Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Las Chozas":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1MavETonXty3-qunf2egJ_k4sBlyKfZM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Las Golondrinas Ltda.";
            resumeEntity = "Las Golondrinas";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Las Chozas"
            resumeWork = "Afluentes del Arroyo Las Chozas";
        break;
        case "La Plata (Cooperativa de Trabajo Pueblo Mío Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Don Carlos y Rodríguez":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1SMkQIHlbTMWx0x9-C7k8PEyBgTrsmI8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Pueblo Mío Ltda.";
            resumeEntity = "Pueblo Mío";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Don Carlos y Rodríguez"
            resumeWork = "Arroyos Don Carlos y Rodríguez";
        break;
        case "La Plata (Cooperativa de Trabajo Pueblo Mío Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Maldonado y su Afluente en Barrio Monasterio":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1GWLll204LrN0mLlg8RpbXqcC18mQIX4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Pueblo Mío Ltda.";
            resumeEntity = "Pueblo Mío";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Maldonado y su Afluente en Barrio Monasterio"
            resumeWork = "Arroyo Maldonado";
        break;
        case "Pilar (Cooperativa de Trabajo Trabajo y Valor Ltda.) - Saneamiento, limpieza y mantenimiento de los Afluentes del Río Luján en Pilar":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1TBZctvsHZYelk0Yy393JIvIohs9oGTw&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Trabajo y Valor Ltda.";
            resumeEntity = "Trabajo y Valor";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento de los Afluentes del Río Luján en Pilar"
            resumeWork = "Afluentes del Río Luján en Pilar";
        break;
        case "Tigre (Cooperativa de Trabajo Trabajo y Valor Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Claro":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1wdO51u76A26baGnhgSxOP50Zu1oxJkg&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Trabajo y Valor Ltda.";
            resumeEntity = "Trabajo y Valor";
            municipality = "Tigre";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Claro"
            resumeWork = "Arroyo Claro";
        break;
        case "San Miguel (Cooperativa de Trabajo Crecer Luchando Ltda.) - Saneamiento, limpieza y mantenimiento del margen noroeste del Río Reconquista":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1AIF6bDpMERMQDunukOlY2oIVHG3nAgA&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Crecer Luchando Ltda.";
            resumeEntity = "Crecer Luchando";
            municipality = "San Miguel";
            work = "Saneamiento, limpieza y mantenimiento del margen noroeste del Río Reconquista"
            resumeWork = "Río Reconquista";
        break;
        case "Merlo (Cooperativa de Trabajo Nuestro Cielo Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Saladero, Granadero, y El Trébol":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1f_eSjrPtyEJ_vIFxxK6PNyVoUQnjC3Y&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuestro Cielo Ltda.";
            resumeEntity = "Nuestro Cielo";
            municipality = "Merlo";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Saladero, Granadero, y El Trébol"
            resumeWork = "Arroyo Saladero y otros";
        break;
        case "Merlo (Cooperativa de Trabajo Nuestro Cielo Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Torres y afluentes":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1nIrTv62UAexj3AS3ajEMpM8EC7zArSg&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuestro Cielo Ltda.";
            resumeEntity = "Nuestro Cielo";
            municipality = "Merlo";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Torres y afluentes"
            resumeWork = "Arroyo Torres";
        break;
        case "Almirante Brown (Cooperativa de Trabajo Creciendo Juntos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo del Rey y afluente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1e0_x7ldOks-QjAjbqw6Mzm_BrnqcCfA&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Creciendo Juntos Ltda.";
            resumeEntity = "Creciendo Juntos";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo del Rey y afluente"
            resumeWork = "Arroyo del Rey";
        break;
        case "La Plata (Cooperativa de Trabajo Dignidad y Justicia Ltda.) - Saneamiento, limpieza y mantenimiento del Tramo superior del Arroyo El Gato y Afluentes 2 y 3":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1X-KEL4F4ob2L5xXtzUPhE3iFBpk9SIM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Dignidad y Justicia Ltda.";
            resumeEntity = "Dignidad y Justicia";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Tramo superior del Arroyo El Gato y Afluentes 2 y 3"
            resumeWork = "Arroyo El Gato";
        break;
        case "Campana (Cooperativa de Trabajo Nuevos Comienzos Ltda.) - Saneamiento, limpieza y mantenimiento de los canales en Ingeniero Otamendi, prolongación de Av. Ameghino y afluentes del Arroyo Santa Cruz":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1YxlWr075Bym5cWZJq3SUekgHDGn6CAw&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Comienzos Ltda.";
            resumeEntity = "Nuevos Comienzos";
            municipality = "Campana";
            work = "Saneamiento, limpieza y mantenimiento de los canales en Ingeniero Otamendi, prolongación de Av. Ameghino y afluentes del Arroyo Santa Cruz"
            resumeWork = "Otamendi y otros";
        break;
        case "Escobar (Cooperativa de Trabajo Nuevos Comienzos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Garín":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1G3mXdXkR0gxYN98Y_4Op4kDn4P4Pu9w&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Comienzos Ltda.";
            resumeEntity = "Nuevos Comienzos";
            municipality = "Escobar";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Garín"
            resumeWork = "Arroyo Garín";
        break;
        case "La Plata (Cooperativa de Trabajo Nuevos Comienzos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Carnaval y Afluente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1lGP2A--ZAVAH5qan3NQ9PxFl7fceL7M&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Comienzos Ltda.";
            resumeEntity = "Nuevos Comienzos";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Carnaval y Afluente"
            resumeWork = "Arroyo Carnaval";
        break;
        case "Almirante Brown (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Garibaldi, Espora, La Tijereta y Charcas":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1pmiu2FX_ktL5QUk-Ia-nTXo2Z7rcLp8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevas Fronteras Ltda.";
            resumeEntity = "Nuevas Fronteras";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento de los Canales Garibaldi, Espora, La Tijereta y Charcas"
            resumeWork = "Canal Garibaldi y otros";
        break;
        case "Almirante Brown (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales pluviales del barrio Rayo de sol":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1d0vMqj-FYT-3f4d1MmlIaIe1ySk-_kE&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevas Fronteras Ltda.";
            resumeEntity = "Nuevas Fronteras";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento de los Canales pluviales del barrio Rayo de sol"
            resumeWork = "Barrio Rayo del Sol";
        break;
        case "Chascomús (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento del Afluente del Arroyo Valdez en zona norte":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=11jIoOEKkPoxkGxkfu1O1iGYhtHerKec&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevas Fronteras Ltda.";
            resumeEntity = "Nuevas Fronteras";
            municipality = "Chascomús";
            work = "Saneamiento, limpieza y mantenimiento del Afluente del Arroyo Valdez en zona norte"
            resumeWork = "Afluente del Arroyo Valdez";
        break;
        case "Chascomús (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Los Toldos y afluente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1qPUNiLpH6C6X0KVYW83UyuduuIfwSLA&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevas Fronteras Ltda.";
            resumeEntity = "Nuevas Fronteras";
            municipality = "Chascomús";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Los Toldos y afluente"
            resumeWork = "Arroyo los Toldos";
        break;
        case "Chascomús (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Felipe y costa de laguna":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1KPoTnVSklbHCH6S_MQJBWGAo3BtGHyc&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevas Fronteras Ltda.";
            resumeEntity = "Nuevas Fronteras";
            municipality = "Chascomús";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Felipe y costa de laguna"
            resumeWork = "Arroyo San Felipe";
        break;
        case "General Pueyrredón (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos La Tapera y El Cardalito y el Canal de desagüe pluvial del barrio Nuevo Golf":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1pNlLqdkc5lvL16KPnAmGYlIdIqkRSdQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevas Fronteras Ltda.";
            resumeEntity = "Nuevas Fronteras";
            municipality = "General Pueyrredón";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos La Tapera y El Cardalito y el Canal de desagüe pluvial del barrio Nuevo Golf"
            resumeWork = "Arroyo La Tapera y otros";
        break;
        case "General Pueyrredón (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Corrientes y Afluentes":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1tdk8RNC6VSCKspA9hW6N8SARGRFyAfQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevas Fronteras Ltda.";
            resumeEntity = "Nuevas Fronteras";
            municipality = "General Pueyrredón";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Corrientes y Afluentes"
            resumeWork = "Arroyo Corrientes";
        break;
        case "Berazategui (Cooperativa de Trabajo El Progreso Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pereyra y su afluente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1t7RqMd5GP3Hlu4VjSCzrn5WtiX40C7I&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Progreso Ltda.";
            resumeEntity = "El Progreso";
            municipality = "Berazategui";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Pereyra y su afluente"
            resumeWork = "Arroyo Pereyra";
        break;
        case "Berazategui (Cooperativa de Trabajo El Progreso Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan y desagües de zona norte":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1hTXIufwxjce_AKlNAlPawe34Dvpsl_A&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Progreso Ltda.";
            resumeEntity = "El Progreso";
            municipality = "Berazategui";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Juan y desagües de zona norte"
            resumeWork = "Arroyo San Juan";
        break;
        case "Presidente Perón (Cooperativa de Trabajo Justicia y Soberanía Ltda.) - Saneamiento, limpieza y mantenimiento del Canal 1, afluente Don Eduardo y zanjones del Barrio Panamérica":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1ZkDRGSyt-KDPG2W4jMw6KG6jU8XqKdk&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Justicia y Soberanía Ltda.";
            resumeEntity = "Justicia y Soberanía";
            municipality = "Presidente Perón";
            work = "Saneamiento, limpieza y mantenimiento del Canal 1, afluente Don Eduardo y zanjones del Barrio Panamérica"
            resumeWork = "Canal 1 y otros";
        break;
        case "Brandsen (Cooperativa de Trabajo Distrito Sur Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Gonzalez y Afluentes en la localidad de Jeppener":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1osLaVEBNnWNyUqCdo3arernes10m7nI&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Distrito Sur Ltda.";
            resumeEntity = "Distrito Sur";
            municipality = "Brandsen";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Gonzalez y Afluentes en la localidad de Jeppener"
            resumeWork = "Arroyo Gonzalez";
        break;
        case "José C. Paz (Cooperativa de Trabajo Perseverancia Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pinazo":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1JWY5qFDqxr4ybgRIB1BbHrpe6FIScco&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Perseverancia Ltda.";
            resumeEntity = "Perseverancia";
            municipality = "José C. Paz";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Pinazo"
            resumeWork = "Arroyo Pinazo";
        break;
        case "Tigre (Cooperativa de Trabajo Perseverancia Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Almirante Brown y Río Reconquista":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1F6OZDLcSzFPLQl_MVRE8NCu7JoM6PJ0&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Perseverancia Ltda.";
            resumeEntity = "Perseverancia";
            municipality = "Tigre";
            work = "Saneamiento, limpieza y mantenimiento del Canal Almirante Brown y Río Reconquista"
            resumeWork = "Canal Almirante Brown y Río Reconquista";
        break;
        case "Pilar (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos De Vicenzo y Pinazo":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1nsHUdAdfjs2A7a1aTmp74ZRD3LSWaP8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Alba Ltda.";
            resumeEntity = "El Alba";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos De Vicenzo y Pinazo"
            resumeWork = "Arroyos De Vicenzo y Pinazo";
        break;
        case "Pilar (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos La Verde y Miriñay y su Afluente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=14LL2Xfh4gDxTpzWZw3o6s9EBlB9r2q8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Alba Ltda.";
            resumeEntity = "El Alba";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos La Verde y Miriñay y su Afluente"
            resumeWork = "Arroyos La Verde y Miriñay";
        break;
        case "Pilar (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los canales Monterrey y Doña Iris":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Q6wiJ_z_YtubGhzo6Pq1iOuNoXjkvjA&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Alba Ltda.";
            resumeEntity = "El Alba";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento de los canales Monterrey y Doña Iris"
            resumeWork = "Canales Monterrey y Doña Iris";
        break;
        case "San Fernando (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales paralelos a Ruta Nacional N°197 y Ramal Tigre":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1tmM1IAfQh0H-9nP7VZVVsuZHrMyCL1c&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Alba Ltda.";
            resumeEntity = "El Alba";
            municipality = "San Fernando";
            work = "Saneamiento, limpieza y mantenimiento de los Canales paralelos a Ruta Nacional N°197 y Ramal Tigre"
            resumeWork = "Canal 197";
        break;
        case "San Isidro (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales en San Isidro":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=19KeNyCqe1lGwQHCXkWX3eQr4okKyZTc&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Alba Ltda.";
            resumeEntity = "El Alba";
            municipality = "San Isidro";
            work = "Saneamiento, limpieza y mantenimiento de los Canales en San Isidro"
            resumeWork = "San Isidro";
        break;
        case "Brandsen (Cooperativa de Trabajo Orgullo Local Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Aleluya y Zanjón Alfonsina Storni":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=13kZC_JC0vThSKGZOOBWN2jMwxhrOjjM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Orgullo Local Ltda.";
            resumeEntity = "Orgullo Local";
            municipality = "Brandsen";
            work = "Saneamiento, limpieza y mantenimiento del Canal Aleluya y Zanjón Alfonsina Storni"
            resumeWork = "Canal Aleluya";
        break;
        case "Brandsen (Cooperativa de Trabajo Orgullo Local Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Belgrano y del Zanjón Córdoba":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1L0dgqfP1OOYDBMhMXYoLVSaZWrhOgC4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Orgullo Local Ltda.";
            resumeEntity = "Orgullo Local";
            municipality = "Brandsen";
            work = "Saneamiento, limpieza y mantenimiento del Canal Belgrano y del Zanjón Córdoba"
            resumeWork = "Canal Belgrano";
        break;
        case "Malvinas Argentinas (Cooperativa de Trabajo Lazos de Trabajo Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Cuzco, Claro y Albuera":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1dIuJ_BM8uzGr-Shs72tHQM8T8OuOL30&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Lazos de Trabajo Ltda.";
            resumeEntity = "Lazos de Trabajo";
            municipality = "Malvinas Argentinas";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Cuzco, Claro y Albuera"
            resumeWork = "Arroyo Cuzco y otros";
        break;
        case "José C. Paz (Cooperativa de Trabajo Sueños Compartidos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas abajo y canal Beláustegui":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1wYWDNIHfCZKopu426KgaccQS7kiCbmY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Sueños Compartidos Ltda.";
            resumeEntity = "Sueños Compartidos";
            municipality = "José C. Paz";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas abajo y canal Beláustegui"
            resumeWork = "Arroyos Zinny y Beláustegui";
        break;
        case "José C. Paz (Cooperativa de Trabajo Sueños Compartidos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas arriba y canal de Panamá":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1F1sMMx7Qyt4vO7QRKfGmrvNNJjH2_-E&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Sueños Compartidos Ltda.";
            resumeEntity = "Sueños Compartidos";
            municipality = "José C. Paz";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas arriba y canal de Panamá"
            resumeWork = "Arroyos Zinny y Panamá";
        break;
        case "Pilar (Cooperativa de Trabajo Honestidad y Verdad Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Toro":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1IU8myHYsrW1o0mRmocmlQbYuotSPu-A&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Honestidad y Verdad Ltda.";
            resumeEntity = "Honestidad y Verdad";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Toro"
            resumeWork = "Arroyo Toro";
        break;
        case "Ezeiza (Cooperativa de Trabajo Nuestra Señora del Luján Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos del Gato y Aguirre y su afluente":
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1aDkWD4FjQpr6aZNve0JBiXvMDViZfCQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuestra Señora del Luján Ltda.";
            resumeEntity = "Nuestra Señora del Luján";
            municipality = "Ezeiza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos del Gato y Aguirre y su afluente"
            resumeWork = "Arroyo del Gato y otros";
        break;
            
            default:
            console.error('Opción seleccionada no válida.');
    }

    referenceParagraph.innerHTML = `PARTE MENSUAL - ${month.toUpperCase()} 2024 - ${resumeEntity.toUpperCase()} - ${resumeWork.toUpperCase()}`;
    contentParagraph.innerHTML = `Se deja constancia que se han realizado los registros de los reportes diarios suministrados por la ${entity}, perteneciente a la obra con denominación: ${work}, en el municipio de ${municipality}, correspondiente al mes de ${month} de 2024.<br>Se encuentran embebidos los partes semanales.`;

    copyIcon.forEach(function(icon) { icon.style.display = 'block'; });
}

function actualizarActiveWork() {
    var agent = document.getElementById("agent").value;
    var activeWork = document.getElementById("active-work");
    activeWork.innerHTML = "";

    if (agent === "Moyano, Matías") {
        var opciones = [
            "Seleccione una obra",
            "La Plata (Cooperativa de Trabajo Renovación Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Garibaldi y afluentes, canales de desagüe del Barrio Garibaldi y paseo del Arroyo El Pescado",
            "La Plata (Cooperativa de Trabajo Renovación Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Rodríguez desde 28 hasta 141, Arroyo Don Carlos desde 185 hasta 189 y zanjón paralelo a calle 486",
            "La Plata (Cooperativa de Trabajo Renovación Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan y afluentes del Arroyo Carnaval",
            "La Plata (Cooperativa de Trabajo Esperanza viva Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en las localidades de Gonnet y Ringuelet",
            "La Plata (Cooperativa de Trabajo Esperanza viva Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en Melchor Romero y Lisandro Olmos",
            "La Plata (Cooperativa de Trabajo Esperanza viva Ltda.) - Saneamiento, limpieza y mantenimiento del Tramo inferior del Arroyo El Gato",
            "La Plata (Cooperativa de Trabajo Manos Creativa Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Regimiento y su afluente",
            "La Plata (Cooperativa de Trabajo Fuerza Nacional Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Martín y Carnaval",
            "La Plata (Cooperativa de Trabajo Fuerza Nacional Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pérez y afluentes",
            "La Plata (Cooperativa de Trabajo Pueblo Mío Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Don Carlos y Rodríguez",
            "La Plata (Cooperativa de Trabajo Pueblo Mío Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Maldonado y su Afluente en Barrio Monasterio",
            "La Plata (Cooperativa de Trabajo Dignidad y Justicia Ltda.) - Saneamiento, limpieza y mantenimiento del Tramo superior del Arroyo El Gato y Afluentes 2 y 3",
            "La Plata (Cooperativa de Trabajo Nuevos Comienzos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Carnaval y Afluente"];
    } else if (agent === "Gimenez, Luka") {
        var opciones = [
            "Seleccione una obra",
            "Berisso (Cooperativa de Trabajo El Gorrión Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Saladero y su afluente",
            "Brandsen (Cooperativa de Trabajo Distrito Sur Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Gonzalez y Afluentes en la localidad de Jeppener",
            "Brandsen (Cooperativa de Trabajo Orgullo Local Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Aleluya y Zanjón Alfonsina Storni",
            "Brandsen (Cooperativa de Trabajo Orgullo Local Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Belgrano y del Zanjón Córdoba",
            "Ensenada (Cooperativa de Trabajo La Morena Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Doña Flora y su afluente y los canales Barragán y de Zona Franca",
            "Ezeiza (Cooperativa de Trabajo Los Montes Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Aguirre y Rossi",
            "Ezeiza (Cooperativa de Trabajo Los Montes Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Cortez y Vista Alegre",
            "Ezeiza (Cooperativa de Trabajo Nuestra Señora del Luján Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos del Gato y Aguirre y su afluente"];
    } else if (agent === "Cabrera, Samuel") {
        var opciones = [
            "Seleccione una obra",
            "José C. Paz (Cooperativa de Trabajo Perseverancia Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pinazo",
            "José C. Paz (Cooperativa de Trabajo Sueños Compartidos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas abajo y canal Beláustegui",
            "José C. Paz (Cooperativa de Trabajo Sueños Compartidos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas arriba y canal de Panamá",
            "San Miguel (Cooperativa de Trabajo Futuro Brillante Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Manuel Fraga y Bragado y sus afluentes",
            "San Miguel (Cooperativa de Trabajo Sudamericana Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Pascuala Cueto, Luis Viale y afluente del Arroyo los Berros",
            "San Miguel (Cooperativa de Trabajo Sudamericana Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Los Berros",
            "San Miguel (Cooperativa de Trabajo Crecer Luchando Ltda.) - Saneamiento, limpieza y mantenimiento del margen noroeste del Río Reconquista"];
    } else if (agent === "Toledo, Pablo") {
        var opciones = [
            "Seleccione una obra",
            "Esteban Echeverría (Cooperativa de Trabajo La Morena Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Medrano, El Triángulo, Ortega y Santa Catalina",
            "General Rodríguez (Cooperativa de Trabajo Solidaridad Activa Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos El Carpincho, Parque Granadero y los canales de Planta Urbana y Horacio Quiroga",
            "Malvinas Argentinas (Cooperativa de Trabajo Los Montes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Horquetas",
            "Malvinas Argentinas (Cooperativa de Trabajo Los Montes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Tunas",
            "Malvinas Argentinas (Cooperativa de Trabajo Lazos de Trabajo Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Cuzco, Claro y Albuera"];
    } else if (agent === "Hernández, Leo") {
        var opciones = [
            "Seleccione una obra",
            "General San Martín (Cooperativa de Trabajo 25 de Mayo) - Saneamiento, limpieza y mantenimiento de los Canales José León Suárez Norte, Esmeralda y afluentes de calle San Martín y paralelo a Au. Camino del Buen Ayre",
            "General San Martín (Cooperativa de Trabajo Revolución Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales de calle 135, José Ingenieros y Eva Perón",
            "Pilar (Cooperativa de Trabajo Haciendo Patria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Burgueño y afluentes",
            "Pilar (Cooperativa de Trabajo Trabajo y Valor Ltda.) - Saneamiento, limpieza y mantenimiento de los Afluentes del Río Luján en Pilar",
            "Pilar (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos De Vicenzo y Pinazo",
            "Pilar (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos La Verde y Miriñay y su Afluente",
            "Pilar (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los canales Monterrey y Doña Iris",
            "Pilar (Cooperativa de Trabajo Honestidad y Verdad Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Toro",
            "San Fernando (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales paralelos a Ruta Nacional N°197 y Ramal Tigre",
            "San Isidro (Cooperativa de Trabajo El Alba Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales en San Isidro"];
    } else if (agent === "López, Alejandra") {
        var opciones = [
            "Seleccione una obra",
            "Lomas de Zamora (Cooperativa de Trabajo La Independencia) - Saneamiento, limpieza y mantenimiento del Cauce Viejo del Arroyo del Rey",
            "Lomas de Zamora (Cooperativa de Trabajo Manos Unidas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo del Rey",
            "Merlo (Cooperativa de Trabajo Manos Unidas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Gregorio de Laferrere y Afluente Bustillo",
            "Presidente Perón (Cooperativa de Trabajo Justicia y Soberanía Ltda.) - Saneamiento, limpieza y mantenimiento del Canal 1, afluente Don Eduardo y zanjones del Barrio Panamérica"];
    } else if (agent === "Blanco, Samuel") {
        var opciones = [
            "Seleccione una obra",
            "General Rodríguez (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Catonas",
            "General Rodríguez (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Corto y Canal Ricardo Balbin",
            "General Rodríguez (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Largo",
            "General Rodríguez (Cooperativa de Trabajo Las Golondrinas Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada Álvarez",
            "General Rodríguez (Cooperativa de Trabajo Las Golondrinas Ltda.) - Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Las Chozas"];
    } else if (agent === "Rivero, Ismael") {
        var opciones = [
            "Seleccione una obra",
            "Almirante Brown (Asociación Civil La Estación) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas abajo",
            "Almirante Brown (Asociación Civil La Estación) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas arriba",
            "Almirante Brown (Cooperativa de Trabajo Creciendo Juntos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo del Rey y afluente",
            "Almirante Brown (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Garibaldi, Espora, La Tijereta y Charcas",
            "Almirante Brown (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales pluviales del barrio Rayo de sol",
            "Florencio Varela (Cooperativa de Trabajo Eva Duarte Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas",
            "Florencio Varela (Cooperativa de Trabajo Eva Duarte Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan"];
    } else if (agent === "González, Carla") {
        var opciones = [
            "Seleccione una obra",
            "Hurlingham (Cooperativa de Trabajo El Gorrión Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Soto",
            "Merlo (Cooperativa de Trabajo Nuestro Cielo Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Saladero, Granadero, y El Trébol",
            "Merlo (Cooperativa de Trabajo Nuestro Cielo Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Torres y afluentes",
            "Moreno (Cooperativa de Trabajo Milagros Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Villanueva y Los Perros y los Canales 25 de Mayo, Acoyte y Gálvez González"];
    } else if (agent === "Ávila, Raúl") {
        var opciones = [
            "Seleccione una obra",
            "Chascomús (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento del Afluente del Arroyo Valdez en zona norte",
            "Chascomús (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Los Toldos y afluente",
            "Chascomús (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Felipe y costa de laguna",
            "General Pueyrredón (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos La Tapera y El Cardalito y el Canal de desagüe pluvial del barrio Nuevo Golf",
            "General Pueyrredón (Cooperativa de Trabajo Nuevas Fronteras Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Corrientes y Afluentes",
            "Tandil (Cooperativa de Trabajo La Gloria Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Langueyú, La Cascada y San Gabriel, Ramal H y áreas de regulación"];
    } else if (agent === "Farías, Elsa") {
        var opciones = [
            "Seleccione una obra",
            "Berazategui (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas y su Afluente",
            "Berazategui (Cooperativa de Trabajo El Progreso Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pereyra y su afluente",
            "Berazategui (Cooperativa de Trabajo El Progreso Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan y desagües de zona norte",
            "Quilmes (Cooperativa de Trabajo El Ceibo Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Giménez y su aliviador y los canales IMPA y Monteagudo",
            "Quilmes (Cooperativa de Trabajo Solidaridad Activa Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Comandante Franco hasta Rodolfo López",
            "Quilmes (Cooperativa de Trabajo Solidaridad Activa Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Rodolfo López hasta C.816",
            "Quilmes (Cooperativa de Trabajo Solidaridad Activa Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco desde su confluencia con el Arroyo Santo Domingo hasta Av. Zapiola",
            "Quilmes (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento de la Cava y Canal de desagüe en Barrio Itati",
            "Quilmes (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Santo Domingo y Las Piedras aguas abajo",
            "Quilmes (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco entre 888 y Tte. Gral. Donato Álvarez",
            "Quilmes (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco, desde Av. Zapiola hasta calle 888"];
    } else if (agent === "Leiva, Blanca") {
        var opciones = [
            "Seleccione una obra",
            "La Matanza (Cooperativa de Trabajo Manos Unidas Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Morales y Las Víboras y los canales de desagüe del Barrio Nicole",
            "La Matanza (Cooperativa de Trabajo Manos Unidas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Morales y afluentes y el canal Apipé",
            "La Matanza (Cooperativa de Trabajo Unión Solidaria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Dupi",
            "La Matanza (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Don Mario y sus afluentes",
            "La Matanza (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Dupi y los zanjones García Merou y de la Fuente",
            "La Matanza (Cooperativa de Trabajo El Cóndor Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Dupi y afluente Iguazú"];
    } else if (agent === "Franco, Matías") {
        var opciones = [
            "Seleccione una obra",
            "Campana (Cooperativa de Trabajo Nuevos Comienzos Ltda.) - Saneamiento, limpieza y mantenimiento de los canales en Ingeniero Otamendi, prolongación de Av. Ameghino y afluentes del Arroyo Santa Cruz",
            "Escobar (Cooperativa de Trabajo Revolución Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Bedoya, Saboya y Los Pinos y el afluente del Arroyo Garín",
            "Escobar (Cooperativa de Trabajo Fuerza Obrera Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Loma Verde",
            "Escobar (Cooperativa de Trabajo Nuevos Comienzos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Garín",
            "San Nicolás (Cooperativa de Trabajo Liderar Ltda.) - Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Ramallo",
            "San Nicolás (Cooperativa de Trabajo Liderar Ltda.) - Saneamiento, limpieza y mantenimiento de los canales Paraguay, Alberdi y de zona este",
            "Tigre (Cooperativa de Trabajo Fuerza Obrera Ltda.) - Saneamiento, limpieza y mantenimiento del Canal El Dorado, Arroyo Lola y zanjas del Barrio Las Mascotas",
            "Tigre (Cooperativa de Trabajo Trabajo y Valor Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Claro",
            "Tigre (Cooperativa de Trabajo Perseverancia Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Almirante Brown y Río Reconquista",
            "Zárate (Cooperativa de Trabajo Fuerza Obrera Ltda.) - Saneamiento, limpieza y mantenimiento de los Zanjones en la localidad de Zárate"];
    } 

    for (var i = 0; i < opciones.length; i++) {
        var option = document.createElement("option");
        option.value = opciones[i];
        option.text = opciones[i];
        activeWork.add(option);
    }
}

var formContainer = document.getElementsByClassName('form-container')[0];
var griContainer = document.getElementsByClassName('grid-container')[0];
var monthlyPartContainer = document.getElementsByClassName('monthly-part')[0];
var mapContainer = document.getElementsByClassName('map')[0];

document.getElementById('monthly-report').addEventListener('click', showMonthlySection);
document.getElementById('map').addEventListener('click', showMapSection);
document.getElementById('close-monthly-part').addEventListener('click',showFormNGrid);
document.getElementById('close-map').addEventListener('click',showFormNGrid);

function showMonthlySection(){
    formContainer.style.display = "none";
    griContainer.style.display = "none";
    monthlyPartContainer.style.display = "block";
    mapContainer.style.display = "none";
}

function showFormNGrid(){
    formContainer.style.display = "flex";
    griContainer.style.display = "flex";
    monthlyPartContainer.style.display = "none";
    mapContainer.style.display = "none";
}

function showMapSection(){
    formContainer.style.display = "none";
    griContainer.style.display = "none";
    monthlyPartContainer.style.display = "none";
    mapContainer.style.display = "block";
}

function showCopyCompleteReference(){
    var reference = document.getElementById('reference-paragraph').innerText;
    navigator.clipboard.writeText(reference).then(function() {
        const notification = document.getElementById("notificationR");
        notification.innerHTML = "Referencia copiada";
        notification.style.height = "36px";
        notification.style.opacity = ".8";
        setTimeout(function() {
            notification.style.height = "0px";
            notification.style.opacity = "0";
        }, 1500);
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
};

function showCopyCompleteContent(){
    var content = document.getElementById('content-paragraph').innerText;
    navigator.clipboard.writeText(content).then(function() {
        const notification = document.getElementById("notificationC");
        notification.innerHTML = "Contenido copiado";
        notification.style.height = "36px";
        notification.style.opacity = ".8";
        setTimeout(function() {
            notification.style.height = "0px";
            notification.style.opacity = "0";
        }, 1500);
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
};

//Alertas
document.getElementById('diary-report').onclick = () => {
  Swal.fire({
    title: 'Registro diario',
    text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resgaurdar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a un formulario de Google Form para la carga del reporte diario del convenio seleccionado',
    icon: 'info',
    confirmButtonText: 'Ok'
  });
};


document.getElementById('weekly-report').onclick = () => {
    Swal.fire({
      title: 'Tabla de reportes',
      text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resgaurdar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a la planilla de Google Sheets donde se registran los reportes diarios del convenio seleccionado',
      icon: 'info',
      confirmButtonText: 'Ok'
    });
  };


  document.getElementById('gsheet-link').onclick = () => {
      Swal.fire({
        title: 'Partes Mensuales',
        text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resgaurdar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a la planilla de Google Sheets donde se registran los numeros de informes digitales de los partes mensuales del convenio seleccionado',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
    };
  

  
