import "./Loader.css"

const Loader = (props) => {
  return (
    <div className="align-loader">
    <div className="lds-roller">

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>
        <p className="color-loader">Loading...</p>
    </div>
    </div>
  );
};

export default Loader;
