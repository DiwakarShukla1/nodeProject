import Sequelize from "sequelize";

const config = {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min:0,
        idle: 10000
    }
};
const sequelize = new Sequelize('test', 'root', 'roxiler', config);

const Profile = sequelize.define('profile', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    freazeTableName : true
});

export {sequelize, Profile };