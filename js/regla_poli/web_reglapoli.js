var reglacontainer = document.getElementById("reglacontainer");
var guipolicontainer = document.getElementById("guipolicontainer");

function generarReglamento(regla) {
  return `<div>
             <div style="padding-bottom: 10px;">
                  <p>
                  ${regla.categoria}
                  </p>
             </div>

             <div class="generc">
                    <div class="reglam">

                                <div style="padding-bottom: 10px;">
                                    <p>
                                    ${regla.titulo}
                                    </p>
                                </div>
                                <div>

                                    <p> 
                                    ${regla.descripcion}    
                                    </p>

                                </div>
                                <div class="predes">
                                    <a class="pre" href="">previsualizar</a>
                                    <a class="desca" href="">descargar</a>
                                </div>
                    </div>
            </div>
     </div>`
}


function generarguiaspoli(reglapoli) {
    return ` <div>
                        <div style="padding-bottom: 10px;">
                            <p>
                            ${reglapoli.categoria}    
                            </p>
                        </div>

                        <div class="generc">
                            <div class="guias">

                                <div style="padding-bottom: 10px;">
                                    <p>
                                     ${reglapoli.titulo}    
                                    </p>
                                </div>
                                <div>
                                <p>
                                  ${reglapoli.descripcion}    
                                </p>
                                 
                                </div>
                                <div class="predes">
                                    <a class="pre" href="">previsualizar</a>
                                    <a class="desca" href="">descargar</a>
                                </div>

                            </div>
                        </div>
            </div>`
  }


function renderizarRegla(array) {
    reglacontainer.innerHTML = ""
    array.forEach(item =>
        reglacontainer.innerHTML += generarReglamento(item)
    )
  }
  
  renderizarRegla(reglamentos)

  function renderizarguiaspoliticas(array) {
    guipolicontainer.innerHTML = ""
    array.forEach(item =>
        guipolicontainer.innerHTML += generarguiaspoli(item)
    )
  }
  
  renderizarguiaspoliticas(guias)
  
