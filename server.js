
    const http = require( "http" );

    var server=http.CreateServer( 
    (server_req,server_res)=>{
    
        server_res.write("[hello_world]");
        server_res.end();
    
    });;
    server.listen( process.env.PORT );
