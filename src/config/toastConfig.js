import Toast from 'components/Toast';
import React from 'react';

import { theme } from 'config/theme';

const { colors } = theme;

const toastTypes = {
  success: { color: colors.success },
  error: { color: colors.error },
};

const SuccessToast = props => (
  <Toast {...props} settings={toastTypes.success} />
);

const ErrorToast = props => <Toast {...props} settings={toastTypes.error} />;

const toastConfig = {
  success: SuccessToast,
  error: ErrorToast,
};

export default toastConfig;
