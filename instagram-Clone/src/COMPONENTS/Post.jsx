import React from "react";
import { Button, Card } from "react-bootstrap";
import PostActions from "./PostActions";

const Post = (props) => {
  //   const { userName, userImg, timePosted, noLikes, noComments } = props;
  return (
    <>
      <Card style={{ width: "50%" }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <figure className="d-flex align-items-center gap-1">
            {/* <img src={userImg} alt="display photo"
              className="rounded-circle"  
              style={{ height: "40px", width: "40px" }} /> */}
            <img
              src={"https://picsum.photos/200/200"}
              alt="display photo"
              className="rounded-circle"
              style={{ height: "40px", width: "40px" }}
            />
            <figcaption className="d-flex gap-1 align-items-center">
              <p className="fw-bold">FawwazMakinde</p>
              <p className="fw-bold">.</p>
              <p>4d</p>
            </figcaption>

            {/* <figcaption className="d-flex gap-1 align-items-center">
              <p className="fw-bold">{ userName }</p>
              <p className="fw-bold">.</p>
              <p>{timePosted}</p>
            </figcaption> */}
          </figure>

          <PostActions />
        </div>
        <img
          src="https://picsum.photos/300/500"
          alt=""
          className=""
          style={{ width: "100%", height: "350px" }}
        />

        <Card.Body>
          <Card.Title>
            <div className="d-flex justify-content-between">
              <div className="reaction d-flex gap-2">
                <i class="fa-regular d-block fa-heart"></i>
                <i class="fa-regular d-block fa-comment"></i>
                <i class="fa-regular d-block fa-share-from-square"></i>
              </div>

              <p>
                <i class="fa-regular d-block fa-bookmark"></i>
              </p>
            </div>
            <p>14 likes</p>
            {/* <p>{noLikes}</p> */}
          </Card.Title>
          <Card.Text>
            <p>
              <span className="fw-bold">FawwazMakinde </span>Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Fuga nostrum, placeat
              voluptate eveniet sunt quis?
            </p>
          </Card.Text>
          <div className="" style={{ color: "grey" }}>
            <p>View all 3 comments</p>
            {/* <p>View all {{ noComments }} comments</p> */}

            <div className="d-flex justify-content-between">
              <p>Add a comment...</p>
              <p>
                <i class="fa-regular fa-face-smile"></i>
              </p>
            </div>
          </div>
          <div
            className=""
            style={{ width: "100%", height: "2px", backgroundColor: "#262626" }}
          ></div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
