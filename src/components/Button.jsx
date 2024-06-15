const Button = ({ text, imgURL }) => {
  return (
    <div className=' flex justify-center cursor-pointer items-center gap-2 bg-picton-blue text-lg hover:bg-white hover:text-picton-blue duration-500 ease-out font-montserrat leading-none border border-picton-blue py-4 px-7 rounded-full text-white'>
      <button>{text}</button>

      {imgURL && (
        <img
          src={imgURL}
          className=' flex justify-center items-center w-6 h-6 rounded-full bg-white'
          alt=''
        />
      )}
    </div>
  );
};

export default Button;
