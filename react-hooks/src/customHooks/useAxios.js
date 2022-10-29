import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (options, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      loading: true,
      error: null,
      data: null,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then((res) => {
        setState({ ...state, loading: false, data: res.config, error: null });
      })
      .catch((error) => {
        setState({ ...state, data: null, error: error });
      });
  }, [trigger]);

  return { ...state, refetch };
};

function UseAxiosEx() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });

  console.log("loading: " + loading);
  console.log("data: " + JSON.stringify(data));
  console.log("error: " + error);
  return (
    <div>
      <p>useAxios Test</p> <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default UseAxiosEx;
