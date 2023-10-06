import { useState } from 'react';

export default function useToggle(initValue = false) {
  // value: 토글의 상태
  // setValue: 토글 상태를 변화시키는 setter
  const [value, setValue] = useState(initValue);

  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue];
}
