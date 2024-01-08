import { Button } from "auzmorui";
import { useRef } from "react";
import { useEffect } from "react";

const Learn = () => {
  function importStylesheet(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
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
  const linkk = useRef()
  useEffect(() => {
    linkk.current = importStylesheet("./../../build/css/variables-auzmor1.css")
  
    return () => {
      removeStylesheet(linkk.current)
    }
  }, [])
  
  return (
    <div>
      <Button>I am Learn</Button>
    </div>
  );
};

export default Learn;
