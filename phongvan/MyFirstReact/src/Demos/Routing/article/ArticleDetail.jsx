import React, { useCallback, useEffect, useState } from "react";
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

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const loadUser = async () => {
      // console.log(count);
      try {
        const response = await fetch(
          `https://66c06562ba6f27ca9a567e99.mockapi.io/employee/${articleId}`
        );
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        setUserInfo(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    loadUser();
  }, [articleId]);

  return (
    <div>
      <h2>Displaying data for article ID: {articleId}</h2>
      <div>User Detail: {JSON.stringify(userInfo)}</div>
      <MyButton
        onClick={() => {
          navigate("article");
        }}
      >
        Go Back
      </MyButton>
    </div>
  );
};

export default ArticleDetail;
