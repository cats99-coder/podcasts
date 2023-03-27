import { PodcastService } from "@/services/podcast.service";
import Image from "next/image";
import { cloneElement, isValidElement, ReactNode } from "react";

export default async function PodcastLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  const podcastid = params.podcastid;
  const collection: any = await new PodcastService().getAll();
  const podcast = collection.find((element: any) => {
    return element.id.attributes["im:id"] == podcastid;
  });
  return (
    <div className="container-podcast">
      <div className="card-podcast">
        <Image
          src={podcast["im:image"][2].label}
          width={150}
          height={150}
          alt={podcast.trackId}
          className="image"
        />
        <span className="tittle">{podcast.title.label}</span>
        <span className="author">by {podcast["im:artist"].label}</span>
        <span className="description">Description: </span>
        <span>{podcast.summary.label}</span>
        <span></span>
      </div>
      {children}
    </div>
  );
}
