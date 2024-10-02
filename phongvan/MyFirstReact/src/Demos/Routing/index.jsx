import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteRoot from "./RouteRoot";
import RouteProduct from "./RouteProduct";
import RouteAddProduct from "./RouteAddProduct";
import ArticleLayout from "./article/ArticleLayout";
import ArticleDetail from "./article/ArticleDetail";
import ListArticle from "./article/ListArticle";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteRoot />,
  },
  {
    path: "/product",
    element: <RouteProduct />,
  },
  {
    path: "/product/add",
    element: <RouteAddProduct />,
  },
  {
    path: "/article",
    element: <ArticleLayout />,
    children: [
      {
        path: "",
        element: <ListArticle />,
      },
      {
        path: "add",
        element: <div>Add article form</div>,
      },
      {
        path: "edit",
        element: <div>Edit article form</div>,
      },
      {
        path: ":articleId",
        element: <ArticleDetail />,
      },
    ],
  },
  // {
  //   path: "/article",
  //   element: <div>List Article</div>,
  // },
  // {
  //   path: "/article/add",
  //   element: <div>Add article form</div>,
  // },
  {
    path: "/:pageType",
    element: <div>My custom page</div>,
  },
]);
const RoutingDemo = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default RoutingDemo;
