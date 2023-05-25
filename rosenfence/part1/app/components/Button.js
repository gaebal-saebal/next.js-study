import React from 'react';

const Button = ({ bgcolor, children }) => {
  return <button style={{ background: bgcolor }}>{children}</button>;
};

export default Button;
