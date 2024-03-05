import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="border-8 border-gray-200 border-t-8 border-blue-500 rounded-full h-24 w-24 animate-spin"></div>
        </div>
    );
}

export default Loading;