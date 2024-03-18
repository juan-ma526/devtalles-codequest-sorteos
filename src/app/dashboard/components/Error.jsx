const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 m-2 rounded uppercase font-bold">
      <p>{children}</p>
    </div>
  );
};

export default Error;
