import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
// import { Wrapper } from 'components';

// import { useTranslation } from 'react-i18next';
// import { Button } from 'components';

import { Container, NavigationWrapper, List } from './Navigation.css';

const Navigation = ({ items = [{}], RightElement }) => {
  // const { t } = useTranslation();

  return (
    <Container>
      <NavigationWrapper>
        <List>
          {items.map(item => (
           <li key={item.to}>
            <Link to={item.to}>{item.content}</Link>
            </li>
          ))}
        </List>
        {RightElement}
      </NavigationWrapper>
    </Container>
  );
};

// Navigation.defaultProps = {
//   items: [],
// };

Navigation.propTypes =  {
 items: PropTypes.array.isRequired
}

export default Navigation;