import React, {useState} from "react";
import styles from "./device.module.css";
import Stories from "react-insta-stories";

export const Device = (props) => {
  const {state, handleClosePopup} = props;

  const [instructions, setInstructionsOpen] = useState(false);

  const handleLayerClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClosePopup();
    }
  };

  const stories = [
    {
      duration: 10000,

      content: ({action, isPaused}) => {
        return (
          <video
            src="/images/device/mobile/1.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        );
      }
    },
    {
      duration: 10000,
      content: ({action, isPaused}) => {
        return (
          <video
            src="/images/device/mobile/1.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        );
      }
    }, {
      duration: 10000,
      content: ({action, isPaused}) => {
        return (
          <video
            src="/images/device/mobile/1.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        );
      }
    },


  ];

  return (
    <div
      className={`${styles.layer} ${!state ? styles.onClose : ""}`}
      onClick={handleLayerClick}
    >
      {!instructions ? (
        <div className={styles.wrapper}>
          <div onClick={() => setInstructionsOpen(true)} className={styles.main}>
            <img src="/images/device/pc.svg" alt="pc"/>
            <div className={styles.text}>Как установить на компьютер?</div>
          </div>

          <div className={styles.column}>
            <img src="/images/device/mobile.svg" alt="mobile"/>
          </div>
        </div>
      ) : null}

      {instructions ? (
        <div className={styles.mobileWrapper}>
          <div className={styles.storiesBg}>
            <Stories
              progressStyles={{
                background: "rgba(255, 255, 255, 1)",
                height: "8px",
                borderRadius: "15px",

              }}
              progressWrapperStyles={{
                background: "rgba(255, 255, 255, 0.1)",
                height: "8px",
                borderRadius: "15px"
              }}
              progressContainerStyles={{
                width: "80%",
                margin: "0 auto",
                top: 24,
                zIndex: 3,
              }}
              stories={stories}
              defaultInterval={3000}
              width="100%"
              height="100%"
              loop
            />
          </div>


          {/* ВЕРСТКА ПОВЕРХ */}
          <div className={styles.content}>
          {/*  /!* STORIES вместо VIDEO *!/*/}


          <div className={styles.textContainer}>
            <div className={styles.storiesTitle}>
              Что, если у меня не грузит Telegram?
            </div>
            <div className={styles.storiesText}>
              У вас не работает Telegram? Добавьте наш бесплатный прокси (можно
              добавить только при наличии Telegram на девайсе).
            </div>
          </div>

          </div>
        </div>
      ) : null}
    </div>
  );
};
