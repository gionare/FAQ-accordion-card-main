function passwordValidator(password){
    let count = 0;
    for (let i = 0; i < password.length; i++) {
        const simbolo = password[i];
        if (/[a-zA-Z]/.test(simbolo)) {
            count++            
        } else if (/[0-9]/.test(simbolo)){ 
            count++
        } else if(/[!@#$%^&*()_+{}\[\]/;:<>,.?~\\-]/.test(simbolo)) {
            count++
        }
        
    }

        if(count !== password.length) {
            return "Dzlieria"
        } else if(count > 0) {
            return "sustia"
        } else {
            return "sustia"
        }
}
console.log(passwordValidator("en "));