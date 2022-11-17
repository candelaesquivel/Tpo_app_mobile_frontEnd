import I18n from "../assets/localization/I18n";

export default  {
  ROLES : {
    USER_ROLE : 'user',
    OWNER_ROLE : 'owner'
  },

  FOOD_TYPES : [
    { label: 'Mexicana', value: '1' },
    { label: 'Vegetariana', value: '2' },
    { label: 'Argentina', value: '3' },
    { label: 'Vegana', value: '4' },
    { label: 'China', value: '5' },
  ],

  PRICE_RANGES : [
    { label: '$', value: '1' },
    { label: '$$', value: '2' },
    { label: '$$$', value: '3' },
    { label: '$$$$', value: '4' },
  ],
  
  SCREEN_TITLES : {
    HOME : I18n.t('homeTitle'),
    PROFILE_USER : I18n.t('profileUserTitle'),
    RESTAURANT_MENU : I18n.t('menuRestaurantTitle'),
    FAVORITES_RESTAURANTS : I18n.t('favoritesTitle'),
    MY_RESTAURANTS : I18n.t('myRestaurantsTitle'),
    LOGIN : I18n.t('logInTitle'),
    CREATE_ACCOUNT : I18n.t('createAccountTitle'),
    DELETE_ACCOUNT: I18n.t('deleteAccountTitle'),
    RECOVER_PASS : I18n.t('recoverPassTitle'),
    EMAIL_SENT : I18n.t('emailSentTitle'),
    INFO_RESTAURANT : I18n.t('infoRestaurantTitle'),
    DISH_INFO : I18n.t('infoDishTitle'),
    ADD_DISH : I18n.t('addDishTitle'),
    RESTAURANT_PROFILE : I18n.t('restaurantProfileTitle'),
    SENT_COMMENT : I18n.t('sentCommentTitle'),
    CREATE_RESTAURANT : I18n.t('createRestaurantTitle'),
    FILTERS : I18n.t('filtersTitle'),
  },

  SCREEN_TEXTS : {
    RECOVER_PASS_LABEL : I18n.t('recoverPassword'),
    APP_NAME : I18n.t('appName'),
    CREATE_LABEL : I18n.t('create'),
    NOT_FAVORITES : I18n.t('emptyFavorites'),
    NOT_RESTAURANTS : I18n.t('emptyRestaurants'),
    NOT_DISHES : I18n.t('emptyDishes'),
    NAME_LABEL : I18n.t('name'),
    PRICE_LABEL : I18n.t('price'),
    VEGAN_LABEL : I18n.t('vegan'),
    CELIAC_LABEL : I18n.t('celiac'),
    MENU_LABEL : I18n.t('menu'),
    CHOOSE_LABEL : I18n.t('choose'),
    ADD_NEW_CATEGORY_LABEL : I18n.t('addNewCategory'),
    INGREDIENTS_LABEL : I18n.t('ingredients'),
    CREATE_ACCOUNT_LABEL : I18n.t('createAccount'),
    SAVE_LABEL : I18n.t('save'),
    EMAIL_INPUT_LABEL : I18n.t('emailInput'),
    PASS_INPUT_LABEL : I18n.t('passInput'),
    VALID_PASS_INPUT_LABEL : I18n.t('validPassInput'),
    DISCOUNT_LABEL : I18n.t('discount'),
    CATEGORY_LABEL : I18n.t('category'),
    RESTAURANT_CREATED_MSG : I18n.t(''),
    DISH_CREATED_MSG : I18n.t('dishCreated'),
    DISH_UPDATED_MSG : I18n.t('dishUpdated'),
    YES : I18n.t('yes'),
    NO : I18n.t('no'),
    PRICE_SYMBOL : I18n.t('priceSymbol'),
    USER_DATA_UPDATED : I18n.t('userDataUpdated'),
    ADDRESS_LABEL : I18n.t('address'),
    NEIGHBORHOOD_LABEL : I18n.t('neighborhood'),
    LOCATION_LABEL : I18n.t('location'),
    ZIP_CODE_LABEL : I18n.t('zipCode'),
    HOUR_LABEL : I18n.t('hour'),
    OPEN_LABEL : I18n.t('open'),
    MAP_LABEL : I18n.t('map'),
    OPEN_HOUR_LABEL : I18n.t('opening'),
    DELETE_RESTAURANT_LABEL : I18n.t('deleteRestaurant'),
    COMMENT_LABEL : I18n.t('comment'),
    CLOSE_HOUR_LABEL : I18n.t('closing'),
    CLOSE_LABEL : I18n.t('close'),
    ACCOUNT_CREATED : I18n.t('accountCreated'),
    ACCOUNT_DELETED : I18n.t('accountDeleted'),
    LOGOUT_LABEL : I18n.t('logout'),
    LOGIN_LABEL : I18n.t('login'),
    DELETE_ACOOUNT_LABEL : I18n.t('deleteAccount'),
    DELETE_ACCOUNT_INTRO_MSG : I18n.t('messageDeleteAccount'),
    DELETE_LABEL : I18n.t('delete'),
    DELETE_DISH_LABEL : I18n.t('deleteDish'),
    EMAIL_SENT_MSG : I18n.t('messageEmailSent'),
    FORGOT_PASSWORD_LABEL:  I18n.t('forgotPassword'),
    SENT_LABEL : I18n.t('sent'),
    RATING_LABEL : I18n.t('calification'),
    ADD_PICTURE_LABEL : I18n.t('addPicture'),
    FOOD_TYPE_LABEL : I18n.t('foodType'),
    DISTANCE_UNIT_LABEL : I18n.t('distanceUnit'),
    FILTER_MSG_INTRO : I18n.t('filterMessageIntro'),
    USER_LABEL : I18n.t('user'),
    OWNER_LABEL : I18n.t('owner'),

    PRICE_RANGE_LOW : I18n.t('$'),
    PRINCE_RANGE_MID : I18n.t('$$'),
    PRICE_RANGE_HIGH : I18n.t('$$$'),
    PRICE_RANGE_ULTRA_HIGH : I18n.t('$$$$'),
  },
}