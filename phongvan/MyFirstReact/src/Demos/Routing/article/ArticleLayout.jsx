import { Link, Outlet } from "react-router-dom";

const ArticleLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gray-400">
        This is header
        <div className="flex gap-5">
          <Link to={"/article"}>List article</Link>
          <Link to={"/article/add"}>Add article</Link>
          <Link to={"/article/edit"}>Edit article</Link>
        </div>
      </div>
      <div className="grow">
        <Outlet />
      </div>
      <div className="bg-blue-300">This is footer</div>
    </div>
  );
};

export default ArticleLayout;
