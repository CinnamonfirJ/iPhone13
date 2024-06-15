const ReviewCard = ({ image, user, text, company }) => {
  return (
    <div className='  flex flex-col gap-6 rounded-2xl p-8 h-64 bg-slate-800 mb-5 '>
      <div className=' flex gap-5 w-full justify-start items-center '>
        <img
          src={image}
          alt='user'
          width={60}
          height={60}
          className=' rounded-full'
        />
        <div>
          <p className=' font-bold text-white font-montserrat'>{user}</p>
          <p className='  text-white font-montserrat'>{company}</p>
        </div>
      </div>
      <div>
        <p className=' text-lg text-slate-400 leading-normal text-ellipsis truncate-4-lines overflow-hidden'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
