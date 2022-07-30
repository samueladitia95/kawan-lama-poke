import { typeColor } from "./utils/typeColor";

export type Pokemon = {
  id: number;
  order: number;
  name: string;
  is_default: boolean;
  base_experience: number;
  location_area_encounters: string;
  weight: number;
  height: number;
  abilities: Ability[];
  forms: Name[];
  species: Name;
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  moves: Move[];
};

type Name = {
  name: string;
  url: string;
};

type Ability = {
  ability: Name;
  is_hidden: boolean;
  slot: number;
};

type Move = {
  move: Name;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: Name;
    version_group: Name;
  }[];
};

type Sprite = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
    home: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    "official-artwork": {
      front_default: string;
    };
  };
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: Name;
};

type Type = {
  slot: number;
  type: {
    name: TypeColor;
    url: string;
  };
};

type TypeColor = keyof typeof typeColor;

type Move = {
  move: Name;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: Name;
    version_group: Name;
  }[];
};
