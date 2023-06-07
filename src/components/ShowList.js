import { Link } from "react-router-dom";

export const ShowList = ({ users }) => {
  return (
    <div className="p-4 w-9/12 content-center space-y-4">
      {users?.map((user) => {
        let us = user.show;

        let name = us.name.replace(/[-\s]+/g, "-").toLowerCase();

        return (
          <div className="p-4 border shadow-md" key={us.id}>
            <div className="flex">
              <h1 className="font-semibold text-2xl">{us.name}</h1>
              <p className="ml-auto font-semibold text-gray-500 text-sm">
                {us.language}
              </p>
            </div>
            <span className="flex">
              <Link className="ml-auto" to={`/summary/${name}`}>
                <button className="bg-blue-400 p-2 text-white">
                  View More
                </button>
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
};
