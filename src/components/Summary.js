import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Summary() {
  const { id } = useParams();
  const [summary, setSummary] = useState([]);
  let url = `https://api.tvmaze.com/singlesearch/shows?q=${id}`;

  useEffect(() => {
    let mounted = true;
    axios.get(url).then((data) => {
      if (mounted) {
        setSummary(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (summary.data) {
    let hs = summary.data?.summary;
    let theObj = { __html: hs };
    return (
      <div className="border mx-12 mt-4 flex space-x-12 shadow-md">
        <img src={summary.data?.image.medium} alt="" />
        <div>
          <h1 className="py-2 text-2xl font-semibold">{summary.data?.name}</h1>
          <div className="pb-4" dangerouslySetInnerHTML={theObj} />
          <Link className="text-blue-400 pb-4" to="/">
            Go back to previous page
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <h1 className="font-semibold text-3xl mt-24 text-center">
        This movie was not found in our database
      </h1>
    );
  }
}
