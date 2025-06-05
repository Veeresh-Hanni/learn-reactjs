import { Route, Routes } from 'react-router-dom';
import Chai from './Chai';
import Hi from "./hi";

export default function RouterFunc() {
    return (
        <>
            {/* Routes */}
            <Routes>
                <Route path="/" element={<Hi />} />
                <Route path="/chai" element={<Chai />} />
            </Routes>
        </>  
    );
}

