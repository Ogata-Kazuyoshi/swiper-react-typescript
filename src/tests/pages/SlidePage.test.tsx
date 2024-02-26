import {render,screen} from "@testing-library/react";
import {SlidePage} from "../../pages/SlidePage.tsx";
import {expect, vi} from "vitest";
// import {ReactNode} from "react";
import {Swiper} from "swiper/react";
import {Pagination} from "swiper/modules";
// import {SwiperModule} from "swiper/types";

// Swiper コンポーネントと SwiperSlide コンポーネントの props の型を定義
// interface SwiperProps {
//     children: ReactNode;
//     pagination: { clickable: boolean };
//     modules: SwiperModule[];
//     slidesPerView: number;
//     spaceBetween:number;
// }

// interface SwiperSlideProps {
//     children: ReactNode;
// }

// Swiper と SwiperSlide コンポーネントをモック。ただし、SwiperSlideコンポーネントのPropsチェックをしないならば、ただただモックしてあげるだけで良いので（Spy不要）、コールバック関数は不要

vi.mock('swiper/react', () => {
    const OriginalModule = vi.importActual('swiper/react');
    return {
        ...OriginalModule,
        // Swiper: vi.fn(({ children }: SwiperProps) => <div data-testid="mock-swiper">{children}</div>),
        Swiper: vi.fn(),
        // SwiperSlide: vi.fn(({ children }: SwiperSlideProps) => <div >{children}</div>),
        SwiperSlide: vi.fn(),
    };
});

describe('SlidePage.tsxのテスト',()=>{
    test('Swiperをレンダリングするとtestというテキストが表示される',()=>{
        render(<SlidePage/>)

        expect(screen.getByText("test")).toBeInTheDocument()
    })
    test('Swiperコンポーネントに正しいPropsが渡されている',()=>{
        render(<SlidePage/>)
        // Swiper コンポーネントがレンダリングされているか確認
        // expect(screen.getByTestId('mock-swiper')).toBeInTheDocument();

        // Swiper コンポーネントに渡された props を検証
        const swiperMock = vi.mocked(Swiper);
        expect(swiperMock).toHaveBeenCalledWith(
            expect.objectContaining({
                pagination: { clickable: true },
                modules: [Pagination],
                slidesPerView: 3,
                spaceBetween:50,
            }),
            //Reactコンポーネントが内部的に別の引数を受け取っている。その場合、下記がないと別の引数によりテストエラーとなるが、上記以外のPropsはなんでも良いよと伝えるために必要
            expect.anything(),
        );
    })

    test('各画像がレンダリングされている',()=>{
        render(<SlidePage />)

        expect(screen.getByAltText('image1')).toHaveAttribute('src','/src/assets/image1.png')
        expect(screen.getByAltText('image2')).toHaveAttribute('src','/src/assets/image2.png')
        expect(screen.getByAltText('image3')).toHaveAttribute('src','/src/assets/image3.png')
        expect(screen.getByAltText('image4')).toHaveAttribute('src','/src/assets/image4.png')
        expect(screen.getByAltText('image5')).toHaveAttribute('src','/src/assets/image5.png')
        expect(screen.getByAltText('image6')).toHaveAttribute('src','/src/assets/image6.png')
        expect(screen.getByAltText('image7')).toHaveAttribute('src','/src/assets/image7.png')
        expect(screen.getByAltText('image8')).toHaveAttribute('src','/src/assets/image8.png')
        expect(screen.getByAltText('image9')).toHaveAttribute('src','/src/assets/image9.png')
    })

})