import React from 'react';

const Movie_Card = () => {
  return (
    <div className="w-full  text-white px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Trending Movies</h1>

      {/* Scrollable container */}
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-4">
          <div className="border-2 h-60 w-40 min-w-[160px] bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Movie_Card;
