import { PodcastService } from "@/services/podcast.service";
import Link from "next/link";

export default async function Podcast({
  params,
}: {
  params: any;
}) {
  const podcastid = params.podcastid;
  const collection: any = await new PodcastService().getOne(podcastid);
  const podcasts = collection.slice(1);
  const date = (d: string) => {
    const dateFormat = new Date(d);
    const day = dateFormat.getDay() + 1;
    const month = dateFormat.getMonth() + 1;
    const year = dateFormat.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const time = (t: string) => {
    const tNumber = Number(t);
    const tsegundos = Math.trunc(tNumber / 1000);
    const segundos = tsegundos % 60;
    const minutos = Math.trunc(tsegundos / 60);
    return `${minutos}:${segundos < 10 ? "0" + segundos : segundos}`;
  };
  return (
    <main className="col-span-2">
      <div className="episodes">Episodes: {collection[0].trackCount} </div>
      <div className="list-episodes">
        {/* Encabezado */}
        <div className="list-episodes-header">
          <div className="grow">Title</div>
          <div>Date</div>
          <div>Duration</div>
        </div>
        {/* Filas */}
        {podcasts &&
          podcasts.map((podcast: any) => {
            return (
              <div className="list-episodes-lines" key={podcast.trackId}>
                <Link
                  className="grow"
                  href={`/podcasts/${podcastid}/episode/${podcast.trackId}`}
                >
                  <div>{podcast.trackName}</div>
                </Link>
                <div>{date(podcast.releaseDate)}</div>
                <div>{time(podcast.trackTimeMillis)}</div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
