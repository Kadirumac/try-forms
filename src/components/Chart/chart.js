import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Chart() {
  const [products, setProducts] = useState();
  //   const [keyList, setKeyList] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(
      "https://cloud-api.trox.de/ci/epf-ordercode/REST/SeriesNodes?languageIso2L=de&countryIso2L=de&client=web#"
    );

    const productList = response?.data?.getSupportedSeriesNodesResult?.result;

    setProducts(productList);
  };
  const arr = [];
  const getKeyList = (prods, parentKeyList) => {
    const listsKeys = prods?.map((item) => {
      const list = [...parentKeyList, item.key];
      item["keyList"] = list;
      if (item.nodes) {
        getKeyList(item.nodes, list);
      }
      return item;
    });
    return listsKeys;
  };

  useEffect(() => {
    console.log(getKeyList(products, arr));
  }, [products, arr]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {/* Chart
      <div className="p-5 m-5">
        <ProductNavigation products={products} />
      </div> */}
    </div>
  );
}

function ProductNavigation({ products }) {
  const [isVisible, setIsVisible] = useState(undefined);
  const expand = (e, selector) => {
    setIsVisible(selector);

    if (isVisible === selector) {
      setIsVisible(undefined);
    }
  };
  return (
    <div className="ps-3">
      {products?.map((child, i) => (
        <div key={i}>
          <div
            onClick={(e) => expand(e, child.name + i)}
            className={`${child.name + i} p-3`}
          >
            {child.name}
          </div>
          {isVisible === child.name + i ? (
            <ProductNavigation products={child.nodes} />
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
