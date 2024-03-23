export  type Pokemon = {
    id: string,
    name: string,
    attacks: {
      fast: {
        damage: number,
        name: string,
        type: string
      }[],
      special: {
        damage: number,
        name: string,
        type: string
      }[]
    }
    evolutions: {
      classification: string,
      fleeRate: number,
      id: string,
      image: string,
      maxCP: number,
      maxHP: number,
      name: string,
      number: string,
      resistant: string[],
      types: string[],
      weaknesses: string[]
    }[]
  }