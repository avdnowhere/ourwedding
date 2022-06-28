import React from 'react';

import IconIg from './assets/instagram.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Follow instagram kami</p>
        <a href="https://www.instagram.com/norainjohari/" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Norain IG" />
              <span>@norainjohari</span>
            </div>
          </div>
        </a>
        <div>
          <br/>
        </div>
        <a href="https://www.instagram.com/avdnowhere/" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Ammy IG" />
              <span>@avdnowhere</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
