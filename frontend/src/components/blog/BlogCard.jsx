function BlogCard(props) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-10">
        <div className="mb-4">
          <a href={`/single-blog/${props.blogId}`}>
            <div className="img-zoom">
              <img src={`http://localhost:4000/${props.cover}`} alt="Blog's cover" className="img-fluid w-100" style={{width:'353px', height:'172px', objectFit: 'cover'}} />
            </div>
          </a>
        </div>
        <div className="mb-3"><a href="#!">{props.category}</a></div>
        <div>
          <h2 className="h5"><a href={`/single-blog/${props.blogId}`} className="text-inherit">{props.title}</a></h2>
          <p>{props.summary}</p>
          <div className="d-flex justify-content-between text-muted mt-4">
            <span><small>{props.createdAt}</small></span>
            <span>
              <small>
                Read time:
                <span className="text-dark fw-bold">{props.readingTime} min</span>
              </small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;