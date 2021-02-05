import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LinkSharpIcon from "@material-ui/icons/LinkSharp";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
interface DataProps {
  name?: string;
  language?: string;
  desc?: string;
  stars?: number;
  fork?: number;
  size?: number;
  link?: string;
}

export const Data: React.FC<DataProps> = ({
  name,
  language,
  desc,
  stars,
  fork,
  size,
  link,
}) => {
  return (
    <div className="data__card">
      <h1> {name}</h1> <p> {desc}</p>{" "}
      <div className="flex data__flex">
        <div className="data__grid">
          <p>
            <FiberManualRecordIcon className="data__icon" /> {language}
          </p>
          {/* <p>
              <StarBorderIcon />
              {stars}
            </p> */}
          <p>
            <a href={`${link}`}>
              <LinkSharpIcon />
            </a>
          </p>
        </div>
        <div>{size} KB </div>
      </div>
    </div>
  );
};
