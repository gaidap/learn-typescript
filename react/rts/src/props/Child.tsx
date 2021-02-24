import React from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

// Approach one
export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>;
};

// Approach two here we tell typescript that we have a React FunctionComponent
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>;
};