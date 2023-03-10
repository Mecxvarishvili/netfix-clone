import React from 'react';


interface Props {
    isLoading: boolean,
    children?: React.ReactNode;
}
const Loader = ({isLoading, children}: Props) => {
    return (
        isLoading ? <>s </> : <>{children}</>
    );
};

export default Loader;