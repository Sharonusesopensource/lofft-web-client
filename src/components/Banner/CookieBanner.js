import Button from "../Button/Button";
import "./cookieBanner.scss";
import { useTranslation } from 'react-i18next';

const CookieBanner = ({handleBanner}) => {
  const { t } = useTranslation();

  return (
    <div className="cookiebanner">
      <p>{t('cookieBanner.cta')}</p>
      <div className="cookie-buttons">
        <Button onClick={() => handleBanner("false")} color="mint">{t('cookieBanner.deny')}</Button>
        <Button onClick={() => handleBanner("true")} color="lavender">{t('cookieBanner.accept')}</Button>
      </div>
    </div>
  );
};

export default CookieBanner;
