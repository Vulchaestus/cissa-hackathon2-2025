import React from "react";

export default function MusicDashboard() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pb-24">
      <div className="bg-gray-800 flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button className="text-white">⬅️</button>
          <button className="text-white">➡️</button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white px-4 py-2 rounded-md w-1/2 focus:outline-none"
        />
        <div className="flex items-center gap-4">
          <button className="text-white">🔔</button>
          <div
            className="w-10 h-10 bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url(/profile.jpg)` }}
          ></div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-semibold">Recently Listened</div>
          <div className="text-lg">Good Evening, Danny.</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden">
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(/playlist${idx + 1}.jpg)` }}
              ></div>
              <div className="p-2">
                <div className="font-semibold">Playlist {idx + 1}</div>
                <div className="text-sm text-gray-400">
                  Description of playlist
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-2xl font-semibold mb-2">Your Saved Playlists</div>
        <div className="text-gray-400 mb-4">Subheading</div>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
          {["R&B", "Indie pop", "Hip hop", "Electronic", "R&B", "Rock"].map(
            (genre, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg overflow-hidden text-center"
              >
                <div
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(/artist${idx + 1}.jpg)` }}
                ></div>
                <div className="p-2">
                  <div className="font-semibold">Artist Name</div>
                  <div className="text-sm text-gray-400">{genre}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 bg-cover bg-center"
            style={{ backgroundImage: `url(/playlist1.jpg)` }}
          ></div>
          <div>
            <div className="font-semibold">Bodies</div>
            <div className="text-sm text-gray-400">Keshi</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button>🎤</button>
          <button>⏹️</button>
          <button>⏮️</button>
          <button>▶️</button>
          <button>🔁</button>
          <button>🔊</button>
        </div>
      </div>
    </div>
  );
}
