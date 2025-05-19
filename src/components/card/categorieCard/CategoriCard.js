import "./CategoriCard.scss";

function CategoriCard({ item }) {
  console.log(item);
  return (
    <div
      className="categorie-card-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgb(193 193 193 / 13%), rgb(0 0 0 / 33%)), url(${item?.image.src})`,
      }}
    >
      <h4>{item.title}</h4>
    </div>
  );
}

export default CategoriCard;
