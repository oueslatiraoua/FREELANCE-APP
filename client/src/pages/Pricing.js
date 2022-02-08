import React from "react";

import "./Pricing.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { deletePackage, loadPost } from "../slices/postSlice";

const Pricing = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { userInfo } = useSelector((state) => state.user);
  const { postInfo } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(loadPost(postId));
  }, []);
  return (
    <div style={{ backgroundColor: "  Lavender" }}>
      <div>
        <Link to="/OurServices">
          {" "}
          <i
            class="fas fa-arrow-left"
            style={{ fontSize: "25px", margin: "40px" }}
          >
            {" "}
            <span
              style={{ fontSize: "25px", margin: "10px", fontFamily: "Helvet" }}
            >
              Back to the service
            </span>
          </i>
        </Link>
      </div>
      <article className="freelancerPrices">
        {postInfo.packages &&
          postInfo.packages.map((el) => (
            <div key={el._id}>
              <section class="price-comparison">
                <div class="price-column">
                  {el.PackageOwner &&
                  userInfo._id === String(el.PackageOwner) ? (
                    // **********delete post icon design if you connect as a freelancer
                    <i
                      class="far fa-trash-alt"
                      style={{
                        fontSize: "15px",
                        color: "black",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        return dispatch(
                          deletePackage({
                            priceId: el._id,
                            id: postId,
                          })
                        );
                      }}
                    ></i>
                  ) : null}
                  <div class="price-header">
                    <div class="price">
                      <div class="dollar-sign">dt</div>
                      {el?.price}

                      <div class="per-month">/mo</div>
                    </div>
                    <div class="plan-name">{el?.serviceTier}</div>
                  </div>
                  <div class="divider"></div>
                  <div class="feature">
                    {el.FeatureA && (
                      <i
                        class="fas fa-check-circle"
                        style={{ paddingRight: "5px" }}
                      ></i>
                    )}
                    {el.FeatureA}
                  </div>
                  <div class="feature">
                    {el.FeatureB && (
                      <i
                        class="fas fa-check-circle"
                        style={{ paddingRight: "5px" }}
                      ></i>
                    )}
                    {el?.FeatureB}
                  </div>
                  <div class="feature">
                    {el.FeatureC && (
                      <i
                        class="fas fa-check-circle"
                        style={{ paddingRight: "5px" }}
                      ></i>
                    )}
                    {el?.FeatureC}
                  </div>
                  <button class="cta">Start Today</button>
                </div>
              </section>
            </div>
          ))}
      </article>
    </div>
  );
};

export default Pricing;
