import React from "react";
import PropTypes from "prop-types";
import * as Icons from '../utils/icons';
// import minusIcon from '../assets/minus.svg'
// import { ReactComponent as Minus } from '../assets/minus.svg';

function InfoBox({ title, children }) {
    return (
        <div className="outline-white outline-2">
            {title && <h2 className="dark:text-white font-bold w-3xs text-xl p-1">{title}</h2>}
            {/* <img src={minusIcon} alt="Minus Icon"/> */}
            <Icons.Minus/>
            <hr className="w-full outline-1 border-0"></hr>
            <div className="">{children}</div>
        </div>
    );
}

// prop validation
InfoBox.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default InfoBox;