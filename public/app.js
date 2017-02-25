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
		//campo del correo
		const txtEmail=document.getElementById('txtEmail');
		//campo de la contraseña
		const txtPassword=document.getElementById('txtPassword');
		//boton de inicio de sesion
		const btnLogIn=document.getElementById('btnLogIn');
		//boton para crear usuario
		const btnSignUp=document.getElementById('btnSignUp');
		//boton para cerrar sesion
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

	    //evento para cerrar sesion
	    btnLogOut.addEventListener('click', e=>{
	  		firebase.auth().signOut();
	    })

	    //listener para la autentificacion. para verificar si inicio sesion
	    firebase.auth().onAuthStateChanged(firebaseUser =>{
	  		if (firebaseUser){
	  			//se muestra el usuario para pruebas
	  			console.log(firebaseUser);
	  			//se muestran y ocultan los elementos necesarios
		  		btnLogIn.setAttribute('hidden', 'true');
		  		btnSignUp.setAttribute('hidden', 'true');
		  		btnLogOut.removeAttribute('hidden');
		  		txtPassword.value='';
		  		txtPassword.setAttribute('hidden', 'true');
		  		txtEmail.value='';
		  		txtEmail.setAttribute('hidden', 'true');
		  		//se redirige a la pagina de admin si inicio sesion';
		  		window.location.href='../admin.html'
		  	} else{
		  		//se muestra un mensaje para preubas
		  		console.log('not logged in');
		  		//se muestran y ocultan elementos
		  		btnLogIn.removeAttribute('hidden');
		  		btnSignUp.removeAttribute('hidden');
		  		btnLogOut.setAttribute('hidden', 'true');
		  		txtEmail.removeAttribute('hidden');
		  		txtPassword.removeAttribute('hidden');
		  	}
	    });

}());