import { notification } from 'antd';

export const showNotification = (type, message) => {
  notification[type]({
    message: message || 'Something went wrong, Please try again later'
  });
};
