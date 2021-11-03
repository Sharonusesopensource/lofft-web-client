import CountDownToLaunch from "./countdown";
import Message from "./Message";

const Tag = () => {
  const textToggle = () => {
    document.querySelector(".Date").classList.toggle("hide");
    document.querySelector(".InfoArea").classList.toggle("hide");
  };

  return (
    <div className="container">
      <h1 className="margin-right">
        Change how we{" "}
        <u id="target" onMouseEnter={textToggle} onMouseLeave={textToggle}>
          Flatshare
        </u>
        :{" "}
      </h1>
      <CountDownToLaunch />
      <Message />
    </div>
  );
};

export default Tag;
