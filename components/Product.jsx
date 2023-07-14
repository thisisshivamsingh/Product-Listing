import React, { useState, useEffect } from "react";
import styles from "../styles/index.module.css";
import { getData } from "../services/product.service";
import Spinner from "react-bootstrap/Spinner";

const Product = () => {
  const [data, setData] = useState([]);

  const takeData = async (token) => {
    let response = await getData(token);
    setData(response?.data?.data?.electricity);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    takeData(token);
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <center>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </center>
      ) : (
        <div className={styles.productListing}>
          <div className={styles.productListingChild} />
          <div className={styles.button}>
            <div className={styles.buttonChild} />
            <div className={styles.electricity}>Electricity</div>
            <div className={styles.notifications}>
              <div className={styles.notificationsChild} />
              <div className={styles.div}>8</div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.filterWrapper}>
              <div className={styles.filter}>Filter</div>
            </div>
          </div>
          <div className={styles.nsw}>2000, NSW</div>
          <div className={styles.mapIcon}>
            <div className={styles.mapIconChild} />
            <img className={styles.vectorIcon} alt="" src="" />
          </div>
          <div className={styles.initialRecommendationsAreContainer}>
            <p
              className={styles.initialRecommendationsAre}
            >{`Initial recommendations are based on average medium usage as determined by relevant energy regulators, please view the information hover next to the estimated cost box for more information. For a more `}</p>
            <p className={styles.initialRecommendationsAre}>
              accurate comparison relevant to your circumstances, please use the
              Bill Details tab on the results page to enter your most recent
              energy bill details.
            </p>
          </div>
          <div className={styles.invertedExclamationMark}>
            <div className={styles.invertedExclamationMarkChild} />
            <img className={styles.boxImportantIcon} alt="" src="" />
          </div>

          {data.map((elem, index) => (
            <div key={index} className={styles.electricityBrand}>
              <div className={styles.energyLogo} />
              <div
                className={styles.monthEnergyPlan}
                dangerouslySetInnerHTML={{ __html: elem.cooling_off_period }}
              ></div>
              <div className={styles.skyBlueHighlightedText}>
                <div className={styles.skyBlueHighlightedTextChild} />
                <div className={styles.standardFeedIn}>
                  {elem.solar_rates[0].solar_description}
                </div>
              </div>
              <div
                className={styles.noExitFees}
                dangerouslySetInnerHTML={{ __html: elem.view_exit_fee }}
              ></div>
              <div
                className={styles.creditIncludingGst}
                dangerouslySetInnerHTML={{
                  __html: elem.credit_card_service_fee,
                }}
              ></div>
              <div
                className={styles.noLockInContract}
                dangerouslySetInnerHTML={{ __html: elem.contract_length }}
              ></div>
              <div className={styles.energyImageParent}>
                <div className={styles.energyImage}>
                  <div className={styles.energyImageChild} />
                  <img
                    className={styles.energyaustralia1Icon}
                    alt=""
                    src={elem.provider_image}
                  />
                </div>
                <div className={styles.viewDetails}>View Details</div>
                <div className={styles.basicPlanInformation}>
                  Basic Plan Information Document
                </div>
              </div>
              <div className={styles.lessThanTheCurrentReferencWrapper}>
                <div className={styles.lessThanTheCurrentContainer}>
                  <p className={styles.initialRecommendationsAre}>
                    {elem.dmo_percentage.Ausgrid}
                  </p>
                  <p
                    className={styles.initialRecommendationsAre}
                    dangerouslySetInnerHTML={{
                      __html: elem.dmo_content.Ausgrid,
                    }}
                  ></p>
                </div>
              </div>
              <div
                className={styles.thisOriginAdvantage}
                dangerouslySetInnerHTML={{ __html: elem.dmo_content.Ausgrid }}
              ></div>
              <div className={styles.estimatedCostBox}>
                <div className={styles.estimatedCostBoxChild} />
                <div className={styles.estimatedCostBoxItem} />
                <div className={styles.estimatedCost}>Estimated cost</div>
                <div className={styles.yr}>
                  <span>
                    <span className={styles.span}>
                      ${elem.expected_annually_bill_amount}^
                    </span>
                    <span className={styles.span1}>/</span>
                  </span>
                  <span className={styles.span1}>
                    <span>yr</span>
                  </span>
                </div>
                <div className={styles.mo}>
                  <span className={styles.span}>
                    ${elem.expected_monthly_bill_amount}
                  </span>
                  <span className={styles.span1}>/mo</span>
                </div>
                <div className={styles.invertedExclamationMark1}>
                  <div className={styles.invertedExclamationMarkItem} />
                  <img className={styles.boxImportantIcon1} alt="" src="" />
                </div>
              </div>
              <div className={styles.tick}>
                <div className={styles.energyImageChild} />
                <img className={styles.vectorIcon1} alt="" src="" />
              </div>
              <div className={styles.componentFooter}>
                <div className={styles.componentFooterChild} />
                <div
                  className={styles.theEstimatedCost}
                  dangerouslySetInnerHTML={{ __html: elem.view_discount }}
                ></div>
                <div className={styles.connectOnlineTodayWrapper}>
                  <div className={styles.filter}>Connect online Today</div>
                </div>
                <div
                  className={styles.businessDaysCooling}
                  dangerouslySetInnerHTML={{ __html: elem.cooling_off_period }}
                ></div>
                <div className={styles.secureSignupIn}>
                  {elem.green_options_desc}
                </div>
                <div
                  className={styles.saveTimeAnd}
                  dangerouslySetInnerHTML={{ __html: elem.view_discount }}
                ></div>
                <div className={styles.tick1}>
                  <div className={styles.tickItem} />
                  <img className={styles.vectorIcon1} alt="" src="" />
                </div>
                <div className={styles.tick2}>
                  <div className={styles.tickItem} />
                  <img className={styles.vectorIcon1} alt="" src="" />
                </div>
                <div className={styles.tick3}>
                  <div className={styles.tickItem} />
                  <img className={styles.vectorIcon1} alt="" src="" />
                </div>
              </div>
              <div className={styles.tick4}>
                <div className={styles.energyImageChild} />
                <img className={styles.vectorIcon1} alt="" src="" />
              </div>
              <div className={styles.tick5}>
                <div className={styles.energyImageChild} />
                <img className={styles.vectorIcon1} alt="" src="" />
              </div>
              <div className={styles.tick6}>
                <div className={styles.energyImageChild} />
                <img className={styles.vectorIcon1} alt="" src="" />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
