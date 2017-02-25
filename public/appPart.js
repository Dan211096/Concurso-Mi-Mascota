(function()	{
		// Initialize Firebase
		var config = {
		    apiKey: "AIzaSyCyAQ2JD7M7FsGOtU8AqgZdjR3tzS28Yic",
		    authDomain: "concurso-mi-mascota-b4365.firebaseapp.com",
		    databaseURL: "https://concurso-mi-mascota-b4365.firebaseio.com",
		    storageBucket: "concurso-mi-mascota-b4365.appspot.com",
		    messagingSenderId: "493216292048"
		};
		firebase.initializeApp(config);

		//tomo los elementos que contienen:
	 	//nombre del concursante
	  	const nombreC=document.getElementById('nombreC');
	  	//apellido del concursante
	  	const apellidoC=document.getElementById('apellidoC');
	  	//correo del concursante
	  	const correo=document.getElementById('correo');
	  	//telefono del concursante
	  	const telefono=document.getElementById('telefono');
	  	//cedula del concursante
	  	const cedula=document.getElementById('cedula');
	  	//nombre de la mascota
	  	const nombreM=document.getElementById('nombreM');
	  	//Edad en años de la mascota
	  	const edadA=document.getElementById('edadA');
	  	//Edad en meses de la mascota
	  	const edadM=document.getElementById('edadM');
	  	//si la mascota es adoptada
	  	const adoptada=document.getElementById('seleccion');
	  	//donde la mascota fue adoptada
	  	const donde=document.getElementById('donde');
	  	//historia graciosa de la mascota
	  	const historia=document.getElementById('historia');
	  	//Boton de envio de datos
	  	const envio=document.getElementById('envio');
	  	//campo que solo se muestra si s=fue doptada la mascota
	  	const opcional=document.getElementById('opcional');


	  	var text=document.getElementById('foto');

	  	var text1=document.getElementById('foto1');

	  	var text2=document.getElementById('foto2');

	

		envio.addEventListener('click', e=>{
	  		

	  		if(nombreC.value==null || nombreC.value==""){
	  			console.log("ponga el campo de nombre de participante");
	  			window.alert("Tiene que poner su nombre");
	  		} else if(apellidoC.value==null || apellidoC.value==""){
	  			console.log("ponga el apellido");
	  			window.alert("Tiene que poner su apellido");
	  		}else if(correo.value==null || correo.value==""){
	  			console.log("ponga el correo");
	  			window.alert("tiene que poner un correo");
	  		}else if(telefono.value==null || telefono.value==""){
	  			console.log("ponga el telefono");
	  			window.alert("tiene que poner su telefono");
	  		}else if(nombreM.value==null || nombreM.value==""){
	  			console.log("ponga el nombre de la mascota");
	  			window.alert("Tiene que poner el nombre de su mascota");
	  		}else if(edadA.value==null || edadA.value==""){
	  			console.log("ponga la edad en años");
	  			window.alert("Tiene que poner la edad de la mascota");
	  		}else if(edadM.value==null || edadM.value==""){
	  			console.log("ponga la edad en meses");
	  			window.alert("Tiene que poner la edad de la mascota");
	  		}else if((adoptada.options[adoptada.selectedIndex].value=='1')&&(donde.value==null || donde.value=="")){
	  			console.log("ponga donde lo adopto");
	  			window.alert("Tiene que poner donde la adopto");
	  		}else if(historia.value==null || historia.value==""){
	  			console.log("ponga la historia graciosa");
	  			window.alert("Tiene que poner la historia graciosa");
	  		}else if(cedula.value==null || cedula.value==""){
	  			console.log("ponga la cedula");
	  			window.alert("Tiene que poner su cedula");
	  		}else{
		  		const ced=cedula.value;
		  		var adoptE='False';
		  		var enDonde='a'
		  		if(adoptada.options[adoptada.selectedIndex].value==='1'){
		  			adoptE='True';
		  			enDonde=donde.value;
		  		}else{
		  			adoptE='False';
		  			enDonde=null;
		  		}
		  		var entrada={
						'Apellido':apellidoC.value,
						'Correo':correo.value,
						'Estatus':'Pendiente',
						'Mascota':{
							'Adoptada':adoptE,
							'Donde': enDonde,
							'EdadA':edadA.value,
							'EdadM':edadM.value,
							'Historia':historia.value,
							'Nombre':nombreM.value,
							'Fotos':{
								'Foto1':text.value,
								'Foto2':text1.value,
								'Foto3':text2.value
							}
						},
			  			'Nombre':nombreC.value,
			  			'Telefono':telefono.value
		  			};
		  		console.log(entrada);
		  		firebase.database().ref('Entrada/'+ced).set(entrada);
		  		const formul =document.getElementById('formul');
		  		formul.setAttribute('hidden', 'true');
		  		const gracias=document.getElementById('gracias');
		  		gracias.removeAttribute('hidden');

		  	}
		});


		var subirArchivo=document.getElementById('subirArchivo');
	  	//Para cuando se haga click en el boton de seleccionar archivo
      	subirArchivo.addEventListener('change', function(e) {
	        //Cargar archivo
	        var file = e.target.files[0];
	        //Crear storage ref
	        var storageRef = firebase.storage().ref('fotos_concurso/' + file.name);
			//Subir el archivo
	        var task = storageRef.put(file);
	          function error(err) {
	          };

	          function complete() {
	          }
	          
	          text.value=file.name;
	      });


		var subirArchivo1=document.getElementById('subirArchivo1');
	  	//Para cuando se haga click en el boton de seleccionar archivo
      	subirArchivo1.addEventListener('change', function(e) {
	        //Cargar archivo
	        var file = e.target.files[0];
	        //Crear storage ref
	        var storageRef = firebase.storage().ref('fotos_concurso/' + file.name);
			//Subir el archivo
	        var task = storageRef.put(file);
	          function error(err) {
	          };

	          function complete() {
	          }
	          var text=document.getElementById('foto1');
	          	text1.value=file.name;
	          
	      });

		var subirArchivo2=document.getElementById('subirArchivo2');
	  	//Para cuando se haga click en el boton de seleccionar archivo
      	subirArchivo2.addEventListener('change', function(e) {
	        //Cargar archivo
	        var file = e.target.files[0];
	        //Crear storage ref
	        var storageRef = firebase.storage().ref('fotos_concurso/' + file.name);
			//Subir el archivo
	        var task = storageRef.put(file);
	          function error(err) {
	          };

	          function complete() {
	          }
	          var text=document.getElementById('foto2');
	          text2.value=file.name;
	      });
}());