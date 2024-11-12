import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  categoryName: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  categoryName,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <Title text={title} size='lg' className='font font-extrabold mb-5' />
      <div className={cn('grid grid-cols-3 gap-[50px]', className)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
