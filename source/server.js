import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router';
import Pages from './pages/containers/Page.jsx'

function requestHandler(request, response){
  const context =  createServerRenderContext();
  let html = renderToString(
   <ServerRouter location={request.url} context={context}>
   	<Pages />
   </ServerRouter>
  );

  const result =  context.getResult();//me da informacion de lo que esta pasando y lo que tenemos que hacer en la app
  response.setHeader('Content-Type', 'text/html');

  if (result.redirect){
  	response.writeHead(301, {
  		Location: result.redirect.pathname,
  	});
  	response.end();
  }

  if (result.missed){ //hubo un 404
  	response.writeHead(404);
  	html = renderToString(
  	<ServerRouter location={request.url} context={context}>
   		<Pages />
   	</ServerRouter>

  	);
  }

  response.write(html);
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);
