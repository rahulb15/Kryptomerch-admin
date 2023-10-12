import { TitleContext } from "../contexts/headerContext";
import { useContext, useEffect } from "react";

const useTitle = (text) => {
  const { title, setTitle } = useContext(TitleContext);
  useEffect(() => setTitle(text), [text, setTitle]);
  return title;
};

export default useTitle;