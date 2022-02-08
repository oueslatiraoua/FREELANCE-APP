import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import "./postDetails.css";
import { Link, useParams } from "react-router-dom";
import { loadPost } from "../slices/postSlice";

const PostDetails = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const { postInfo } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(loadPost(postId));
    console.log("postId", postId);
  }, []);

  console.log("postInfo", postInfo);
  return (
    <>
      <section class="aboutFreelancer" id="aboutFreelancer">
        {" "}
        <h1 class="heading"></h1>
      </section>

      <div class="header1">
        <div class="navbar" style={{ backgroundColor: "black", width: "100%" }}>
          <div class="logo">
            <Link to="/ourServices"> Search for other services </Link>
          </div>
        </div>
        <section class="aboutService" id="aboutService">
          <h1 class="heading">
            <span>about the service </span>
          </h1>
          <div class="row">
            <div class="image">
              <img src={postInfo.image} alt="" />
            </div>

            <div class="content">
              <h5> {postInfo.task}</h5>

              <p>{postInfo.aboutTheService}</p>
            </div>
          </div>
        </section>
      </div>
      <div class="header1">
        <section class="aboutService" id="aboutService">
          <h1 class="heading">
            <span>about the freelancer </span>
          </h1>
          <div class="row">
            <div class="image">
              <img src={postInfo.owner && postInfo.owner.picture} alt="" />
            </div>

            <div class="content">
              <h5> {postInfo.owner && postInfo.owner.name}</h5>
              <h5> {postInfo.owner && postInfo.owner.email}</h5>
              <h5> {postInfo.owner && postInfo.owner.contact}</h5>
              <h5>{postInfo.owner && postInfo.owner.linkedin}</h5>

              <p>{postInfo.aboutTheFreelancer}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PostDetails;
