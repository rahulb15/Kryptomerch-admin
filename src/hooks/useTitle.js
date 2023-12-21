import { useContext, useEffect } from "react";
import { TitleContext } from "../contexts/headerContext";

const useTitle = (text) => {
  const { title, setTitle } = useContext(TitleContext);

  useEffect(() => setTitle(text), [text, setTitle]);

  return title;
};

export default useTitle;