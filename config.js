module.exports = {
    port: process.env.PORT || 3000,
    db :  process.env.MONGODB || 'mongodb://localhost:27017/shop',
    dbMysql : {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cencosud_foto'
    },
    SECRET_TOKEN: 'miclavetokens'
}