// import { FaAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import {
  FaCloudDownloadAlt,
  FaTimes,
  FaAngleDoubleRight,
  FaFilter,
  FaPlus,
 
} from "react-icons/fa";

const FirstBidPro = () => {
  return (
    <main className="container mb-5 ">
      <div className="mr-3 ml-3">
        <div className="cards mt-5 p-3 col-12">
          <h1>Bid Types</h1>
          <p>
            This was one of my 2nd quarter assignments for responsive web
            design. We were told to replicate a page to look EXACTLY like it.
            This page is currently an actual page that is used by a few airlines
            and it is EXACTLY what it is supposed to look like.
          </p>
        </div>
        <div className="row">
          <table className="table table-striped  col-sm-12 bpBackground mt-3 ">
            <thead>
              <tr className="text-center">
                <th scope="col">ID</th>
                <th scope="col">Bid Types</th>
                <th scope="col">Status</th>
                <th scope="col"># Bid Periods</th>
                <th scope="col">Last import</th>
                <th className="text-right" style={{ width: "100px" }}>
                  
                    <FaFilter/>
                  
                  
                    <FaPlus className=" ml-2" />
                  
                  
                    {/* <FaRefresh  className="ml-2" /> */}
                  
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <th className="align-middle">1</th>
                <td className="">CAPTAIN ANC 73G</td>
                <td className="status">Current</td>
                <td className="bid">1</td>
                <td className="imp">Nov 1 2017 12.00AM</td>
                <td>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-blue">
                      <FaCloudDownloadAlt className="mr-2" />
                      Retry Import
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Bid Periods
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Import History
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-danger">
                      <FaTimes className="ml-2" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="text-center">
                <th className="align-middle">2</th>
                <td className="td">CAPTAIN ANC 73G</td>
                <td>Current</td>
                <td>1</td>
                <td>Nov 1 2017 12.00AM</td>
                <td>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-blue">
                      <FaCloudDownloadAlt className="mr-2 text-white" />
                      Retry Import
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Bid Periods
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button
                      className="btn btn-primary"
                      style={{ textAlign: "left" }}
                    >
                      Import History
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-danger">
                      <FaTimes className="ml-2" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="text-center">
                <th className="align-middle">3</th>
                <td>CAPTAIN ANC 73G</td>
                <td>Current</td>
                <td>1</td>
                <td>Nov 1 2017 12.00AM</td>
                <td>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-blue">
                      <FaCloudDownloadAlt className="mr-2" />
                      Retry Import
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Bid Periods
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Import History
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-danger">
                      <FaTimes className="ml-2" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="text-center">
                <th className="align-middle">4</th>
                <td>CAPTAIN ANC 73G</td>
                <td>Current</td>
                <td>1</td>
                <td>Nov 1 2017 12.00AM</td>
                <td>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-blue">
                      <FaCloudDownloadAlt className="mr-2" />
                      Retry Import
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Bid Periods
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Import History
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-danger">
                      <FaTimes className="ml-2" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="text-center">
                <th className="align-middle">5</th>
                <td>CAPTAIN ANC 73G</td>
                <td>Current</td>
                <td>1</td>
                <td>Nov 1 2017 12.00AM</td>
                <td>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-blue">
                      <FaCloudDownloadAlt className="mr-2" />
                      Retry Import
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Bid Periods
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Import History
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-danger">
                      <FaTimes className="ml-2" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="text-center">
                <th className="align-middle">6</th>
                <td>CAPTAIN ANC 73G</td>
                <td>Current</td>

                <td>1</td>
                <td>Nov 1 2017 12.00AM</td>
                <td>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-blue">
                      <FaCloudDownloadAlt className="mr-2" />
                      Retry Import
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Bid Periods
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-primary">
                      Import History
                      <FaAngleDoubleRight className="ml-2" />
                    </button>
                  </div>
                  <div className="col mb-2 text-white">
                    <button className="btn btn-danger">
                      <FaTimes className="ml-2" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default FirstBidPro;
