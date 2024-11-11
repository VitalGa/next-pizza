import { Container, Title, Categories, SortPopup } from '@/components/shared';
import { TopBar } from '@/components/shared';
import { Filters } from '@/components/shared/filters';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[60px]'>
          {/* Фильтрация */}
          <div className='w-[200px]'>
            <Filters />
          </div>

          {/* Список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'></div>
          </div>
        </div>
      </Container>
    </>
  );
}
