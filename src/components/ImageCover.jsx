const ImageCover = ({url}) => {

  return (
    <>
      <div className="w-full px-3 flex flex-col items-center mb-4">
        <label className="text-white mb-2">Cover image:</label>
        <div className="mt-2 h-40 w-40 border border-white flex justify-center items-center overflow-hidden rounded-full">
          <img
            className="h-full w-full object-cover"
            src={url}
            alt="Cover"
          />
        </div>
      </div>
    </>
  );
};
export default ImageCover;
