import { DataTypes } from "sequelize";
import db from "../conecction.js";
import bcrypt from "bcryptjs";

const User = db.define("User", {
    Usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
}
);

// Método para verificar la contraseña del usuario
User.prototype.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);  // Compara la contraseña ingresada con la almacenada usando bcrypt
};
  
export default User;

