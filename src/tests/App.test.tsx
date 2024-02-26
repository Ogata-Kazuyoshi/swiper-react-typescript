import {expect, vi} from "vitest";
import {SlidePage} from "../pages/SlidePage.tsx";
import {render} from "@testing-library/react";
import App from "../App.tsx";
describe('App.tsxのテスト',()=>{
    vi.mock("../pages/SlidePage.tsx")
    test('App.tsxがレンダーされるとSwiperコンポーネントが呼ばれる',()=>{
        render(<App/>)
        expect(SlidePage).toHaveBeenCalled()
    })

})