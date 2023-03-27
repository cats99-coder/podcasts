import Card from "@/components/Card";
import { PodcastService } from "@/services/podcast.service";

export default async function Home() {
  const podcasts = await new PodcastService().getAll();
  return (
    <main>
      <section className="container-podcasts">
        {podcasts &&
          podcasts.map((podcast: any) => {
            return (
              <Card
                key={podcast["id"]["attributes"]["im:id"]}
                id={podcast["id"]["attributes"]["im:id"]}
                src={podcast["im:image"][2]["label"]}
                alt={podcast["im:name"]["label"]}
                author={podcast["im:artist"]["label"]}
                tittle={podcast["title"]["label"]}
              />
            );
          })}
      </section>
    </main>
  );
}
