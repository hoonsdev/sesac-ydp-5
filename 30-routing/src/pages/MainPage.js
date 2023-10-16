import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get('mode'));
  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>MainPage</h1>
      <button
        onClick={() => {
          setSearchParams({ mode: 'Dark' });
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}
