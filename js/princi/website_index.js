
var containerflyrs = document.getElementById("flyrs");
var BusquedaInput = document.getElementById("busqinput");



BusquedaInput.addEventListener("input", () => {
  let entrada = BusquedaInput.value;
  let encontrarflyer = Buscarinput(flayers, entrada);
  console.log(encontrarflyer.length);

  if (encontrarflyer.length > 0) {
    renderizarindexfly(encontrarflyer);
  } else {
    containerflyrs.innerHTML = "No se encontro lo que estas buscando";
  }
});

function Buscarinput(lista, termin) {
  console.log(termin);
  if (termin == "") {
    return flayers;
  }
  let translateMinus = termin.toLowerCase();
  return (resultado = lista.filter((item) =>item.titulo.toLowerCase().includes(translateMinus)));
  
}






function generarfly(indexfly) {
  return `<div  style="padding-top: 10px;">
                 <div class="Facultad"> 
                            <div>
                                <div>
                                    <i  class="coloricon bi bi-person-circle">
                                   ${indexfly.titulo}  
                                    </i>
                                </div>
                                <div>
                                    <h6>
                                      ${indexfly.descripcion}  
                                    </h6>
                                </div>
                                <div style="padding: 10px;">
                                    <img style="width: 700px; height: 450px;" 
                                    src=${indexfly.imagen}>
                                </div>
                            </div>
                 </div>
            </div>`;
}

function renderizarindexfly(array) {
  containerflyrs.innerHTML = "";
  array.forEach((item) => (containerflyrs.innerHTML += generarfly(item)));
}

renderizarindexfly(flayers);





var indexcontainer = document.getElementById("indexcontainer");

function progra(progra) {
    return `<div class="hrsec">
                <div class="hrsec">
                    <div class="fecha">
                        <p>
                           ${progra.nombre_dia}
                        </p>
                        <p>
                        ${progra.dia}
                        </p>
                    </div>
                     <div class="detallehr">
                          <p>
                          Curso: ${progra.curso}
                          </p>
                          <p>
                           Hora:  ${progra.hora}
                          </p>
                          <p>
                          Clase:   ${progra.clase}
                          </p>
                      </div>
                </div>
            </div>`
  }

  function renderizarindex(array) {
    indexcontainer.innerHTML = ""
    array.forEach(item =>
        indexcontainer.innerHTML += progra(item)
    )
  }
  
  renderizarindex(programacion)