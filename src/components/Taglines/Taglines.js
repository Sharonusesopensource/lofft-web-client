import Button from "../Button/Button";
import React from "react";
import "./TaglineTile.scss";
import { scrollDissable } from "../../scrolltoggle";
import { useTranslation } from 'react-i18next';

const tagBottom = { position: "absolute", bottom: 30, left: 0, right: 0 };

const Taglines = ({ setModal }) => {
  const { t } = useTranslation();

  return (
    <div className="taglines">
      <div className="tilerow">
        <div
          className="tagline tile-half tile-lavender"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/illustrations/hands.svg"
            })`,
          }}
        >
          <h3 style={{ color: "white" }} dangerouslySetInnerHTML={{__html: t('taglines.meetYourPeople')}}/>
          <Button
            style={{ margin: "0 auto", ...tagBottom }}
            color="white"
            onClick={() => {
              scrollDissable();
              setModal({ type: "tag", key: "meetYourPeople" });
            }}
          >
            {t('taglines.buttonMeetYourPeople')}
          </Button>
        </div>
        <div className="tagline tile-half tile-white">
          <h3 style={{ color: "black" }} dangerouslySetInnerHTML={{__html: t('taglines.noMoreHeadaches')}}/>
          <Button
            style={{ margin: "0 auto", ...tagBottom }}
            color="lavender"
            onClick={() => {
              scrollDissable();
              setModal({ type: "tag", key: "noMoreHeadaches" });
            }}
          >
            {t('taglines.buttonNoMoreHeadaches')}
          </Button>
        </div>
      </div>

      <div className="tilerow">
        <div
          className="tagline tile-full tile-black"
          id="love-lofft"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/illustrations/lofftPeople.svg"
            })`,
          }}
        >
          <div className="tag-right">
            <h3 style={{ color: "white" }} dangerouslySetInnerHTML={{__html: t('taglines.findTheLofftOfYourLife')}}/>
            <Button
              style={{ margin: "0 auto", ...tagBottom }}
              color="lavender"
              onClick={() => {
                scrollDissable();
                setModal({ type: "tag", key: "findTheLofftOfYourLife" });
              }}
            >
              {t('taglines.buttonFindTheLofftOfYourLife')}
            </Button>
          </div>
        </div>
      </div>

      <div className="tilerow">
        <div
          className="tagline tile-half tile-white"
          style={{ position: "relative" }}
        >
          <h3 style={{ color: "black" }} dangerouslySetInnerHTML={{__html: t('taglines.neverMissAParty')}}/>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              padding: "0 2rem",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "4rem" }}>
              <span role="img" aria-label="party popper">
                🎉
              </span>
            </h3>
            <Button
              style={{ margin: "0 auto", height: "1rem", ...tagBottom }}
              color="lavender"
              onClick={() => {
                scrollDissable();
                setModal({ type: "tag", key: "neverMissAParty" });
              }}
            >
              {t('taglines.buttonNeverMissAParty')}
            </Button>
            <h3 className="vflip" style={{ margin: 0, fontSize: "4rem" }}>
              <span role="img" aria-label="party popper">
                🎉
              </span>
            </h3>
          </div>
        </div>
        <div
          className="tagline tile-half tile-lavender"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/illustrations/clouds.svg"
            })`,
          }}
        >
          <h3 style={{ color: "white" }} dangerouslySetInnerHTML={{__html: t('taglines.discoverGreatPlacesToLive')}}/>
          <Button
            style={{ margin: "0 auto", height: "1rem", ...tagBottom }}
            color="white"
            onClick={() => {
              scrollDissable();
              setModal({ type: "tag", key: "discoverGreatPlacesToLive" });
            }}
          >
            {t('taglines.buttonDiscoverGreatPlacesToLive')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Taglines;
