import { useEffect, useState } from 'react';
import Card from '../Card';
import Login from './Login';
import SignUp from './SignUp';

export default function Authenticate() {
  const [authenticationCase, setAuthenticationCase] = useState('login');
  const [backgroundUrl, setBackgroundUrl] = useState('');

  useEffect(() => {
    async function getBackground() {
      const requestBackground = await fetch('https://bing.biturl.top/');
      const response = await requestBackground.json();
      setBackgroundUrl(response.url);
    }
    getBackground();
  });

  function handleToggleForm() {
    setAuthenticationCase((previus) => {
      return previus == 'login' ? 'signup' : 'login';
    });
  }

  return (
    <div
      className="flex h-screen bg-slate-900 justify-center items-center"
      style={{ backgroundImage: 'url(' + backgroundUrl + ')' }}
    >
      <Card className="mx-auto w-full sm:w-2/3 md:w-2/6">
        <div className="md:px-3 py-6 z-10">
          <h3 className="text-2xl font-bold text-center mb-4">
            {authenticationCase == 'login'
              ? 'Login Into yout account'
              : 'Create an account'}
          </h3>
          {authenticationCase === 'login' ? (
            <Login handleToggleForm={handleToggleForm} />
          ) : (
            <SignUp handleToggleForm={handleToggleForm} />
          )}
        </div>
      </Card>
    </div>
  );
}
