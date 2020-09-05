
    const http = require( "http" );

    var server=http.createServer( 
    (server_req,server_res)=>{

        //:DEAD_SIMPLE_ROUTING:------------------------------://

        const url_cap=( server_req.url.toUpperCase() );
        if( url_cap == "/" ){
            server_res.write("[site_root]");
            server_res.end();
        }else
        if( url_cap == "/STATIC/HELLO.TXT" ){
            server_res.write("[TODO:hello.txt]");
            server_res.end();
        }else{
            server_res.write("[BAD_ROUTE]");
            server_res.end();
        };;

        //:------------------------------:DEAD_SIMPLE_ROUTING://
    
    });;
    server.listen( process.env.PORT );
