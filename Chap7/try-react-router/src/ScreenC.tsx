import React, { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

interface Params {
  userid: string;
}

const ScreenC: FC<ScreenCProps> = (props) => {
  const history = useHistory();
  const { userid } = useParams<Params>();

  const onClickGoback = () => {
    // props.history.goBack();
    history.goBack();
  };

  return (
    <div>
      {/* <div>{"Your id is" + props.match.params.userid}</div> */}
      <div>{"your id os " + userid}</div>
      <div>{props.message}</div>
      <div>
        <button onClick={onClickGoback}>Go Back</button>
      </div>
    </div>
  );
};

export default ScreenC;
