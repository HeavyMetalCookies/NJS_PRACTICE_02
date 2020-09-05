
    const http = require( "http" );
    const   fs = require(   "fs" );

    var server=http.createServer( 
    (server_req,server_res)=>{

        //:DEAD_SIMPLE_ROUTING:------------------------------://

        const url_cap=( server_req.url.toUpperCase() );
        if( url_cap == "/" ){
            server_res.write("[site_root]");
            server_res.end();
        }else
        if( url_cap == "/STATIC/HELLO.TXT" ){

            fs.readFile( "/STATIC/HELLO.TXT" , (err,dat)=>{

                if( err ){
                    server_res.write("[err]"+err.toString());
                }else
                if(!err ){
                    server_res.write( dat );
                }else{
                    server_res.write(
                        "[This_Line_Should_Never_Execute]"
                    );;
                };;
            
                server_res.end();
            });;

        }else{
            server_res.write("[BAD_ROUTE]");
            server_res.end();
        };;

        //:------------------------------:DEAD_SIMPLE_ROUTING://
    
    });;
    server.listen( process.env.PORT );
