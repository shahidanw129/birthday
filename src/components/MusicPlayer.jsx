function MusicPlayer() {
  return (
    <div className="music-player">
      <h3>Music</h3>
      <audio controls>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default MusicPlayer;
