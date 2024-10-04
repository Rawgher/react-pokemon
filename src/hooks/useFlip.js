import {useState} from 'react';

const useFlipState = (initialVal = true) => {
    const [value, setValue] = useState(initialVal);

    const flip = () => {
        setValue(prevVal => !prevVal)
    }

    return [value, flip];
}

export default useFlipState;
