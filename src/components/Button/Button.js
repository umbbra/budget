import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { RegulareButton, InlineButton} from './Button.css';
import { Link } from 'react-router-dom';

function Button ({variant, children, ...props }) {
 const { to } = props;
 const Component = useMemo(() => {
  switch (variant) {
   case 'inline':
    return InlineButton;
   case 'regulare':
    return RegulareButton;
  
   default:
    return RegulareButton;
  }
 }, [variant]);

const content = useMemo(()=>(
 <Component {...props}>{children}</Component>
), [props, children]);

 return to ? ( 
 <Link {...props}>
  {content}
 </Link>
  ) : (
   <>
   {content}
   </>
  )
}

Button.propTypes = {
 variant: PropTypes.oneOf(['regulare', 'inline'])
}
 
export default Button;