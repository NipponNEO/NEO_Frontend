import * as React from 'react';
import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import neo from '../Assests/Images/neo1.png'


let kendokaAvatar = 'https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png';


const Header = () => {
  return <React.Fragment>
        <AppBar>
        <AppBarSpacer style={{
        width: 4
      }} />

          <AppBarSection>
              <img src={neo} style={{height:30, width:30}}></img>
          </AppBarSection>
          <AppBarSpacer style={{
        width: 32
      }} />
          <AppBarSpacer />

            <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
                <BadgeContainer>
                <span className="k-icon k-i-plus" />
                </BadgeContainer>  </button>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
              <BadgeContainer>
                <span className="k-icon k-i-bell" />
                <Badge shape="dot" themeColor="info" size="small" position="inside" />
              </BadgeContainer>
              </button>
            <AppBarSection>
            <Avatar type="image">
              <img src={kendokaAvatar} />
            </Avatar>
          </AppBarSection>
        </AppBar>
        <style>{`
                // body {
                //     background: #dfdfdf;
                // }
                .title {
                    font-size: 8px;
                    margin: 0;
                }
       
                .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
                    padding: 0;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
            `}</style>
      </React.Fragment>;
};

export default Header
