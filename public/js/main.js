/**
 * Created by danielstiven on 2/13/17.
 */
document.addEventListener("DOMContentLoaded", function(event) {
    var formularioLocalStorage = {
        nombre :   document.getElementById("nombre-input"),
        apellido : document.getElementById("apellido-input"),
        botonSave : document.getElementById("save"),
        botonVer : document.getElementById("ver"),
        modal : document.getElementById('myModal'),
        modalContent : document.getElementById('modal-local-storage-content'),
        guardarLocalStorage : function(){
            if(formularioLocalStorage.nombre.value && formularioLocalStorage.apellido.value){
                var actualArrayData = (localStorage["data-array"]? JSON.parse(localStorage["data-array"]) : [] );
                var dataToSave = {
                    nombre : formularioLocalStorage.nombre.value,
                    apellido : formularioLocalStorage.apellido.value
                };

                actualArrayData.push(dataToSave);
                localStorage["data-array"] = JSON.stringify(actualArrayData);
            }

        },
        verLocalStorage : function(){
            /** Borrando todos los hijos **/
            while (formularioLocalStorage.modalContent.firstChild) {
                formularioLocalStorage.modalContent.removeChild(formularioLocalStorage.modalContent.firstChild);
            }

            var actualArrayData = (localStorage["data-array"]? JSON.parse(localStorage["data-array"]) : [] );

            /** Agregando los resultados **/
            var div = formularioLocalStorage.modalContent.appendChild(document.createElement("div"));
            for(var i=0; i < actualArrayData.length; i++){
                var divItem = document.createElement("ol");
                var li = document.createElement("li").appendChild(document.createTextNode("Nombre " + actualArrayData[i].nombre));
                divItem.appendChild(li);
               // var liNombre = document.createElement("li");
                //var liApellido = document.createElement("li").appendChild(document.createTextNode("Apellido " + actualArrayData[i].apellido));
                var br = document.createElement("br");

                //divItem.appendChild(liApellido);
                div.appendChild(divItem);
                div.appendChild(br);
            }

            formularioLocalStorage.modal.style.display = "block";

        }
    };

    formularioLocalStorage.botonSave.addEventListener('click', formularioLocalStorage.guardarLocalStorage);
    formularioLocalStorage.botonVer.addEventListener('click', formularioLocalStorage.verLocalStorage);

    document.getElementsByClassName("close")[0].addEventListener('click', function(){
        formularioLocalStorage.modal.style.display = "none";
    });
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == formularioLocalStorage.modal) {
            formularioLocalStorage.modal.style.display = "none";
        }
    }
});