import fetch from 'isomorphic-fetch';//polifill para poder usar fecth en navegadores que lo sporten o no, fetch es una nueva fornma de hacer peticiones http que tienen los navegadores viene a sustituir httpreques a ajax y funciona con promesas

const baseUrl = 'https://jsonplaceholder.typicode.com';

//pide los datos, espera, convierte la respuesta en json y los devuelve a quien los pidio
const api = {
	posts: {
		async getList(page=1) {//crear funciones asincronas ecma 2017 con promesas
			const response = await fetch(`${baseUrl}/posts?_page=${page}`);
			const data = await response.json();
			return data;
		},
		async getSingle(id=1){ //obtener un solo post
			const response =  await fetch(`${baseUrl}/posts/${id}`);
			const data = await response.json();
			return data;
		},
		async getComment(id = 1){
			const response =  await fetch(`${baseUrl}/posts/${id}/comments`);
			const data = await response.json();
			return data;
		},
	},
	users: {
		async getSingle(id = 1){
			const response =  await fetch(`${baseUrl}/users/${id}`);
			const data = await response.json();
			return data;
		},
	},
};

export default api;