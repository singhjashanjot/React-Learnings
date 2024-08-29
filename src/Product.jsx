import "./Product.css"
import Price from "./Price";
function Product({ title, indx }) {
    let oldprice = ["12,490", "71,400", "1459", "5999"];
    let newprice = ["10,490", "33,400", "1199", "3999"];
    let Description = [
        ["800 dpi", "5 programmable buttons"],
        ["A13 bionic chip", "best phone in market"],
        [" 16GB RAM", "512GB"],
        ["wireless", "optical orientation"]];
    return (
        <div className="Product" >
            <h4>{title}</h4>
            <p>{Description[indx][0]}</p>
            <p>{Description[indx][1]}</p>
            <Price oldprice={oldprice[indx]} newprice={newprice[indx]} />
        </div>
    );
}
export default Product;