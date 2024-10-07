export default function Photo({ image: { farm, server, id, secret, title } }) {
    return (
        <figure className="w-56 h-40 overflow-hidden cursor-pointer">
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} className="imagen" alt={title} />
        </figure>
    );
  }