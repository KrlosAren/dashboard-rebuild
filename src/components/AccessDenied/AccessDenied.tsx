import { signIn } from 'next-auth/client';
import { Provider } from 'next-auth/providers';
import React from 'react';


const AccessDenied = ({ providers }: { providers : Provider}) => {
  return (
    <div className='container__absolute'>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              className='twitter__button'
              onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AccessDenied;

