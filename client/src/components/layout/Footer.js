import React from "react";

export default () => {
  const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  };

  return (
    <footer style={style} className="bg-dark text-white p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} ToDo App
    </footer>
  );
};
