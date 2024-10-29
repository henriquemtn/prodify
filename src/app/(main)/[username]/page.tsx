import React from 'react';

interface ProfileProps {
    params: {
        username: string;
    }
}
const Profile = ({params}: ProfileProps) => {
  return (
    <div>
      <h1>Perfil de {params.username}</h1>
    </div>
  );
};

export default Profile;
