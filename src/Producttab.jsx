
import Product from "./Product.jsx"
function Producttab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent : "center",
        alignItems: "center",
     };
    return (
        <div style={styles}>
            <Product title="Logitech MX master" indx={0} />
            <Product title="Apple iphone 13" indx={1} />
            <Product title="Samsung Galaxy book 3" indx={2} />
            <Product title="Zebronics transformer" indx={3} />
        </div>
    )
}
export default Producttab;
