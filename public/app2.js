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
		const txtEmail=document.getElementById('txtEmail');
		const txtPassword=document.getElementById('txtPassword');
		const btnLogIn=document.getElementById('btnLogIn');
		const btnSignUp=document.getElementById('btnSignUp');
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

	    btnLogOut.addEventListener('click', e=>{
	  		firebase.auth().signOut();
	    })

	    //listener para la autentificacion. para verificar si inicio sesion
	    firebase.auth().onAuthStateChanged(firebaseUser =>{
	  		if (firebaseUser){
	  			console.log(firebaseUser);
		  		btnLogIn.setAttribute('hidden', 'true');
		  		btnSignUp.setAttribute('hidden', 'true');
		  		btnLogOut.removeAttribute('hidden');
		  		txtPassword.value='';
		  		txtPassword.setAttribute('hidden', 'true');
		  		txtEmail.value='';
		  		txtEmail.setAttribute('hidden', 'true');

		  		
		  	} else{
		  		console.log('not logged in');
		  		btnLogIn.removeAttribute('hidden');
		  		btnSignUp.removeAttribute('hidden');
		  		btnLogOut.setAttribute('hidden', 'true');
		  		txtEmail.removeAttribute('hidden');
		  		txtPassword.removeAttribute('hidden');
		 		window.location.href='../index.html';
		  	}
	    });

}());