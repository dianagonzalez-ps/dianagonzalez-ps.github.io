const getValueInput = () =>{ 
    documento=[52368795,1001235478,25413574]; 
    persona = ["Mariana Casas","Raul Ortiz","Fernanda Ramírez","Leonel González"];
    let inputValue = parseInt(document.getElementById("domTextElement").value); 
    let indice=documento.indexOf(inputValue); 
    if(inputValue==52368795){

      Swal.fire({
        title: 'Datos Vacuna',
        text: "Nombre: Mariana Casas, Primera dosis: 29/02/22, Vacuna: Sinovak, Estado: FALTA SEGUNDA Y DOSIS DE REFUERZO",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#10175D',
        cancelButtonColor: '#E35E16',
        confirmButtonText: 'Ir a registro'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "registroVacuna.html";
        
        }
      })

    }

    else if(inputValue==1001235478){

      Swal.fire({
        title: 'Datos Vacuna',
        text: "Nombre: Raul Ortíz, Primera Dosis: 27/10/21 Vacuna: AstraZeneca Segunda Dosis: 30/09/21 Vacuna: AstraZeneca, Estado: FALTA DOSIS DE REFUERZO",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#10175D',
        cancelButtonColor: '#E35E16',
        confirmButtonText: 'Ir a registro'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "registroVacuna.html";
        
        }
      })
    }

    else if(inputValue==25413574){
      Swal.fire({
        title: 'Datos Vacuna',
        text: "Nombre: Fernanda Ramírez, Primera Dosis: 14/07/21 Vacuna: Pfizer, Segunda dosis: 13/08/21, Dosis Refuerzo: 15/02/22, Estado: ESQUEMA COMPLETO",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#10175D',
        cancelButtonColor: '#E35E16',
        confirmButtonText: 'Ir a registro'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "registroVacuna.html";
        
        }
      })
  } 
     
    else{
      Swal.fire({
        title: 'No se encuentra registrado',
        text: "Diligencie el formulario de registro",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#10175D',
        cancelButtonColor: '#E35E16',
        confirmButtonText: 'Ir a registro'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "registro.html";
        
        }
      })
    }
  }
  