import { useEffect, useRef } from "react";

export default function useStyles(stylesheet) {
  function importStylesheet(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${url}?v=${Date.now()}`; // Append a unique identifier
    document.head.appendChild(link);
    return link;
  }

  // Function to remove CSS file by removing the corresponding link element
  function removeStylesheet(linkElement) {
    if (linkElement && linkElement.parentNode) {
      linkElement.parentNode.removeChild(linkElement);
    }
  }
  const link = useRef();
  useEffect(() => {
    link.current = importStylesheet(`./../../build/css/${stylesheet}.css`);

    return () => {
      removeStylesheet(link.current);
    };
  }, [stylesheet]);
}
