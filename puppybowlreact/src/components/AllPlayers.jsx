import { useGetPlayersQuery } from "../api/PuppyBowlApi";

const AllPlayers = () => {
  const { data = {}, error, isLoading } = useGetPlayersQuery();

  return (
    <>
      <section>
        {isLoading && <p>Loading...</p>}
        {error && (
          <p>
            Oopsie daisy! Something went wrong!
            <br />
            Please try again!
          </p>
        )}
        {data.data.players.map((player) => (
            <div key={player.id}>
                <div>
                    <h2>{player.name}</h2>
                    <p>{player.id}</p>
                    <p>{player.breed}</p>
                    <p>{player.status}</p>
                </div>
            </div>
        ))}
      </section>
    </>
  );
};

export default AllPlayers;
