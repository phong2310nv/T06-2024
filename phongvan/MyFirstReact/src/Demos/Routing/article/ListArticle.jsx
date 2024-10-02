import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../../../components/MyButton";

const ListArticle = () => {
  const navigate = useNavigate();
  const articles = [
    {
      title: "Abc",
      id: 1,
    },
    {
      title: "BCD",
      id: 2,
    },
  ];
  const handleClick = () => {
    alert("Ready to add new");
    navigate("/article/add");
  };
  return (
    <div className="p-5">
      <Link to={"/article/add"}>
        <MyButton>Click to add new Article</MyButton>
      </Link>
      <MyButton onClick={handleClick}>
        Do something then to add article
      </MyButton>
      <h2>List article</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border rounded">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-4">
              Title
            </th>

            <th scope="col" className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {articles.map((ar) => {
            return (
              <tr
                key={ar.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {ar.title}
                </th>
                <td className="px-6 py-4 text-right">
                  <div className="flex gap-5">
                    <Link
                      to={`/article/${ar.id}`}
                      className="font-medium text-blue-600  hover:underline"
                    >
                      Detail
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListArticle;
