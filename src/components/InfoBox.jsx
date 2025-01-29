import React from "react";
import PropTypes from "prop-types";
import * as Icons from "../utils/icons";
// import minusIcon from '../assets/minus.svg'
// import { ReactComponent as Minus } from '../assets/minus.svg';

function InfoBox({ title, children }) {
  return (
    <div className="outline-white outline-2">
      {/* title */}
      <div>
        {title && (
          <h2 className="dark:text-white font-bold w-3xs text-xl p-1">
            {title}
          </h2>
        )}
        <Icons.Minus className="w-7 h-auto p-1" viewBox="0 0 8 8" />
        <Icons.Exit className="w-7 h-auto p-1" viewBox="0 0 8 8" />
      </div>

      <hr className="w-full outline-1 border-0"></hr>

      {/* content */}
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
