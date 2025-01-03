import CustomButton from "./CustomButton";
import { useNavigate } from 'react-router-dom';

const AsideBarMenu = ({ h2, span, button }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
  
    if (button === "Buscar:") {

      navigate('SearchTrack'); 

    } else if (button === "Crear:") {
      navigate('CreateTrack'); 
      
    }
  };
  
  return (
    
    <>
      <div className="flex flex-col items-start p-4 bg-neutral-800 rounded-lg cursor-pointer h-4/5">
        <h2 className="text-l text-white font-bold mb-2">{h2}</h2>
        <span className="text-sm font-medium text-white pb-2">{span}</span>

        <CustomButton
          text={button}
          className="!text-black font-bold sm:w-8/12 rounded-2xl transform transition duration-300 hover:scale-105 !border-none"
          htmlType="submit"
          onClick={() => handleButtonClick(button)}
        />
      </div>
    </>
  );
};
export default AsideBarMenu;
