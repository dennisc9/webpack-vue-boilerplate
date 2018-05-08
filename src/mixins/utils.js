export const utils = {
  methods: {
    /*
      is Object Empty?
      return: Boolean
    */
    hasObject: function(obj) {
      return Object.keys(obj).length !== 0;
    },
    /*
      is String Empty, null or blank
    */
    isStringEmpty: function(str) {
      if(str)
        return true;
      else
        return false;
    }
  }
};
