
import Product from "./Product.jsx"
function Producttab() {
    let options = ["durable", "fast", "hi-tech"];
    return (
        <>
            <Product title="phone" price={20000} features={options} />
            <Product title="laptop" price={40000}features={options} />
            <Product title="charger" price={2000} features={options} />
        </>
    )
}
export default Producttab;
