import { ProductsListModule } from './products-list.module';

describe('ProductsListModule', () => {
  let productsListModule: ProductsListModule;

  beforeEach(() => {
    productsListModule = new ProductsListModule();
  });

  it('should create an instance', () => {
    expect(productsListModule).toBeTruthy();
  });
});
