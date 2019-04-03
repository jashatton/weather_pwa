import React from 'react';

export const UpdateButton = ({refresh}) => (
  <button style={{position: 'relative', top: 100, right: 100 }} onClick={refresh}>Updates available.</button>
);
