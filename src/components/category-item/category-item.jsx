import "./category-item.scss";

const CategoryItem = ({ category }) => {
  const {title, imgUrl} = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
