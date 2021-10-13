import { Session } from 'inspector';
import Image from 'next/image';
import { LogOut } from 'react-feather';
import { signOut, useSession } from 'src/auth/client';

export interface extraTypes {
  username: string;
}

type SessionType = Session & extraTypes;

const Profile = () => {
  const [session] = useSession();
  let username;

  if (session !== null) {
    username= session.extra['username']
  }

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className='navbar__right'>
      <div className='right__user'>
        <h4>@{session ? username : 'dummy'}</h4>
        <Image
          src={
            session
              ? session.user.image
              : 'https://dummyimage.com/50x50/808080/808080.png'
          }
          alt='profile-img'
          width={50}
          height={50}
        />

        {session && <LogOut className='icon__styles' onClick={handleLogout} />}
      </div>
    </div>
  );
};

export default Profile;
