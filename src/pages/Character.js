import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodios: <span>${character.episode.length}</span></h3>
            <h3>Status: <span>${character.status}</span></h3>
            <h3>Species: <span>${character.species}</span></h3>
            <h3>Gender: ${character.gender}</h3>
            <h3>Origin: <span>${character.origin.name}</span></h3>
            <h3>Last Location: <span>${character.Location.name}</span></h3>
        </article>
        <article class="image" alt="name"></article>
    </div>
    `;
    return view;
};

export default Character;