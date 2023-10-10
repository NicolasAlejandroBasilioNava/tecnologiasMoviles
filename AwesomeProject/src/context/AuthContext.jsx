import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const [users, setUsers] = useState([]);

  const handleRegister = (newUser) => {
    // Agrega un nuevo usuario al arreglo de usuarios
    setUsers([...users, newUser]);
  };

  const handleLogin = (username, password) => {
    // Busca el usuario en el arreglo de usuarios
    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
      return true; // Usuario encontrado, inicio de sesión exitoso
    }

    return false; // Usuario no encontrado, inicio de sesión fallido
  };

//   const handleLogin = (username, password) => {
//     if (username === "Eder" && password === "1234") {
//       setUser({
//         username,
//         password,
//       });
//       return true;
//     }
//     return false;
//   };

  const handleLogout = () => {
    setUser("");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };