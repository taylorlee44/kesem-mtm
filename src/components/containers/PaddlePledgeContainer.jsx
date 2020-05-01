import React from 'react';

import PropTypes from 'prop-types';

import RoundedButton from '../input/RoundedButton';

function PaddlePledgeContainer({ firebase, user, currentPledgeAmount, sessionId }) {
  const onClickRaisePaddle = () => {
    firebase.addPaddle(user.name, user.email, currentPledgeAmount, sessionId)
      .then(() => {
        console.log('done adding paddle');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>You are {user.name}</p>
      <h2>Pledge to give</h2>
      <h1>${currentPledgeAmount}</h1>
      <RoundedButton title="Raise my paddle!" onClick={() => onClickRaisePaddle()} />
    </div>
  );
}

PaddlePledgeContainer.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    screenName: PropTypes.string.isRequired,
  }).isRequired,
  sessionId: PropTypes.string.isRequired,
  currentPledgeAmount: PropTypes.number.isRequired,
};

export default PaddlePledgeContainer;