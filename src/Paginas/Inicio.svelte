<script>
import Cargador from '../Componentes/Cargador.svelte'
import Grid from '../Componentes/Grid.svelte'
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=ceb89fc7abd6d5b166bfd0ad2a383cb3&language=en-US&page=1'
let promesa = ajax()
let peliculas = []
async function ajax(){
     const res = await fetch(url)
     peliculas = await res.json()
    
     if(res.ok){
         console.log(peliculas);
         return peliculas.results
     }else{
         throw new error('no hay conexion con la api')
     }
}
</script>

<h1> peliculas mas populares</h1>

{#await promesa}
    <div align="center"> <Cargador/></div>
{:then peliculas}
    <Grid {peliculas}/>
{:catch error}
    <p style="color:red;">{error}</p>
{/await}
