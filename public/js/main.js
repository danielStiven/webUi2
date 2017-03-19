/**
 * Created by danielstiven on 2/13/17.
 */
document.addEventListener("DOMContentLoaded", function(event) {
    var formularioLocalStorage = {
        nombre :   document.getElementById("nombre-input"),
        apellido : document.getElementById("apellido-input"),
        botonSave : document.getElementById("save"),
        botonVer : document.getElementById("ver"),
        botonDelete : document.getElementById("delete"),
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
                var divItem = document.createElement("div");
                divItem.className = "align-center";
                var li = document.createElement("span").appendChild(document.createTextNode("Nombre: " + actualArrayData[i].nombre));
                divItem.appendChild(li);
                divItem.appendChild(document.createElement("br"));
                var liApellido = document.createElement("li").appendChild(document.createTextNode("Apellido: " + actualArrayData[i].apellido));
                divItem.appendChild(liApellido);
                divItem.appendChild(document.createElement("br"));
                divItem.appendChild(document.createElement("br"));
                div.appendChild(divItem);
            }

            formularioLocalStorage.modal.style.display = "block";

        },
        deleteLocalStorage : function(){
            localStorage.removeItem("data-array");
        }
    };

    formularioLocalStorage.botonSave.addEventListener('click', formularioLocalStorage.guardarLocalStorage);
    formularioLocalStorage.botonVer.addEventListener('click', formularioLocalStorage.verLocalStorage);
    formularioLocalStorage.botonDelete.addEventListener('click', formularioLocalStorage.deleteLocalStorage);

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