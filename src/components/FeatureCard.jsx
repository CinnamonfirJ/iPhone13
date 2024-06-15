const FeatureCard = ({ image, description, text }) => {
  return (
    <div className='  flex flex-col gap-4 rounded-2xl p-4 h-52 bg-slate-800 mb-5'>
      <div className=' flex gap-5 w-full justify-start items-center text-left '>
        <img src={image} alt='user' width={40} height={40} />
        <div>
          <p className=' font-bold text-white font-montserrat'>{text}</p>
          {/* <p className='  text-white font-montserrat'>{company}</p> */}
        </div>
      </div>
      <div>
        <p className=' text-lg text-slate-400 leading-normal text-ellipsis truncate-4-lines overflow-hidden'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
