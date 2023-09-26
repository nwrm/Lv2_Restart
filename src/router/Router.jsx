// react router와 관련된 설정을 합니다
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* / === localhost:3000 */}
        <Route path="/" element={<Home />} />

        {/* / === localhost:3000/detail/{:id}에서는 <Detail/>컴포넌트가 보임 */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
