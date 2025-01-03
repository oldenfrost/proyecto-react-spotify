import { Form } from "antd";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import ImageCover from "./ImageCover";
import { LoadingOutlined } from "@ant-design/icons";
import CustomAlert from "../components/CustomAlert";

const Main = ({ title, buttonText, onFinish, trackData, images, loading, alert, setAlert }) => {
  const inputFields = [
    { label: "Track name", key: "name" },
    { label: "Artist name", key: "artistName" },
    { label: "Album name", key: "albumName" },
    {
      label: "Content: Indicator",
      key: "explicitContentIndicator",
      formatter: (value) => (value ? "Sí" : "No"),
    },
    { label: "PlayBack Seconds", key: "playbackSeconds" },
  ];
  const image = images[0];
  const imageUrl = image ? image.url : "";

  return (
    <>
      <main className="mt-4 w-full sm:flex-1 mr-0 sm:mr-4 sm:mt-0 h-full">
        <div
          className={`bg-neutral-900 text-white pt-2 rounded-lg shadow-lg ${
            trackData ? "h-full" : "h-96  lg:h-[300] md:h-[570px] sm:h-[700px]"
          }`}
        >
          <h2 className="text-xl text-center mt-2 mb-4">{title}</h2>

          <Form
            className="flex flex-col items-center justify-center"
            onFinish={onFinish}
          >
            <CustomAlert
              message={alert.message}
              type={alert.type}
              onClose={() => setAlert({ ...alert, visible: false })}
              className="w-4/5 mb-6 bg-red-600 text-white border-transparent "
              visible={alert.visible}
            />
            <div className="w-3/4">
              <CustomInput
                divClass="flex flex-col items-center w-full"
                name="isrc"
                divInputClass="flex flex-col items-center w-full "
                labelClass="mb-1 text-white text-start w-full "
                inpClass=" h-10 !bg-transparent !text-white  !border-white"
                label="Codigo ISRC:"
                isPassword={false}
                rules={[
                  { required: true, message: "por favor ingrese un codigo isrc" },
                  {
                    type: "text",
                    message: "Por favor, ingrese un correo válido.",
                  },
                ]}
              />
            </div>
            <div className="w-3/4">
              <CustomButton
                text={loading ? <LoadingOutlined /> : buttonText}
                className="!bg-green-500 !text-black !text-lg 
                   hover:!bg-green-400 focus:!bg-green-400 
                    !border-none h-10 sm:w-3/12 w-3/5 rounded-3xl 
                    !font-bold transform transition 
                    duration-300 hover:scale-110 mt-1 "
                htmlType="submit"
              />
            </div>

            <div className="w-3/4 h-[0.1px] bg-gray-400 mt-4 mb-4"></div>
            
            {trackData && (
     
                <div className="flex flex-wrap w-full justify-center gap-4">
                  {inputFields.map(({ label, key, formatter }, index) => {
                    const value = trackData
                      ? formatter
                        ? formatter(trackData[key])
                        : trackData[key] || ""
                      : "";

                    return (
                      <div key={index} className="w-3/4 ">
                        <CustomInput
                          divClass=""
                          name={key}
                          divInputClass="flex flex-col items-center"
                          labelClass="mb-2 text-white text-start w-full"
                          inpClass="w-full h-10 !bg-transparent !text-white !border-white"
                          label={`${label}:`}
                          isPassword={false}
                          disabled={true}
                          value={value}
                          rules={[{ required: false }]}
                        />
                      </div>
                    );
                  })}
             
                {imageUrl && <ImageCover url={imageUrl} />}
              </div>
            )}
          </Form>
        </div>
      </main>
    </>
  );
};

export default Main;
