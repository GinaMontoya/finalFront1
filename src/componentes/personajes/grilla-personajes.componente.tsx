import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { Character } from "./interfaceTarjeta";
import { FC } from "react";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */

interface Props {
  characters?: Character[];
}
const GrillaPersonajes: FC<Props> = ({ characters }) => {
  if (characters?.length === 0) return <></>;
  return (
    <div className="grilla-personajes">
      <div>
        {characters?.map((c) => (
          <TarjetaPersonaje key={c.id} character={c} />
        ))}
      </div>
    </div>
  );
};

export default GrillaPersonajes;
