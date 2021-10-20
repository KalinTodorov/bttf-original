import Item from './ClubsItems';

export default function Players() {
  const Player = [
    { name: 'Kalin1', lastName: 'Todorov', rating: 1500, id: 23 },
    { name: 'Kalin2', lastName: 'Todorov', rating: 1500, id: 43 },
    { name: 'Kalin2', lastName: 'Todorov', rating: 1500, id: 43 },
    { name: 'Kalin2', lastName: 'Todorov', rating: 1500, id: 43 },
  ];
  return (
    <div
      className="bg-white rounded-2xl  mt-4  border-gray-200 \
     border w-11/12 m-auto max-w-5xl "
    >
      <div className="">
        <div className="p-2 w-full">
          {Player.map((item) => (
            <Item key={`${item.id}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
