export class PodcastService {
  baseUrl: string =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
  constructor() {}
  async getAll() {
    const response = await fetch(this.baseUrl, {
      method: "GET",
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!response.ok) return new Error("Error API");
    const res = await response.json();
    const podcasts = res.feed.entry;
    return podcasts;
  }
  async getOne(id: string): Promise<Array<any> | Error> {
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode`,
      {
        method: "GET",
      }
    );
    if (!response.ok) return new Error("Error API");
    const res: { results: [Object] } = await response.json();
    const collection = res.results;
    return collection;
  }
}
