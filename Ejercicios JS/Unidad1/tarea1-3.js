const url = 'https://rickandmortyapi.com/api/character'

const fetcData = async() =>{
    const response = await fetch(url)
    const json = await response.json()

    let resultadosFiltrados = json.results.filter(personaje => personaje.id % 2 === 0)
    
    let resultadosMapeados = resultadosFiltrados.map(personaje => {
        if(personaje.type === ""){
            personaje.type = "Programacion Movil"
        }
        return personaje
    })

    // Crear arreglo de objetos con información específica
    const arrayPersonajes= resultadosMapeados.map(personaje => {
        return {
          personaje: personaje.name,
          episodios: personaje.episode.length,
          masDeCincoEpisodios:personaje.episode.length > 5 ? "Si" : "No" 
        }
      })
    
    console.log(arrayPersonajes)
}

fetcData()