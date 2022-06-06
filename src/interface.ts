export interface Pokemon{
    id: number,
    name: string,
    sprites:{
      front_default: string;
    }
  }
export interface Pokemon_detail extends Pokemon{
  abilities?: {
    ability: string;
    name: string 
  }[];// [] có nghĩa là khai báo abilities là một array
}