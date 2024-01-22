import Image from "next/image";
import React from "react";

function MobileTestimonial({ d }) {
  return (
    <section
      className="mobile-testimonial"
      style={{
        background: `${d.bgColor}`,
      }}
    >
      <div className="row text-center">
        <div className="col-md-12">
          <div
            id="carouselBasicExample"
            className="carousel slide carousel-dark"
            data-mdb-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active text-white">
                <p className="testimonial-comment lead font-italic mx-4 mx-md-5">
                  {d.comment}
                </p>
                <div className="testimonial_image_section ">
                  <Image
                    src={d.person}
                    className="testimonial-image rounded-circle img-fluid shadow-1-strong"
                    alt="smaple image"
                    priority
                    
                  />
                </div>
                <p className="testimonial-designation mb-0">{d.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileTestimonial;
