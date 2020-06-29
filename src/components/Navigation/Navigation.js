import React from 'react';
import { Wrapper } from 'components';

// import { useTranslation } from 'react-i18next';
// import { Button } from 'components';

import { Container, List } from './Navigation.css';

const Navigation = ({ items = [{}], RightElement }) => {
  // const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <List>
          {items.map(item => (
            <li key={item.to}>
             tatata
            </li>
          ))}
        </List>
        {/* {RightElement} */}
      </Wrapper>
    </Container>
  );
};

// Navigation.defaultProps = {
//   items: [],
// };

export default Navigation;