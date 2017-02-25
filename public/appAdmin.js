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

		//tomo los elementos 
		//camp de texto donde se ingresa el correo
		const txtEmail=document.getElementById('txtEmail');
		//campo de texto donde se ingresa la contraseña
		const txtPassword=document.getElementById('txtPassword');
		//boton de inicio de sesion
		const btnLogIn=document.getElementById('btnLogIn');
		//boton de crear usuario
		const btnSignUp=document.getElementById('btnSignUp');
		//boton de cierre de sesion
	 	const btnLogOut=document.getElementById('btnLogOut');

	  	//evento para iniciar sesion
		btnLogIn.addEventListener('click', e =>{
		  	//tomo el email y password
		  	const email = txtEmail.value;
		  	const pass = txtPassword.value;
		  	const auth = firebase.auth();
		  	//inicio de sesion
		  	const promesa = auth.signInWithEmailAndPassword(email,pass);
		  	promesa.catch (e=> console.log(e.message));

		  });
		


	    //evento para crear usuario
	    btnSignUp.addEventListener('click',e=>{
	  		//tomo el email y password
	  		const email = txtEmail.value;
		  	const pass = txtPassword.value;
		  	const auth = firebase.auth();
		  	//inicio de sesion
		  	const promesa = auth.createUserWithEmailAndPassword(email,pass);
		  	promesa.catch (e=> console.log(e.message));
		});

	    //Evento para cerrar sesion
	    btnLogOut.addEventListener('click', e=>{
	    	//cierro sesion
	  		firebase.auth().signOut();
	    })

	    //listener para la autentificacion. para verificar si inicio sesion
	    firebase.auth().onAuthStateChanged(firebaseUser =>{
	  		if (firebaseUser){
	  			//se imprime el usuario para pruebas
	  			console.log(firebaseUser);
	  			//se ocultan y muestran los elementos necesarios
		  		btnLogIn.setAttribute('hidden', 'true');
		  		btnSignUp.setAttribute('hidden', 'true');
		  		btnLogOut.removeAttribute('hidden');
		  		txtPassword.value='';
		  		txtPassword.setAttribute('hidden', 'true');
		  		txtEmail.value='';
		  		txtEmail.setAttribute('hidden', 'true');

		  		
		  	} else{
		  		//se imprime un mensaje para prueba
		  		console.log('not logged in');
		  		//se ocultan y muestran los elementos necesarios
		  		btnLogIn.removeAttribute('hidden');
		  		btnSignUp.removeAttribute('hidden');
		  		btnLogOut.setAttribute('hidden', 'true');
		  		txtEmail.removeAttribute('hidden');
		  		txtPassword.removeAttribute('hidden');
		  		//se redirige a la pagina principal. Si ya no esta logeado, no puede seguir en las paginas de administrador
		 		window.location.href='../index.html';
		  	}
	    });

	   
}());