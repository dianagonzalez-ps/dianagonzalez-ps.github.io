function ir(){

    var pass="Kuepa2022";
    var user="Admin";
    
    if(document.form.password.value==pass && document.form.usuario.value==user){
        window.location="dashboard.html"
    }
    
    else{
        Swal.fire({
            icon: 'warning',
            title: 'Ingrese correctamente, su usuario y contraseña',
            confirmButtonColor: '#E35E16',
          })
    
    }
    
    }