import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import type { Character } from "./interfaceTarjeta";
import { FC, useEffect } from "react";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 * @returns un JSX element
 */

interface Props {
  character?: Character;
}

//const request = fetch(`https://rickandmortyapi.com/api/character/id`);

const TarjetaPersonaje: FC<Props> = ({ character }) => {
  return (
    <div className="tarjeta-personaje" key={character?.id}>
      <>
        <img src={character?.image} alt={character?.name} />
        <div className="tarjeta-personaje-body">
          <span>{character?.name}</span>
          <BotonFavorito esFavorito={false} onClick={undefined} />
        </div>
      </>
    </div>
  );
};

export default TarjetaPersonaje;
