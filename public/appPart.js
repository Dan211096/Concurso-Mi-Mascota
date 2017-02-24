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
	  	const adoptada=document.getElementById('adoptada');
	  	//donde la mascota fue adoptada
	  	const donde=document.getElementById('donde');
	  	//historia graciosa de la mascota
	  	const historia=document.getElementById('historia');

	  	




	  	const prueba=document.getElementById('prueba')
	  	prueba.addEventListener('click', e=>{
	  		const ced=cedula.value;
	  		var entrada=
	  			  			{
		  			'nombreC':nombreC.value,
		  			'apellidoC':apellidoC.value,
		  			'correo':correo.value,
		  			'telefono':telefono.value,
		  			'cedula':cedula.value,
		  			'nombreM':nombreM.value,
		  			'edadA':edadA.value,
		  			'edadM':edadM.value,
		  			//'adoptada':adoptada.value,
		  			'donde':donde.value,
		  			'historia':historia.value
	  			};
	  		console.log(entrada);
	    })
}());