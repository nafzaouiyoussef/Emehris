import React from "react";
import { FiTruck } from "react-icons/fi";
import { RiNodeTree } from "react-icons/ri";
import { FaBezierCurve, FaLayerGroup } from "react-icons/fa";

const WorkProcessTwo = () => {
  return (
    <section className="work-process ptb-120 bg-dark text-white">
      <div className="container mt-0">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h2>Étapes</h2>
              <p>
                Du début à la réussite, nous vous accompagnons à chaque étape
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  <RiNodeTree />
                </i>
              </div>
              <h3 className="h5">Obtenez une démo</h3>
              <p className="mb-0">
                Obtenez une démo personnalisée pour découvrir comment Emehris peut répondre à vos besoins spécifiques.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  {" "}
                  <FaBezierCurve />
                </i>
              </div>
              <h3 className="h5">Étude de cas et migration</h3>
              <p className="mb-0">
                Bénéficiez d'une étude de cas approfondie et d'une assistance pour la migration de vos données vers Emehris.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  <FaLayerGroup />
                </i>
              </div>
              <h3 className="h5">Livraison et support continu</h3>
              <p className="mb-0">
                Profitez d'un support continu et d'une livraison transparente pour une expérience utilisateur optimale.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  {" "}
                  <FiTruck />
                </i>
              </div>
              <h3 className="h5">Deliver</h3>
              <p className="mb-0">
                Rapidiously for enterprise-wide niche markets communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTwo;
