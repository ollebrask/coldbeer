import React from "react";
import { Media } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const { profile_image, owner, updated_at, content } = props;

  return (
    <div>
      <hr />
      <Media>
          <Avatar src={profile_image} />
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;