import Image from 'next/image';

const New = ({ notice }) => {

  return (
    <div className='new'>
      <Image
        className='new__image'
          src={notice.profile_image_url}
          alt={notice.username}
          width={35}
        height={35}
        layout='fixed'
        />
        <p>{notice.text}</p>
    </div>
  );
};

export default New;
