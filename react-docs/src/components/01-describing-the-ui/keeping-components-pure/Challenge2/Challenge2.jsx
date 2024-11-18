// 망가진 프로필을 고쳐보세요

import Profile from './Profile.jsx';

export default function App() {
  return (
    <>
      <Profile
        person={{
          imageId: 'lrWQx8l',
          name: 'Subrahmanyan Chandrasekhar',
        }}
      />
      <Profile
        person={{
          imageId: 'MK3eW3A',
          name: 'Creola Katherine Johnson',
        }}
      />
    </>
  );
}
