var provider = new firebase.auth.GoogleAuthProvider();

export const clickCrearCuenta = (mail, pass) => {
    firebase.auth().createUserWithEmailAndPassword(mail, pass)
        .then((userCredential) => {
            var user = userCredential.user;
            console("usuario Creado");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

export const cerarSesion = () => {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = './index.html'
            localStorage.removeItem('uid');
        })
        .catch((err) => {
            console.log(err);
        })
}

export const clickInitGoogle = () => {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            window.location.href = "/index.html";
            // const data = new FormData();
            // data = ("uid", credential)
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            console.log(errorCode, errorMessage, email, credential);
            // ...
        }).finally(() => console.log("promesa finalizada"))
}