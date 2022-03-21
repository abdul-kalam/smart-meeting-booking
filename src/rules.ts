export const RULES = {
    date: [{
      isValid: false,
      name: "required",
      rule: function (str:string) {
        if (str.length) {
          this.isValid = true;
        } else {
          this.isValid = false;
        }
      },
      msg: "Date is required"
    }],
    title: [{
        isValid: false,
        name: "required",
        rule: function (str:string) {
          if (str.length) {
            this.isValid = true;
          } else {
            this.isValid = false;
          }
        },
        msg: "Title is required"
      }],
      startTime: [{
        isValid: false,
        name: "required",
        rule: function (str:string) {
          if (str.length) {
            this.isValid = true;
          } else {
            this.isValid = false;
          }
        },
        msg: "Start time is required"
      }],
      endTime: [{
        isValid: false,
        name: "required",
        rule: function (str:string) {
          if (str.length) {
            this.isValid = true;
          } else {
            this.isValid = false;
          }
        },
        msg: "End time is required"
      },
      {
        isValid: false,
        name: "required",
        rule: function (str:string) {
          if (str.length) {
            this.isValid = true;
          } else {
            this.isValid = false;
          }
        },
        msg: "End time is required"
      },
    ],
};