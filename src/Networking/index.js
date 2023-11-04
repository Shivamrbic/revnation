import APIClient from './APIClient';
import EndPoints from './EndPoints';
import Managers from './Managers';
import socket from './socket';

module.exports = {
  ...APIClient,
  EndPoints,
  ...Managers,
  socket,
};
