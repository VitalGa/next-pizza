import { Container, Title, Categories, SortPopup, ProductsGroupList } from '@/components/shared';
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
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
                categoryName={''}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
