import { useParams } from "react-router-dom";

const AppDetails = () => {
  const { id } = useParams();

  return <div>App Details for ID: {id}</div>;
};

export default AppDetails;
