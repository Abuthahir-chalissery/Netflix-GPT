
export const checkValidData = (signIn , name, email,password) => {
    
    


    if (!signIn & !name.trim()) return "Enter Full Name"

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s]).{8,}$/.test(password)

    if (!email.trim()) return "Enter email Id"
    if (!isEmailValid) return "Email is not valid"
    if (password == "") return "Enter password"

    // if (password.length < 8) return "Password must be at least 8 characters";
    // if (!/[A-Z]/.test(password)) return "Add at least one uppercase letter";
    // if (!/[a-z]/.test(password)) return "Add at least one lowercase letter";
    // if (!/\d/.test(password)) return "Add at least one number";
    // if (!/[^a-zA-Z0-9]/.test(password)) return "Add at least one special character";

    if (!isPasswordValid) return "Password is not valid"

    

    return null;
}