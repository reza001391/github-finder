class Github {
  constructor() {
    this.client_id = "6af2dd5b3f99aaef7a83";
    this.client_secret = "8e5b6b1b85d3e9eb29cce51996cb9778b7300ae2";
  }
  //
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
