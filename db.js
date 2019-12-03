const mysql=require('mysql')
function connect(){
    const connection=mysql.createConnection({
        host:'172.18.4.173',
        user:'root',
        database:'myapp_db',
        password:'root',
        port:9999
    })
  connection.connect()
  return connection    

}

module.exports={
    connect:connect
}
