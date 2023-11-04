import Colors from './Colors';

const APP_FONT_THIN = 'Nunito-Black';
const APP_FONT_LIGHT = 'Nunito-Light';
const APP_FONT_REGULAR = 'Nunito-Regular';
const APP_FONT_MEDIUM = 'Nunito-Medium';
const APP_FONT_SEMIBOLD = 'Nunito-SemiBold';
const APP_FONT_BOLD = 'Nunito-Bold';

const getThinFont = (fontSize = 14, color = Colors.APP_FONT_COLOR1) => ({
  fontFamily: APP_FONT_THIN,
  fontSize,
  color,
});

const getLightFont = (fontSize = 14, color = Colors.APP_FONT_COLOR1) => ({
  fontFamily: APP_FONT_LIGHT,
  fontSize,
  color,
  fontWeight: 300,
});

const getRegularFont = (fontSize = 14, color = Colors.APP_FONT_COLOR1) => ({
  fontFamily: APP_FONT_REGULAR,
  fontSize,
  color,
  fontWeight: 400,
});

const getMediumFont = (fontSize = 14, color = Colors.APP_FONT_COLOR1) => ({
  fontFamily: APP_FONT_MEDIUM,
  fontSize,
  color,
  fontWeight: 500,
});

const getSemiBoldFont = (fontSize = 14, color = Colors.APP_FONT_COLOR1) => ({
  fontFamily: APP_FONT_SEMIBOLD,
  fontSize,
  color,
  fontWeight: 600,
});

const getBoldFont = (fontSize = 14, color = Colors.APP_FONT_COLOR1) => ({
  fontFamily: APP_FONT_BOLD,
  fontSize,
  color,
  fontWeight: 700,
});

export default {
  getThinFont,
  getLightFont,
  getRegularFont,
  getMediumFont,
  getSemiBoldFont,
  getBoldFont,
};
