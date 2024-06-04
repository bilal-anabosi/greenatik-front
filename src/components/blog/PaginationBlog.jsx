

function PaginationBlog() {
  return (
    <div className="col-12">
      <nav>
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link mx-1" href="#!" aria-label="Previous">
              <i className="bi bi-chevron-left"></i>
            </a>
          </li>
          <li className="page-item"><a className="page-link mx-1 active" href="#!">1</a></li>
          <li className="page-item"><a className="page-link mx-1" href="#!">2</a></li>
          <li className="page-item"><a className="page-link mx-1" href="#!">...</a></li>
          <li className="page-item"><a className="page-link mx-1" href="#!">12</a></li>
          <li className="page-item">
            <a className="page-link mx-1" href="#!" aria-label="Next">
              <i className="bi bi-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default PaginationBlog;