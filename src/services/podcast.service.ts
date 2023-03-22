export class PodcastService {
  baseUrl: string =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
  constructor() {}
  async getAll() {
    const response = await fetch(this.baseUrl, { method: "GET" });
    if (!response.ok) return new Error("Error API");
    const res = await response.json();
    const podcasts = res.feed.entry;
    return podcasts;
  }
}
