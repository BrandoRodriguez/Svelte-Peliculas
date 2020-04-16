import Inicio from './Paginas/Inicio.svelte'
import Pelicula from './Paginas/Pelicula.svelte'
import ErrorRoutes from './Paginas/ErrorRoutes.svelte'


const routes = {

    '/':Inicio,
    '/Pelicula/:id':Pelicula,
    '*':ErrorRoutes
}


export default routes;