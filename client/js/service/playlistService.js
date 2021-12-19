class PlaylistService {
  async getPlaylist() {
    const res = await fetch('http://localhost:3000/playlist');

    //simulation of server delay
    await new Promise((res) => setTimeout(() => res(1), 1000));

    return await res.json();
  }
}

const playlistService = new PlaylistService();

export default playlistService;