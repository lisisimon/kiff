import Films from '@/assets/films.json';
import Flags from '@/assets/flags.json';
import Film from '@/models/FilmModel.ts';

export function getFilms(
  continent: string,
  type_g: string,
  minYear: number,
  maxYear: number,
  minRating: number,
  maxRating: number) : Array<Film> {
  let films: Array<Film> = new Array<Film>();
  const flags: {[key: string]: any} = require('@/assets/flags.json');
  for(let i=0; i<Films.length; i++){
    if(flags[Films[i]["country"]]["continent"] === continent && Films[i]["type"] === type_g && Number(Films[i]["year"]) >= minYear && Number(Films[i]["year"]) <= maxYear && Number(Films[i]["rating"]) >= minRating && Number(Films[i]["rating"]) < maxRating) {
      films.push({title: Films[i]["title"], flag1: flags[Films[i]["country"]]["color1"], flag2: flags[Films[i]["country"]]["color2"], flag3: flags[Films[i]["country"]]["color3"], length: Films[i]["length"]} as Film);
    }
  }
  return films;
}