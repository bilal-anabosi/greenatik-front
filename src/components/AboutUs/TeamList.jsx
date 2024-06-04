import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
// Component to display the team list
function TeamList({ teamMembers }) {
  const chunkedTeamMembers = [];
  for (let i = 0; i < teamMembers.length; i += 4) {
    chunkedTeamMembers.push(teamMembers.slice(i, i + 4));
  }

  return (
    <div className="tab-pane fade show active" id="nav-fruitsandveg" role="tabpanel" aria-labelledby="nav-fruitsandveg-tab" tabIndex="0">
      {chunkedTeamMembers.map((row, index) => (
        <TeamRow key={index} members={row} />
      ))}
    </div>
  );
}
// Component to display Link row of team members
function TeamRow({ members }) {
  return (
    <div className='t'>
    <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
      {members.map((member, idx) => (
        <div className="col" key={idx}>
          <div className="card card-product-v2 h-100">
            <div className="card-body position-relative">
              <div className="text-center position-relative">
                <img src={member.image} alt="Team Member" className="mb-3 img-fluid" />
                <div className="product-action-btn">
                  <Link to="# " className="btn-action mb-1" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg></Link>
                  <Link to="# " className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></Link>
                  <Link to={member.facebook} className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></Link>
                </div>
              </div>
              <div className="product-fade-block">
                <div className="d-grid mt-4">
                  <Link to="# " className="btn btn-primary rounded-pill">{member.name}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default TeamList;
