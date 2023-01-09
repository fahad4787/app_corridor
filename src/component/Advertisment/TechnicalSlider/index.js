import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import SectionTitle from "../../SectionTitle";

const TechnicalSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings1 = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true,

    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 760,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <Row className="align-items-center">
    <SectionTitle title="Technical" colorText="experties" align="text-center"/>
    <Col xl={6} lg={7}>
    <Slider
        className="circle_img"
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        {...settings1}
      >
        <div>
          <span className="slide_icon">
            <i class="fas fa-search"></i>
          </span>
        </div>

        <div>
          <span className="slide_icon">
            <i class="fa-solid fa-brain"></i>
          </span>
        </div>

        <div>
          <span className="slide_icon">
            <i class="fas fa-gamepad"></i>
          </span>
        </div>

        <div>
          <span className="slide_icon">
            <i class="fa-solid fa-vector-square"></i>
          </span>
        </div>

        <div>
          <span className="slide_icon">
            <i class="fas fa-head-side-virus"></i>
          </span>
        </div>

        <div>
          <span className="slide_icon">
            <i class="fas fa-cloud"></i>
          </span>
        </div>

        <div>
          <span className="slide_icon">
            <i class="fas fa-mobile-alt"></i>
          </span>
        </div>

        <div>
          <span className="slide_icon">
            <i class="fas fa-globe"></i>
          </span>
        </div>
      </Slider>
    </Col>

    <Col xl={6} lg={5}>
    <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={1}
        fade={true}
        className="nav-slider"
      >
        <div>
          <h3>
            MS SQL Server, MYSQL,MongoDB, Redis, Hadoop, Pig, Hive, Big Query,
            S3, HBase, Cassandra, Spark, Solr, Lucene, Elastic Search,
            Snowflake, HartonWork, Python, R, Jave, .Net, C++
          </h3>
        </div>
        <div>
          <h3>
            Dynamic TM NAV, AX, CRM, J2EE, MS Sharepoint, MS Biztalk 8, Cognos
            Bl.
          </h3>
        </div>
        <div>
          <h3>
            Unity, C#, JavaScript, Python, WebGl platform, unity network for all
            platform (android, IOS, mac)
          </h3>
        </div>
        <div>
          <h3>
            Ethereum, Solidity, Solana, Cosmos SDK, DAPP development, DX, DeFi,
            Blockchain, Hyperledger, NFT Marketplacem NFR Minring, Smart
            Contracts.
          </h3>
        </div>
        <div>
          <h3>
            HDFS, YARN, Parquet, Impala, Presto, Drill, RCNN-family, SSD, Retina
            Net, YOloV1, VGG, ResNet, Inception, DenseNets, TensorFlowm Keras,
            MxNet, Caffe2m Naive Bayes, Hardware, Firemware, QT, BLE, C++, PCB
            design, 3D printing.
          </h3>
        </div>
        <div>
          <h3>
            Amazon Web Server, Google Colud platform, Microsoft, Azure,
            Terraform, CloudFormation, AWS Lambda, Azure Funtion, Google Cloud
            Function.
          </h3>
        </div>
        <div>
          <h3>
            IOS(Swift) Android(Kotlin) Cross Platform: React Native, Flutter
            etc.
          </h3>
        </div>

        <div>
          <h3>
            Blockchain, JavaScript, ReactJs, Node Js, Ruby on rails, ASP.Net,
            PHP, Laravel, Vue Js, Java, HTML5, CSS3, Bootstrap, Shopify.
          </h3>
        </div>
      </Slider>
    </Col>
      
    </Row>
  );
};

export default TechnicalSlider;
