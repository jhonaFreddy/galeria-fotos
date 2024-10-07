export default function Photo({ image: { farm, server, id, secret, title } }) {
    return (
        <figure className="w-56 h-40 overflow-hidden">
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt={title} />
        </figure>
    );
  }