import React from 'react';
import styles from './style.scss';

interface IWarpTopProps {
}

export default class WarpTop extends React.Component<IWarpTopProps> {
  render() {
    return (
      <>
        <div className={styles.WarpTop}>
          <div className={styles.WarpTop_back}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAmCAYAAADAzmuWAAAAAXNSR0IArs4c6QAAAlRJREFUSA2118+LEmEYB/DmdXBYBPsBIorhQTBXCERB89aC2L0N6eChf6dj3Tp0jUXrMiexQ2sQsoKu0Bq0oiFrIKNbZOToOmrPM+2IP1Z35p239yCO4ud9fd95v8+83A0TLZPJWPr9/s1EIvHQ6/W+Qardbj8WRfEjoXU1NJlMPrtEBbAEq9WaEATBytPAi6jH43kOhuooitIuFosfJpOJYBheRTmOUw1Zln/m8/kXkiSdWyyWkSF4EzoYDH7kcrmX3W73ZDqddmaz2QWndyp0oEeAngIqORwOWRdsFE2lUpNrYRoUZ2ErTItuhc2gG2Gz6JUwC3QNZoUuwSzROcwaVeH/gSJMME8x+jCltEBZ2PtL2xR3FP5ITyOBQODBIjocDvuXgUKNYsfE5/M91UaKH9Tr9cNer/cFAuWbFihGRooGtrXY5Hn+D3T0HSpB1263yzQowqRWqx3ByBS8wAb/4FEwGLz174r+lTSbzeNyuXwAuLowMNI7sVjsld/v34Xg3sG7hoYnUKfOK5WKCPhbDYfp8MTj8YNQKHSfFic4lwCeAv5uFY9GoxlanMAC/YIRnrHG1aDXdh9My124I/zhcHg/Eok8gffq/GJZL5VKqWq1+hnrmZ47ZV5BWONzGFeeJb4Es8TXYFb4lTALfCNsFt8Km8GvhWlxXTANrju5stnsLJ1OX4zH4xEUAaXT6UjYocvl2oUdSqDZnU7nHjwnv2+1Wr91w4hswMdut/sefM3DA/dtm80mNxqNT4bPIJgTK8ElFgqF1xBiWCxGcLj5ikeFv0H4VK4U1WQpAAAAAElFTkSuQmCC" alt="" />
          </div>
          <div className={styles.WarpTop_text}>XX商城</div>
          <div>清空</div>
        </div>
        <div style={{ height: 44 }}></div>
      </>
    );
  }
}
