// Action creator
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

export const selectMovie = movie => {
  return {
    type: 'MOVIE_SELECTED',
    payload: movie
  };
}
