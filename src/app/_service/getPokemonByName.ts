export default async function getPokemonByName (param:string) {
    const response = await fetch(`../api/pokemon/${param}`);
    if (response.ok) {
        const data = await response.json();
        const jsondata = JSON.stringify(data);
        sessionStorage.setItem("prev-pokemon", jsondata);
        return data;
    }

    return null
}