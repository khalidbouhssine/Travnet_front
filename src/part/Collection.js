import React from 'react';
import './css/Collection.css'
import maison from '../component/imgs/maison.png'
import img1 from '../component/imgs/img1.jpg'
import img2 from '../component/imgs/img2.jpg'
import img3 from '../component/imgs/img3.jpg'
import img4 from '../component/imgs/img4.jpg'
import villas from '../component/imgs/villas.png'

const Collection = () => {
    return (
        <div className="CollectionPart">
            <div className="part">
                <div className="partItem">
                    <div className="topPart">
                        <div className="topPartLeft">
                            <div className="TypeHotel">Mansour Eddahbi</div>
                            <div className="numberAndIcon">
                                <img src={maison} alt="maison" className="maisonIcon" />
                                <div className="number">12,984 available</div>
                            </div>
                        </div>
                    </div>
                    <div className="placeImage">
                        <img src={img1} alt="villas" className="maison" />
                    </div>
                </div>
                <div className="partItem">
                    <div className="topPart">
                        <div className="topPartLeft">
                            <div className="TypeHotel">La Maison Arabe</div>
                            <div className="numberAndIcon">
                                <img src={maison} alt="maison" className="maisonIcon" />
                                <div className="number">12,984 available</div>
                            </div>
                        </div>
                    </div>
                    <div className="placeImage">
                        <img src={img2} alt="villas" className="maison" />
                    </div>
                </div>
            </div>
            <div className="part">
                <div className="partItem">
                        <div className="topPart">
                            <div className="topPartLeft">
                                <div className="TypeHotel">Nobu</div>
                                <div className="numberAndIcon">
                                    <img src={maison} alt="maison" className="maisonIcon" />
                                    <div className="number">12,984 available</div>
                                </div>
                            </div>
                        </div>
                        <div className="placeImage">
                            <img src={img3} alt="villas" className="maison" />
                        </div>
                </div>
                <div className="partItem">
                    <div className="topPart">
                        <div className="topPartLeft">
                            <div className="TypeHotel">Riu Palace Tikida</div>
                            <div className="numberAndIcon">
                                <img src={maison} alt="maison" className="maisonIcon" />
                                <div className="number">12,984 available</div>
                            </div>
                        </div>
                    </div>
                    <div className="placeImage">
                        <img src={img4} alt="villas" className="maison" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
