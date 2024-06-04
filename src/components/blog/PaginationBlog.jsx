
import { Link } from 'react-router-dom';
function PaginationBlog() {
  return (
    <div className="col-12">
      <nav>
        <ul className="pagination">
          <li className="page-item disabled">
            <Link className="page-link mx-1" to="#!" aria-label="Previous">
              <i className="bi bi-chevron-left"></i>
            </Link>
          </li>
          <li className="page-item"><Link className="page-link mx-1 active" to="#!">1</Link></li>
          <li className="page-item"><Link className="page-link mx-1" to="#!">2</Link></li>
          <li className="page-item"><Link className="page-link mx-1" to="#!">...</Link></li>
          <li className="page-item"><Link className="page-link mx-1" to="#!">12</Link></li>
          <li className="page-item">
            <Link className="page-link mx-1" to="#!" aria-label="Next">
              <i className="bi bi-chevron-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default PaginationBlog;