import { Routes, Route } from 'react-router-dom';

function Router() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* ... other routes ... */}
        </Routes>
    );
}

export default Router;