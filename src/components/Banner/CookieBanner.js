import Button from "../Button/Button";
import "./cookieBanner.scss";

const CookieBanner = ({handleBanner}) => {
  return (
    <div className="cookiebanner">
      <p>Want some cookies? We use cookies to ensure that we give you the best experience on our website, Please let us know if you agree to our cookies.</p>
      <div className="cookie-buttons">
        <Button onClick={() => handleBanner("false")} color="mint">I dont want cookies</Button>
        <Button onClick={() => handleBanner("true")} color="lavender">Accept & continue</Button>
      </div>
    </div>
  );
};

export default CookieBanner;
