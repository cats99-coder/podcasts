import { PodcastService } from "@/services/podcast.service";

export default async function Podcast({ params }: { params: any }) {
  const podcastid = params.podcastid;
  const episodeid = params.episodeid;
  const collection: any = await new PodcastService().getOne(podcastid);
  const episode = collection.find((element: any) => {
    return element.trackId == episodeid;
  });
  console.log(episode)
  return (
    <main className="col-span-2">
      <div className="list-episodes">
        <h1 className="font-exrabold">{episode.trackName}</h1>
        <p>{episode.description}</p>
        <audio controls src={episode.episodeUrl}></audio>
      </div>
    </main>
  );
}
