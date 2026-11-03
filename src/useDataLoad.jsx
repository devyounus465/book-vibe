import { use } from "react";

const dataPromise = fetch("/data.json").then((res) => res.json());
const useDataLoad = () => {
  const data = use(dataPromise);
  return data;
};
export default useDataLoad;
