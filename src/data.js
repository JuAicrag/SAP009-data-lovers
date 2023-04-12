export const buscarName = (data, condition) => {
  const resultadoBusca = data.filter((filme) => filme.title.toLowerCase().includes(condition.toLowerCase()));
  return resultadoBusca;
};


export const ordemAlfabetica = (data, order) => {
  if (order === "crescente") {
    return data.sort((a, z) => a.title > z.title ? 1 : -1)
  }
  else if (order === "decrescente") {
    return data.sort((a, z) => a.title > z.title ? -1 : 1)
  } 
  return data
};



export const getPeople = films => {
  let people = []
  for (const film of films) {
    const chars = film.people.map (function (char){
      char.movie = film.title;
      return char
    })
    people = people.concat(chars)   
  }
  return people
}




//calc agregado
export const calcAgregado = (personagens) => {
  const mediaPersonagens = personagens.reduce((a, b) => (a + b)) / personagens.length
  const totalPersonagens = personagens.reduce((a, b) => (a + b))
  return {"media": mediaPersonagens, "total": totalPersonagens} 
}

