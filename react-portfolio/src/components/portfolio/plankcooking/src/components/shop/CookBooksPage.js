import { React, useState, useEffect } from "react";
import cookBookHeader from "../shared/images/shop/Cookbooks_Header.png";
import shopHeader from "../shared/images/shop/Shop_MenuHeader.png";
import passion from "../shared/images/shop/passion_palate_cover.png";
import plankCookBook from "../shared/images/shop/PlankCookbook.png";
import cedarCookbook from "../shared/images/shop/CedarCookbook.png";
import paperBottom from "../shared/images/PaperBackground_Bottom.png";
import addButton from "../shared/images/shop/AddToCart_button.png";

const CookBooksPage = () => {
  const [cookbooks, setCookBooks] = useState([]);

  useEffect(() => {
    const _cookbooks = [];

    // Example 1
    const firstCookbook = {
      productId: 1,
      categoryId: 2,
      name: "Passion & Palate",
      description:
        "Chef Howie’s New Cookbook Passion & Palate is a collection of stories and recipes from Chef John Howie. The chef/proprietor who brought you the Award winning restaurants, Seastar Restaurant & Raw Bar, John Howie Steak, SPORT Restaurant & Bar, Adriatic Grill, Italian Cuisine & Wine Bar, and the culinary website plankcooking.com, now shares his creative culinary exploits with you. Passion & Palate will excite the senses with over 240 recipes, and 88 full color pictures. The recipe range is very eclectic with everything from some of Chef Howie’s best plank cooking recipes, to amazing soups, salads, seafood, meats, pastas, poultry, ceviche’s, poke, and sushi. All recipes were tested by home cooks. So you can be assured that these recipes will work in your home kitchen. Passion & Palate is the culmination of Chef Howie’s dream to bring exciting cuisine to the homes of his restaurant guests and fan of good food everywhere.",
      price: 42.0,
      priceDescription: "Price: $42.00",
      sortOrder: 0,
      active: 0,
      ounces: 0,
      imagePath: passion,
      handlingCost: 0,
      taxExempt: 0,
      sku: "string",
    };
    _cookbooks.push(firstCookbook);

    const thirdCookbook = {
      productId: 3,
      categoryId: 2,
      name: "The Plank Cookbook",
      description:
        "This is Chef Howie’s second cookbook with fifteen new recipes for your cedar, alder and BBQ grilling planks. Although each of the recipes in this cookbook were designed to be used with specific planks, they are not exclusive to the planks they were created for and can be used with either the cedar, alder or BBQ grilling planks. Includes recipes for lemon-garlic prawns, hazelnut salmon, lamb chops pepperonata, pork tenderloin with mango salsa, caramelized onion halibut and plank roasted turkey breast with cranberry compote, just to name a few.",
      price: 6.5,
      priceDescription: "Price: $6.50",
      sortOrder: 0,
      active: 0,
      ounces: 0,
      imagePath: plankCookBook,
      handlingCost: 0,
      taxExempt: 0,
      sku: "string",
    };
    _cookbooks.push(thirdCookbook);

    const secondCookbook = {
      productId: 2,
      categoryId: 2,
      name: "The Cedar Plank Cookbook",
      description:
        "Chef Howie’s New Cookbook Passion & Palate is a collection of stories and recipes from Chef John Howie. The chef/proprietor who brought you the Award winning restaurants, Seastar Restaurant & Raw Bar, John Howie Steak, SPORT Restaurant & Bar, Adriatic Grill, Italian Cuisine & Wine Bar, and the culinary website plankcooking.com, now shares his creative culinary exploits with you. Passion & Palate will excite the senses with over 240 recipes, and 88 full color pictures. The recipe range is very eclectic with everything from some of Chef Howie’s best plank cooking recipes, to amazing soups, salads, seafood, meats, pastas, poultry, ceviche’s, poke, and sushi. All recipes were tested by home cooks. So you can be assured that these recipes will work in your home kitchen. Passion & Palate is the culmination of Chef Howie’s dream to bring exciting cuisine to the homes of his restaurant guests and fan of good food everywhere.",
      price: 42.0,
      priceDescription: "Price: $42.00",
      sortOrder: 0,
      active: 0,
      ounces: 0,
      imagePath: cedarCookbook,
      handlingCost: 0,
      taxExempt: 0,
      sku: "string",
    };
    _cookbooks.push(secondCookbook);

    // EXAMPLE 2

    _cookbooks.push({
      productId: 1,
      categoryId: 2,
      name: "Both Plank Cookbooks ",
      description:
        "Both of Chef Howie’s Plank Cookbooks, The Cedar Plank Cookbook and The Plankcooking Cookbook, are included with this purchase.",
      price: 12.0,
      priceDescription: "Price: $12.00",
      sortOrder: 0,
      active: 0,
      ounces: 0,
      imagePath: "",
      handlingCost: 0,
      taxExempt: 0,
      sku: "",
    });
    setCookBooks(_cookbooks);
  }, []);

  return (
    <>
      <main className="pl-3 pr-3 fitContent">
        <div className="container">
          <div className="row">
            <div className="dropdown col-12 d-lg-none text-center center mt-3">
              <button
                className="btn dropdown-toggle banner text-white"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ width: "250px" }}
              >
                <h2
                  className=""
                  style={{color:"#dbcb98"}}
                  aria-labelledby="dropdownMenuButton"
                >
                  Shop
                </h2>
              </button>
              <div
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  className="nav-link-bottom boarderBottom dropdown-item"
                  href="/Shop/Spicerubs"
                >
                  SPICE RUBS
                </a>
                <a
                  className="nav-link-bottom boarderBottom dropdown-item"
                  href="/Shop/Cookbooks"
                >
                  COOKBOOKS
                </a>
                <a
                  className="nav-link-bottom boarderBottom dropdown-item"
                  href="/Shop/Bakingplanks"
                >
                  BAKING PLANKS
                </a>
                <a
                  className="nav-link-bottom boarderBottom dropdown-item"
                  href="/Shop/BBQplanks"
                >
                  BBQ PLANKS
                </a>
                <a
                  className="nav-link-bottom boarderBottom dropdown-item"
                  href="/Shop/Nutdriver"
                >
                  NUT DRIVER
                </a>
              </div>
            </div>

            <section
              className="col-4 d-none d-none d-lg-block center mt-5"
              style={{ height: "100px", fontSize: "14px" }}
            >
              <ul className="hideUlDot " style={{ width: "250px" }}>
                <figure>
                  <img src={shopHeader} alt="" />
                </figure>

                <div
                  style={{
                    textAlign: "center",
                    maxWidth: "225px",
                    margin: " 0 auto",
                  }}
                >
                  <div
                    style={{ margin: "10px 0px 10px 10px" }}
                    className="dotted_line"
                  ></div>

                  <div>
                    <a href="/Shop/SpiceRubs">
                      <span className="leftMenuTitle">SPICE RUBS</span>
                    </a>
                  </div>
                  <div
                    style={{ margin: "10px 0px 10px 10px" }}
                    className="dotted_line"
                  ></div>
                  <div>
                    <a href="/Shop/Cookbooks">
                      <span className="leftMenuTitle">COOKBOOKS</span>
                    </a>
                  </div>
                  <div
                    style={{ margin: "10px 0px 10px 10px" }}
                    className="dotted_line"
                  ></div>
                  <div>
                    <a href="/Shop/Bakingplanks">
                      <span className="leftMenuTitle">BAKING PLANKS</span>
                    </a>
                  </div>
                  <div
                    style={{ margin: "10px 0px 10px 10px" }}
                    className="dotted_line"
                  ></div>
                  <div>
                    <a href="/Shop/BBQplanks">
                      <span className="leftMenuTitle">BBQ PLANKS</span>
                    </a>
                  </div>
                  <div
                    style={{ margin: "10px 0px 10px 10px" }}
                    className="dotted_line"
                  ></div>
                  <div>
                    <a href="/Shop/Nutdriver">
                      <span className="leftMenuTitle">NUT DRIVER</span>
                    </a>
                  </div>
                  <div
                    style={{ margin: "10px 0px 10px 10px" }}
                    className="dotted_line"
                  ></div>
                </div>
              </ul>
            </section>

            <section className="col-sm-12 d-md-none mb-5 mt-5">
              <div className=" pl-3 row">
                <figure>
                  <img src={cookBookHeader} className="img-fluid" alt="" />
                </figure>

                <div className="" style={{ width: "710px", fontSize: "14px" }}>
                  {cookbooks.map((cookbook) => (
                    <form action="/Shop/SpiceRubs" method="POST">
                      <section className="p-2">
                        <div className=" content_title boarderTop ">
                          <div
                            className="col-6 dotted_line_right dotted_line_bottom "
                            style={{ textAlign: "left" }}
                          >
                            {cookbook.name}
                          </div>
                        </div>
                        <div className="row pl-2" style={{ fontSize: "14px" }}>
                          <div className="col-7" style={{ textAlign: "left" }}>
                            {cookbook.description}
                          </div>
                          <div className="col-5">
                            <p>{cookbook.priceDescription}</p>

                            <input
                              className=""
                              type="hidden"
                              name="orderItemId"
                              id="orderItemId"
                              value="1 "
                            />
                            <input
                              className=""
                              type="hidden"
                              name="orderCartIdInput"
                              id="orderCartIdInput"
                              value="1 "
                            />
                            <input
                              className=""
                              type="hidden"
                              name="productIdInput"
                              id="productIdInput"
                              value="<%= product.productId %> "
                            />
                            <p>
                              Quantity:
                              <input
                                className=""
                                type="number"
                                name="qtyInput"
                                id="qtyInput"
                                maxLength="2"
                                style={{ width: "40px" }}
                                value="<%= product.qty %> "
                                required
                              />
                            </p>
                            <figure>
                              <img src={addButton} alt="Submit" />
                            </figure>

                            <figure>
                              <img
                                src={`${cookbook.imagePath}`}
                                alt="products"
                              />
                            </figure>
                          </div>
                        </div>
                      </section>
                    </form>
                  ))}
                </div>
              </div>
            </section>

            <section className="d-none d-md-block col-md-12 mt-5 col-lg-8">
              <div className="row">
                <div id="" className="boardBackgroundShop">
                  <figure>
                    <img
                      src={cookBookHeader}
                      alt=""
                      className="mainPic img-fluid"
                      style={{ position: "relative" }}
                    />
                  </figure>
                </div>
                <div className="paperBackground col-md-12" style={{ top: "" }}>
                  <div
                    className=""
                    style={{ width: "610px", fontSize: "14px" }}
                  >
                    {cookbooks.map((cookbook) => (
                      <form action="/Shop/SpiceRubs" method="POST">
                        <section className="p-2">
                          <div className=" content_title boarderTop ">
                            <div
                              className="col-6 dotted_line_right dotted_line_bottom "
                              style={{ textAlign: "left" }}
                            >
                              {cookbook.name}
                            </div>
                          </div>
                          <div
                            className="row pl-2"
                            style={{ fontSize: "14px;" }}
                          >
                            <div
                              className="col-7"
                              style={{ textAlign: "left" }}
                            >
                              {cookbook.description}
                            </div>
                            <div className="col-5">
                              <p>{cookbook.priceDescription}</p>

                              <input
                                className=""
                                type="hidden"
                                name="orderItemId"
                                id="orderItemId"
                                value="1 "
                              />
                              <input
                                className=""
                                type="hidden"
                                name="orderCartIdInput"
                                id="orderCartIdInput"
                                value="1 "
                              />
                              <input
                                className=""
                                type="hidden"
                                name="productIdInput"
                                id="productIdInput"
                                value="<%= product.productId %> "
                              />
                              <p>
                                Quantity:{" "}
                                <input
                                  className="text-center"
                                  type="text"
                                  name="qtyInput"
                                  id="qtyInput"
                                  pattern="[0-9]*"
                                  maxLength="2"
                                  style={{ width: "40px" }}
                                  value=""
                                  placeholder="0"
                                  required
                                />
                              </p>
                              <figure>
                                
                                <img src={addButton} alt="Submit" />

                                {/* <button type="submit"
                style={{width:'100px', height:'30px', background:'url(/images/shop/AddToCart_button.png)'}}
                img=""
                >
                  
                </button> */}
                              </figure>

                              <figure>
                                <img src={`${cookbook.imagePath}`} alt="" />
                                {/* {cookbook.imagePath} */}
                              </figure>
                            </div>
                          </div>
                          {/* </form> */}
                        </section>
                      </form>
                    ))}
                  </div>
                </div>
              </div>

              {/* <!-- // Paper Bottom --> */}
              <div className="d-none d-lg-block ">
                <div className=" row">
                  <figure className="" style={{ width: "590px" }}>
                    
                    <img
                      src={paperBottom}
                      alt="BottomOfPage"
                      style={{ marginLeft: "14px" }}
                    />
                  </figure>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default CookBooksPage;
