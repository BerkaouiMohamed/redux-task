import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../redux/productActions";
import { deleteCake } from "../redux/cake/cakeActions";
import axios from "axios";

function Home() {
  const products = useSelector((state) => state.products);
  const cakes = useSelector((state) => state.cake);

  console.log(products);
  const dispatch = useDispatch();
  const DeleteProduct = (ele) => {
    console.log(ele);
    axios.delete('http://localhost:3000/products/'+ele.id).then((res)=>{
    dispatch(deleteProduct(ele));
    })}
  return (
    <>
      <div>
        <Link to="/add">
          <button>add product</button>
        </Link>
        <table>
          <tr>
            <th>product</th>
            <th>price</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
          {products.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.title}</td>
              <td>{ele.price} </td>
              <td>
                <Link to={"edit/" + ele.id}>
                  {" "}
                  <button>edit</button>
                </Link>
              </td>
              <td>
                {" "}
                <button onClick={() => DeleteProduct(ele)}>delete</button>{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div>
        <Link to="/addCake">
          <button>add cake</button>
        </Link>
        <table>
          <tr>
            <th>cake</th>
            <th>price</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
          {cakes.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.title}</td>
              <td>{ele.price} </td>
              <td>
                <Link to={"editCake/" + ele.id}>
                  {" "}
                  <button>edit</button>
                </Link>
              </td>
              <td>
                {" "}
                <button onClick={() => dispatch(deleteCake(ele))}>delete</button>{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Home;
