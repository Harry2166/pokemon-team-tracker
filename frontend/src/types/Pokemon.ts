
export interface Pokemon {
    id: number; // Django auto-generated primary key
    species_name: string;
    pokeapi_id: number;
    nickname: string;
    gender: boolean; // true = male, false = female
    image_url: string;
    captured_at: string; // ISO timestamp as returned by DRF/JSON
    shiny: boolean;
}

export interface OwnedPokemon {
    name: string,
    image_url: string,
    id: number
}
