import Mintbtn from "./mintbtn.js";
// import logo from "./images/logo.png";
import img1 from "./images/newest.png";

// import SimpleSlider from './slider.js';
function Home() {
  return (
    <div>
      <div className="hero">
        <div className="herobg">
          <div className="container px-3">
            <div className="row align-items-center my-3">
              <div className="col-md-6">
                <img className="w-100" src={img1}></img>
              </div>
              <div className="col-md-6">
                <div className="carddiv">
                  <h1 className="text-center fda">BillionaireX</h1>
                  <h5 className="text-white text-center">CURRENT LAUNCH</h5>
                  <hr />
                  <table className="table">
                    <tbody className="text-white">
                      <tr>
                        <th className="border-0" scope="row">
                          NFT name:
                        </th>
                        <td className=" border-0  ">BillionaireX</td>
                      </tr>
                      <tr>
                        <th className="border-0" scope="row">
                          Total Supply:
                        </th>
                        <td className="  border-0">10,000</td>
                      </tr>
                      <tr>
                        <th className="border-0" scope="row">
                          Whitelist:
                        </th>
                        <td className="  border-0">0.05 ETH</td>
                      </tr>
                      <tr>
                        <th className="border-0" scope="row">
                          Public Sale:
                        </th>
                        <td className=" border-0">0.07 ETH</td>
                      </tr>
                    </tbody>
                  </table>
                  <Mintbtn />
                  <small className="mt-4 text-white d-block">
                    <strong>
                      Be one of our whitelisted members. Enjoy the giveaways,
                      utilities, and the presale.
                    </strong>{" "}
                    <br />
                  </small>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-4 mb-2" />
          <div className="text-center te xt-white footer">
            <a href="https://twitter.com/Billionairex_io/" target="_blank">
              <i className="fab fa-twitter mx-2 py-3"></i>
            </a>
            <a
              href="https://www.instagram.com/billionairex.io/"
              target="_blank"
            >
              <i className="fab fa-instagram mx-2 py-3"></i>
            </a>
            <a href="https://billionairex.xyz/">
              <small className="pb-2 mx-2 py-3">© 2022, BillionaireX</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
