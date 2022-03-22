import * as React from 'react';
import { BottomNavigation } from '@progress/kendo-react-layout';
import { withRouter } from 'react-router-dom';

const items = [{
  text: 'Calendar',
  id: 1,
  icon: 'calendar',
  route: '/',

}, {
  text: 'Leads',
  id: 2,
  icon: 'user',
  route: '/Leads'
}, {
  text: 'Home',
  id: 3,
  icon: 'home',
  route: '/home',
  selected: true
},
{
  text: 'Plan',
  id: 4,
  icon: 'calendar',
  route: '/plan'
},
{
  text: 'Reports',
  id: 5,
  icon: 'file',
  route: '/report'
}];

const Footer = props => {
  const onSelect = ev => {
    props.history.push(ev.itemTarget.route);
  };

  const setSelectedItem = pathName => {
    let currentPath = items.find(item => item.route === pathName);

    if (currentPath && currentPath.text) {
      return currentPath.text;
    }
  };

  let selected = setSelectedItem(props.location.pathname);
  return (
    <div style={{display:"block"}}>
      <div style={{ display: "block", position: "sticky", }} >
        {props.children}
      </div>
      <BottomNavigation items={items.map(item => ({
        ...item,
        selected: item.text === selected
      }))} onSelect={onSelect} > </BottomNavigation>
    </div>


  )
};

export default withRouter(Footer);