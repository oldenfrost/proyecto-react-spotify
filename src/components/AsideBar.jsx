import { Card } from "antd";
import AsideBarMenu from "./AsideBarMenu";

const AsideBar = () => {
  
  return (
    <>
      <aside className="w-full sm:w-2/6 ml-0 sm:ml-4 pr-0 sm:pr-4">
        <Card
          bordered={false}
          className="bg-neutral-900 rounded-lg text-white h-full "
        >
          <h1 className="text-xl pb-12">Menu</h1>
          <div className="space-y-4">
            <AsideBarMenu
              h2={"Búsqueda y Visualización:"}
              span={
                " Permite ingresar un ISRC para buscar información de una pista y mostrarla."
              }
              button={"Buscar:"}
            />
            <AsideBarMenu
              h2={"Recuperación de Metadatos:"}
              span={
                "Obtiene y muestra datos de pistas almacenadas previamente usando un ISRC."
              }
              button={"Crear:"}
            />
          </div>
        </Card>
      </aside>
    </>
  );
};
export default AsideBar;
