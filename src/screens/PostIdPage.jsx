import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        Вы открыли пост {params.id}
      </h1>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "150px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div style={{ margin: "5px 100px" }}>
          {post.id}. {post.title}
        </div>
      )}
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        Комментарии
      </h2>
      {isComLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ margin: "15px 100px" }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
