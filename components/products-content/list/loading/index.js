import ProductItemLoading from './../../../product-item/loading';
import zipy from 'zipy-staging-nextjs';
zipy.init('80be3435');
const ProductsLoading = () => {
  return (
    <section className="products-list">
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
    </section>
  );
};
  
export default ProductsLoading