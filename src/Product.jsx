import "./Product.css"
function Product({ title, price, features }) {
    const list = features.map((features) => <li>{features}</li>)
    let style = { backgroundColor: price>30000?"skyblue":"" };;


    return (
        <div className="Product" style={style}>
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
            <p>{list}</p>
            {price > 30000 ? <p>"Discount of 5%"</p> : null}
        </div>
    );
}
export default Product;