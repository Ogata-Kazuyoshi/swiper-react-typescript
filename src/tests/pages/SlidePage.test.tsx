import {render,screen} from "@testing-library/react";
import {SlidePage} from "../../pages/SlidePage.tsx";
import {expect, vi} from "vitest";
import {Swiper, SwiperProps, SwiperSlideProps} from "swiper/react";
import {Pagination} from "swiper/modules";


// Swiper と SwiperSlide コンポーネントをモック。ただし、SwiperSlideコンポーネントのPropsチェックをしないならば、ただただモックしてあげるだけで良いので（Spy不要）、コールバック関数は不要

vi.mock('swiper/react', () => {
    const OriginalModule = vi.importActual('swiper/react');
    return {
        ...OriginalModule,
        Swiper: vi.fn(({ children }: SwiperProps) => <div data-testid="mock-swiper">{children}</div>),
        SwiperSlide: vi.fn(({ children }: SwiperSlideProps) => children),
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
        expect(screen.getByTestId('mock-swiper')).toBeInTheDocument();

        // Swiper コンポーネントに渡された props を検証

        expect(Swiper).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                pagination: { clickable: true },
                modules: [Pagination],
                slidesPerView: 2,
                spaceBetween:50,
                centeredSlides:true
            }),
            //第3引数に勝手に{}が入ってきてしまうので、テスト側にも入れておく
            //Reactコンポーネントが内部的に別の引数を受け取っている。その場合、下記がないと別の引数によりテストエラーとなるが、上記以外のPropsはなんでも良いよと伝えるために必要
            {}
        );
        vi.restoreAllMocks()
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