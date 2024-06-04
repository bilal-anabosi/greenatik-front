function CategoryCard(props) {
  return (
    <div className="col">
      <div className="card border-0 img-fluid w-100">
        <a href={`/blog-category/${props.title}`} className="img-zoom">
          <img src={props.card_img} alt="ALT" className="img-fluid w-100 rounded" />
        </a>
        <div className={`position-absolute ${props.color} w-100 bottom-0 py-1 px-4 rounded-bottom`}>
          <a href={`/blog-category/${props.title}`} className="text-white d-flex align-items-center btn-transition">
            {props.title}
            <i className="feather-icon icon-chevron-right fs-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default CategoryCard;
