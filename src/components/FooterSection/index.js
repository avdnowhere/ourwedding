import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Terima Kasih</h2>
                <p className="info">
                  Atas segala do'a dan restu saudara/i,
                  <br /> kami ucapkan terima kasih. <br />
                  Wassalamualaikum warahmatullahi wabarakatuh.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">Original Design By &copy; 2020 Dinda & Indra Wedding.</small>
                <small className="block">
                  Covid-19 Icon by{' '}
                  <a href="https://www.flaticon.com/packs/covid-protection-measures-5" target="_blank" rel="noreferrer">
                    Flat Icon - Frepik
                  </a>
                </small>
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=fb167KAxvrg" target="_blank" rel="noreferrer">
                    Anandito Anisa - Pernikahan Impian
                  </a>
                </small>
                <small className="block">
                  Original Template from{' '}
                  <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                    FREEHTML5.co
                  </a>
                </small>
                <small className="block">All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
