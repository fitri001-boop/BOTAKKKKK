import NontonList from "@/component/NontonList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters`,
      { cache: "no-store" }
  );
  const anime = await response.json();

  return (
    <div>
      <h1>Paling Populer</h1>
      <div className="grid md:grid=cols-5 sm:grid-cols-5 grid-cols-2 gap-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <NontonList
                name={data.name}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
