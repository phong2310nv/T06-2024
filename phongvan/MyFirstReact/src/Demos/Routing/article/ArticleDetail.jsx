import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MyButton from "../../../components/MyButton";

const ArticleDetail = () => {
  const [search, setSearch] = useSearchParams();
  const { articleId } = useParams();
  const navigate = useNavigate();
  console.log(articleId);
  console.log(search.get("username"));
  console.log(search.get("address"));
  console.log(search.get("phone"));

  return (
    <div>
      <h2>Displaying data for article ID: {articleId}</h2>
      <MyButton
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </MyButton>
    </div>
  );
};

export default ArticleDetail;
