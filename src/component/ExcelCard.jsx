import React, { useState } from "react";

const ExcelCard = ({ title, image, description, techsUsed }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="title is-size-5 is-family-monospace">{title}</p>
          {description}
          <br />
          {techsUsed.length > 0 &&
            techsUsed.map((tech, index) => (
              <span
                key={index}
                className="is-inline-flex tag has-text-primary mr-3"
              >
                {tech}
              </span>
            ))}

          <div>
            <button
              className="button is-primary is-light"
              onClick={() => setShowModal(true)}
            >
              View
            </button>
          </div>

          {showModal && (
            <div
              className="modal is-active"
              style={{
                background: "rgba(0,0,0,0.7)",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
              }}
              onClick={() => setShowModal(false)}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "1rem",
                  borderRadius: "8px",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  overflow: "auto",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={image}
                  alt="Large view"
                  style={{ maxWidth: "80vw", maxHeight: "80vh" }}
                />
                <button
                  className="button is-danger mt-3"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExcelCard;
