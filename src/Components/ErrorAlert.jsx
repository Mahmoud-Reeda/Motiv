import React, { useEffect, useState } from "react";

const ErrorAlert = ({ isError, error }) => {
  const [showErrorAlert, setErrorAlert] = useState(false);

  useEffect(() => {
    if (isError) {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 3000);
    }
  }, [isError]);

  return (
    <div
      className={`alert absolute -top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 z-50 w-[50vw] [transition:all_1s_ease] bg-[#f04c57] text-[#fff] text-center ${
        showErrorAlert ? "show top-[15%]" : ""
      } `}
    >
      {error.error}
    </div>
  );
};

export default ErrorAlert;
