type Sprites = {
  front_default: string;
  front_female?:string;
  front_shiny?:string;
  front_shiny_female?:string;
}
type Stats = {
  base_stat: number;
  stat:{
    name:string;
  }
}
export interface Pokemon {
  nombre: string;
  order: number;
  sprites: Sprites;
  stats : Array<Stats>;
}
