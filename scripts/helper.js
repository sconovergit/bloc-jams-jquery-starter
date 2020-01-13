class Helper{
  playPauseAndUpdate(song) {
    player.playPause(song);
    const time = player.currentlyPlaying.duration;
    $('#time-control .total-time').text(time);
  }
}

const helper = new Helper();
