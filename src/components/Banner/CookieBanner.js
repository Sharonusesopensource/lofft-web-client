import Button from "../Button/Button";
import "./cookieBanner.scss";

const CookieBanner = ({cookies}) => {
  return (
    <div className="cookiebanner">
      <p>Want some cookies? We use cookies to ensure that we give you the best experience on our website, Please let us know if you agree to our cookies.</p>
      <Button color="mint">I dont want cookies</Button>
      <Button color="lavender">Accept & continue</Button>
    </div>
  );
};

export default CookieBanner;
