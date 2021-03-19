import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=65d54765e7c64452b5a7f205da48f64b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
  return (
    <div className="min-h-screen py-6 flex justify-center items-center">
      <a
        href={AUTH_URL}
        className="bg-green-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 text-white px-3 py-2 rounded font-semibold shadow-md focus:border-transparent"
      >
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;
