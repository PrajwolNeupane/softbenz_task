import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";

function TopLoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(90);
  }, []);

  return <LoadingBar color="#1A202C" progress={progress} />;
}

export default TopLoadingBar;
