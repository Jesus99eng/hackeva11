var containercapa = document.getElementById("containercapa");
var BuscarCap = document.getElementById("BuscarCapa");



BuscarCap.addEventListener("input", () => {
    let entrada = BuscarCap.value;
    let encontrarCapa = buscarCapa(capacitacion, entrada);
    console.log(encontrarCapa.length);
  
    if (encontrarCapa.length > 0) {
      renderizarcapa(encontrarCapa);
    } else {
      containercapa.innerHTML = "No se encontraron Capacitaciones";
    }
  });

  function buscarCapa(lista, termin) {
    console.log(termin);
    if (termin == "") {
      return capacitacion;
    }
    let translateMinus = termin.toLowerCase();
    return (resultado = lista.filter(
      (item) =>item.area.toLowerCase().includes(translateMinus)
    
    )
  );
    
  }





function generarCapa(capa) {
    return `   <div>
                    <div class="card">
                            <img  style="width:100%"  
                            src=${capa.image}>
                            
                            <div class="card-container">
                                <div  style="padding-bottom: 50px;" class="john">
                                    <h4>
                                 ${capa.titulo}  
                                    </h4>
                                </div>
                                <div class="john">
                                    <p>
                                       ${capa.tipo_insignia}  
                                    </p>
                                </div>
    
                            </div>
                            <div class="cardbtn">
                                <button class="btncard" >Ver curso</button>
                            </div>
                    </div>
             </div>`
  }


  function renderizarcapa(array) {
    containercapa.innerHTML = ""
    array.forEach(item =>
        containercapa.innerHTML += generarCapa(item)
    )
  }
  
  renderizarcapa(capacitacion)