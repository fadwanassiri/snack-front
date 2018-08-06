import * as React from 'react';
import NavigationItem from './Item';

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-logo">
          <div className="peers ai-c fxw-nw">
            <div className="peer peer-greed">
              <a className="sidebar-link td-n" href="index.html">
                <div className="peers ai-c fxw-nw">
                  <div className="peer">
                    <div className="logo">
                      <img src="assets/static/images/logo.png" alt="" />
                    </div>
                  </div>
                  <div className="peer peer-greed">
                    <h5 className="lh-1 mB-0 logo-text">Snack</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="peer">
              <div className="mobile-toggle sidebar-toggle">
                <a href="" className="td-n">
                  <i className="ti-arrow-circle-left" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul className="sidebar-menu scrollable pos-r">
          <NavigationItem name="Places" />
          <NavigationItem name="Users" />
        </ul>
      </div>
    </div>
  );
}

export default Navigation