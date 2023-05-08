import React from "react";
import { useParams, Outlet} from "react-router-dom";


function SingleProduct(){
  let { productId } = useParams;
  return <div>
    <Outlet> {productId}
    <h1>owhdflfw;q</h1></Outlet>
  </div>
}

export default SingleProduct;