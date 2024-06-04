import React, { useEffect } from 'react';

function OpeningBlog() {
  useEffect(() => {
    document.title = "Opening Blog"; 
  }, []); 

  return (
    <div>
      {
        <main>
        {/* section */}
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#!">Home</a></li>
                    <li className="breadcrumb-item"><a href="#!">Blog</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Will Sustainable Living Make You Happier?</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <section className="my-lg-14 my-8">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* text */}
                <div className="mb-5">
                  <div className="mb-3 text-center"><a href="#!">LifeStyle</a></div>
                  <h1 className="fw-bold text-center">Will Sustainable Living Make You Happier?</h1>
                  <div className="d-flex justify-content-center text-muted mt-4">
                    <span className="me-2"><small>22 April 2023</small></span>
                    <span>
                      <small>
                        Read time:
                        <span className="text-dark fw-bold">12min</span>
                      </small>
                    </span>
                  </div>
                </div>
                {/* img */}
                <div className="mb-8"><img src="https://i.imgur.com/iPi7mWX.png" alt className="img-fluid rounded" /></div>
                <div>
                  {/* text */}
                  <div className="mb-4" >
                    <p>
                    Clean air, fresh water, green trees…I think everyone can agree that a clean, sustainable  
                    environment is better for everyone. We all agree that less pollution is better, along with less waste,
                    biodegradable materials, green living, recycling and all the rest of it. But how many of us keep on living a less
                    than eco-conscious lifestyle because we don’t have enough time or think it’s too hard or too expensive? 
                    What are we waiting for?
                    </p>
                    <p>
                    The fact is that, though we want a happy planet, we are all mainly busy with surviving in our own lives and
                    pursuing happiness for ourselves. So, when we think about living green we think about what it’s going to take 
                    away from our personal happiness. Will preserving the environment always equate to personal sacrifice? 
                    Of course not. Actually it’s more accurate that environmental sustainability equates to our own emotional sustainability.
                    </p>
                    
                  </div>
                  <hr className="mt-lg-10 mb-lg-6 my-md-6" />
                  {/* blockquote */}
                  <blockquote className="blockquote text-center">
                    <p className="text-primary fst-italic fw-semibold lh-base h1 px-2 px-lg-14">"In the whispering woods and babbling brooks, true happiness finds its melody."</p>
                    <footer className="blockquote-footer mt-3 text-muted">
                      <cite title="Source Title">Mahmoud Abbas (Nature Enthusiast)</cite>
                    </footer>
                  </blockquote>
                  <hr className="mt-lg-6 mb-lg-10 my-md-6" />
                 
                  {/* Img alignment */}
                  <div className="mb-5">
                    <h2 className="mb-2">Nature Appeals to Our Senses</h2>
                    <p>
                    Of course, the first positive effect of a healthy environment that comes
                     to mind is the simple joy of the outdoors.
                     Who doesn’t feel emotional benefit when enjoying nature and the outdoors,
                    i.e. camping, walking in the woods, smelling the flowers, etc?
                    </p>
                    <div className="d-flex align-items-start mt-4">
                      {/* Img  */}
                      <img src="https://i.imgur.com/qJhWxhR.png" alt className="img-fluid me-4 d-none d-lg-block d-md-block rounded" style={{ width: '150px', height: '150px' }} />
                      <div>
                        <p>
                        It feels physically exhilarating to exercise outdoors, breath the fresh air,
                         and feel the weather. The landscape is pleasing to the eye and the overall 
                         peaceful atmosphere exploring a forest or picnicking in a field is calming 
                         to the mind. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p>
                    Just a short stroll outside in the sunshine, thereby soaking up much needed vitamin D,
                     is a well known remedy for clearing one’s head–and for good reason. The physical 
                     sensations and sense stimulation of nature uplift one’s body and therefore one’s 
                     mood and emotions.
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-start">
                      <div>
                      <h2 className="mb-2">A Sense of Security in Preserving Our Environment</h2>

                        <p>
                        Those who try to live greener lives also enjoy the sense of well-being that
                         comes with the knowledge that you are working for the benefit of the earth. 
                         Researchers Margaret Guiney and Karen Oberhausen’s interviews with volunteers
                          in the Minnesota Master Naturalist program  <a href='https://conservancy.umn.edu/bitstream/handle/11299/56689/Guiney_umn_0130E_10667.pdf;sequence=1'>reported </a>that many volunteers.
                        </p>
                      </div>
                      <img src="https://i.imgur.com/Dk8ca93.png" alt=" " className="img-fluid ms-4 d-none d-lg-block d-md-block rounded" style={{ width: '150px', height: '150px' }}/>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2 className='mb-2'>Living Sustainably is Truly Living ‘The Good Life’</h2>
                    <p>But, for a minute, let’s talk about the “creature comforts” afforded by being
                       a heedless consumer. Does going green mean living lean? OK, perhaps it can 
                       sometimes. However, living environmentally conscious doesn’t just mean giving
                       things up. Sustainability should not be viewed as a burden, but simply as a set of 
                       different viable and alternative choices. In short, we must change our perspective 
                       of what “living well” means. In an event centered around sustainable brands, Markus
                       Terho and Sari Laine from the Finnish Innovation Fund recently presented a new 
                       survey on sustainability attitudes and everyday practices of people living and 
                       working in Finland. “It is not just the duty of companies, countries and governments,
                       but also individuals to change their ways,” Terho said. “[Sustainable living] has 
                       to be tied to the idea of the ‘good life,’ not just about giving up or minimizing impact.”
                       We need to realize that a sustainable life IS the real good life.</p>
                  </div>
                </div>
                <hr className="mt-8 mb-5" />
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div className="d-flex align-items-center">
                    <img src="https://i.imgur.com/r5VurVd.png" alt className="rounded-circle avatar-md" />
                    <div className="ms-2 lh-1">
                      <h5 className="mb-0">Abboud Samir</h5>
                      <span className="text-primary small">Verified User</span>
                    </div>
                  </div>
                  <div>
                    {/* socials */}
                    <span className="ms-2 text-muted">Share</span>
                    <a href="#" className="ms-2 text-muted"><i className="bi bi-facebook fs-6" /></a>
                    <a href="#" className="ms-2 text-muted"><i className="bi bi-twitter fs-6" /></a>
                    <a href="#" className="ms-2 text-muted"><i className="bi bi-linkedin fs-6" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      }
    </div>
  );
}

export default OpeningBlog;
