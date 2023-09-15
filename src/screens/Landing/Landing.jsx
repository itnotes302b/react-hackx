import React from "react";
import { Buttons } from "../../components/Buttons";
import { LearnMore } from "../../components/LearnMore";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import "./style.css";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="div-2">
        <div className="menu">
          <div className="logo">
            <img className="favicon" alt="Favicon" src="/img/favicon.svg" />
            <div className="text-wrapper-3">Medi AI</div>
          </div>
          <div className="menu-items">
            <div className="text-wrapper-4">Great assesment from our specialize Doctor's</div>
            {/* <div className="text-wrapper-4">About us</div> */}
          </div>
          <Buttons className="buttons-instance" type="outline" />
          <img className="divider" alt="Divider" src="/img/divider.svg" />
        </div>
        <div className="overlap">
          <div className="conditions-we-treat">
            <div className="overlap-group">
              <div className="text-wrapper-5">Some Conditions AI Can Analyse</div>
              <img className="thunder" alt="Thunder" src="/img/thunder.png" />
            </div>
            <p className="p">Our AI specialize in complex health issues ignored by conventional medicine and doctor's.</p>
            <div className="disease">
              <div className="learn-more-2">
                <div className="text-wrapper-6">Learn more</div>
                <ArrowRight1 className="arrow-right" />
              </div>
              <div className="text">
                <p className="text-wrapper-7">Inflammatory bowel, SIBO, gas &amp; bloating.</p>
                <div className="text-wrapper-8">Digestive Issues</div>
              </div>
              <div className="element-wrapper">
                <div className="element">
                  <div className="overlap-group-2">
                    <img className="fill" alt="Fill" src="/img/fill-221.svg" />
                    <img className="img" alt="Fill" src="/img/fill-223.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="auto">
              <div className="learn-more-2">
                <div className="text-wrapper-6">Learn more</div>
                <ArrowRight1 className="arrow-right" />
              </div>
              <div className="text">
                <p className="text-wrapper-7">Chronic breakouts, pain &amp; other confusing symptoms.</p>
                <div className="text-wrapper-8">Autoimmunity</div>
              </div>
              <img className="disease-2" alt="Disease" src="/img/disease.svg" />
            </div>
            <div className="hormones">
              <div className="learn-more-2">
                <div className="text-wrapper-6">Learn more</div>
                <ArrowRight1 className="arrow-right" />
              </div>
              <div className="text">
                <p className="text-wrapper-7">Fatigue, menopause, fertility, thyroid issues, cycle optimization</p>
                <div className="text-wrapper-8">Hormone Issues</div>
              </div>
              <div className="element-wrapper">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <img className="fill-2" alt="Fill" src="/img/fill-1.svg" />
                    <img className="fill-3" alt="Fill" src="/img/fill-3.svg" />
                    <img className="fill-4" alt="Fill" src="/img/fill-5.svg" />
                    <img className="fill-5" alt="Fill" src="/img/fill-7.svg" />
                    <img className="fill-6" alt="Fill" src="/img/fill-9.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-img">
            <div className="overlap-2">
              <p className="text-wrapper-9">
                Wisdom doctors go beyond surface-level appointments and help you treat the root cause of your health
                issues so you don’t have to keep dealing with symptoms.
              </p>
              <div className="tag">
                <p className="text-wrapper-10">We thrive where conventional communication is ignored</p>
              </div>
              <div className="text-wrapper-11">Root Cause Medicine</div>
              <div className="learn-more-3">
                <div className="text-wrapper-6">Learn more</div>
                <ArrowRight1 className="arrow-right" />
              </div>
            </div>
          </div>
          <img className="scribbble" alt="Scribbble" src="/img/scribbble.png" />
        </div>
        <header className="header">
          <div className="overlap-3">
            <div className="overlap-4">
              <div className="healthcare-when-all">
                Healthcare
                <br />
                is a Wealthcare
              </div>
              <div className="pill">
                <div className="overlap-group-4">
                  <img className="img-2" alt="Vector" src="/img/vector.svg" />
                  <img className="img-2" alt="Group" src="/img/group-1.png" />
                </div>
              </div>
              <img className="orange-thingy" alt="Orange thingy" src="/img/orange-thingy.png" />
              <div className="big-img">
                <div className="outline-wrapper">
                  <div className="outline-2" />
                </div>
              </div>
              <div className="second-img-2" />
              <img className="flower" alt="Flower" src="/img/flower.png" />
            </div>
            <p className="first-class-women">
            Give us your medical records, and our skilled system it will utilise Artificial Intelligence to greatly aid you.
             If there is a serious problem, we will also provide you with immediate help.
            </p>
            <Buttons className="design-component-instance-node" divClassName="find" type="filled" />
            <LearnMore className="learn-more-instance" />
          </div>
        </header>
        <div className="bar">
          <p className="text-wrapper-12">Help yourself by seeking out specialised medical care.</p>
        </div>
      </div>
    </div>
  );
};
