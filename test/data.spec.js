import { buscarName, ordemAlfabetica, getPeople} from '../src/data.js';

const totoro={title: "Totoro"}
const totoroPeople={
  title: "Totoro",
  people: [{
    "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
    "name": "Satsuki Kusakabe",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
    "movie": "Totoro",
    "gender": "Female",
    "age": "11",
    "eye_color": "Dark Brown/Black",
    "hair_color": "Dark Brown",
    "specie": "Human"
  },
  {
    "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
    "name": "Mei Kusakabe",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
    "movie": "Totoro",
    "gender": "Female",
    "age": "4",
    "eye_color": "Brown",
    "hair_color": "Light Brown",
    "specie": "Human"
  },]
}
const data=[totoro,{
  title: "Castle in the Sky"
},{
  title: "Pom Poko"
}]
const dataPeople=[totoroPeople,{
  
  title: "Castle in the Sky", 
  people: []
},{
  title: "Pom Poko",
  people: []
}]


describe('teste func buscar nome',() => {
  it('is a function', () => {
    expect(typeof buscarName).toBe('function');
  });
  it('filtro por partes de palavra', () => {
    const condition="to"
    expect(buscarName(data, condition)).toEqual([totoro]);
  });
})

describe('teste ordem alfabetica',() => {
  it('is a function', () => {
    expect(typeof ordemAlfabetica).toBe('function');
  });
  it('filtro ordem alfabetica', () => {
    const condition="crescente"
    expect(ordemAlfabetica(data, condition)).toEqual([{"title": "Castle in the Sky"}, {"title": "Pom Poko"}, {"title": "Totoro"}]);
  });
  it('filtro ordem alfabetica', () => {
    const condition="decrescente"
    expect(ordemAlfabetica(data, condition)).toEqual([{"title":"Totoro" }, {"title": "Pom Poko"}, {"title":"Castle in the Sky" }]);
  });
  it('filtro ordem alfabetica', () => {
    const condition=""
    expect(ordemAlfabetica(data, condition)).toEqual([{"title":"Totoro" }, {"title": "Pom Poko"}, {"title":"Castle in the Sky" }]);
  });
})

describe('teste selecionar pessoas',() => {
  it('is a function', () => {
    expect(typeof getPeople).toBe('function');
  });
  it('filtro pessoas', () => {
    expect(getPeople(dataPeople)).toEqual([{
      "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
      "name": "Satsuki Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
      "movie": "Totoro",
      "gender": "Female",
      "age": "11",
      "eye_color": "Dark Brown/Black",
      "hair_color": "Dark Brown",
      "specie": "Human"
    },
    {
      "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
      "name": "Mei Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
      "movie": "Totoro",
      "gender": "Female",
      "age": "4",
      "eye_color": "Brown",
      "hair_color": "Light Brown",
      "specie": "Human"
    }])  
  });
})