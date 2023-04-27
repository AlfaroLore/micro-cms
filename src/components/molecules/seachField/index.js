import React from 'react';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

export default function SearchField() {
  return (
    <div className="p-2 flex gap-2">
      <Input />
      <Button title="Search"></Button>
    </div>
  );
}
